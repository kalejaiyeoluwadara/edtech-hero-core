import React from 'react'
import AvatarSection from './AvatarSection'
import { Icons } from '../ui/icons'
import HeroText from './HeroText'
import HeroButtons from './HeroButtons'
import ScholarShipButton from './ScholarShipButton'

function TextSection() {
  return (
    <div className='h-full flex flex-col justify-center'>
      <AvatarSection />
      <HeroText />
      <p className='text-white sm:text-start text-center mt-4 '>Learn from experts, build projects, and get certified.</p>
      <HeroButtons />
      <ScholarShipButton />
    </div>
  )
}

export default TextSection