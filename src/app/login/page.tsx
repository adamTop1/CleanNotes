'use client'

import React from 'react'
import { OnSubmitLogin } from './OnSubmitLogin'

const LoginPage = () => {

    const onSubmit = async () => {
        await OnSubmitLogin({name: 'siema', password: 'elo123'})
    }

  return (
    <div className='flex flex-col items-center justify-center h-full'>
        <h1>Login Page</h1>
        <button onClick={onSubmit} className='border border-white'>create user</button>
    </div>
  )
}

export default LoginPage