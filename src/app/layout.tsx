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
      <link rel='canonical' href='https://www.leonardoholguin.dev' />
      <script
        // eslint-disable-next-line max-len
        src='https://www.google.com/recaptcha/api.js?render=6LdGg6QqAAAAANqZ499XllUpeymCqesPrW9nX4RW'
        async></script>
      <body>{children}</body>
    </html>
  );
}
