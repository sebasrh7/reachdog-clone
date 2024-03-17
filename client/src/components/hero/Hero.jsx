const Hero = () => {
    return (
        <section className="flex items-center justify-center md:flex-row gap-4 min-h-[90vh] flex-col overflow-hidden">
            <div className="flex flex-col gap-4 md:w-1/2 ">
                <h2 className="text-2xl font-semibold">
                    Discover
                </h2>
                <h1 className="text-5xl font-semibold">
                    The Best Deals
                </h1>
                <h2 className="text-2xl font-semibold">
                    On Reach Dog Clone
                </h2>
            </div>

            <div className=" md:w-1/2 ">
                <div className="flex flex-col gap-0 mx-auto">
                    <img
                        className="object-contain w-full max-h-[450px]"
                        src="/images/woman-shopping.webp"
                        alt="woman shopping"
                        loading="lazy"
                    />

                    <a
                        className="text-[10px] text-[#798291] dark:text-[#9ba6b8] text-center block"
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.vecteezy.com/free-png/online-shopping">
                        Online Shopping PNGs by Vecteezy
                    </a>
                </div>
            </div>

        </section>
    );
};

export default Hero;
