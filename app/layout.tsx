import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "David Lee | Frontend Developer",
    description:
        "A Frontend developer specialising in creating engaging, user-friendly experiences.",
    keywords: "Frontend Developer, Developer, Portfolio, React Developer",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`antialiased`}>
                <main>{children}</main>
            </body>
        </html>
    );
}
