import React from 'react';
import ProjectHeroSection from "./ProjectHeroSection";
import { getAllProjects } from '@lib/api';

export default async function ListProjects() {

  const projects = await getAllProjects();

  return (
    <>
      {
        projects.map((project, index) => (
          <div key={index + Math.random()} className="bg-slate-900/60 shadow-2xl p-5 border border-sky-800 rounded-xl mb-5">
            <ProjectHeroSection project={project} />
          </div>
        ))
      }

    </>
  )
}