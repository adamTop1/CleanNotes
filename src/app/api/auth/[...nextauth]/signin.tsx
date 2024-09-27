import { signIn } from 'next-auth/react'

const signin = () => {
	return <button onClick={() => signIn('github')}>GITHUB LOGIN</button>
}

export default signin
