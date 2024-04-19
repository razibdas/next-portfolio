"use client"

import Link from "next/link"
import { useState } from "react";
import Image from "next/image";
import Navlink from "./Navlink";
import { motion } from 'framer-motion'
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa6";


const links = [
    { url: "/", title: "Home" },
    { url: "/About", title: "About" },
    { url: "/Portfolio", title: "Portfolio" },
    { url: "/Contact", title: "Contact" }
]

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const topVariants = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: 45,
            backgroundColor: 'rgb(255,255,255)'
        }
    }

    const centerVariants = {
        closed: {
            opacity: 1,
        },
        opened: {
            opacity: 0,
        }
    }

    const bottomVariants = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: -45,
            backgroundColor: 'rgb(255,255,255)'
        }
    }

    const listVariants = {
        closed: {
            x: "100vw"
        },
        opened: {
            x: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2,
            },
        }
    }

    const listItemVariants = {
        closed: {
            x: -10,
            opacity: 0,
        },
        opened: {
            x: 0,
            opacity: 1,
        }
    }

    return (
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
            <div className="hidden md:flex gap-4 w-1/3">
                {links.map(link => (
                    <Navlink link={link} key={link.title}></Navlink>
                ))}
            </div>
            <div className="md:hidden lg:flex w-1/3 justify-center">
                <Link href="/" className="text-sm bg-black rounded-md p-1
                flex items-center justify-center">
                    <span className="text-white mr-2">Razib Das</span>
                    <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">.dev</span>
                </Link>
            </div>
           
            <div className="flex gap-4 text-3xl">
                <Link href="https://github.com/razibdas"> <FaGithub /></Link>
                <Link href="https://web.facebook.com/razib.kumar.336"><FaFacebook /></Link>
                <Link href="https://www.linkedin.com/in/razib-das-0838532a7/"><FaLinkedin/></Link>
            </div>

            {/* responsive menu */}
            <div className="md:hidden">
                <button onClick={() => setOpen((prev) => !prev)} className="w-10 h-8 flex flex-col justify-between relative z-50">
                    <motion.div variants={topVariants}
                        animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded origin-left" />
                    <motion.div variants={centerVariants}
                        animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded" />
                    <motion.div variants={bottomVariants}
                        animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded origin-left" />
                </button>
                {/* menu list */}
                {open && (
                    <motion.div variants={listVariants}
                        initial="closed" animate="opened" className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 z-40">
                        {links.map(link => (
                            <motion.div variants={listItemVariants} key={link.title}>
                                <Link href={link.url}>{link.title}</Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Navbar;