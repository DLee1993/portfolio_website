import Link from "next/link";
import SocialLinks from "./SocialLinks";
import { FaGlobe, FaArrowRight } from "react-icons/fa";

const ContactBar = () => {
    return (
        <div className="flex space-x-2 text-sm">
            <Link
                href="/contact"
                className="group flex flex-1 items-center justify-between h-10 rounded px-4 text-foreground border-[1px] border-foreground25 transition-all duration-300 hover:bg-foreground4 hover:ring-2 hover:ring-foreground hover:ring-offset-2"
            >
                <span className="flex justify-center items-center gap-2">
                    <FaGlobe className="hidden min-[365px]:block"/>
                    <p>Connect with me</p>
                </span>
                <FaArrowRight size=".75rem" className="hidden min-[365px]:block -rotate-45 transition-all duration-300 group-hover:rotate-0" />
            </Link>
            <SocialLinks />
        </div>
    );
};
export default ContactBar;
