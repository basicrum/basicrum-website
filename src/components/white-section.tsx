"use client";

import React from "react";
import { motion } from "motion/react";
import { ChevronRight, ArrowRight } from "lucide-react";
import { EmailSignupForm } from "@/components/email-signup-form";

const stops = [
    { origin: "#ff004d", label: "Failing" },
    { origin: "#ffa300", label: "Improving" },
    { origin: "#008751", label: "Passing" },
];

const GREEN = "#008751";

export const WhiteSection = () => {
    return (
        <section data-bg="white" className="min-h-screen flex flex-col items-center justify-center px-6 gap-16 text-white">
            <motion.p
                className="text-sm font-semibold uppercase tracking-widest text-white/40"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.5 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
                You&apos;ve seen the journey.
            </motion.p>

            <div className="flex items-center gap-6 md:gap-10 text-white/40">
                {stops.map((stop, i) => (
                    <React.Fragment key={stop.label}>
                        <motion.div
                            className="flex flex-col items-center gap-4"
                            initial={{ opacity: 0, scale: 0.4 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ amount: 0.3 }}
                            transition={{
                                delay: 0.1 + i * 0.15,
                                duration: 0.6,
                                type: "spring",
                                bounce: 0.35,
                            }}
                        >
                            <motion.div
                                className="w-20 h-20 md:w-28 md:h-28 rounded-full"
                                initial={{ backgroundColor: stop.origin }}
                                whileInView={{ backgroundColor: GREEN }}
                                viewport={{ amount: 0.3 }}
                                transition={{ delay: 0.4 + i * 0.15, duration: 5, ease: [0.25, 0.46, 0.45, 0.94] }}
                                style={{ boxShadow: `0 0 48px ${GREEN}55` }}
                            />
                            <span className="text-sm tracking-wide line-through">
                                {stop.label}
                            </span>
                        </motion.div>
                        {i < stops.length - 1 && (
                            <motion.div
                                className="self-start mt-8 md:mt-11"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ amount: 0.3 }}
                                transition={{ delay: 0.3 + i * 0.15, duration: 0.4 }}
                            >
                                <ChevronRight className="w-6 h-6" />
                            </motion.div>
                        )}
                    </React.Fragment>
                ))}
            </div>

            <motion.div
                className="flex flex-col items-center gap-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.4 }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
                <h2 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                    <span style={{ textShadow: `0 0 24px ${GREEN}, 0 0 48px ${GREEN}80` }}>Light</span> at the end<br />of the tunnel.
                </h2>
                <p className="text-lg max-w-md text-white/50">
                    Most websites never find out why they&apos;re slow.<br />Yours doesn&apos;t have to be one of them.
                </p>
                {/* <motion.a
                    href="https://demo.playground.basicrum.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold bg-white text-black"
                    whileHover={{ opacity: 0.8 }}
                >
                    Start monitoring for free
                    <ArrowRight className="w-4 h-4" />
                </motion.a> */}
                <EmailSignupForm size="lg"/>
            </motion.div>
        </section>
    );
};
