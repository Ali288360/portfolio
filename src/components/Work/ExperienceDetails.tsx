"use client";
import { useEffect, useState } from 'react';
import CompanyDetails from './CompanyDetails';
import { TWorkExperience } from '@type/Company';

export default function ExperienceDetails({ workExperiences }: { workExperiences: TWorkExperience[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  let numbering = 0;
  useEffect(() => { }, [activeIndex]);

  return (
    <>
      <div className="ml-4 grid grid-cols-12 gap-4 place-items-center">
        <div className="col-span-12 sm:col-span-5 flex flex-col ">
          <div className="px-10 py-5">
            {workExperiences.map((company, index) => {
              numbering += 1;
              return (
                <div key={company.name + index} className='mb-8'>
                  <h1 className="text-7xl font-black text-white -mb-6 z-30 relative">
                    {numbering >= 0 && numbering <= 9 ? `0${numbering}` : `${numbering - 1}`}
                  </h1>
                  <button
                    className={`${activeIndex === index
                      ? 'bg-rose-400 border-transparent font-semibold'
                      : 'border-bg-fuchsia-200 text-white'
                      } border-transparent border-2 rounded-xl 
                    px-10 py-4 text-center w-60 lg:w-96
                    transition-all hover:shadow-light-xl hover:bg-rose-100 hover:text-black hover:border-rose-400 hover:scale-105 duration-200 ease-in-out`}
                    onClick={() => {
                      setActiveIndex(index);
                    }}
                    type="button">
                    {company.name}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="col-span-12 sm:col-span-7 flex flex-col justify-center items-center min-h-full">
          <CompanyDetails activeCompany={workExperiences[activeIndex]} />
        </div>
      </div>
    </>
  );
}
