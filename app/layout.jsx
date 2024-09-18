'use client';
import '../styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from 'next-themes';
import Head from './head';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body className="dark:bg-myVioletD">
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
