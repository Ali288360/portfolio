import BiographySection from "@components/About/BiographySection";
import CertificationSection from "@components/About/CertificationSection";
import EducationSection from "@components/About/EducationSection";
import ExperienceSection from "@components/About/ExperienceSection";
import SkillSection from "@components/About/SkillSection";

export default function AboutPage() {
  return (
    <>
      <section className="relative p-5 md:p-20 overflow-hidden">
        <BiographySection />
      </section>
      <section className="p-5 md:p-20 relative overflow-hidden">
        <SkillSection />
      </section>
      <section className="relative overflow-hidden">
        <ExperienceSection />
      </section>
      <section className="relative overflow-hidden">
        <EducationSection />
      </section>
      <section className="relative overflow-hidden">
        <CertificationSection />
      </section>
    </>
  )
}