import LoginForm from '@/components/LoginForm'
import React from 'react'

const SignIn = () => {
  return (
   	<div className='flex flex-col items-center justify-center w-full min-h-screen bg-zinc-900'> 
        <h2 className='pb-1 my-20 text-5xl border-b-2 border-yellow-300'>Sign In</h2>
        <LoginForm />
    </div>
  )
}

export default SignIn