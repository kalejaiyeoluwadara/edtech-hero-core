import React from 'react'
import TextSection from './TextSection'
import ImageSection from './ImageSection'
import LogoSection from './LogoSection'

function HeroPage() {
  return (
    <main className='min-h-[100vh]'>
      <main className='grid sm:grid-cols-2 w-full h-full '>
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