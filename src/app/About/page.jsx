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
                <div className='h-full p-4 lg:p-32
                flex flex-col lg:gap-24   '>
                    {/* biography container */}
                    <div className='flex flex-col lg:gap-12 justify-center'>
                        <h1>Biography</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto tempore reprehenderit aperiam maiores sit in, quia doloribus neque voluptate impedit.
                        </p>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 8v8M8 12l4 4 4-4" />
                    </svg>

                    </div>
                    
                    {/* skill container */}
                    <div className='flex flex-col gap-12 justify-center'>
                        <h1 className='font-bold text-2xl'>SKILLs</h1>
                        <div className='flex flex-wrap gap-4'>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                Javascript
                            </div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                Javascript
                            </div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                Javascript
                            </div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                Javascript
                            </div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                Javascript
                            </div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                Javascript
                            </div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                Javascript
                            </div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                Javascript
                            </div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                Javascript
                            </div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                Javascript
                            </div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                Javascript
                            </div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                                Javascript
                            </div>
                        </div>
                    </div>
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

