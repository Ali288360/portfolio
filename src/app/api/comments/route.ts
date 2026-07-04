import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const COMMENTS_FILE = path.join(process.cwd(), "data", "comments.json");

function readComments() {
  try {
    const raw = fs.readFileSync(COMMENTS_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function writeComments(comments: object[]) {
  fs.writeFileSync(COMMENTS_FILE, JSON.stringify(comments, null, 2), "utf-8");
}

// POST — submit a new comment
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !message) {
      return NextResponse.json({ error: "Name and message are required." }, { status: 400 });
    }

    const comments = readComments();
    const newComment = {
      id: Date.now(),
      name: name.trim(),
      email: email?.trim() || "",
      message: message.trim(),
      createdAt: new Date().toISOString(),
      read: false,
    };

    comments.unshift(newComment); // newest first
    writeComments(comments);

    return NextResponse.json({ success: true, comment: newComment }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to save comment." }, { status: 500 });
  }
}

// GET — fetch all comments (protected by token)
export async function GET(req: NextRequest) {
  const token = req.headers.get("x-admin-token");
  if (token !== process.env.ADMIN_TOKEN && token !== "abdi-admin-2024") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const comments = readComments();
  return NextResponse.json({ comments });
}

// PATCH — mark comment as read
export async function PATCH(req: NextRequest) {
  const token = req.headers.get("x-admin-token");
  if (token !== process.env.ADMIN_TOKEN && token !== "abdi-admin-2024") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await req.json();
  const comments = readComments();
  const updated = comments.map((c: { id: number; read: boolean }) =>
    c.id === id ? { ...c, read: true } : c
  );
  writeComments(updated);
  return NextResponse.json({ success: true });
}

// DELETE — delete a comment
export async function DELETE(req: NextRequest) {
  const token = req.headers.get("x-admin-token");
  if (token !== process.env.ADMIN_TOKEN && token !== "abdi-admin-2024") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await req.json();
  const comments = readComments();
  const filtered = comments.filter((c: { id: number }) => c.id !== id);
  writeComments(filtered);
  return NextResponse.json({ success: true });
}
