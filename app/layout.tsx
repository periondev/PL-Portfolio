import './globals.css';
import clsx from 'clsx';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: { default: 'Peri Lin Portfolio', template: '%s | Peri Lin Portfolio' },
  description: 'Front-end developer',
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
    <html
      lang='en'
      className={clsx('text-black bg-rice-color dark:text-rice-color dark:bg-[#111010]')}
    >
      <body>{children}</body>
    </html>
  );
}
