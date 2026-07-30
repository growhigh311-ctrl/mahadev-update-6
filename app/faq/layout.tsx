import type { Metadata } from 'next';
import fs from 'fs';
import path from 'path';

export const metadata: Metadata = {
  title: 'Mahadev Bookie FAQs | Betting ID, Registration & Support',
  description: 'Find answers to frequently asked questions about Mahadev Bookie accounts, betting IDs, deposits, withdrawals, sports betting, and support.',
  alternates: {
    canonical: '/faq',
  }
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  const schemaPath = path.join(process.cwd(), 'schema codes', 'faq.txt');
  let faqSchema = '';
  try {
    faqSchema = fs.readFileSync(schemaPath, 'utf8')
      .replace(/<script[^>]*>/i, '')
      .replace(/<\/script>/i, '')
      .trim();
  } catch (err) {
    console.error('Error reading FAQ schema:', err);
  }

  return (
    <>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: faqSchema }}
        />
      )}
      {children}
    </>
  );
}
