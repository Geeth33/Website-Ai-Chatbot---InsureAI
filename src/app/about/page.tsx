"use client";

import { motion } from "framer-motion";
import { Users, Target, Shield, Award, User, Bot, Server } from "lucide-react";

const team = [
    {
        name: "Dr. Kasun Perera",
        role: "Founder & Lead Dev",
        desc: "Ex-Google AI researcher passionate about fintech transparency in Sri Lanka.",
        icon: User,
    },
    {
        name: "Sarah Mendis",
        role: "AI Expert",
        desc: "Specializes in NLP and automated risk assessment models.",
        icon: Bot,
    },
    {
        name: "Arjun Ratnayake",
        role: "Claims Lead",
        desc: "15+ years in traditional insurance, now optimizing AI claim pipelines.",
        icon: Shield,
    },
];

const values = [
    {
        title: "AI-First Compliance",
        desc: "IRC licensed insurer using cutting-edge models for 90s quotes and instant payouts.",
        icon: Target,
    },
    {
        title: "Radical Transparency",
        desc: "No hidden clauses or complex jargon. Everything is explained by our AI in real-time.",
        icon: Award,
    },
    {
        title: "Eco-Friendly Tech",
        desc: "Cloud-native infrastructure with optimized compute to minimize digital carbon footprint.",
        icon: Server,
    },
];

export default function About() {
    return (
        <div className="pt-32 pb-24 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Story Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <div className="inline-block bg-secondary/10 text-secondary text-xs font-bold px-4 py-1 rounded-full mb-6 uppercase tracking-widest">
                            Our Journey
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-extrabold text-primary mb-8 leading-tight">
                            Sri Lanka's First <span className="text-gradient">AI-Native Insurer</span>
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            Founded in 2024, InsureAI was born from a simple frustration: why does insurance have to be so slow?
                            In an era of instant delivery and digital banking, vehicle insurance in Sri Lanka remained stuck in paper-heavy processes.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We built a system from the ground up that prioritizes speed and trust. By leveraging AI for risk assessment
                            and claim verification, we've reduced policy issuance from days to seconds.
                        </p>
                    </motion.div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-secondary/20 blur-3xl rounded-full" />
                        <div className="relative glass-card rounded-[3rem] p-12 border border-gray-100 flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-6xl lg:text-8xl font-black text-primary mb-2">90s</div>
                                <div className="text-sm font-bold uppercase tracking-[0.3em] text-secondary">Policy Quotes</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    {[
                        { label: "Active Policies", value: "10K+" },
                        { label: "Customer Retention", value: "98%" },
                        { label: "Average Claim Time", value: "24h" },
                    ].map((stat, idx) => (
                        <div key={idx} className="bg-primary p-12 rounded-[2rem] text-center text-white">
                            <div className="text-4xl font-black mb-2">{stat.value}</div>
                            <div className="text-xs font-medium uppercase tracking-widest text-white/50">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Values Section */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-primary mb-4 text-center">Built on Trust & Tech</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        {values.map((v, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <div className="bg-secondary/5 p-6 rounded-3xl mb-6">
                                    <v.icon className="w-8 h-8 text-secondary" />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">{v.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Team Section */}
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-primary mb-4">Meet the Visionaries</h2>
                        <p className="text-muted-foreground">The humans behind the AI.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {team.map((member, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5 }}
                                className="glass-card p-10 rounded-[2.5rem] border border-gray-100 text-center flex flex-col items-center"
                            >
                                <div className="w-24 h-24 bg-muted rounded-full mb-6 flex items-center justify-center overflow-hidden">
                                    <member.icon className="w-12 h-12 text-primary opacity-50" />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
                                <div className="text-xs font-bold text-secondary uppercase tracking-widest mb-4">{member.role}</div>
                                <p className="text-sm text-muted-foreground italic leading-relaxed">{member.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
