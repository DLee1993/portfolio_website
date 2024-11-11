"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGlobe, FaArrowRight, FaGithub, FaDiscord, FaLinkedinIn } from "react-icons/fa";

const ContactBar = () => {
    const path = usePathname();

    return (
        <div className="flex space-x-2 text-sm">
            {path !== "/contact" && (
                <Link
                    href="/contact"
                    className="group flex flex-1 items-center justify-between h-10 rounded px-4 text-foreground border-[1px] border-foreground25 transition-all duration-300 hover:bg-foreground4 hover:ring-2 hover:ring-foreground hover:ring-offset-2"
                >
                    <span className="flex justify-center items-center gap-2">
                        <FaGlobe className="hidden min-[365px]:block" />
                        <p>Connect with me</p>
                    </span>
                    <FaArrowRight
                        size=".75rem"
                        className="hidden min-[365px]:block -rotate-45 transition-all duration-300 group-hover:rotate-0"
                    />
                </Link>
            )}
            <ul className="flex space-x-2">
                <li className="w-fit h-fit relative border border-foreground25 rounded-md overflow-hidden group">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-50 size-0 bg-foreground group-hover:size-full pointer-events-none transition-all duration-300 rounded-md"></div>
                    <Link
                        href="https://github.com/DLee1993"
                        target="_blank"
                        className="w-full h-full grid place-content-center p-3 text-foreground hover:text-foreground"
                        aria-label="link to github profile"
                    >
                        <FaGithub className="group-hover:text-background transition-all duration-300" />
                    </Link>
                </li>
                <li className="w-fit h-fit relative border border-foreground25 rounded-md overflow-hidden group">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-50 size-0 bg-foreground group-hover:size-full pointer-events-none transition-all duration-300 rounded-md"></div>
                    <Link
                        href="https://discordapp.com/users/706100204960612443"
                        target="_blank"
                        className="w-full h-full grid place-content-center p-3 text-foreground hover:text-foreground"
                        aria-label="link to disord profile"
                    >
                        <FaDiscord className="group-hover:text-background transition-all duration-300" />
                    </Link>
                </li>
                <li className="w-fit h-fit relative border border-foreground25 rounded-md overflow-hidden group">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-50 size-0 bg-foreground group-hover:size-full pointer-events-none transition-all duration-300 rounded-md"></div>
                    <Link
                        href="https://www.linkedin.com/in/wd-david-lee"
                        target="_blank"
                        className="w-full h-full grid place-content-center p-3 text-foreground hover:text-foreground"
                        aria-label="link to linkedin profile"
                    >
                        <FaLinkedinIn className="group-hover:text-background transition-all duration-300" />
                    </Link>
                </li>
            </ul>
        </div>
    );
};
export default ContactBar;
