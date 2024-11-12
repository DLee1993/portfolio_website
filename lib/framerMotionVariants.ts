export const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            duration: 1.5,
            ease: "linear",
        },
    },
};

export const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
};
