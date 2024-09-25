import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Space_Grotesk } from 'next/font/google'
import LeftSidebar from '@/components/LeftSidebar'

const inter = Inter({ subsets: ['latin'] })

const spaceGrotesk = Space_Grotesk({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	variable: '--font-spaceGrotesk',
})

export const metadata: Metadata = {
	title: 'Clean Notes',
	description: 'Create notes with a clean interface.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${spaceGrotesk.className} bg-zinc-950 text-white`}>
				{children}
			</body>
		</html>
	)
}
