//import AccentDot from "./AccentDot";
import Link from "next/link";
import { FaDiscord, FaLinkedinIn, FaGithubAlt } from "react-icons/fa";

export default function Home() {
    return (
        <section className="customWidth mt-5">
            <ul className="flex space-x-4 sm:hidden">
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
            <h1>hello world</h1>
        </section>
    );
}

{
    /**
    <aside className="absolute top-1/2 -translate-y-1/2 left-5 w-fit flex justify-center items-center gap-2">
                    <AccentDot />
                    <p className="text-sm font-bold">Available for work</p>
                </aside> */
}
