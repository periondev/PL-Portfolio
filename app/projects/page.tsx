import type { Metadata } from 'next';
import { ProjectCard } from '@components/ProjectCard';
import { items } from '@lib/info';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'My recent side projects',
};

export default function ProjectsPage() {
  return (
    <section className='container'>
      <h1>Projects</h1>
      <p className='sub-title'>Some of the side projects I&apos;ve worked on:</p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-y-10 my-6'>
        {items.map((item) => {
          return <ProjectCard key={item.projectName} {...item} />;
        })}
      </div>
    </section>
  );
}
