import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mahadev Book ID | Get Your Cricket ID Instantly',
  description: 'Apply for your Mahadev Book ID today and enjoy instant account activation, live cricket , IPL , casino games, and secure transactions.',
  alternates: {
    canonical: '/mahadev-book-id',
  }
};

export default function BookIdLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
