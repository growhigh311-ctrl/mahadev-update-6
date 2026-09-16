import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mahadev Bookie Blog | Tips, Cricket News & Guides',
  description: 'Read expert tips, IPL predictions, cricket news, casino strategies, and online guides to improve your .',
  alternates: {
    canonical: '/blog',
  }
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
