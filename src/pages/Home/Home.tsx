import React from "react";
import HackerHero from "@components/Home/HackerHero";
import RecentWorkNew from "@components/Home/RecentWorkNew";
import RecentProjectsNew from "@components/Home/RecentProjectsNew";
import TechArsenal from "@components/Home/TechArsenal";
import PackageRegistry from "@components/Home/PackageRegistry";
import SecurityClearance from "@components/Home/SecurityClearance";
import ConnectSection from "@components/Home/ConnectSection";
import OriginStory from "@components/Home/OriginStory";
import AcademicLog from "@components/Home/AcademicLog";
import { AnimatedBackground } from "@components/ui/AnimatedBackground";
import { TEducation } from "@type/Eduction";

type Props = {
  educations?: TEducation[];
};

export default function HomePage({ educations = [] }: Props) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-deep-bg text-white selection:bg-neon-cyan selection:text-black">
      <AnimatedBackground />

      <main className="relative z-10 flex flex-col gap-32 pb-32 px-0 md:px-8">
        <HackerHero />
        <OriginStory />
        <TechArsenal />
        <RecentWorkNew />
        <RecentProjectsNew />
        <AcademicLog educations={educations} />
        <PackageRegistry />
        <SecurityClearance />
        <ConnectSection />
      </main>
    </div>
  );
}