import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: { default: 'Peri Lin', template: '%s | Peri Lin' },
  description: 'Front-end developer',
};
export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
