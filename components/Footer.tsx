import Link from 'next/link';
import { FiMail, FiGithub } from 'react-icons/fi';
import { mailTo, myGithub } from '@lib/info';
export const Footer = () => {
  return (
    <div>
      <footer className='flex flex-col justify-center py-16 mt-16'>
        <div className='text-xl flex justify-center gap-6 py-3 text-gray-400'>
          <Link title='E-mail' href={mailTo} target='_blank' prefetch={false}>
            <FiMail className='link-on-hover' />
          </Link>
          <Link title='GitHub' href={myGithub} target='_blank' prefetch={false}>
            <FiGithub className='link-on-hover' />
          </Link>
        </div>
        <p>Made by Peri Lin © 2023</p>
      </footer>
    </div>
  );
};
