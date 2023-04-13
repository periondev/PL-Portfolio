import { FiMail, FiGithub } from 'react-icons/fi';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'contact',
  description: 'contact information',
};

export default function ContactPage() {
  return (
    <section className='container'>
      <div className='content'>
        <h1>Contact Me</h1>
        <div className='text-4xl flex justify-center gap-14 p-2 my-8 text-gray-400'>
          <a href=' '>
            <FiMail />
          </a>
          <a href='https://github.com/PeriYumYum' target='_blank' rel='noreferrer noopener'>
            <FiGithub />
          </a>
        </div>
      </div>
    </section>
  );
}
