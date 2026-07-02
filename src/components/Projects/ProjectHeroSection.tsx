import { TProject } from "@type/Project";
import Image from "next/image";
import PorjectHeroSectionButtons from "./Buttons/PorjectHeroSectionButtons";
import clsx from "clsx";

type Props = {
  project: TProject;
}

export default function ProjectHeroSection({ project }: Props) {

  return (
    <div className={clsx("grid grid-cols-1 gap-5 md:grid-cols-3")}>
      <div className={clsx("col-span-1 w-full flex items-center")}>
        <Image width={150} height={80} className="w-full object-cover object-top rounded-md max-h-60" src={project.image || "/images/business-people-discussing-on-analysis-graph.svg"} alt="Project Description" />
      </div>
      <div className={clsx("col-span-1 flex flex-col gap-3 justify-center md:col-span-2")}>
        <small>{project.project_category}</small>
        <h6 className="text-2xl font-semibold">{project.project_title}</h6>
        <p>{project.project_overview}</p>
        <PorjectHeroSectionButtons project={project} />
      </div>
    </div>
  )

}