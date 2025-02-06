const Hero = () => {
    return (
        <section className="flex items-center justify-center md:flex-row gap-4 min-h-[90vh] flex-col overflow-hidden">
            <div className="md:w-1/2">
                <h1 className="text-3xl font-semibold">
                    Discover
                    <br />
                    <span className="text-5xl font-semibold text-green-400">
                        The Best Deals
                    </span>
                    <br />
                    On Reach Dog Clone
                </h1>
            </div>

            <div className=" md:w-1/2">
                <div className="flex flex-col gap-0 mx-auto">
                    <img
                        className="object-contain w-full max-h-[450px] aspect-square"
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
