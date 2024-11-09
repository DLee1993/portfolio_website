import Contact from "@/components/Contact";
import { technicalSkills } from "@/data/portfolioData";
import Link from "next/link";

const page = () => {
    return (
        <section className="customWidth flex flex-col space-y-16 mb-16 lg:mb-20">
            <section>
                <h1 className="text-heading font-semibold">
                    Change is inevitable, Growth is optional.
                </h1>
                <aside className="my-10 flex flex-col space-y-4">
                    <p>
                        Hello, I&apos;m David, a detail-oriented and dedicated developer who creates
                        responsive, modern web apps. I&apos;m looking for a career that will
                        challenge me and allow me to contribute to exciting projects while also
                        supporting my growth in frontend development.
                    </p>
                    <p>
                        Over the last year, I&apos;ve been expanding my knowledge and understanding
                        of the key technologies in web development through various courses and
                        projects. Having a deeper understanding of the these technologies has not
                        only given me the confidence to try new technologies to solve a problem, it
                        has helped me to integrate and use my current tech stack more efficiently.
                        The current technologies I use to build are React, Next.js, Tailwind CSS,
                        Shadcn UI, and Typescript.
                    </p>
                    <p>
                        As of today, I am simply developing, whether it is typesafe components or
                        entire web applications. My current focus is on accessibility; I want
                        everyone to have a consistent experience while visiting my websites.
                    </p>
                    <p>
                        When I&apos;m away from the keyboard I am a part of a kickboxing academy
                        that pushes me beyond my current physical limits.
                    </p>
                </aside>
            </section>
            <section>
                <h2 className="text-lg font-semibold">Technical competence</h2>
                <ul className="mt-10">
                    {technicalSkills.map((tech, index) => (
                        <li
                            key={index}
                            className="relative text-foreground hover:bg-foreground4 border-b-[1px] border-foreground25 last-of-type:border-none py-4 px-2 flex justify-between items-center transition-all duration-200"
                        >
                            <h3 className="font-semibold">{tech.skill}</h3>
                            <p className="text-foreground75 text-sm">{tech.description}</p>
                        </li>
                    ))}
                </ul>
            </section>
            <section className="grid place-content-center">
                <Link
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    locale={false}
                    download
                    className="flex items-center justify-center h-10 rounded bg-foreground px-6 text-background transition-all duration-300 hover:bg-foreground hover:ring-2 hover:ring-foreground hover:ring-offset-2 text-sm"
                >
                    Download Resume
                </Link>
            </section>
            <section>
                <Contact />
            </section>
        </section>
    );
};
export default page;
