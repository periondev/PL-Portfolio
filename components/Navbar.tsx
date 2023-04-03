'use client';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { LayoutGroup, motion } from 'framer-motion';

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
        <Image src='/logo.svg' alt='logo' width={60} height={60} />
      </span>
    </Link>
  );
};

//navbar
export const Navbar = () => {
  let pathname = usePathname() || '/';
  return (
    <aside>
      <div className='ml-2 md:ml-12 lg:ml-28 lg:sticky lg:top-20 font-serif'>
        <div className='top-5 mb-2 md:mx-0 md:mb-8 space-y-10'>
          <Logo />
        </div>
        <LayoutGroup>
          <nav
            className='flex flex-row md:flex-col items-start relative md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative'
            id='nav'
          >
            <div className='flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0'>
              {Object.entries(navItems).map(([path, { name }]) => {
                const isActive = path === pathname;
                return (
                  <Link
                    key={path}
                    href={path}
                    className={clsx(
                      'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle',
                      {
                        'text-neutral-500': !isActive,
                        'font-bold': isActive,
                      }
                    )}
                  >
                    <button className='relative my-2 px-3 py-2'>
                      {name}
                      {path === pathname ? (
                        <motion.div
                          className='absolute inset-0 bg-neutral-100 dark:bg-zinc-700 rounded-lg z-[-1]'
                          layoutId='sidebar'
                          transition={{
                            type: 'spring',
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      ) : null}
                    </button>
                  </Link>
                );
              })}
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
};
