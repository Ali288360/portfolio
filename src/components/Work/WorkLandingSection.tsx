import HeaderSmall from "@components/HeaderSmall";
import { TWorkExperience } from "@type/Company";
import Image from "next/image";

export default function WorkLandingSection({ workExperiences }: { workExperiences: TWorkExperience[] }) {
  return (<>
    <div className="relative py-10 lg:py-20">
      <div className="ml-4 grid grid-cols-12 gap-4 h-full place-items-center items-center">
        <div className="col-span-12 md:col-span-7 lg:col-span-6 flex flex-col justify-center items-center">
          {/* Hero Header */}
          <div className="items-center w-3/4 relative">
            <HeaderSmall text="Where he has worked?" />
            <h1 className="sm:w-4/5 mb-3 mt-2 sm:text-md md:text-xl lg:text-2xl font-normal tracking-wide text-white leading-normal lg:leading-7">
              Worked with several organizations ranging from campus clubs to startups.
            </h1>
            <h1 className="mb-3 mt-6 text-4xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-7xl font-extrabold text-white leading-none ">
              Work <span className="text-rose-200">Experience.</span>
            </h1>
          </div>
        </div>
        <div className="col-span-12 md:col-span-5 lg:col-span-6 grid grid-cols-3 gap-4 lg:gap-14 my-10 sm:mt-0 items-center">
          {workExperiences.map(
            (company, index) =>
              company.companyLogo && (
                <Image
                  width={200}
                  height={200}
                  src={company?.companyLogo}
                  alt={company.name}
                  key={index}
                  className="w-20 sm:w-32"
                />
              )
          )}
        </div>
      </div>
    </div>
  </>)
}