import type { Metadata } from 'next';
import { ProjectCard } from '@components/ProjectCard';
import { items } from '@lib/info';

export const metadata: Metadata = {
  title: 'projects',
  description: 'recent side projects',
};

export default function ProjectsPage() {
  return (
    <section className='container'>
      <h1>Projects</h1>
      <p className='text-xl py-2'>Some of the side projects I&apos;ve worked on:</p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-6'>
        {items.map((item) => {
          return <ProjectCard key={item.projectName} {...item} />;
        })}
      </div>
    </section>
  );
}
