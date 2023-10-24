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
      <p className='sub-title'>我寫的一些文章分享開發經歷與技術心得</p>
      <div className='grid gap-y-6 my-6'>
        {posts.map((post) => {
          return <Post key={post.postTitle} {...post} />;
        })}
      </div>
    </section>
  );
}
