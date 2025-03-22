import image from '@/public/image'
import Image from 'next/image'
import React from 'react'
import AvatarSection from './AvatarSection'
import { Icons } from '../ui/icons'

function TextSection() {
  return (
    <div className='h-full flex flex-col justify-center'>
      <AvatarSection />
      <h1 className='text-[68px] mt-4 leading-20 text-white '>
        <span><span className='relative'>Online <span className='absolute -bottom-2 -left-4'><Icons.Line /></span>
        </span> School for</span><br /> <span>Learning <span className='relative'><span className='relative z-30'>Python</span> <span className='absolute -z-4 left-2  -bottom-2'><Icons.Border /></span> </span></span></h1>
      <p className='text-white mt-4 '>Learn from experts, build projects, and get certified.</p>
      <div className='flex mt-6 gap-3'>
        <button className='bg-[#FBFF48]'>Enroll Now</button>
        <button className=' border border-[#5C5C5A] text-white '>Learn More</button>
      </div>
      <div className='mt-20 relative flex justify-end md:pr-20 w-full'>
        <span className='absolute -top-12 left-34'><Icons.Arrow /></span>
        <div className='relative  flex items-center text-white justify-center w-[230px] px-2 text-center rounded-none bg-[#231d20e5] py-3'>
          <span className='absolute  inset-0 border-r-8 border-b-4 border-black'></span>
          <span className='absolute inset-0 border-r-2 border-b-4 border-[#FBFF48]'></span>
          <span className=' text-center w-full block py-2'>Win $500 in scholarships</span>
        </div>
      </div>
    </div>
  )
}

export default TextSection