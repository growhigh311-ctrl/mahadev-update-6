import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Mahadev Bookie | Customer Support & Assistance',
  description: 'Get in touch with the Mahadev Bookie support team for betting ID registration, account assistance, technical support, and quick support.',
  alternates: {
    canonical: '/contact',
  }
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
