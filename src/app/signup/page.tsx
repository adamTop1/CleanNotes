import LoginForm from '@/components/LoginForm'
import React from 'react'
import { signUpAction } from '@/actions/users'

const SignUp = () => {
  return (
   	<div className='flex flex-col items-center justify-center w-full min-h-screen bg-zinc-900'> 
        <h2 className='pb-1 my-20 text-5xl border-b-2 border-yellow-300'>Sign Up</h2>
        <LoginForm actionFn={signUpAction} signText='sign up' />
    </div>
  )
}

export default SignUp