"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */
const HomeHeroSection = () => {
  const resumeLink = '/bhushan-zade_senior-software-engineer.pdf';

  const handleDownload = () => {
    window.open(resumeLink, '_blank');
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 my-4">
      <div className="col-span-7 place-self-center place-items-center grid lg:place-items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <div className="mb-5">
            <span className="text-transparent font-extrabold text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm {""}
            </span>
          </div>
          <h1 className="text-white max-w-2xl mb-5 text-3xl font-extrabold">
            {" "}
            <TypeAnimation
              sequence={[
                "Bhushan Zade",
                2000,
                "Sr. Software Engineer",
                1500,
                "Full Stack Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] mb-6 textl-lg lg:text-xl">
            Passionate Software Engineer skilled in Full Stack, dedicated to crafting clean, efficient code and driving innovation. Eager to collaborate with dynamic teams and advance in impactful development projects.
          </p>
          <div>
            <Link href="/about" passHref>
              <button className="cursor-pointer bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white px-6 py-3 rounded-full mr-4">
                About Me
              </button>
            </Link>
            <button onClick={handleDownload} className="cursor-pointer m-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 px-1 py-1  text-white rounded-full">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
      </div>
      <div className="col-span-5 place-self-center mt-4 lg:mt-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="flex justify-center items-center hsjad65h lg:w-[300px] lg:h-[300px] w-[200px] h-[200px] rounded-full relative overflow-hidden">
            <div className="ucyr45v lg:w-[300px] lg:h-[300px] w-[200px] h-[200px] rounded-full ">
              <Image
                src="/images/myimg.png"
                alt="hero image of Bhushan Zade"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 mvusi45ff"
                width={280}
                height={280}
              />
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};


export default HomeHeroSection;