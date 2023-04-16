import Link from 'next/link';
import { FiMail, FiGithub } from 'react-icons/fi';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Contact',
  description: 'My contact information',
};

export default function ContactPage() {
  return (
    <section className='container'>
      <h1>Contact</h1>
      <p className='sub-title'>
        I&apos;m currently open for a fulltime Frontend Developer role. If you want to discuss about
        that, feel free to contact me.
      </p>
      <div className='text-4xl flex justify-center gap-14 p-2 my-8 text-gray-400'>
        <Link
          href='mailto:periondev@gmail.com'
          target='_blank'
          className='tooltip tooltip-bottom'
          data-tip='E-mail Me'
        >
          <FiMail className='link-on-hover' />
        </Link>
        <Link
          href='https://github.com/PeriYumYum'
          target='_blank'
          className='tooltip tooltip-bottom'
          data-tip='Visit My GitHub'
        >
          <FiGithub className='link-on-hover' />
        </Link>
      </div>
    </section>
  );
}
