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
      <div className='grid gap-y-6'>
        {posts.map((post, index) => {
          return <Post key={post.postTitle} {...post} />;
        })}
      </div>
    </section>
  );
}
//<div class="rounded border-3 border-black px-8 py-8 shadow-box duration-300 hover:shadow-none dark:border-white dark:shadow-box-white hover:dark:shadow-none"><h1 class="mb-10 font-heading text-3xl font-semibold max-[750px]:text-2xl"><a class="transition duration-300 hover:text-purple-400" href="/blog/new-macbook-setup">💻 new macbook setup</a></h1><div class="flex justify-between"><span class="lowercase">April 19, 2023 in <a class="transition duration-300 hover:text-purple-400" href="/topic/tech">#tech</a></span><span class="flex items-center gap-x-2"><a class="rounded bg-black px-2 font-heading text-sm font-bold text-white duration-300 hover:bg-purple-400 dark:bg-white dark:text-black dark:hover:bg-purple-400" href="/tag/apple">apple</a><a class="rounded bg-black px-2 font-heading text-sm font-bold text-white duration-300 hover:bg-purple-400 dark:bg-white dark:text-black dark:hover:bg-purple-400" href="/tag/macbook">macbook</a></span></div></div>
