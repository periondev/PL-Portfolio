import './globals.css';
import { Providers } from './providers';
import type { Metadata } from 'next';
import { Navbar } from '../components/Navbar';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { Footer } from '../components/Footer';
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
      <body className='flex flex-col bg-rice-color dark:bg-zinc-900'>
        <Providers>
          <DarkModeSwitch />
          <Navbar />
          <div className='antialiased flex flex-col min-h-screen md:flex-row md:justify-center bg-rice-color dark:bg-zinc-900'>
            <main className='flex flex-col items-center justify-between min-w-0 mt-8 md:mt-0 px-2 md:px-0'>
              {children}
              <Footer />
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
