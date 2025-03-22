import image from '@/public/image'
import Image from 'next/image'
import React from 'react'
import AvatarSection from './AvatarSection'

function TextSection() {
  return (
    <div>
      <AvatarSection />
      <h1 className='text-[70px] leading-16 text-white '><span>Online School for</span> <span>Learning <span>Python</span> </span></h1>
    </div>
  )
}

export default TextSection