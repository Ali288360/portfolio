'use client';

import { JSX } from "react";

interface Props {
  children: JSX.Element | string,
  type: 'solid' | 'outlined';
  className?: string;
  onClick?: () => void;
}
export default function Button({ children, type, className, onClick }: Props) {

  const getButtonClassName = () => {
    const classes = 'cursor-pointer px-6 py-4 rounded-md';
    if (type === 'solid') {
      return classes + ' bg-slate-900/60 hover:bg-blue-900';
    } else {
      return classes + ' text-rose-200 bg-transparent border-rose-400 hover:outline-none hover:bg-rose-200 hover:text-blue hover:border-rose-400 focus:outline-none';
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className={getButtonClassName() + ' ' + className}
      >
        {children}
      </button>
    </>
  );
}
