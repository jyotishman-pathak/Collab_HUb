import React from 'react'
import { ModeToggle } from '../mode-toggle'
import { Card } from '../ui/card'
import { Button } from '../ui/button'

const Navbar = () => {
  return (
   <Card className='h-[90px] flex items-center justify-between sticky'>
    <div className="">
            <h1 className='text-4xl font-semibold ml-3'>Collab Hub</h1>
    </div>
    <div className=""></div>

<div className="flex gap-4 mr-5">
    <Button>SignUp</Button>
    <Button>LogIN</Button>
    <ModeToggle />
</div>
   </Card>
  )
}

export default Navbar
