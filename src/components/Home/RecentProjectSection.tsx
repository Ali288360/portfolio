"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const RecentProjectSection = () => {
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 my-4">
        <div className="col-span-7 place-self-center place-items-center grid lg:place-items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
          >
            <div className="mb-5">
              <span className="text-transparent font-extrabold text-5xl bg-clip-text bg-gradient-to-r from-sky-400 via-slate-200 to-sky-200">
                Recent Project
              </span>
            </div>
            <div className="flex flex-col pb-10">
              <h3 className="text-white max-w-2xl mb-5 text-3xl font-extrabold tracking-wider">Pro Code Programming</h3>
              <p className="mt-3">
                Pro Code Programming is a platform where you can learn programming languages like JavaScript, Python, Java, and many more. It is a platform where you can learn programming languages from scratch to advanced level.
              </p>
            </div>
            <div>
              <Link href="/projects" passHref>
                <button className="bg-gradient-to-br from-slate-500 via-sky-500 to-slate-100 hover:bg-slate-200 text-white px-6 py-3 rounded-full mr-4">
                  Show More
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="col-span-5 mt-4 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-4 mt-4 lg:mt-0 place-content-end"
          >
            <div className="mt-4 place-content-end">
              <Image width={400} height={400} alt="Working Man" src="/images/solved-the-problem.png"
                className="mix-blend-lighten drop-shadow-lg place-content-end"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export default RecentProjectSection;