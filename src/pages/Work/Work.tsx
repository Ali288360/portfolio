import ExperienceDetails from "@components/Work/ExperienceDetails";
import WorkLandingSection from "@components/Work/WorkLandingSection";
import { getWorkExperiences } from "@lib/api";

export default async function WorkExperiencePage() {

  const WorkExperiences = await getWorkExperiences();

  return (
    <>
      <section className="relative p-5 md:p-20 overflow-hidden">
        <WorkLandingSection workExperiences={WorkExperiences} />
      </section>
      <section className="relative p-5 md:p-20 overflow-hidden">
        <ExperienceDetails workExperiences={WorkExperiences} />
      </section>
    </>
  )
}