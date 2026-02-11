"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import IntroAnimation from "./IntroAnimation";

export default function IntroWrapper({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const hasSeenIntro = sessionStorage.getItem("introShown");

        if (hasSeenIntro) {
            setIsLoading(false);
            return;
        }

        const timer = setTimeout(() => {
            setIsLoading(false);
            sessionStorage.setItem("introShown", "true");
        }, 3000); // 3 seconds intro

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading ? (
                <IntroAnimation key="intro" />
            ) : (
                <div key="content">
                    {children}
                </div>
            )}
        </AnimatePresence>
    );
}
