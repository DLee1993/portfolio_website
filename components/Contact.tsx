"use client";

import { usePathname } from "next/navigation";
import AvailableToWork from "@/components/AvailableToWork";
import CustomBtn from "./CustomBtn";
import SocialLinks from "./SocialLinks";
import ContactForm from "./ContactForm";

const Contact = () => {
    const path = usePathname();
    return (
        <section className={path === "/contact" ? "customWidth" : ""}>
            <aside className="flex justify-between items-center border-b border-foreground25">
                <h2 className="text-subHeading font-semibold">Let&apos;s connect</h2>
                <AvailableToWork />
            </aside>
            <p className="mt-10">
                Thanks for checking out my portfolio. If you&apos;d like to get in touch, you can
                reach me using the following methods.
            </p>
            {path === "/contact" && <ContactForm />}
            <section className="w-fit my-12 flex justify-center items-center gap-2">
                {path !== "/contact" && (
                    <CustomBtn href="/contact" text="Let's talk" target={false} />
                )}
                <SocialLinks />
            </section>
        </section>
    );
};
export default Contact;
