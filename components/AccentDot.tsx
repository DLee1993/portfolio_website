const AccentDot = () => {
    return (
        <p className="relative flex size-[10px]">
            <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full size-[10px] bg-yellow-500"></span>
        </p>
    );
};
export default AccentDot;
