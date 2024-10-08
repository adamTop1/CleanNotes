import { signOut } from '@/auth'
import HamburgerIcon from './HamburgerIcon'
import MobileNav from './MobileNav'


const Hamburger = async () => {

	const signOutFn = async () => {
		'use server'
			await signOut()
	}

	return (
		<div className='absolute top-0 w-100vh h-100vh left-1 lg:hidden'>
			<HamburgerIcon signOutFn={signOutFn} />
		</div>
	)
}

export default Hamburger
