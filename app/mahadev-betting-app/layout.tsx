import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mahadev App | Download & Bet Anytime',
  description: 'Download the Mahadev App to enjoy live cricket , casino games, real-time sports , secure transactions, and a premium experience.',
  alternates: {
    canonical: '/mahadev--app',
  }
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
