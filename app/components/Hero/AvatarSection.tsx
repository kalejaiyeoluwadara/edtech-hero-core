'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import image from '@/public/image';

function AvatarSection() {
    const [activeAvatar, setActiveAvatar] = useState(0);
    const [count, setCount] = useState(0);

    // Animation to cycle through avatars
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveAvatar(prev => (prev + 1) % 4);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    // Counter animation
    useEffect(() => {
        const counterInterval = setInterval(() => {
            if (count < 500) {
                setCount(prev => Math.min(prev + 25, 500));
            } else {
                clearInterval(counterInterval);
            }
        }, 50);

        return () => clearInterval(counterInterval);
    }, [count]);

    // Variants for different animations
    const containerVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                delayChildren: 0.3,
                staggerChildren: 0.1
            }
        }
    };

    const avatarVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
        active: {
            scale: 1.2,
            y: [-3, 0, -3],
            transition: {
                y: { repeat: Infinity, duration: 1 },
                scale: { duration: 0.3 }
            }
        }
    };

    return (
        <motion.div
            className="bg-[#231d20e5] flex items-center w-fit pr-3 h-[54px] rounded-full"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            whileHover={{ scale: 1.05 }}
        >
            <div className="relative flex p-2 items-center justify-center w-[100px]">
                {[0, 1, 2, 3].map((index) => (
                    <motion.div
                        key={index}
                        className={`absolute rounded-full overflow-hidden z-${10 + index * 10}`}
                        style={{ left: `${2 + index * 4}rem` }}
                        variants={avatarVariants}
                        animate={activeAvatar === index ? "active" : "visible"}
                        whileHover={{ scale: 1.2, zIndex: 50 }}
                    >
                        <Image
                            className="w-8 h-8 rounded-full border-2 border-transparent hover:border-green-400"
                            src={index === 0 ? image.Memoji2 :
                                index === 1 ? image.Memoji3 :
                                    index === 2 ? image.Memoji :
                                        image.Memoji1}
                            alt={`Student avatar ${index + 1}`}
                            width={32}
                            height={32}
                        />

                        {activeAvatar === index && (
                            <motion.div
                                className="absolute inset-0 border-2 border-green-400 rounded-full"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1.4, opacity: 0 }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 1.5,
                                    repeatType: "loop"
                                }}
                            />
                        )}
                    </motion.div>
                ))}
            </div>

            <div className="ml-1 mr-4">
                <motion.span
                    className="text-white text-sm font-medium flex items-center"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    <motion.span
                        className="text-green-400 font-bold mr-1"
                        animate={{
                            scale: [1, 1.1, 1],
                            transition: {
                                repeat: Infinity,
                                duration: 2
                            }
                        }}
                    >
                        <AnimatePresence>
                            <motion.span
                                key={count}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                            >
                                {count}+
                            </motion.span>
                        </AnimatePresence>
                    </motion.span>
                    students enrolled
                </motion.span>
            </div>
        </motion.div>
    );
}

export default AvatarSection;