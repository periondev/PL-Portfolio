import type { Metadata } from 'next';
import Image from 'next/image';
export const metadata: Metadata = {
  title: 'projects',
  description: 'recent develope projects',
};

export default function ProjectsPage() {
  return (
    <section className='container'>
      <div className='content'>
        <h1 className='py-2'>Recent Projects</h1>
        <div className='text-4xl flex justify-center md:justify-end gap-14 p-2 my-8 text-gray-400'>
          <div className='card lg:card-side bg-base-100 shadow-xl'>
            <figure className='relative -mt-0 md:-ml-[20%] w-full md:w-8/12 shrink-0 rounded-xl overflow-hidden shadow-2xl before:absolute before:inset-0 before:z-10'>
              <Image
                src='https://picsum.photos/400/240'
                width={400}
                height={240}
                alt='Preview Image'
              />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>My Project 01</h2>
              <p>Click button to view source code</p>
              <div className='card-actions justify-end'>
                <button className='btn btn-primary'>
                  <a href='https://github.com/PeriYumYum' target='_blank' rel='noreferrer noopener'>
                    github
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
