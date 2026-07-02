"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const skillsData = {
  frontend: [
    {
      name: 'Angular',
      icon: '/images/skills/angular.svg',
      image: '/images/skills/angular.svg'
    },
    {
      name: 'React',
      icon: '/images/skills/react.svg',
      image: '/images/skills/react.svg'
    },
    {
      name: 'Next.JS',
      icon: '/images/skills/nextjs.svg',
      image: '/images/skills/nextjs.svg'
    },
  ],
  backend: [
    {
      name: 'Node JS',
      icon: '/images/skills/node.svg',
      image: '/images/skills/node.svg'
    },
    {
      name: 'Express JS',
      icon: '/images/skills/express.svg',
      image: '/images/skills/express.svg'
    },
  ],
  database: [
    {
      name: 'MySQL',
      icon: '/images/skills/ts.svg',
      image: '/images/skills/ts.svg'
    },
    {
      name: 'MongoDB',
      icon: '/images/skills/mongodb.svg',
      image: '/images/skills/mongodb.svg'
    },
  ],
  tools: [
    {
      name: 'Git',
      icon: '/images/skills/git.svg',
      image: '/images/skills/git.svg'
    },
  ],
};

const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState('all'); // Default is 'all'

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  const combinedSkills = Object.values(skillsData).flat();

  const skillsToDisplay = activeCategory === 'all' ? combinedSkills : skillsData[activeCategory as keyof typeof skillsData];

  return (
    <div className="container mx-auto pb-20 px-4">
      <h2 className="text-4xl font-semibold text-center mb-12 text-slate-200">My Skills</h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-16">
        <button
          className={`bg-slate-600 w-[150px] relative rounded-xl ${activeCategory === 'all' ? '!bg-slate-200 text-black text-semibold active' : ''}`}
          onClick={() => handleCategoryChange('all')}
        >
          <div className='ovuisuf rounded-xl'></div>
          <span className='px-5 py-2 block'>
            All Skills
          </span>
        </button>
        <button
          className={`bg-slate-600 w-[150px] relative rounded-xl ${activeCategory === 'frontend' ? '!bg-slate-200 text-black text-semibold active' : ''}`}
          onClick={() => handleCategoryChange('frontend')}
        >
          <div className='ovuisuf rounded-xl'></div>
          <span className='px-4 py-1'>
            Frontend
          </span>
        </button>
        <button
          className={`bg-slate-600 w-[150px] relative rounded-xl ${activeCategory === 'backend' ? '!bg-slate-200 text-black text-semibold active' : ''}`}
          onClick={() => handleCategoryChange('backend')}
        >
          <div className='ovuisuf rounded-xl'></div>
          <span className='px-4 py-1'>
            Backend
          </span>
        </button>
        <button
          className={`bg-slate-600 w-[150px] relative rounded-xl ${activeCategory === 'database' ? '!bg-slate-200 text-black text-semibold active' : ''}`}
          onClick={() => handleCategoryChange('database')}
        >
          <div className='ovuisuf rounded-xl'></div>
          <span className=''>
            Databases
          </span>
        </button>
        <button
          className={`bg-slate-600 w-[150px] relative rounded-xl ${activeCategory === 'tools' ? '!bg-slate-200 text-black text-semibold active' : ''}`}
          onClick={() => handleCategoryChange('tools')}
        >
          <div className='ovuisuf rounded-xl'></div>
          <span className='px-4 py-1'>
            Tools
          </span>
        </button>
      </div>

      {/* Skills List */}
      <div className="flex flex-wrap justify-center gap-14">
        {skillsToDisplay.map((skill, index) => (
          <motion.div
            key={index}
            className="relative max-w-36 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation
          >
            <Image width={2} height={2} className='w-full object-cover' src={skill.icon} alt={skill.name} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
