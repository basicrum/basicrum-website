"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { RedSection } from "./red-section";
import { YellowSection } from "./yellow-section";
import { GreenSection } from "./green-section";
import { WhiteSection } from "./white-section";

const DEFAULT_BG = "#09090b";

function useSlideUp(ref: React.RefObject<HTMLDivElement | null>) {
    const { scrollYProgress } = useScroll({
        target: ref,
        // start sliding when section top hits viewport midpoint (50% visible),
        // finish when section top is 20% from the top (80% visible)
        offset: ["start 0.5", "start 0.2"],
    });
    return useTransform(scrollYProgress, [0, 1], ["100%", "0%"], { clamp: true });
}

export const ColorSections = () => {
    const redRef = useRef<HTMLDivElement>(null);
    const yellowRef = useRef<HTMLDivElement>(null);
    const greenRef = useRef<HTMLDivElement>(null);
    const whiteRef = useRef<HTMLDivElement>(null);

    const redY = useSlideUp(redRef);
    const yellowY = useSlideUp(yellowRef);
    const greenY = useSlideUp(greenRef);
    const whiteY = useSlideUp(whiteRef);

    return (
        <>
            <div aria-hidden className="fixed inset-0" style={{ backgroundColor: DEFAULT_BG, zIndex: -15 }} />
            <motion.div aria-hidden className="fixed inset-0" style={{ backgroundColor: "#ff004d", y: redY, zIndex: -14 }} />
            <motion.div aria-hidden className="fixed inset-0" style={{ backgroundColor: "#ffa300", y: yellowY, zIndex: -13 }} />
            <motion.div aria-hidden className="fixed inset-0" style={{ backgroundColor: "#008751", y: greenY, zIndex: -12 }} />
            <motion.div aria-hidden className="fixed inset-0" style={{ backgroundColor: DEFAULT_BG, y: whiteY, zIndex: -11 }} />
            <div ref={redRef}><RedSection /></div>
            <div ref={yellowRef}><YellowSection /></div>
            <div ref={greenRef}><GreenSection /></div>
            <div ref={whiteRef}><WhiteSection /></div>
        </>
    );
};
