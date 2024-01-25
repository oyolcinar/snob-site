import type { Metadata } from 'next';
import Navbar from './components/navbar';
import Footer from './components/footer';
import './globals.css';
import { inter } from './fonts';

export const metadata: Metadata = {
  title: { default: 'SNOB', template: '%s | SNOB' },
  description: 'SNOB',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
