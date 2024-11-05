import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
    weight: ["200", "300", "400", "500", "600", "700", "800"],
    subsets: ["latin"],
});

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
            <body className={`${inter.className} antialiased text-foreground bg-background`}>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
