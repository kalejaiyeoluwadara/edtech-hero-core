import image from '@/public/image'
import Image from 'next/image'
import React from 'react'

function LogoSection() {
    return (
        <div className='flex items-center  w-fit px-2 h-[54px] rounded-full'>
            {/* Logo stack container with proper spacing */}
            <div className='relative flex w-[120px] h-10'>
                {/* Position each image with proper z-index */}
                <div className='absolute left-0 z-30 w-10 h-10 rounded-full overflow-hidden'>
                    <Image
                        className='w-full h-full object-cover'
                        src={image.logo}
                        alt='logo 1'
                    />
                </div>
                <div className='absolute left-8 z-20 w-10 h-10 rounded-full overflow-hidden'>
                    <Image
                        className='w-full h-full object-cover'
                        src={image.logo1}
                        alt='logo 2'
                    />
                </div>
                <div className='absolute left-16 z-10 w-10 h-10 rounded-full overflow-hidden'>
                    <Image
                        className='w-full h-full object-cover'
                        src={image.logo2}
                        alt='logo 3'
                    />
                </div>
            </div>

            {/* Text with proper spacing from images */}
            <p className='text-white text-sm ml-1'>Trusted by over 20+ companies</p>
        </div>
    )
}

export default LogoSection