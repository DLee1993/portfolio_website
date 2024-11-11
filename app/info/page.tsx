import Link from "next/link";
import { technicalSkills } from "@/data/portfolioData";
import ContactBar from "@/components/ContactBar";
import { FaArrowRight } from "react-icons/fa";

const page = () => {
    return (
        <section className="customWidth flex flex-col space-y-16 mb-2">
            <section className="my-6">
                <h1 className="text-2xl font-semibold border-b-[1px] border-foreground25 py-6">
                    Change is inevitable, Growth is optional.
                </h1>
                <aside className="mt-6 flex flex-col space-y-4">
                    <p>
                        Hello, I&apos;m David, a detail-oriented and passionate developer who
                        produces responsive, modern web applications. I&apos;m searching for a
                        position that will challenge me and allow me to contribute to exciting
                        projects while also advancing my frontend development skills.
                    </p>
                    <p>
                        I&apos;ve spent the previous year improving my expertise and comprehension
                        of the essential technologies in web development through numerous courses
                        and projects. Having a better understanding of various technologies has not
                        only given me the courage to attempt new ones to address problems, but it
                        has also helped me integrate and use my present tech stack more effectively.
                        I now build with React, Next.js, Tailwind CSS, Shadcn UI, and Typescript.
                    </p>
                    <p>
                        As of now, I am simply developing, whether it is typesafe components or full
                        web applications. My current focus is on accessibility; I want everyone to
                        have the same experience while visiting my websites.
                    </p>
                    <p>
                        When I&apos;m not at the keyboard, I train at a kickboxing academy, which pushes
                        me beyond my current physical limitations.
                    </p>
                </aside>
            </section>
            <section>
                <h2 className="text-lg font-semibold">Technical competence</h2>
                <ul className="mt-6">
                    {technicalSkills.map((tech, index) => (
                        <li key={index} className="relative py-2">
                            <h3 className="font-semibold">{tech.skill}</h3>
                            <p className="text-foreground75 text-sm">{tech.description}</p>
                        </li>
                    ))}
                </ul>
                <p className="flex gap-2 justify-start items-center my-5">
                    <FaArrowRight size="0.75rem" />
                    Continuously exploring new fields and learning...
                </p>
            </section>
            <section>
                <h2 className="text-lg font-semibold">Personal Interests</h2>
                <ul className="mt-6">
                    <li className="py-2">
                        <h3 className="font-semibold mb-2">Kickboxing</h3>
                        <p className="text-foreground75">
                            Around this time last year, I decided to better my physical and mental
                            health. I started the same way everyone else does: at the gym. However,
                            I quickly felt a loss of drive due to the repetitive nature of my
                            activities. So I decided to explore alternate fitness choices.
                            That&apos;s when I discovered Paragon Kickboxing Academy, which offered
                            a unique approach to training while teaching a combat sport. I accepted
                            the offer of a two-week trial and never looked back. I&apos;m now
                            working on getting my weight under control in order to compete in 2025.
                        </p>
                    </li>
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
            <ContactBar />
        </section>
    );
};
export default page;
