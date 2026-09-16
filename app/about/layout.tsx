import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Mahadev Bookie | Trusted Online Platform',
  description: 'Learn about Mahadev Bookie, our mission, secure platform, and why thousands of users trust us for cricket , casino and sports .',
  alternates: {
    canonical: '/about',
  }
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
