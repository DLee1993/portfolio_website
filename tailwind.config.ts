import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontSize: {
                base: "0.938rem",
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                foreground75: "var(--foreground75)",
                foreground50: "var(--foreground50)",
                foreground25: "var(--foreground25)",
                foreground4: "var(--foreground4)",
            },
        },
    },
    plugins: [],
};
export default config;
