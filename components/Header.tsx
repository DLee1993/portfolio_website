"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaDiscord, FaLinkedinIn, FaGithubAlt } from "react-icons/fa";

const Header = () => {
    const path = usePathname();
    return (
        <header className="w-2/3 max-w-80 sm:max-w-none sm:w-full fixed bottom-2 left-1/2 -translate-x-1/2 sm:sticky sm:top-0 sm:left-0 sm:translate-x-0 bg-foreground sm:bg-transparent sm:bg-gradient-to-b from-background from-40% px-5 py-3 sm:p-7 backdrop-blur-[2px] rounded-full sm:rounded-none">
            <div className="customWidth flex justify-center sm:justify-between items-center">
                <ul className="hidden sm:flex space-x-4">
                    <li className="relative border border-foreground25 rounded-md overflow-hidden group">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-50 size-0 bg-foreground group-hover:size-full pointer-events-none transition-all duration-300 rounded-md"></div>
                        <Link
                            href="https://github.com/DLee1993"
                            target="_blank"
                            className="block p-2 text-foreground50 hover:text-foreground"
                        >
                            <FaGithubAlt className="group-hover:text-background transition-all duration-300" />
                        </Link>
                    </li>
                    <li className="relative border border-foreground25 rounded-md overflow-hidden group">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-50 size-0 bg-foreground group-hover:size-full pointer-events-none transition-all duration-300 rounded-md"></div>
                        <Link
                            href="https://www.linkedin.com/in/wd-david-lee"
                            target="_blank"
                            className="block p-2 text-foreground50 hover:text-foreground"
                        >
                            <FaLinkedinIn className="group-hover:text-background transition-all duration-300" />
                        </Link>
                    </li>
                    <li className="relative border border-foreground25 rounded-md overflow-hidden group">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-50 size-0 bg-foreground group-hover:size-full pointer-events-none transition-all duration-300 rounded-md"></div>
                        <Link
                            href="https://discordapp.com/users/706100204960612443"
                            target="_blank"
                            className="block p-2 text-foreground50 hover:text-foreground"
                        >
                            <FaDiscord className="group-hover:text-background transition-all duration-300" />
                        </Link>
                    </li>
                </ul>
                <ul className="w-full justify-between sm:w-fit flex space-x-4">
                    <li>
                        <Link
                            href="/"
                            className={
                                path === "/"
                                    ? "text-background font-bold sm:font-normal sm:text-foreground"
                                    : "text-background50 sm:text-foreground50 hover:text-foreground"
                            }
                        >
                            index
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/resume"
                            className={
                                path === "/resume"
                                    ? "text-background font-bold sm:font-normal sm:text-foreground"
                                    : "text-background sm:text-foreground50 sm:hover:text-foreground"
                            }
                        >
                            resume
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className={
                                path === "/contact"
                                    ? "text-background font-bold sm:font-normal sm:text-foreground"
                                    : "text-background sm:text-foreground50 sm:hover:text-foreground"
                            }
                        >
                            contact
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};
export default Header;
