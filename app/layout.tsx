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
      <body className='flex flex-col'>
        <Providers>
          <DarkModeSwitch />
          <div className='flex-col md:flex-row md:justify-between antialiased min-h-screen bg-rice-color dark:bg-zinc-800'>
            <Navbar />
            <main className='flex flex-col justify-between items-center min-w-0 mt-8 md:mt-0 md:pl-36 lg:pl-48 xl:pl-60'>
              {children}
              <Footer />
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
