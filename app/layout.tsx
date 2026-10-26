import type { Metadata } from 'next';
import { description, repository, siteUrl, title } from '../lib/site';
import './globals.css';

export const metadata: Metadata = {
  title,
  description,
  applicationName: 'AudibleInk',
  authors: [{ name: 'Pravat Kumar Mishra', url: 'https://www.linkedin.com/in/pravat-kumar-mishra/' }],
  ...(siteUrl ? { metadataBase: new URL(siteUrl), alternates: { canonical: siteUrl } } : {}),
  openGraph: {
    type: 'website', locale: 'en_US', siteName: 'AudibleInk', title, description,
    ...(siteUrl ? { url: siteUrl, images: [{ url: `${siteUrl}/audibleink.png`, alt: 'AudibleInk waveform app icon' }] } : {}),
  },
  twitter: { card: 'summary', title, description, ...(siteUrl ? { images: [`${siteUrl}/audibleink.png`] } : {}) },
  robots: { index: true, follow: true },
  icons: { icon: '/audibleink.png', apple: '/audibleink.png' },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication', name: 'AudibleInk', description,
      operatingSystem: 'macOS 14 or later', applicationCategory: 'ProductivityApplication',
      processorRequirements: 'Apple Silicon', downloadUrl: repository,
      ...(siteUrl ? { url: siteUrl, image: `${siteUrl}/audibleink.png` } : {}),
      author: { '@type': 'Person', name: 'Pravat Kumar Mishra', url: 'https://www.linkedin.com/in/pravat-kumar-mishra/' },
      featureList: ['Local neural text-to-speech', 'Markdown, text, PDF, Word, and RTF import', 'Optional Markdown code-block reading', 'Adjustable playback pace', 'Passage highlighting', 'Pronunciation dictionary'],
    },
    ...(siteUrl ? [{ '@type': 'WebSite', name: 'AudibleInk', url: siteUrl, description, inLanguage: 'en' }] : []),
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
    {children}
  </body></html>;
}
