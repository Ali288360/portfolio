"use client";

import React, { JSX, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars } from 'react-icons/fa';
import { navlinks } from '@utils/constants';
import Image from 'next/image';

type Props = {
  href: string;
  title: string;
};

const NavItem = ({ href, title }: Props): JSX.Element => {
  const pathname = usePathname();
  return (
    <Link href={href}>
      <li
        className={`
          px-5 py-2 pt-1 md:pt-4 md:px-4 md:text-center
          ${pathname === href ? 'border-b-2 md:border-none' : ''} 
          `}>
        <p className="transition duration-500 ease-in-out transform md:hover:-translate-y-2 text-white font-bold md:hover:text-violet">
          {title}
        </p>
        <Image
          width={80}
          height={20}
          src="/images/nav_active.svg"
          alt="nav-active"
          className={`
            hidden md:block md:opacity-0
            ${pathname === href && 'md:opacity-100 md:w-10'}
            `}
        />
      </li>
    </Link>
  );
};

const Navbar = (): JSX.Element => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <div
      className={` mx-auto w-full `}>
      <nav className="block md:flex justify-between items-center p-2 px-5 md:px-20">
        <div className="flex justify-between">
          <div className='flex items-center gap-4'>
            <Link href="/" className="flex items-center justify-center rounded-full w-16 h-16  bg-dark text-white dark:border-2 dark:border-solid dark:border-light text-2xl font-bold">
              AAA
            </Link>
            <span className='hidden md:block text-2xl font-semibold leading-relaxed'>Abdi Ali Abdi</span>
          </div>
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-white focus:outline-none"
              onClick={() => setShowMobileNav(!showMobileNav)}>
              <FaBars size={18} />
            </button>
          </div>
        </div>
        <div className={showMobileNav ? 'block pt-3 transition-all' : 'hidden md:block'}>
          <ul className="md:flex md:flex-row border-pink border-2 md:border-none">
            {navlinks.map((item, index) => <NavItem title={item.title} href={item.href} key={item.href + index} />)}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
