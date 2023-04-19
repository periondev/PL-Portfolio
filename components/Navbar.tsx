'use client';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

const navItems = {
  '/': { name: 'Home' },
  '/projects': {
    name: 'Projects',
  },
  '/contact': {
    name: 'Contact',
  },
  '/blog': {
    name: 'Blog',
  },
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Logo = () => {
  return (
    <Link aria-label='Peri Lin' href='/'>
      <span className='flex my-2 px-3 py-2' onClick={() => scrollToTop()}>
        <Image src='/logo.svg' alt='logo' width='0' height='0' className='w-[60px] h-auto' />
      </span>
    </Link>
  );
};
//navbar
export const Navbar = () => {
  let pathname = usePathname() || '/';
  return (
    <nav className='fixed z-10 w-full pb-2 md:pb-0 md:mr-8 md:w-36 lg:w-48 xl:w-60 md:h-full shadow-lg bg-stone-300 dark:bg-zinc-700'>
      <div className='ml-3 md:ml-5 lg:ml-16 xl:ml-24 mt-5 md:mt-14 xl:mt-20 font-serif'>
        <div className='top-5 mb-2 md:mx-0 md:mb-8 '>
          <Logo />
        </div>
        <div className='flex overflow-x-auto flex-row md:flex-col mb-2 mt-2 md:mt-0'>
          {Object.entries(navItems).map(([path, { name }]) => {
            const isActive = path === pathname;
            return (
              <Link key={path} href={path} className='nav-link'>
                <span
                  className={clsx('btn btn-sm rounded-lg btn-ghost px-3 md:mb-3', {
                    'btn-isActive': isActive,
                  })}
                >
                  {name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
