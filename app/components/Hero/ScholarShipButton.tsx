'use client'
import { motion } from 'framer-motion'
import { Icons } from '../ui/icons'

function ScholarShipButton() {
    return (
        <div className='mt-12 md:mt-20 relative flex justify-center md:justify-end md:pr-20 w-full'>
            <motion.span
                className='absolute -top-8 md:-top-12 left-34'
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <Icons.Arrow />
            </motion.span>
            <div className='relative flex items-center text-white justify-center w-[230px] px-2 text-center rounded-none bg-[#231d20e5] py-3'>
                <span className='absolute inset-0 border-r-8 border-b-4 border-black'></span>
                <span className='absolute inset-0 border-r-2 border-b-4 border-[#FBFF48]'></span>
                <span className='text-center w-full block py-2'>Win $500 in scholarships</span>
            </div>
        </div>
    )
}

export default ScholarShipButton