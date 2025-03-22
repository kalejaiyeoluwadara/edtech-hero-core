'use client'
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import image from "@/public/image";

const ImageSection = () => {
    return (
        <div className="relative md:mt-0 mt-20 h-[500px] w-full">
            {/* Card Container - Make this relative instead of absolute */}
            <div className="relative w-full h-full flex justify-center md:justify-end">
                {/* Stack of Cards - Positioned relative to container */}
                <div className="relative mt-12 h-[438px] w-[250px] md:w-[408px]">
                    {/* Bottom Card */}
                    <motion.div
                        initial={{ rotate: -12, y: 20, opacity: 0 }}
                        animate={{ rotate: -12, y: 20, opacity: 0.7 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 overflow-hidden rounded-[16px] w-full bg-[#1F1F1F] h-full"
                    />

                    {/* Middle Card */}
                    <motion.div
                        initial={{ rotate: 0, y: 0, opacity: 0 }}
                        animate={{ rotate: 0, y: 0, opacity: 0.85 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="absolute inset-0 overflow-hidden rounded-[16px] w-full bg-[#4F4F4F] h-full"
                    />

                    {/* Top Card (Main Image) */}
                    <motion.div
                        initial={{ rotate: 0, y: 0, opacity: 0 }}
                        animate={{ rotate: 12, y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="absolute inset-0 z-50 overflow-hidden rounded-[16px] w-full h-full"
                    >
                        <Image
                            src={image.students}
                            alt="Team Working on Laptops"
                            className="rounded-xl object-cover w-full h-full"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ImageSection;