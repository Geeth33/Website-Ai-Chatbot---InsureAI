"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, Clock, ArrowRight, Bot, Cpu, Sparkles, Activity } from "lucide-react";
import PackageCard from "@/components/PackageCard";

const stats = [
    { label: "AI Approval", value: "99%", icon: Cpu },
    { label: "Protected", value: "50K+", icon: ShieldCheck },
    { label: "Claims Speed", value: "7s", icon: Zap },
];

const packages = [
    {
        name: "Basic",
        price: "45K",
        features: ["1M Liability", "Fire & Flood Coverage", "Basic Roadside Assistance"],
        href: "/packages",
    },
    {
        name: "Premium",
        price: "60K",
        features: ["5M Comprehensive", "24/7 Roadside Assist", "20% No-Claim Bonus", "Extended Theft Protection"],
        recommended: true,
        href: "/packages",
    },
    {
        name: "Elite",
        price: "75K",
        features: ["Unlimited PA Coverage", "EV Specific Discounts", "Taxi Reimbursement", "Priority AI Support"],
        href: "/packages",
    },
];

const howItWorks = [
    {
        title: "Chat with AI",
        desc: "Describe your needs to our AI assistant in plain English or Sinhala.",
        icon: Bot,
    },
    {
        title: "Get Instant Quote",
        desc: "Our AI analyzes 100+ data points to give you the best rate in seconds.",
        icon: Sparkles,
    },
    {
        title: "Insured in Minutes",
        desc: "Choose your plan, pay locally, and get your digital policy instantly.",
        icon: Clock,
    },
];

export default function Home() {
    return (
        <div className="flex flex-col overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center pt-16 pb-24 lg:pt-32 lg:pb-40 hero-gradient">
                {/* Animated Background Orbs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{
                            x: [0, 60, 0],
                            y: [0, -30, 0],
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute top-1/4 -left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-full blur-[60px] will-change-transform"
                    />
                    <motion.div
                        animate={{
                            x: [60, 0, 60],
                            y: [-30, 0, -30],
                        }}
                        transition={{
                            duration: 18,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-secondary/10 via-accent/10 to-primary/10 rounded-full blur-[80px] will-change-transform"
                    />
                </div>

                {/* Floating Drifting Glass Shapes */}
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-[10%] w-24 h-24 glass-morphic rounded-3xl hidden lg:block will-change-transform"
                />
                <motion.div
                    animate={{ y: [0, 30, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-1/3 right-[10%] w-32 h-32 glass-morphic rounded-[2.5rem] hidden lg:block will-change-transform"
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center space-x-2 bg-primary/5 border border-primary/10 px-4 py-2 rounded-full mb-8 text-primary font-medium"
                        >
                            <Sparkles className="w-4 h-4" />
                            <span className="text-sm tracking-tight">Next-Gen AI Protection</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tight leading-[0.9] mb-8"
                        >
                            Create Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">Secure Future</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
                        >
                            Experience the next generation of AI-powered insurance. Instant quotes, 7-second claims, and 24/7 protection built for Sri Lanka.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <button className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-2xl font-bold shadow-2xl shadow-primary/30 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                                <Bot className="w-5 h-5" />
                                Ask InsureAI
                            </button>
                            <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold border border-slate-200 hover:border-primary/30 hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-2">
                                View Packages
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* AI Power Section */}
            <section className="py-12 bg-white border-y border-slate-100 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-center space-x-4 p-6 glass-card rounded-3xl"
                            >
                                <div className="p-3 bg-primary/10 rounded-2xl">
                                    <stat.icon className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <div className="text-3xl font-black text-slate-900 leading-none mb-1">{stat.value}</div>
                                    <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">{stat.label}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-24 bg-slate-50/50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Insurance Reimagined</h2>
                        <p className="text-slate-600 font-medium">Get covered in three simple AI-driven steps</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {howItWorks.map((step, idx) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.2 }}
                                viewport={{ once: true }}
                                className="group relative text-center"
                            >
                                <div className="mb-8 relative inline-block">
                                    <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-500" />
                                    <div className="relative w-20 h-20 bg-white rounded-[2rem] shadow-xl flex items-center justify-center mx-auto border border-slate-100 group-hover:-rotate-6 transition-transform">
                                        <step.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-black text-sm">
                                        {idx + 1}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{step.title}</h3>
                                <p className="text-slate-600 leading-relaxed font-normal">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Packages Section */}
            <section id="packages" className="py-24 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-tight">Precision Plans for Every Drive</h2>
                            <p className="text-slate-600 text-lg font-normal">Our AI calculates the perfect coverage based on your specific vehicle and driving profile.</p>
                        </div>
                        <Link href="/packages" className="text-primary font-bold hover:underline flex items-center gap-2 bg-primary/5 px-6 py-3 rounded-2xl transition-all">
                            Explore Detailed Comparison
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {packages.map((pkg, idx) => (
                            <PackageCard key={pkg.name} {...pkg} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="py-24 md:py-32 bg-[#020617] text-white relative overflow-hidden rounded-[3rem] md:rounded-[5rem] mx-4 mb-12 border border-white/5 shadow-2xl">
                {/* Advanced Background Effects */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-grid-white/[0.01] bg-[size:30px_30px]"></div>

                    {/* Multi-layered Glowing Orbs */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 animate-pulse-slow" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 animate-pulse-slow" style={{ animationDelay: '2s' }} />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 backdrop-blur-md">
                                <Activity className="w-4 h-4 text-secondary animate-pulse" />
                                <span className="text-xs font-black uppercase tracking-[0.2em] text-secondary/80">Advanced Core Engine</span>
                            </div>

                            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[0.85] tracking-tighter">
                                AI That <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">Understands</span> <br />
                                Your Car
                            </h2>
                            <p className="text-slate-400 text-lg md:text-xl mb-12 leading-relaxed max-w-lg font-medium">
                                Beyond simple data. Our proprietary neural networks process regional specifics, road conditions, and real-time risk factors to hyper-personalize your protection.
                            </p>

                            <div className="grid grid-cols-1 gap-6">
                                {[
                                    { text: "NLP-powered Sinhala/English support", icon: Sparkles },
                                    { text: "Computer Vision for damage assessment", icon: Cpu },
                                    { text: "Predictive fraud detection", icon: ShieldCheck }
                                ].map((feature, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 + idx * 0.1 }}
                                        className="flex items-center space-x-4 group p-1"
                                    >
                                        <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-secondary/50 group-hover:bg-secondary/10 transition-all duration-500">
                                            <feature.icon className="w-5 h-5 text-secondary group-hover:scale-110 transition-transform" />
                                        </div>
                                        <span className="text-slate-300 font-bold tracking-tight group-hover:text-white transition-colors">{feature.text}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <div className="relative lg:h-[550px] flex items-center justify-center">
                            {/* Decorative Background Elements for AI Box */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent blur-3xl rounded-full" />

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 1, type: "spring", bounce: 0.3 }}
                                className="relative w-full max-w-lg glass-morphic border-white/10 p-1 bg-white/[0.02] rounded-[3.5rem] shadow-2xl overflow-hidden group/box"
                            >
                                {/* Scanning Effect Line */}
                                <motion.div
                                    animate={{ top: ['0%', '100%', '0%'] }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                    className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-secondary to-transparent z-20 opacity-50 group-hover/box:opacity-100 transition-opacity"
                                />

                                <div className="p-8 md:p-10 flex flex-col justify-center gap-8 bg-[#0F172A]/80 backdrop-blur-2xl rounded-[3.4rem]">
                                    <div className="flex items-center justify-between border-b border-white/5 pb-6">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center border border-primary/20">
                                                <Bot className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <div className="font-black text-white">InsureAI Engine</div>
                                                <div className="flex items-center space-x-2">
                                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                                    <span className="text-[10px] font-black uppercase tracking-widest text-green-500/80">v4.2 Operational</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hidden sm:block">
                                            <div className="bg-white/5 px-3 py-1.5 rounded-xl border border-white/10 flex items-center space-x-2">
                                                <Zap className="w-3 h-3 text-secondary" />
                                                <span className="text-[10px] font-black text-slate-400">Low Latency</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-6 min-h-[250px] flex flex-col justify-center">
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 1.2 }}
                                            className="bg-primary/20 border border-primary/20 text-white p-5 md:p-6 rounded-[2rem] rounded-tr-none max-w-[90%] ml-auto text-sm md:text-base font-medium shadow-xl shadow-primary/10"
                                        >
                                            Compare Premium vs Elite for my Toyota Prius.
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 2.5 }}
                                            className="bg-white/5 border border-white/10 p-5 md:p-6 rounded-[2rem] rounded-tl-none max-w-[90%] text-sm md:text-base font-medium leading-relaxed relative"
                                        >
                                            <div className="absolute -top-2 -left-2 w-6 h-6 bg-secondary/20 rounded-lg flex items-center justify-center border border-secondary/20">
                                                <Cpu className="w-3 h-3 text-secondary" />
                                            </div>
                                            <div className="mb-2 flex items-center space-x-2 text-secondary font-black text-[10px] uppercase tracking-widest">
                                                <span>Analyzing 127 data points</span>
                                                <span className="flex space-x-1">
                                                    <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1 h-1 bg-secondary rounded-full" />
                                                    <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1 h-1 bg-secondary rounded-full" />
                                                    <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1 h-1 bg-secondary rounded-full" />
                                                </span>
                                            </div>
                                            Elite (75K) adds EV battery protection. For a Prius in Colombo, it's the smartest choice! 🔋
                                        </motion.div>
                                    </div>

                                    <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                        <div className="flex -space-x-2">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className="w-6 h-6 rounded-full border-2 border-[#0F172A] bg-slate-700 overflow-hidden">
                                                    <div className="w-full h-full bg-gradient-to-br from-primary/30 to-secondary/30" />
                                                </div>
                                            ))}
                                            <div className="w-6 h-6 rounded-full border-2 border-[#0F172A] bg-slate-800 flex items-center justify-center text-[8px] font-bold">
                                                +12k
                                            </div>
                                        </div>
                                        <motion.div whileHover={{ x: 5 }}>
                                            <Link href="/contact" className="text-xs font-black text-secondary flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-xl group transition-all hover:bg-secondary hover:text-white">
                                                Try It Live
                                                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
