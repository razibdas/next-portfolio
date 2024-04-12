
"use client"

import React from 'react';

import { motion } from 'framer-motion';

const PortfolioPage = () => {
    return (
        <motion.div className="h-full"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <h1>Portfolio</h1>
      </motion.div>
    );
};

export default PortfolioPage;