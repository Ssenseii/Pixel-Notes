import React from 'react'
import Signin from '../components/auth/Signin'
import Signup from '../components/auth/Signup'

const Auth = () => {
  return (
    <div className='auth'>
      <div className='auth__signin'>
        <h1>
          SIGN IN
        </h1>
        <Signin />
      </div>
      <div className='auth__signup'>
        <h1>
          SIGN UP
        </h1>
        <Signup />
      </div>
    </div>
  )
}

export default Auth