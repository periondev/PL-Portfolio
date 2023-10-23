'use client';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { SVGLogo } from './Logo';

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

export const Navbar = () => {
  let pathname = usePathname() || '/';
  return (
    <nav className='fixed z-10 w-full md:pb-0 md:mr-8 md:w-36 lg:w-48 xl:w-60 md:h-full shadow-lg bg-zinc-300 dark:bg-zinc-700'>
      <div className='ml-3 md:ml-5 lg:ml-16 xl:ml-24 mt-5 md:mt-14 xl:mt-20 font-serif'>
        <div className='top-5 md:mx-0 md:mb-8 px-3'>
          <Link aria-label='Peri Lin' href='/'>
            <SVGLogo />
          </Link>
        </div>
        <div className='flex overflow-x-auto flex-row md:flex-col mb-2 mt-2 md:mt-0'>
          {Object.entries(navItems).map(([path, { name }]) => {
            const isActive = path === pathname;
            return (
              <Link
                key={path}
                href={path}
                className='text-neutral-600 dark:text-neutral-300 flex align-middle font-sans'
              >
                <span
                  className={clsx(
                    'btn btn-sm rounded-lg btn-ghost px-3 md:mb-3',
                    {
                      'text-pink-800 dark:text-amber-200 pointer-events-none':
                        isActive,
                    }
                  )}
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
