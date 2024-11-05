import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Leonardo Holguin Arias | Developer',
  description: 'My personal blog',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang='en'>
      <link rel="canonical" href="https://www.leonardoholguin.dev" />
      <body>
        {children}
      </body>
    </html>
  );
}
