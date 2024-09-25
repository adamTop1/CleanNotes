import LeftSidebar from '@/components/LeftSidebar'

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className='relative flex'>
			<LeftSidebar />
			<div className='w-10/12 h-full '>{children}</div>
		</div>
	)
}
