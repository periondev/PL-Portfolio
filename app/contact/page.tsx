import { FiMail, FiGithub } from 'react-icons/fi';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'contact',
  description: 'contact information',
};

export default function ContactPage() {
  return (
    <section>
      <h2 className='py-2'>Contact Me</h2>
      <div className='text-5xl flex justify-center gap-14 py-3 text-gray-400'>
        <a href=' '>
          <FiMail />
        </a>
        <a href='https://github.com/PeriYumYum'>
          <FiGithub />
        </a>
      </div>
    </section>
  );
}
