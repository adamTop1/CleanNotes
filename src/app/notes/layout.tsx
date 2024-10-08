import Hamburger from '@/components/Hamburger'
import HamburgerIcon from '@/components/HamburgerIcon'
import LeftSidebar from '@/components/LeftSidebar'

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className='relative flex'>
			<LeftSidebar />
			<div className='w-full h-full lg:w-10/12 '>{children}</div>
			<Hamburger />
		</div>
	)
}
