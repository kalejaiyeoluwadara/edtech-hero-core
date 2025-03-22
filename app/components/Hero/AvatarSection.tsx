'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import image from '@/public/image';

function AvatarSection() {
    return (
        <motion.div
            className="bg-[#231d20e5] flex items-center w-fit pr-4 h-[54px] rounded-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
        >
            <div className="relative flex items-center justify-center w-[110px] h-[40px]">
                {/* First avatar */}
                <motion.div
                    className="absolute left-2 z-10"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    whileHover={{ scale: 1.15, zIndex: 50 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.div
                        animate={{
                            y: [0, -4, 0],
                        }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "reverse",
                            duration: 1.5,
                            delay: 0
                        }}
                    >
                        <Image
                            className="w-8 h-8 rounded-full border-2 border-transparent hover:border-green-400"
                            src={image.Memoji2}
                            alt="Student avatar 1"
                            width={32}
                            height={32}
                        />
                    </motion.div>
                </motion.div>

                {/* Second avatar */}
                <motion.div
                    className="absolute left-6 z-20"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ scale: 1.15, zIndex: 50 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.div
                        animate={{
                            y: [0, -4, 0],
                        }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "reverse",
                            duration: 1.5,
                            delay: 0.4
                        }}
                    >
                        <Image
                            className="w-8 h-8 rounded-full border-2 border-transparent hover:border-green-400"
                            src={image.Memoji3}
                            alt="Student avatar 2"
                            width={32}
                            height={32}
                        />
                    </motion.div>
                </motion.div>

                {/* Third avatar */}
                <motion.div
                    className="absolute left-10 z-30"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ scale: 1.15, zIndex: 50 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.div
                        animate={{
                            y: [0, -4, 0],
                        }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "reverse",
                            duration: 1.5,
                            delay: 0.8
                        }}
                    >
                        <Image
                            className="w-8 h-8 rounded-full border-2 border-transparent hover:border-green-400"
                            src={image.Memoji}
                            alt="Student avatar 3"
                            width={32}
                            height={32}
                        />
                    </motion.div>
                </motion.div>

                {/* Fourth avatar */}
                <motion.div
                    className="absolute left-14 z-40"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.15, zIndex: 50 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.div
                        animate={{
                            y: [0, -4, 0],
                        }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "reverse",
                            duration: 1.5,
                            delay: 1.2
                        }}
                    >
                        <Image
                            className="w-8 h-8 rounded-full border-2 border-transparent hover:border-green-400"
                            src={image.Memoji1}
                            alt="Student avatar 4"
                            width={32}
                            height={32}
                        />
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
            >
                <motion.span
                    className="text-white text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                >
                    <motion.span
                        className="inline-block text-green-400 font-bold mr-1"
                        animate={{
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 2
                        }}
                    >
                        500+
                    </motion.span>
                    students enrolled
                </motion.span>
            </motion.div>
        </motion.div>
    );
}

export default AvatarSection;