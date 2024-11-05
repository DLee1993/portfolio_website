const AccentDot = () => {
    return (
        <p className="relative flex size-[8px]">
            <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full size-[8px] bg-green-500"></span>
        </p>
    );
};
export default AccentDot;
