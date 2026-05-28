"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { RedSection } from "./red-section";
import { YellowSection } from "./yellow-section";
import { GreenSection } from "./green-section";
import { WhiteSection } from "./white-section";

const DEFAULT_BG = "#09090b";

// Extend each layer 12vh above the viewport so the slant notch is above
// the visible area when the layer is fully in view (y=0), preventing bleed-through.
// 10.8% of 112vh ≈ 12.1vh, which lands just at the viewport top edge.
const SLANT_CLIP = "polygon(0 10.8%, 100% 0%, 100% 100%, 0 100%)";

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
            <motion.div aria-hidden className="fixed inset-x-0 bottom-0" style={{ backgroundColor: "#ff004d", y: redY, zIndex: -14, top: "-12vh", clipPath: SLANT_CLIP }} />
            <motion.div aria-hidden className="fixed inset-x-0 bottom-0" style={{ backgroundColor: "#ffa300", y: yellowY, zIndex: -13, top: "-12vh", clipPath: SLANT_CLIP }} />
            <motion.div aria-hidden className="fixed inset-x-0 bottom-0" style={{ backgroundColor: "#008751", y: greenY, zIndex: -12, top: "-12vh", clipPath: SLANT_CLIP }} />
            <motion.div aria-hidden className="fixed inset-x-0 bottom-0" style={{ backgroundColor: DEFAULT_BG, y: whiteY, zIndex: -11, top: "-12vh", clipPath: SLANT_CLIP }} />
            <div ref={redRef}><RedSection /></div>
            <div ref={yellowRef}><YellowSection /></div>
            <div ref={greenRef}><GreenSection /></div>
            <div ref={whiteRef}><WhiteSection /></div>
        </>
    );
};
