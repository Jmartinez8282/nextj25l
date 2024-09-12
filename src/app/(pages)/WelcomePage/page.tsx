
import WelcomeButton from '@/app/components/WelcomeButton'

import React from 'react'

const WelcomePage = () => {
  return (
    <>
      <h1 className='text-center text-3xl mt-3'>Welcome to the Blog</h1>
      <p className='text-center mb-[20%]'>click to see anything and everything</p>
      <div className='flex justify-center'>
       <WelcomeButton/>
      </div>
    </>
  )
}

export default WelcomePage