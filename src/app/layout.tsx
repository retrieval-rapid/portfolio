import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bajra',
  description: 'A portfolio preview site',
  icons: {
    icon: [{ rel: 'icon', url: '/favicon.ico', media: '(prefers-color-scheme: dark)' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full max-w-[1440px] mx-auto">{children}</body>
    </html>
  );
}
