'use client';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const ScrollToTopBtn = () => {
  return (
    <div className='fixed flex z-20 w-full justify-end items-end py-3 px-4 bottom-0'>
      <button aria-label='Scroll to top' onClick={scrollToTop}>
        <BsFillArrowUpCircleFill className='text-3xl text-amber-500 dark:text-slate-400 opacity-60' />
      </button>
    </div>
  );
};
