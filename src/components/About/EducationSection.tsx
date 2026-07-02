import { getEducations } from "@lib/api";
import Image from "next/image";

const EducationSection = async () => {

  const Educations = await getEducations();

  return (
    <div className="mx-auto p-5 md:p-20 overflow-hidden">
      <div className="container">
        <div className="grid gap-10 mx-4 sm:grid-cols-12">
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-8">
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent group">
              {Educations.map((item, index) => (
                <div key={index} className="relative odd:text-start even:text-end flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-300 group-[.is-active]:bg-pink-500 text-slate-500 group-[.is-active]:text-pink-50 shadow shrink-0 absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-700/40 p-4 rounded shadow-2xl">
                    <div className="text-xl font-bold text-white">{item.degree}</div>
                    <div className="font-semibold text-pink-400">{item.program}</div>
                    <div className="text-slate-300">{item.location}</div>
                    <time className="font-caveat font-medium text-slate-300">{item.date}</time>
                    <div className="text-slate-300">{item.grade}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-12 sm:col-span-4">
            <div className="flex flex-col align-middle justify-center text-end h-full before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:me-0 before:bg-pink-400">
              <h3 className="text-3xl font-semibold text-center md:text-right">My Education</h3>
              <span className="text-sm tracking-wider text-pink-400 text-center md:text-right">B.E. Computer Engineer</span>
              <div className="flex md:justify-end w-full">
                <div className="mt-4 w-[80%]">
                  <Image width={300} height={300} alt="Working Man" src="/images/learning-concept -2.png"
                    className="drop-shadow-lg w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default EducationSection;
