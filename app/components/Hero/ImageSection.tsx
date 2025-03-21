'use client'
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import image from "@/public/image";

const ImageSection = () => {
    return (
        <div className="relative  flex items-center justify-center p-6">
            {/* Bottom Card */}
            <div className="pr-20">
                <motion.div
                    initial={{ rotate: -12, y: 20, opacity: 0 }}
                    animate={{ rotate: -12, y: 20, opacity: 0.7 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 overflow-hidden rounded-[16px] w-[408px] bg-[#1F1F1F] flex-shrink-0 h-[438px] "
                />

                {/* Middle Card */}
                <motion.div
                    initial={{ rotate: 0, y: 0, opacity: 0 }}
                    animate={{ rotate: 0, y: 0, opacity: 0.85 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="absolute inset-0 overflow-hidden rounded-[16px] w-[408px] bg-[#4F4F4F] flex-shrink-0 h-[438px]"
                />

                {/* Top Card (Main Image) */}
                <motion.div
                    initial={{ rotate: 0, y: 0, opacity: 0 }}
                    animate={{ rotate: 12, y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="absolute inset-0 z-50 overflow-hidden rounded-[16px] w-[408px] flex-shrink-0 h-[438px]"
                >
                    <Image
                        src={image.students}
                        alt="Team Working on Laptops"
                        className="rounded-xl object-cover"
                    />

                </motion.div>
            </div>


        </div>
    );
};

export default ImageSection;