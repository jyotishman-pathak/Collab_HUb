import React from 'react'
import { Button } from '../ui/button'
import { BackgroundLines } from '../ui/background-lines'
import { Features } from './Features'

const Main = () => {
  return (
    <div className="">
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Unlock Your Potential with <br /> Realtime Learning
          </h2>
          <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
            Join a dynamic community where students and instructors connect in real-time to learn, collaborate, and innovate
          </p>
        </BackgroundLines>
        <Features />
    </div>
  )
}


export default Main
