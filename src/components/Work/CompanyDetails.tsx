import { TWorkExperience } from '@type/Company';
import { useEffect, useState } from 'react';

type Props = {
  activeCompany: TWorkExperience;
};
export default function CompanyDetails({ activeCompany }: Props) {
  const [company, setCompany] = useState<TWorkExperience | undefined>(undefined);
  useEffect(() => {
    setCompany(activeCompany);
  }, [activeCompany]);
  return (
    <>
      <div className="bg-rose-100 text-slate-800 rounded-2xl p-4 md:p-10 w-80 sm:w-72 mx-16 sm:mx-16 md:mx-32 lg4:w-96 xl:min-w-full xl:min-h-full">
        <p className="font-bold mb-2 text-xl lg:text-3xl cursor-auto">{company?.name}</p>
        <p className="mb-1 text-lg">{company?.position}</p>
        <p className="italic text-sm lg:text-base">
          {company?.startDate} - {company?.endDate ? company?.endDate : 'Present'}
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {company?.skills.map((skill) => (
            <span key={skill} className="inline-block px-2 py-1 text-xs font-thin text-gray-700 bg-rose-200 rounded-md dark:bg-rose-700 dark:text-gray-200">{skill}</span>
          ))}
        </div>
        <ul className="text-sm md:text-base mt-4 list-disc ml-5 z-30 cursor-auto">
          {company?.responsibilities.map((r) => {
            return <li key={r}>{r}</li>;
          })}
        </ul>
      </div>
    </>
  );
}
