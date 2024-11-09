import Link from "next/link";
import { FaGithub, FaDiscord, FaLinkedinIn } from "react-icons/fa";

const SocialLinks = () => {
    return (
        <ul className="flex space-x-2">
            <li className="relative border border-foreground25 rounded-md overflow-hidden group">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-50 size-0 bg-foreground group-hover:size-full pointer-events-none transition-all duration-300 rounded-md"></div>
                <Link
                    href="https://github.com/DLee1993"
                    target="_blank"
                    className="block p-3 text-foreground hover:text-foreground"
                    aria-label="link to github profile"
                >
                    <FaGithub className="group-hover:text-background transition-all duration-300" />
                </Link>
            </li>
            <li className="relative border border-foreground25 rounded-md overflow-hidden group">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-50 size-0 bg-foreground group-hover:size-full pointer-events-none transition-all duration-300 rounded-md"></div>
                <Link
                    href="https://discordapp.com/users/706100204960612443"
                    target="_blank"
                    className="block p-3 text-foreground hover:text-foreground"
                    aria-label="link to disord profile"
                >
                    <FaDiscord className="group-hover:text-background transition-all duration-300" />
                </Link>
            </li>
            <li className="relative border border-foreground25 rounded-md overflow-hidden group">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-50 size-0 bg-foreground group-hover:size-full pointer-events-none transition-all duration-300 rounded-md"></div>
                <Link
                    href="https://www.linkedin.com/in/wd-david-lee"
                    target="_blank"
                    className="block p-3 text-foreground hover:text-foreground"
                    aria-label="link to linkedin profile"
                >
                    <FaLinkedinIn className="group-hover:text-background transition-all duration-300" />
                </Link>
            </li>
        </ul>
    );
};
export default SocialLinks;
