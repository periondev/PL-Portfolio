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
      <div className='content'>
        <h1>Projects</h1>
        <p className='text-xl py-2'>{`Some of the side projects I've worked on:`}</p>
        {items.map((item) => {
          return <ProjectCard key={item.projectName} {...item} />;
        })}
      </div>
    </section>
  );
}
