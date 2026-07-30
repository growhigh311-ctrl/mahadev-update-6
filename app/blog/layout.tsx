import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mahadev Bookie Blog | Betting Tips, Cricket News & Guides',
  description: 'Read expert betting tips, IPL predictions, cricket news, casino strategies, and online betting guides to improve your betting.',
  alternates: {
    canonical: '/blog',
  }
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
