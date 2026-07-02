import { getWorkExperiences } from "@lib/api";
import Image from "next/image";

const ExperienceSection = async () => {

  const WorkExperiences = await getWorkExperiences();

  return (
    <div className="mx-auto p-5 md:p-20 overflow-hidden">
      <div className="container">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-4">
            <div className="flex flex-col align-middle justify-center h-full text-start sm:text-left before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-violet-400">
              <h3 className="text-3xl font-semibold text-center md:text-left">My Experience</h3>
              <span className="text-sm tracking-wider text-violet-400 text-center md:text-left">5+ Years Senior Software Engineer</span>
              <div className="mt-4">
                <Image width={300} height={300} alt="Working Man" src="/images/man-working-on-laptop.svg"
                  className="mix-blend-lighten drop-shadow-lg"
                />
              </div>
            </div>
          </div>
          <div className="relative col-span-12 px-4 sm:col-span-8">
            <div className="col-span-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
              {WorkExperiences.map((item, index) => (
                <div key={index} className="flex flex-col pb-10 gap-1 sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
                  <h3 className="text-xl font-semibold tracking-wide">{item.name}</h3>
                  <time className="italic text-sm lg:text-base">
                    {item?.startDate} - {item?.endDate ? item?.endDate : 'Present'}
                  </time>
                  <ul className="text-sm md:text-base mt-4 list-disc ml-5 z-30 cursor-auto">
                    {item?.responsibilities.map((r) => {
                      return <li key={r}>{r}</li>;
                    })}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span key={skill} className="inline-block px-2 py-1 text-xs font-thin text-gray-700 bg-violet-200 rounded-md dark:bg-violet-700 dark:text-gray-200">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default ExperienceSection;
