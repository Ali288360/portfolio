import { getCertifications } from "@lib/api";
import Button from "@ui-kit/Buttons";
import Image from "next/image";
import Link from "next/link";

const CertificationSection = async () => {

  const certifications = await getCertifications();

  return (
    <div className="mx-auto p-5 md:p-20 overflow-hidden">
      <div className="container">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-4">
            <div className="flex flex-col align-middle justify-center h-full text-start sm:text-left before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-blue-400">
              <h3 className="text-3xl font-semibold text-center md:text-left">Licenses, certifications & Courses</h3>
              <div className="mt-4">
                <Image width={300} height={300} alt="Working Man" src="/images/concept-based-photo-illustration-of-graduation.png"
                  className="mix-blend-lighten drop-shadow-lg"
                />
              </div>
            </div>
          </div>
          <div className="relative col-span-12 px-4 sm:col-span-8">
            <div className="col-span-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
              {certifications.map((item) => (
                <div key={item.id} className="flex flex-col gap-1 pb-10 sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue-400">
                  <h3 className="text-xl font-semibold tracking-wide">{item.title}</h3>
                  <h6 className="text-sm tracking-wide">{item.provider}</h6>
                  <div className="mb-2">
                    <Link href={item.certLink} target="_blank">
                      <Button type="solid" className="!px-5 !py-2 !bg-blue-900/40">
                        Show Certificate
                      </Button>
                    </Link>
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

export default CertificationSection;
