import './globals.css';
import clsx from 'clsx';
import { Providers } from './providers';
import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
export const metadata: Metadata = {
  title: { default: 'Peri Lin Portfolio', template: '%s | Peri Lin Portfolio' },
  description: 'Front-end developer portfolio',
  icons: {
    shortcut: '/favicon.ico',
  },
};
export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <Providers>
          <DarkModeSwitch />
          <div
            className={clsx(
              'antialiased flex flex-col md:flex-row  bg-rice-color dark:bg-zinc-900'
            )}
          >
            <Navbar />
            <main className='flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0'>
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}

{
  /* <div
className={clsx(
  'antialiased max-w-4xl mb-20 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-28 lg:mx-auto bg-rice-color dark:bg-zinc-700'
)}
>
<Navbar />
<main className='flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0'>
  {children}
</main>
</div> */
}
