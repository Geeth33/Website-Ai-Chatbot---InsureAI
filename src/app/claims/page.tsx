"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageSquare, ShieldCheck, Zap, CreditCard, ChevronDown, Bot } from "lucide-react";
import { cn } from "@/lib/utils";

const claimSteps = [
    {
        title: "Start Chat",
        desc: "Open the AI assistant and say 'File a claim'.",
        customIcon: MessageSquare,
    },
    {
        title: "AI Analysis",
        desc: "Upload photos. Our AI assesses damage in seconds.",
        customIcon: Bot,
    },
    {
        title: "Quick Approval",
        desc: "AI verifies details and issues instant approval.",
        customIcon: ShieldCheck,
    },
    {
        title: "24h Payout",
        desc: "Funds transferred to your bank within 24 hours.",
        customIcon: Zap,
    },
];

const faqs = [
    {
        q: "How does the AI verify my claim?",
        a: "Our AI uses computer vision to analyze photos of the damage, cross-referencing with part costs and historical data to ensure accuracy and prevent fraud instantly.",
    },
    {
        q: "Is flood damage covered in the Basic plan?",
        a: "Yes! All InsureAI plans include basic flood and natural disaster coverage as standard for all Sri Lankan drivers.",
    },
    {
        q: "Can I cancel my policy anytime?",
        a: "Absolutely. Our AI will calculate your pro-rata refund instantly and process the cancellation without any paperwork.",
    },
    {
        q: "Do you offer discounts for Electric Vehicles (EVs)?",
        a: "Yes, our Elite plan offers specialized discounts up to 15% for EVs, including dedicated battery health monitoring coverage.",
    },
    {
        q: "How do I update my vehicle details?",
        a: "Just tell the AI assistant 'Update my vehicle' and follow the prompts. Your premium will be adjusted in real-time.",
    },
    {
        q: "What is a No-Claim Bonus (NCB)?",
        a: "It's a discount on your renewal premium if you haven't made a claim. Our Premium plan guarantees a 20% NCB regardless of minor claims.",
    },
    {
        q: "Is roadside assistance available island-wide?",
        a: "Yes, we have 24/7 recovery partners across all districts in Sri Lanka. The AI can track your precise location for faster help.",
    },
    {
        q: "Are passengers covered in case of accidents?",
        a: "Yes, our plans include Personal Accident (PA) cover for drivers and passengers, with 'Unlimited' cover on the Elite plan.",
    },
    {
        q: "How fast is the 'Instant' quote?",
        a: "On average, our users get a bindable quote in under 90 seconds after starting their chat with the AI.",
    },
    {
        q: "What documents do I need for a claim?",
        a: "Just your digital policy ID and clear photos of the incident. The AI handles the rest - no physical forms required.",
    },
];

export default function ClaimsFAQ() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <div className="pt-32 pb-24 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl lg:text-6xl font-extrabold text-primary mb-6"
                    >
                        Claims & <span className="text-gradient">Support</span>
                    </motion.h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Experience the world's fastest claims process. Powered by AI, finalized by humans.
                    </p>
                </div>

                {/* Claims Stepper */}
                <section className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl font-bold text-primary">How to File a Claim</h2>
                    </div>
                    <div className="relative">
                        {/* Connection Line */}
                        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-100 -translate-y-1/2 z-0" />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                            {claimSteps.map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col items-center text-center group hover:shadow-xl transition-shadow"
                                >
                                    <div className="w-16 h-16 bg-muted rounded-2xl mb-6 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                        <step.customIcon className="w-8 h-8" />
                                    </div>
                                    <div className="bg-secondary text-white text-[10px] font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
                                        Step {idx + 1}
                                    </div>
                                    <h3 className="text-lg font-bold text-primary mb-2">{step.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-12 flex justify-center">
                        <button
                            onClick={() => (window as any).dispatchEvent(new CustomEvent("openChat"))}
                            className="btn-secondary px-12 py-4 flex items-center space-x-3 shadow-2xl shadow-secondary/40"
                        >
                            <Bot className="w-6 h-6" />
                            <span className="text-lg">Start AI Claim Now</span>
                        </button>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-primary mb-2">Frequently Asked Questions</h2>
                        <p className="text-muted-foreground italic">Our AI helps answer your most common queries instantly.</p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className={cn(
                                    "glass-card rounded-3xl overflow-hidden transition-all duration-300",
                                    openFaq === idx ? "border-primary/10 shadow-lg ring-1 ring-primary/5" : "border-gray-100"
                                )}
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className="font-bold text-primary">{faq.q}</span>
                                    <div className={cn(
                                        "p-2 rounded-xl transition-transform",
                                        openFaq === idx ? "bg-primary text-white rotate-180" : "bg-muted text-primary"
                                    )}>
                                        <ChevronDown className="w-4 h-4" />
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {openFaq === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-6 pt-0 text-muted-foreground text-sm leading-relaxed border-t border-gray-50 bg-gray-50/30">
                                                {faq.a}
                                                <div className="mt-4 flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold text-secondary">
                                                    <Bot className="w-3 h-3" />
                                                    <span>AI Generated Answer</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 glass-card p-10 rounded-3xl text-center bg-muted/30 border border-gray-100">
                        <h3 className="text-xl font-bold text-primary mb-4">Still have questions?</h3>
                        <p className="text-muted-foreground text-sm mb-8">Our AI assistant can handle specific policy details and complex edge cases.</p>
                        <button
                            onClick={() => (window as any).dispatchEvent(new CustomEvent("openChat"))}
                            className="btn-primary"
                        >
                            Chat with InsureAI
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}
