import React from 'react'
import TextSection from './TextSection'
import ImageSection from './ImageSection'
import LogoSection from './LogoSection'
import { Icons } from '../ui/icons'

function HeroPage() {
  return (
    <main className='min-h-screen w-full  relative'>
      <span className='absolute inset-0 -z-10 hidden lg:block'><Icons.BgCircle /></span>
      <span className='absolute top-[-80px] left-[20px] md:left-[200px] '><Icons.Star1 /></span>
      <span className='absolute top-[-100px] right-[-14px] md:right-[10px] '><Icons.Star1 /></span>
      <span className='absolute bottom-[40px] left-[500px] '><Icons.Star1 /></span>
      <main className='grid sm:grid-cols-2  w-full h-full '>
        <TextSection />
        <ImageSection />
      </main>
      <div className='flex items-center justify-center w-full mt-20 mb-12 '>
        <LogoSection />
      </div>
    </main>
  )
}

export default HeroPage