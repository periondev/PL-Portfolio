import type { Metadata } from 'next';
import { Post } from '@components/Post';
import { posts } from '@lib/postData';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'My recent posts',
};

export default function BlogPage() {
  return (
    <section className='container'>
      <h1>Blog</h1>
      <p className='sub-title'>My recent posts ...</p>
      <div className='grid gap-y-6 my-6'>
        {posts.map((post, index) => {
          return <Post key={post.postTitle} {...post} />;
        })}
      </div>
    </section>
  );
}
