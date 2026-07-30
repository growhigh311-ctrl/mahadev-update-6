import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mahadev Betting App | Download & Bet Anytime',
  description: 'Download the Mahadev Betting App to enjoy live cricket betting, casino games, real-time sports betting, secure transactions, and a premium betting experience.',
  alternates: {
    canonical: '/mahadev-betting-app',
  }
};

export default function BettingAppLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
