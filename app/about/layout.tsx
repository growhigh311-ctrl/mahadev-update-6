import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Mahadev Bookie | Trusted Online Betting Platform',
  description: 'Learn about Mahadev Bookie, our mission, secure betting platform, and why thousands of users trust us for cricket betting, casino and sports betting.',
  alternates: {
    canonical: '/about',
  }
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
