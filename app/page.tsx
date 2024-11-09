"use client";

import Link from "next/link";
import Image from "next/image";
import AvailableToWork from "@/components/AvailableToWork";
import SocialLinks from "@/components/SocialLinks";
import { openSource, projects } from "@/data/portfolioData";
import CustomBtn from "@/components/CustomBtn";
import Arrow from "@/components/Arrow";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";

const motionElement = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.3,
            ease: "anticipate",
        },
    },
};

export default function Home() {
    return (
        <section className="flex flex-col space-y-16 mb-16 lg:mb-20">
            <section className="customWidth border-b border-foreground25">
                <AvailableToWork />
                <h1 className="text-heading font-semibold">Helô, I&apos;m David.</h1>
                <p>A Frontend developer that creates user-friendly experiences.</p>
                <p className="mt-9 leading-[179%]">
                    I enjoy programming; finding a project to challenge my present way of thinking
                    allows me to grow and develop more effectively. My current obsession is
                    accessibility; I want everyone to have a consistent experience while visiting my
                    websites.
                    <br />
                    <br />
                    Welcome to my digital personality.
                </p>
                <section className="w-fit my-12 flex justify-center items-center gap-2">
                    <CustomBtn href="/contact" text="Let's talk" target={false} />
                    <SocialLinks />
                </section>
            </section>
            <section>
                <aside className="customWidth">
                    <h2 className="text-subHeading font-semibold">Explore my work</h2>
                    <p>
                        Transforming the ordinary into the extraordinary, one line of code at a
                        time.
                    </p>
                </aside>
                <section className="flex flex-col gap-20 w-full max-w-4xl mx-auto my-16 lg:my-20">
                    {projects.map((project, index) => (
                        <article key={index} className="px-2">
                            <figure
                                className={`flex ${
                                    index / 2 == 0
                                        ? "flex-col md:flex-row"
                                        : "flex-col md:flex-row-reverse"
                                } justify-between items-center gap-7 lg:gap-10 overflow-hidden`}
                            >
                                <motion.div
                                    initial={motionElement.hidden}
                                    whileInView={motionElement.show}
                                    viewport={{ once: true, amount: 0.1 }}
                                >
                                    <Image
                                        src={project.screenshot}
                                        alt="screenshot of project"
                                        width={1000}
                                        height={1000}
                                        className="w-[385px] h-auto"
                                    />
                                </motion.div>

                                <motion.figcaption
                                    initial={motionElement.hidden}
                                    whileInView={motionElement.show}
                                    viewport={{ once: true, amount: 0.3 }}
                                    className={`w-full max-w-[385px] md:max-w-none flex-1 border-b-[1px] md:border-b-0 ${
                                        index / 2 == 0 ? "md:border-l-[1px]" : "md:border-r-[1px]"
                                    } border-foreground25 md:px-4 pb-10 md:pb-0`}
                                >
                                    <h2 className="text-lg font-bold">{project.title}</h2>
                                    <p className="mt-4 mb-7 md:mt-6 md:mb-10">
                                        {project.description}
                                    </p>
                                    <aside className="space-x-4">
                                        <CustomBtn
                                            href={project.liveSite}
                                            text="visit site"
                                            target={true}
                                        />
                                        <Link
                                            href={project.sourceCode}
                                            target="_blank"
                                            className="relative after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-full after:origin-bottom-left after:scale-x-100 after:bg-foreground after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-right hover:after:scale-x-0"
                                        >
                                            see the code
                                        </Link>
                                    </aside>
                                </motion.figcaption>
                            </figure>
                        </article>
                    ))}
                </section>
            </section>
            <section className="customWidth">
                <aside>
                    <h2 className="text-subHeading font-semibold">Open source contributions</h2>
                    <p>I have curated a list of projects I have recently contributed to.</p>
                </aside>
                <ul className="mt-12">
                    {openSource.map((source, index) => (
                        <li key={index} className="relative group">
                            <Link
                                href={source.link}
                                className="text-foreground hover:bg-foreground4 border-b-[1px] border-foreground25 py-4 px-2 flex justify-between items-center transition-all duration-200"
                            >
                                <article className="w-11/12">
                                    <h3 className="font-semibold">{source.title}</h3>
                                    <p className="text-foreground75 text-sm">
                                        {source.description}
                                    </p>
                                </article>
                                <Arrow />
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
            <section className="customWidth">
                <Contact />
            </section>
        </section>
    );
}
