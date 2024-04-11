"use client"

import { usePathname } from "next/navigation";
import Link from "next/link"


const Navlink = ({link}) => {
    const pathName = usePathname();

    console.log(pathName);
    return (
        <Link className={`rounded p-1 ${pathName === link.url && "bg-black text-white"}`} href={link.url}>
            {link.title}
        </Link>
    );
};

export default Navlink;