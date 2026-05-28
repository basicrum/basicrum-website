"use client";

import React from "react";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

const stops = [
    { color: "#ff004d", label: "Failing" },
    { color: "#ffa300", label: "Improving" },
    { color: "#008751", label: "Passing" },
];

export const TeaserSections = () => {
    return (
        <>
            <section className="min-h-screen flex items-center justify-center px-6">
                <motion.h2
                    className="text-6xl md:text-9xl font-bold text-white text-center leading-none tracking-tighter"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.5 }}
                    transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    Still not<br />convinced?
                </motion.h2>
            </section>
            <section className="min-h-screen flex flex-col items-center justify-center px-6 gap-20">
                <motion.div
                    className="text-center space-y-5"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.4 }}
                    transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
                        How about we take<br />you on a journey.
                    </h2>
                    <p className="text-xl text-white/40">
                        Through the eyes of your users.
                    </p>
                </motion.div>

                <div className="flex items-center gap-6 md:gap-10">
                    {stops.map((stop, i) => (
                        <React.Fragment key={stop.color}>
                            <motion.div
                                className="flex flex-col items-center gap-4"
                                initial={{ opacity: 0, scale: 0.4 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: 0.2 + i * 0.2,
                                    duration: 0.7,
                                    type: "spring",
                                    bounce: 0.35,
                                }}
                            >
                                <div
                                    className="w-20 h-20 md:w-28 md:h-28 rounded-full"
                                    style={{
                                        backgroundColor: stop.color,
                                        boxShadow: `0 0 48px ${stop.color}66`,
                                    }}
                                />
                                <span className="text-white/40 text-sm tracking-wide">
                                    {stop.label}
                                </span>
                            </motion.div>
                            {i < stops.length - 1 && (
                                <motion.div
                                    className="self-start mt-8 md:mt-11"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + i * 0.2, duration: 0.5 }}
                                >
                                    <ChevronRight className="w-6 h-6 text-white/20" />
                                </motion.div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
                <motion.div
                    className="flex flex-col items-center gap-3 text-white/25"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    <span className="text-xs uppercase tracking-widest">Scroll to begin</span>
                    <motion.div
                        className="w-px h-10 bg-white/20 origin-top"
                        animate={{ scaleY: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    />
                </motion.div>
            </section>
        </>
    );
};
