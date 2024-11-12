"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { openSource, projects } from "@/data/portfolioData";
import AvailableToWork from "@/components/AvailableToWork";
import ContactBar from "@/components/ContactBar";
import { container, item } from "@/lib/framerMotionVariants";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
    return (
        <motion.section
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col mb-6"
        >
            <motion.div variants={item} className="customWidth flex justify-end my-6">
                <AvailableToWork />
            </motion.div>
            <section className="customWidth">
                <motion.h1 variants={item} className="text-2xl font-semibold">
                    Helô, I&apos;m David.
                </motion.h1>
                <motion.p variants={item} className="mt-2 text-[15px]">
                    I specialise in frontend development using React and Next.js, and I am
                    passionate about building dynamic and responsive web applications. My current
                    interest is accessibility; I want everyone to have the same experience while
                    visiting my websites.
                    <br />
                    <br />
                    Welcome to my digital personality.
                </motion.p>
                <motion.div variants={item} className="my-12">
                    <ContactBar />
                </motion.div>
            </section>
            <section className="customWidth">
                <aside>
                    <motion.h2 variants={item} className="text-lg font-semibold">
                        Explore my work
                    </motion.h2>
                    <motion.p variants={item}>
                        Transforming the ordinary into the extraordinary, one line of code at a
                        time.
                    </motion.p>
                </aside>
                <ul className="flex flex-col space-y-20 mt-12">
                    {projects.map((project, index) => (
                        <motion.li
                            key={`project-${index + 1}`}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.25 }}
                        >
                            <Link
                                href={project.liveSite}
                                target="_blank"
                                className="block rounded-xl p-4 hover:bg-foreground4 transition-all"
                            >
                                <figure className="relative w-full max-h-80 grid place-content-center overflow-hidden rounded-xl">
                                    <Image
                                        src={project.screenshot}
                                        alt="project screenshot"
                                        width={1000}
                                        height={1000}
                                        className="aspect-auto"
                                    />
                                </figure>
                                <article className="flex flex-col space-y-2 mt-2">
                                    <h2 className="font-semibold">{project.title}</h2>
                                    <p>{project.description}</p>
                                </article>
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </section>
            <section className="customWidth my-16 lg:my-20">
                <aside>
                    <h2 className="text-lg font-semibold">Open source contributions</h2>
                    <p>I have curated a list of projects I have recently contributed to.</p>
                </aside>
                <ul className="mt-8">
                    {openSource.map((source, index) => (
                        <li
                            key={index}
                            className="relative group border-b-[1px] border-foreground25 last-of-type:border-none"
                        >
                            <Link
                                href={source.link}
                                target="_blank"
                                className="group text-foreground hover:bg-foreground4 py-4 px-2 flex justify-between items-center transition-all duration-200"
                            >
                                <article className="w-11/12">
                                    <h3 className="font-semibold">{source.title}</h3>
                                    <p className="text-foreground75 text-sm">
                                        {source.description}
                                    </p>
                                </article>
                                <FaArrowRight
                                    size=".75rem"
                                    className="hidden min-[365px]:block -rotate-45 transition-all duration-300 group-hover:rotate-0"
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
            <section className="customWidth">
                <ContactBar />
            </section>
        </motion.section>
    );
}
