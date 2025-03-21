import React from 'react'
import { Icons } from './ui/icons'
import Link from 'next/link'

function Nav() {
  return (
    <nav className='py-8  px-12 flex justify-between items-center'>
        <div>
            <Icons.Logo/>
        </div>
        <div className='flex gap-6'>
            <Link href={'/'} >Home</Link>
        </div>
    </nav>
  )
}

export default Nav