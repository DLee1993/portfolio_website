"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const path = usePathname();
    return (
        <header className="customWidth h-20 flex justify-between items-center">
            <Link href="/" className="font-medium">
                dl.
            </Link>
            <ul className="flex justify-center items-center gap-2">
                <li>
                    <Link
                        href="/info"
                        className={`${
                            path === "/info"
                                ? "text-foreground"
                                : "text-foreground50 hover:text-foreground"
                        }`}
                    >
                        info
                    </Link>
                </li>
                <li>
                    <Link
                        href="/contact"
                        className={`${
                            path === "/contact"
                                ? "text-foreground"
                                : "text-foreground50 hover:text-foreground"
                        }`}
                    >
                        contact
                    </Link>
                </li>
            </ul>
        </header>
    );
};
export default Header;
