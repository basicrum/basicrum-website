"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { RedSection } from "./red-section";
import { YellowSection } from "./yellow-section";
import { GreenSection } from "./green-section";
import { WhiteSection } from "./white-section";

const BG_MAP: Record<string, string> = {
    red: "#ff004d",
    yellow: "#ffa300",
    green: "#008751",
    white: "#ffffff",
};

const DEFAULT_BG = "#09090b";
const THRESHOLDS = Array.from({ length: 21 }, (_, i) => i * 0.05);

export const ColorSections = () => {
    const [bg, setBg] = useState(DEFAULT_BG);
    const ratiosRef = useRef<Record<string, number>>({});

    const handleEntries = useCallback((entries: IntersectionObserverEntry[]) => {
        for (const entry of entries) {
            const key = (entry.target as HTMLElement).dataset.bg;
            if (key) ratiosRef.current[key] = entry.intersectionRatio;
        }

        let maxRatio = 0;
        let winner: string | null = null;
        for (const [key, ratio] of Object.entries(ratiosRef.current)) {
            if (ratio > maxRatio) {
                maxRatio = ratio;
                winner = key;
            }
        }

        setBg(winner ? BG_MAP[winner] : DEFAULT_BG);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(handleEntries, {
            threshold: THRESHOLDS,
        });
        document.querySelectorAll("[data-bg]").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [handleEntries]);

    return (
        <>
            <div
                aria-hidden
                className="fixed inset-0 -z-10 transition-colors duration-700 ease-in-out"
                style={{ backgroundColor: bg }}
            />
            <RedSection />
            <YellowSection />
            <GreenSection />
            <WhiteSection />
        </>
    );
};
