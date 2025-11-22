import '@/app/ui/global.css';
import { Lusitana } from 'next/font/google';
import { lusitana } from '../ui/fonts';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={`${lusitana.className} antialiased`}>{children}</body>
        </html>
    )
}