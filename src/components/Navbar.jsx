"use client"

import Link from "next/link"
import { useState } from "react";
import Image from "next/image";
import Navlink from "./Navlink";


const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/Contact", title: "Contact" }
]

const Navbar = () => {
    const [open, setOpen] = useState(false)
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
                    <span className="text-white mr-2">Lama</span>
                    <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">.dev</span>
                </Link>
            </div>
            <div className="">
                <Link href="#" className="hidden md:flex gap-4 w-1/3">
                    <Image src="/github.png" alt="" width={24} height={24} />
                    <Image src="/facebook.png" alt="" width={24} height={24} />
                    <Image src="/dribbble.png" alt="" width={24} height={24} />
                    <Image src="/instagram.png" alt="" width={24} height={24} />
                    <Image src="/linkedin.png" alt="" width={24} height={24} />
                    <Image src="/pinterest.png" alt="" width={24} height={24} />
                </Link>

            </div>
            {/* responsive menu */}
            <div className="md:hidden">
                <button onClick={() => setOpen((prev) => !prev)} className="w-10 h-8 flex flex-col justify-between relative z-50">
                    <div className="w-10 h-1 bg-white rounded"></div>
                    <div className="w-10 h-1 bg-white rounded"></div>
                    <div className="w-10 h-1 bg-white rounded"></div>
                </button>
                {/* menu list */}
                {open && (
                    <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8">
                        {links.map(link => (
                            <Link href={link.url} key={link.title}>{link.title}</Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;