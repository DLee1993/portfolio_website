import Link from "next/link";
import AccentDot from "./AccentDot";

const Header = () => {
    return (
        <header className="p-5 sm:p-7 md:p-10 flex justify-between items-start">
            <ul className="text-sm font-bold">
                <li>
                    <Link
                        href="https://github.com/DLee1993"
                        target="_blank"
                        className="text-foreground50 hover:text-foreground"
                    >
                        github
                    </Link>
                </li>
                <li>
                    <Link
                        href="https://www.linkedin.com/in/wd-david-lee"
                        target="_blank"
                        className="text-foreground50 hover:text-foreground"
                    >
                        linkedin
                    </Link>
                </li>
                <li>
                    <Link
                        href="https://discordapp.com/users/706100204960612443"
                        target="_blank"
                        className="text-foreground50 hover:text-foreground"
                    >
                        discord
                    </Link>
                </li>
            </ul>
            <aside className="w-fit flex justify-center items-center gap-2">
                <AccentDot />
                <p className="text-sm font-bold">Available for work</p>
            </aside>
        </header>
    );
};
export default Header;
