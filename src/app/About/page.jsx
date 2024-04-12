"use client"

import React from 'react';

import { motion } from 'framer-motion';

const page = () => {
    return (
        <motion.div className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            {/* container */}
            <div className=''>
                {/* text container */}
                <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48
                flex flex-col gap-24'>
                    {/* biography container */}
                    <div className=''>Biography</div>
                    {/* skill container */}
                    <div className=''>Skill</div>
                    {/* experience container */}
                    <div className=''>Experience</div>
                </div>
                {/* svg container */}
               <div className='hidden'></div>
            </div>
        </motion.div>
    );
};

export default page;