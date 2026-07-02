"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function BiographySection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 my-4">
      <div className="col-span-7 place-self-center place-items-center grid lg:place-items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <div className="mb-5">
            <span className="text-transparent font-extrabold text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              My Biography
            </span>
          </div>
          <h1 className="text-white max-w-2xl mb-5 text-3xl font-extrabold">
            {" "}
            <TypeAnimation
              sequence={[
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
          <div className="text-[#ADB7BE] mb-6 textl-lg lg:text-xl">
            <p className="mb-6">
              Hi, I&apos;m Bhushan Zade, a Senior Software Engineer with over 5 years of experience, specializing in building scalable and high-performance digital solutions. My expertise lies in frontend technologies, including Angular (expert), React, Next.js, Svelte, and Astro, alongside strong backend development skills using Node.js. I have extensive experience working with MySQL, MongoDB, and Firebase databases.
            </p>

            <p className="mb-6">
              In addition to full-stack development, I have expertise in deploying and managing cloud-based applications using private VPS and shared hosting environments. My focus is always on delivering user-centered, efficient, and maintainable code while ensuring optimal user experiences across various platforms.
            </p>

            <p>
              I am always seeking new challenges and opportunities to bring innovative and reliable solutions to life for clients.
            </p>
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
    </section>
  )
}