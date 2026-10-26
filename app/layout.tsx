import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Murmur — Give your documents a voice', description: 'A native Mac app for listening to Markdown, text, PDF, Word, and RTF. Local neural speech, thoughtful reading controls, and your own pace.', icons: { icon: '/murmur.png' } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
