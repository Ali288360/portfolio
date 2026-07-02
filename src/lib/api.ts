import { TCertificate } from '@type/Certificate';
import { TWorkExperience } from '@type/Company';
import { TEducation } from '@type/Eduction';
import { TProject } from '@type/Project';

import projectsData from '../../public/json/projects.json';
import workExpData from '../../public/json/work-experiences.json';
import eduData from '../../public/json/educations.json';
import certData from '../../public/json/certifications.json';

export async function getAllProjects(): Promise<TProject[]> {
  return Array.isArray(projectsData) ? (projectsData as unknown as TProject[]) : [];
}

export async function getWorkExperiences(): Promise<TWorkExperience[]> {
  return Array.isArray(workExpData) ? (workExpData as unknown as TWorkExperience[]) : [];
}

export async function getEducations(): Promise<TEducation[]> {
  return Array.isArray(eduData) ? (eduData as unknown as TEducation[]) : [];
}

export async function getCertifications(): Promise<TCertificate[]> {
  return Array.isArray(certData) ? (certData as unknown as TCertificate[]) : [];
}