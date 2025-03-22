image
import image from '@/public/image'
import Image from 'next/image'
import React from 'react'
function AvatarSection() {
  return (
      <div className='bg-[#231d20e5] flex items-center w-fit pr-3 h-[54px] rounded-full '>
          <div className='relative flex p-2  items-center justify-center w-[100px] '>
              <Image className='avatar left-2' src={image.Memoji2} alt='' />
              <Image className='avatar left-6' src={image.Memoji3} alt='' />
              <Image className='avatar left-10' src={image.Memoji} alt='' />
              <Image className='avatar left-15' src={image.Memoji1} alt='' />
          </div>
          <span className='ml-1 mr-4 text-white top-2'>500+ students enrolled</span>
      </div>
  )
}

export default AvatarSection