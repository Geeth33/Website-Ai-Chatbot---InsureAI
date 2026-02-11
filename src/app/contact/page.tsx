"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Bot, Info, Clock, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

function ContactFormContent() {
    const searchParams = useSearchParams();
    const initialPlan = searchParams.get("plan") || "General Inquiry";
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1500);
    };

    if (submitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-12 rounded-[2.5rem] border border-green-100 flex flex-col items-center text-center"
            >
                <div className="bg-green-100 p-6 rounded-full mb-6">
                    <CheckCircle2 className="w-12 h-12 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-primary mb-4">Request Sent!</h2>
                <p className="text-muted-foreground mb-8">
                    Thank you for choosing InsureAI. Our AI has already started processing your data.
                    A consultant will reach out within 15 minutes.
                </p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="btn-primary"
                >
                    Send Another Request
                </button>
            </motion.div>
        );
    }

    return (
        <div className="glass-card p-10 rounded-[2.5rem] border border-gray-100 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
                <Send className="w-32 h-32 text-primary rotate-12" />
            </div>

            <div className="relative z-10">
                <h2 className="text-2xl font-bold text-primary mb-8">Quick Quote Request</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
                            <input
                                required
                                type="text"
                                placeholder="Kasun de Silva"
                                className="w-full bg-muted border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-secondary/20 transition-all font-medium"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Vehicle Plate No</label>
                            <input
                                required
                                type="text"
                                placeholder="ABC-1234"
                                className="w-full bg-muted border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-secondary/20 transition-all font-medium"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Contact Phone</label>
                            <input
                                required
                                type="tel"
                                placeholder="+94 77 123 4567"
                                className="w-full bg-muted border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-secondary/20 transition-all font-medium"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Selected Plan</label>
                            <select
                                defaultValue={initialPlan}
                                className="w-full bg-muted border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-secondary/20 transition-all font-bold text-primary appearance-none"
                            >
                                <option value="basic">Basic Plan (LKR 45K)</option>
                                <option value="premium">Premium Plan (LKR 60K)</option>
                                <option value="elite">Elite Plan (LKR 75K)</option>
                                <option value="General Inquiry">General Inquiry</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Additional Details</label>
                        <textarea
                            rows={4}
                            placeholder="e.g. Any special cover needed or modifications to the vehicle..."
                            className="w-full bg-muted border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-secondary/20 transition-all font-medium resize-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full btn-primary py-5 text-lg flex items-center justify-center space-x-3 shadow-2xl shadow-primary/20"
                    >
                        {loading ? (
                            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                            <>
                                <Send className="w-5 h-5" />
                                <span>Submit Request</span>
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default function Contact() {
    return (
        <div className="pt-32 pb-24 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl lg:text-6xl font-extrabold text-primary mb-6"
                    >
                        Get in <span className="text-gradient">Touch</span>
                    </motion.h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Our AI-powered response team ensures you're never left waiting.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="glass-card p-8 rounded-3xl border border-gray-100 flex items-start space-x-5">
                            <div className="bg-primary/5 p-4 rounded-2xl">
                                <Mail className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-bold text-primary mb-1">Email Us</h3>
                                <p className="text-sm text-muted-foreground mb-1">support@insureai.lk</p>
                                <p className="text-xs font-medium text-secondary">Response in 10 mins</p>
                            </div>
                        </div>

                        <div className="glass-card p-8 rounded-3xl border border-gray-100 flex items-start space-x-5">
                            <div className="bg-primary/5 p-4 rounded-2xl">
                                <Phone className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-bold text-primary mb-1">Call Us</h3>
                                <p className="text-sm text-muted-foreground mb-1">+94 11 234 5678</p>
                                <p className="text-xs font-medium text-secondary">24/7 Hotline</p>
                            </div>
                        </div>

                        <div className="glass-card p-8 rounded-3xl border border-gray-100 flex items-start space-x-5">
                            <div className="bg-primary/5 p-4 rounded-2xl">
                                <MapPin className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-bold text-primary mb-1">Visit Colombo HQ</h3>
                                <p className="text-sm text-muted-foreground">Regus, WTC East Tower,<br />Level 34, Colombo 01</p>
                            </div>
                        </div>

                        <div className="bg-primary p-10 rounded-[2.5rem] text-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform">
                                <Bot className="w-32 h-32" />
                            </div>
                            <h2 className="text-2xl font-bold mb-4 relative z-10">AI Chat Takeover</h2>
                            <p className="text-white/70 text-sm mb-8 leading-relaxed relative z-10">
                                Skip the form entirely. Our AI can handle premium calculations, comparisons, and documentation instantly.
                            </p>
                            <button
                                onClick={() => (window as any).dispatchEvent(new CustomEvent("openChat"))}
                                className="w-full bg-white text-primary py-4 rounded-2xl font-bold hover:bg-gray-100 transition-colors relative z-10"
                            >
                                Launch Full Bot Chat
                            </button>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-2">
                        <Suspense fallback={<div className="h-[600px] glass-card animate-pulse rounded-[2.5rem]" />}>
                            <ContactFormContent />
                        </Suspense>
                    </div>
                </div>

                {/* Map Section */}
                <section className="mt-24">
                    <div className="glass-card rounded-[3rem] h-[450px] overflow-hidden border border-gray-100 shadow-2xl relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5966453621437!2d79.8415793740236!3d6.932943218342414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593d6719b5b3%3A0xf639dc21fdfbf367!2sWorld%20Trade%20Center%20Colombo!5e0!3m2!1sen!2slk!4v1715456381270!5m2!1sen!2slk"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="InsureAI Colombo HQ"
                            className="grayscale-0 hover:grayscale-0 transition-all duration-500 brightness-100"
                        ></iframe>
                    </div>
                </section>
            </div>
        </div>
    );
}
