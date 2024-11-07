const AvailableToWork = () => {
    return (
        <aside className="w-fit flex justify-center items-center gap-2 text-sm font-bold my-5 sm:my-7">
            <p className="relative flex size-[8px]">
                <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full size-[8px] bg-green-500"></span>
            </p>
            Available for work
        </aside>
    );
};
export default AvailableToWork;
