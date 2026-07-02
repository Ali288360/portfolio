import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import SocialFixedBar from "@components/SocialFixedBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Abdi Ali Abdi | Computer Engineering Student & Full Stack Developer";
const description =
  "Portfolio of Abdi Ali Abdi — a Computer Engineering student at Birla Vishvakarma Mahavidyalaya (BVM), Gujarat, India. Specializing in Full Stack Development, Backend Engineering, Cloud Computing (AWS), and building scalable web applications with React, Node.js, and Java.";

export const viewport: Viewport = {
  themeColor: "#000000", // Color of the browser toolbar, used in mobile apps and browsers
  width: "device-width, initial-scale=1.0",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://Ali288360.netlify.app/"),
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: "https://Ali288360.netlify.app/",
    images: [
      {
        url: "/images/myimg.png",
        width: 800,
        height: 600,
        alt: "Abdi Ali Abdi Profile Picture",
      },
    ],
    siteName: "Abdi Ali Abdi Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@Ali288360",
    title: title,
    description: description,
    images: [
      {
        url: "/images/myimg.png",
        width: 800,
        height: 600,
        alt: "Abdi Ali Abdi Profile Picture",
      },
    ],
    site: "@Ali288360",
  },
  // Basic meta tags for SEO
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "Abdi Ali Abdi",
    "Computer Engineering Student",
    "Full Stack Developer",
    "BVM Engineer",
    "Birla Vishvakarma Mahavidyalaya",
    "React Developer",
    "Node.js Developer",
    "Java Developer",
    "AWS Cloud",
    "Kenya Software Engineer",
    "Portfolio",
    "Next.js",
    "Backend Developer",
    "Software Engineering Internship"
  ],

  applicationName: "Abdi Ali Abdi Portfolio",
  creator: "Abdi Ali Abdi",
  publisher: "Abdi Ali Abdi",
  "authors": [{
    name: "Abdi Ali Abdi",
    "url": "https://Ali288360.netlify.app/",
  }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <SocialFixedBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
