import type { Metadata } from 'next';
import './globals.css';
import { SiteShell } from '@/components/site-shell';
export const metadata: Metadata = { title: 'Lexora — Lapor dan lacak kasus', description: 'Prototipe pendamping pelaporan kejahatan siber.' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="id"><body><a className="skip" href="#main">Lewati ke konten</a><SiteShell>{children}</SiteShell></body></html>; }
