import Link from 'next/link';
import { FiMail, FiGithub } from 'react-icons/fi';
import type { Metadata } from 'next';
import { contactIntro, email, mailTo, myGithub } from '@lib/info';
export const metadata: Metadata = {
  title: 'Contact',
  description: 'My contact information',
};

export default function ContactPage() {
  return (
    <section className='container'>
      <h1>Contact</h1>
      <p className='sub-title'>{contactIntro()}</p>
      <ul className='flex flex-col w-full md:w-2/3 lg:w-1/2 p-6 mx-auto break-all text-2xl'>
        <li className='sub-title hover:text-teal-500'>
          <Link
            title='E-mail Me'
            href={mailTo}
            target='_blank'
            className='flex gap-4 py-2'
            prefetch={false}
          >
            <FiMail className='self-center shrink-0' />
            {email}
          </Link>
        </li>
        <li className='sub-title hover:text-indigo-500'>
          <Link
            title='Visit My GitHub'
            href={myGithub}
            target='_blank'
            className='flex gap-4 py-2'
            prefetch={false}
          >
            <FiGithub className='self-center shrink-0' />
            Periondev
          </Link>
        </li>
      </ul>
    </section>
  );
}
