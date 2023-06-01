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

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const Navbar = () => {
  let pathname = usePathname() || '/';
  return (
    <nav className='nav-container'>
      <div className='ml-3 md:ml-5 lg:ml-16 xl:ml-24 mt-5 md:mt-14 xl:mt-20 font-serif'>
        <div className='top-5 md:mx-0 md:mb-8 '>
          <Link aria-label='Peri Lin' href='/' onClick={scrollToTop}>
            <SVGLogo />
          </Link>
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
