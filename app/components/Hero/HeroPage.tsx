import React from 'react'
import TextSection from './TextSection'
import ImageSection from './ImageSection'

function HeroPage() {
  return (
    <main className='grid  grid-cols-2 items-start w-full min-h-[100vh] pb-20 pt-12 overflow-hidden   gap-3'>
          <TextSection />
          <ImageSection />
      </main>
  )
}

export default HeroPage