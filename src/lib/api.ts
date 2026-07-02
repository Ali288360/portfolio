import { TCertificate } from '@type/Certificate';
import { TWorkExperience } from '@type/Company';
import { TEducation } from '@type/Eduction';
import { TProject } from '@type/Project';
import fs from 'fs';
import path from 'path';

function readJson<T>(filename: string): T[] {
  try {
    const filePath = path.join(process.cwd(), 'public', 'json', filename);
    const raw = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(raw);
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error(`Failed to read ${filename}:`, err);
    return [];
  }
}

export async function getAllProjects(): Promise<TProject[]> {
  return readJson<TProject>('projects.json');
}

export async function getWorkExperiences(): Promise<TWorkExperience[]> {
  return readJson<TWorkExperience>('work-experiences.json');
}

export async function getEducations(): Promise<TEducation[]> {
  return readJson<TEducation>('educations.json');
}

export async function getCertifications(): Promise<TCertificate[]> {
  return readJson<TCertificate>('certifications.json');
}