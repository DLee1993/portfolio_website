"use client";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { motion } from "framer-motion";

export const FormDataSchema = z.object({
    name: z.string().min(1, "Your name is required"),
    company: z.string().min(1, "Company name is required"),
    email: z.string().min(1, "Email is required").email("Invalid email address"),
    message: z.string().min(1, "Message is required"),
});

type Inputs = z.infer<typeof FormDataSchema>;

const steps = [
    {
        id: "Step 1",
        name: "name",
        fields: ["name"],
    },
    {
        id: "Step 2",
        name: "email",
        fields: ["email"],
    },
    {
        id: "Step 3",
        name: "company",
        fields: ["company"],
    },
    {
        id: "Step 4",
        name: "message",
        fields: ["message"],
    },
];
const ContactForm = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [previousStep, setPreviousStep] = useState(0);
    const [currentStep, setCurrentStep] = useState(0);
    const [messageSuccess, setMessageSuccess] = useState(false);
    const [messageError, setMessageError] = useState(false);
    type FieldName = keyof Inputs;

    const {
        register,
        handleSubmit,
        trigger,
        reset,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: zodResolver(FormDataSchema),
    });

    const prev = () => {
        if (currentStep > 0) {
            setPreviousStep(currentStep);
            setCurrentStep((step) => step - 1);
        }
    };

    const next = async () => {
        const fields = steps[currentStep].fields;
        const output = await trigger(fields as FieldName[]);

        if (!output) return;

        if (currentStep === steps.length - 1) {
            await handleSubmit(processForm)();
        } else if (currentStep < steps.length - 1) {
            setPreviousStep(currentStep);
            setCurrentStep((step) => step + 1);
        }
    };
    const processForm: SubmitHandler<Inputs> = async (data) => {
        const userTemplate = {
            user_name: data.name,
            user_email: data.email,
            user_company: data.company,
            message: data.message,
        };

        try {
            await emailjs.send(
                `${process.env.NEXT_PUBLIC_SERVICE_KEY}`,
                "contact_form",
                userTemplate,
                {
                    publicKey: `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`,
                    limitRate: {
                        throttle: 14400000,
                    },
                }
            );
            setMessageSuccess(true);
            setCurrentStep(0);
            reset();
        } catch (err) {
            if (err instanceof EmailJSResponseStatus) {
                setMessageError(true);
                setCurrentStep(0);
                reset();
                return;
            }

            setMessageError(true);
            setCurrentStep(0);
            reset();
        }
    };

    return (
        <section id="contact" className="flex flex-col justify-center items-start">
            {messageSuccess ? (
                <section className="w-full flex flex-col justify-center items-center gap-10 my-16">
                    <article className="text-center">
                        <h3 className="text-lg font-bold">Message sent</h3>
                        <p className="text-sm">Please allow 24 hours for a response</p>
                    </article>
                </section>
            ) : messageError ? (
                <section className="w-full flex flex-col justify-center items-center gap-10 my-16">
                    <article className="text-center">
                        <h3 className="text-lg font-bold">Message unsuccesful</h3>
                        <p className="text-sm">Unfortunately the message could not be sent</p>
                    </article>
                    <button
                        className="min-w-24 py-2 px-4 rounded-md ring-[1px] ring-foreground25"
                        onClick={() => setMessageError(false)}
                    >
                        Try again
                    </button>
                </section>
            ) : (
                <section className="w-full">
                    <form className="mt-10 mb-5" onSubmit={handleSubmit(processForm)}>
                        <section className="w-full h-full border-y-[1px] border-foreground overflow-hidden">
                            {currentStep === 0 && (
                                <fieldset>
                                    <label htmlFor="name" className="sr-only">
                                        Enter your full name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        {...register("name")}
                                        autoComplete="given-name"
                                        placeholder={
                                            errors.name?.message
                                                ? errors.name?.message
                                                : "Please enter your full name"
                                        }
                                        className={`inline-block w-full min-h-16 md:min-h-20 lg:min-h-24 text-center px-1.5 bg-transparent text-foreground autofill:text-base ${
                                            errors.name?.message
                                                ? "placeholder:text-red-600"
                                                : "placeholder:text-foreground50"
                                        }`}
                                    />
                                </fieldset>
                            )}

                            {currentStep === 1 && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                >
                                    <fieldset>
                                        <label htmlFor="email" className="sr-only">
                                            Enter your email address
                                        </label>
                                        <input
                                            type="text"
                                            id="email"
                                            {...register("email")}
                                            autoComplete="email"
                                            autoFocus
                                            placeholder={
                                                errors.email?.message
                                                    ? errors.email?.message
                                                    : "Please enter your email address"
                                            }
                                            className={`block w-full min-h-16 md:min-h-20 lg:min-h-24 text-center px-1.5 bg-transparent text-foreground ${
                                                errors.email?.message
                                                    ? "placeholder:text-red-600"
                                                    : "placeholder:text-foreground50"
                                            }`}
                                        />
                                    </fieldset>
                                </motion.div>
                            )}

                            {currentStep === 2 && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                >
                                    <fieldset>
                                        <label htmlFor="company" className="sr-only">
                                            Enter your company name
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            {...register("company")}
                                            autoComplete="company"
                                            autoFocus
                                            placeholder={
                                                errors.company?.message
                                                    ? errors.company?.message
                                                    : "Please enter your company name"
                                            }
                                            className={`block w-full min-h-16 md:min-h-20 lg:min-h-24 text-center px-1.5 bg-transparent text-foreground ${
                                                errors.company?.message
                                                    ? "placeholder:text-red-600"
                                                    : "placeholder:text-foreground50"
                                            }`}
                                        />
                                    </fieldset>
                                </motion.div>
                            )}

                            {currentStep === 3 && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                >
                                    <fieldset>
                                        <label htmlFor="message" className="sr-only">
                                            Enter your message
                                        </label>
                                        <input
                                            type="text"
                                            id="message"
                                            {...register("message")}
                                            autoComplete="message"
                                            autoFocus
                                            placeholder={
                                                errors.message?.message
                                                    ? errors.message?.message
                                                    : "Please enter your message"
                                            }
                                            className={`block w-full min-h-16 md:min-h-20 lg:min-h-24 text-center px-1.5 bg-transparent text-foreground ${
                                                errors.message?.message
                                                    ? "placeholder:text-red-600"
                                                    : "placeholder:text-foreground50"
                                            }`}
                                        />
                                    </fieldset>
                                </motion.div>
                            )}
                        </section>
                    </form>
                    <nav aria-label="Progress" className="flex justify-start mb-5">
                        <ol role="list" className="w-fit flex gap-x-2">
                            {steps.map((step, index) => (
                                <li key={step.name}>
                                    {currentStep > index ? (
                                        <div
                                            className={`group flex flex-col w-4 h-1 rounded-md ${
                                                step.name !== errors
                                                    ? "bg-green-600"
                                                    : "bg-foreground"
                                            }`}
                                        ></div>
                                    ) : currentStep === index ? (
                                        <div
                                            className="flex flex-col w-4 h-1 rounded-md bg-foreground"
                                            aria-current="step"
                                        ></div>
                                    ) : (
                                        <div className="group flex flex-col w-4 h-1 rounded-md bg-foreground25"></div>
                                    )}
                                </li>
                            ))}
                        </ol>
                    </nav>
                    <section className="flex justify-end items-center gap-x-8">
                        {currentStep !== 0 && (
                            <button
                                type="button"
                                onClick={prev}
                                disabled={currentStep === 0}
                                className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-100 after:bg-foreground after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-right hover:after:scale-x-0"
                            >
                                back
                            </button>
                        )}

                        <button
                            type="button"
                            onClick={next}
                            disabled={currentStep === steps.length}
                            className="relative h-10 overflow-hidden rounded bg-foreground px-6 text-background transition-all duration-300 hover:bg-foreground hover:ring-2 hover:ring-foreground hover:ring-offset-2"
                        >
                            <span>{currentStep !== steps.length - 1 ? "next step" : "send"}</span>
                        </button>
                    </section>
                </section>
            )}
        </section>
    );
};
export default ContactForm;

{
    /*
  <button  class="relative h-12 overflow-hidden rounded bg-neutral-950 px-5 py-2.5 text-white transition-all duration-300 hover:bg-neutral-800 hover:ring-2 hover:ring-neutral-800 hover:ring-offset-2"><span class="relative">Hover me</span></button> */
}
