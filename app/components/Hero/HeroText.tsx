import React from 'react'
import { Icons } from '../ui/icons'

function HeroText() {
  return (
    <h1 className='text-4xl sm:text-[68px] sm:text-start text-center mt-2 md:mt-4 leading-16 sm:leading-20 text-white '>
          <span><span className='relative'>Online <span className='absolute sm:-bottom-2 -bottom-4 -left-4'><Icons.Line /></span>
      </span> School for</span><br /> <span>Learning <span className='relative'><span className='relative z-30'>Python</span> <span className=' md:visible invisible absolute -z-4 left-2  -bottom-2'><Icons.Border /></span> <span className='visible md:invisible absolute -z-4 left-1  -bottom-2'><Icons.Bordersm /></span> </span></span></h1>
  )
}

export default HeroText