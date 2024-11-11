import AvailableToWork from "@/components/AvailableToWork";
import ContactBar from "@/components/ContactBar";
import ContactForm from "@/components/ContactForm";

const page = () => {
    return (
        <section className="customWidth flex flex-col space-y-10 my-6">
            <aside className="flex flex-col-reverse min-[540px]:flex-row justify-between items-start sm:items-center gap-4 border-b border-foreground25 pb-6">
                <h2 className="text-2xl font-semibold">Let&apos;s connect</h2>
                <AvailableToWork />
            </aside>
            <p>
                Thanks for checking out my portfolio. I&apos;m currently looking to join a
                cross-functional team that values improving people&apos;s lives through accessible
                applications. If you&apos;d like to reach out and chat, you can reach me using the
                following methods.
            </p>
            <ContactForm />
            <ContactBar />
        </section>
    );
};
export default page;
