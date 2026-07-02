"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const RecentWorkSection = () => {
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 my-4">
        <div className="col-span-5 place-self-center text-center mt-4 lg:mt-0">
          <div className="mb-5 md:hidden">
            <span className="text-transparent font-extrabold text-5xl bg-clip-text bg-gradient-to-r from-orange-400 via-slate-200 to-orange-200">
              Recent Experience
            </span>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-4 mt-4 lg:mt-0"
          >
            <div className="mt-4">
              <Image width={400} height={400} alt="Working Man" src="/images/man-working-on-laptop.svg"
                className="mix-blend-lighten drop-shadow-lg"
              />
            </div>
          </motion.div>
        </div>
        <div className="col-span-7 place-self-center place-items-center grid lg:place-items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
          >
            <div className="mb-5 hidden md:block">
              <span className="text-transparent font-extrabold text-5xl bg-clip-text bg-gradient-to-r from-orange-400 via-slate-200 to-orange-200">
                Recent Experience
              </span>
            </div>
            <div className="flex flex-col pb-10">
              <h3 className="text-white max-w-2xl mb-5 text-3xl font-extrabold tracking-wider">Bacancy Technology</h3>
              <time className="text-xs tracking-wide uppercase text-gray-400">June 2024 - Current</time>
              <p className="mt-3">
                Working on a React Native application, where I had to build a complete application from scratch, including the frontend and backend, using React Native, Typescript, and React Query.
              </p>
            </div>
            <div>
              <Link href="/work" passHref>
                <button className="bg-gradient-to-br from-slate-500 via-orange-500 to-pink-500 hover:bg-slate-200 text-white px-6 py-3 rounded-full mr-4">
                  Show More
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export default RecentWorkSection;