import { FiMail, FiGithub } from 'react-icons/fi';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'contact',
  description: 'contact information',
};

export default function ContactPage() {
  return (
    <section className='max-w-[960px] px-5 lg:pr-40 xl:pr-60 md:pt-20 mb-10 lg:mx-auto h-full'>
      <div className='px-5 '>
        <h1 className='py-2'>Contact Me</h1>
        <div className='text-5xl flex justify-center gap-14 py-3 text-gray-400'>
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
