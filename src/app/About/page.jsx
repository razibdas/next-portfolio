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
                flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-48'>
                    {/* biography container */}
                    <div className='flex flex-col gap-12 justify-center'>
                        <h1>Biography</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto tempore reprehenderit aperiam maiores sit in, quia doloribus neque voluptate impedit.
                        </p>
                    </div>
                    {/* skill container */}
                    <div className=''>Skill</div>
                    {/* experience container */}
                    <div className=''>
                        <p>Experience</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, totam!
                        </p>
                    </div>
                </div>
                {/* svg container */}
               <div className='hidden'></div>
            </div>
        </motion.div>
    );
};

export default page;