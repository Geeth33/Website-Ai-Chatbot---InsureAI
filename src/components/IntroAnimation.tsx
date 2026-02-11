"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function IntroAnimation() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{
                opacity: 0,
                y: -100,
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
            }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-[#0B0F1A]"
        >
            <div className="relative flex flex-col items-center">
                {/* Background Glow */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1.2, opacity: 0.15 }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-secondary blur-[100px] rounded-full"
                />

                {/* Shield Icon Animation */}
                <motion.div
                    initial={{ scale: 0, rotate: -45, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    transition={{
                        duration: 1,
                        ease: [0.34, 1.56, 0.64, 1],
                        delay: 0.1
                    }}
                    className="relative z-10 mb-8"
                >
                    <div className="p-6 rounded-3xl bg-gradient-to-br from-secondary/20 to-secondary/5 border border-secondary/20 shadow-[0_0_50px_rgba(168,85,247,0.2)]">
                        <Shield className="w-16 h-16 text-secondary" strokeWidth={1.5} />
                    </div>
                </motion.div>

                {/* Text Animation */}
                <div className="overflow-hidden flex flex-col items-center">
                    <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: [0.33, 1, 0.68, 1],
                            delay: 0.5
                        }}
                        className="text-4xl md:text-5xl font-bold text-white tracking-tighter"
                    >
                        InsureAI<span className="text-secondary">.</span>
                    </motion.h1>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                            delay: 1
                        }}
                        className="h-[1px] w-12 bg-secondary/50 mt-4 origin-center"
                    />

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        transition={{ delay: 1.2, duration: 1 }}
                        className="text-xs uppercase tracking-[0.3em] text-white/70 mt-4"
                    >
                        Smart Security for Sri Lanka
                    </motion.p>
                </div>
            </div>
        </motion.div>
    );
}
