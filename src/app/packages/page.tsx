"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Check, Info, Bot, X, Shield, Zap, Crown, Heart, Activity, UserPlus } from "lucide-react";
import PackageCard from "@/components/PackageCard";
import { cn } from "@/lib/utils";

const vehiclePackages = [
    {
        name: "Basic",
        price: "45K",
        features: [
            "1M Liability Coverage",
            "Fire & Flood Protection",
            "Basic Roadside Assistance",
            "Digital Policy Access",
            "Standard Claims Support",
        ],
        href: "/contact?plan=basic",
    },
    {
        name: "Premium",
        price: "60K",
        features: [
            "5M Comprehensive Liability",
            "24/7 Premium Roadside Assist",
            "20% No-Claim Bonus Guarantee",
            "Extended Theft & Vandalism",
            "Priority AI Claims Processing",
            "Replacement Vehicle Allowance",
        ],
        recommended: true,
        href: "/contact?plan=premium",
    },
    {
        name: "Elite",
        price: "75K",
        features: [
            "Unlimited PA Coverage",
            "Specialized EV Battery Cover",
            "Taxi/Rideshare Reimbursement",
            "30% No-Claim Bonus",
            "Concierge AI Support (24h)",
            "International Standard Cover",
            "Zero Depreciation Add-on",
        ],
        href: "/contact?plan=elite",
    },
];

const lifePackages = [
    {
        name: "Life Basic",
        price: "120K",
        features: [
            "10M Natural Death Benefit",
            "Accidental Death Bonus (2x)",
            "Critical Illness Cover (10 Types)",
            "Hospitalization Cash (3K/day)",
            "Digital Health Dashboard",
        ],
        href: "/contact?plan=life_basic",
    },
    {
        name: "Life Premium",
        price: "250K",
        features: [
            "25M Total Benefit Cover",
            "Accidental Death Bonus (3x)",
            "Critical Illness Cover (32 Types)",
            "Hospitalization Cash (8K/day)",
            "Income Protection Benefit",
            "Family Member Add-on Discount",
        ],
        recommended: true,
        href: "/contact?plan=life_premium",
    },
    {
        name: "Life Elite",
        price: "400K",
        features: [
            "50M+ Maximum Benefit",
            "World-wide Portability",
            "Critical Illness Cover (60 Types)",
            "Best-in-class Hospital Cash (15K/day)",
            "Global Medical Second Opinion",
            "Education Fund Guarantee",
            "AI Personalized Wellness Plan",
        ],
        href: "/contact?plan=life_elite",
    },
];

const vehiclePlans = [
    { name: "Basic", icon: Shield, color: "text-gray-400" },
    { name: "Premium", icon: Zap, color: "text-secondary" },
    { name: "Elite", icon: Crown, color: "text-accent" },
];

const lifePlans = [
    { name: "Life Basic", icon: Activity, color: "text-blue-400" },
    { name: "Life Premium", icon: Heart, color: "text-red-400" },
    { name: "Life Elite", icon: UserPlus, color: "text-purple-400" },
];

const vehicleComparisonFeatures = [
    { name: "Liability Limit", basic: "1M", premium: "5M", elite: "10M+" },
    { name: "Accident Coverage", basic: "Partial", premium: "Full", elite: "Unlimited" },
    { name: "Flood Protection", basic: "Yes", premium: "Enhanced", elite: "Priority" },
    { name: "Roadside Assistance", basic: "Basic", premium: "24/7", elite: "24/7 + EV" },
    { name: "No-Claim Bonus", basic: "10%", premium: "20%", elite: "30%" },
    { name: "Theft Protection", basic: false, premium: true, elite: true },
    { name: "Engine Cover", basic: false, premium: "Optional", elite: true },
    { name: "Taxi Reimbursement", basic: false, premium: false, elite: true },
];

const lifeComparisonFeatures = [
    { name: "Sum Assured", basic: "10M", premium: "25M", elite: "50M+" },
    { name: "Critical Illness", basic: "10 Types", premium: "32 Types", elite: "60 Types" },
    { name: "Death Benefit", basic: "Standard", premium: "Accelerated", elite: "Instant + Bonus" },
    { name: "Accident Bonus", basic: "2x", premium: "3x", elite: "5x" },
    { name: "Hospital Cash", basic: "3K/day", premium: "8K/day", elite: "15K/day" },
    { name: "Global Cover", basic: false, premium: "Asia Only", elite: "World-wide" },
    { name: "Wellness Plan", basic: "Standard", premium: "Advanced", elite: "AI Dedicated" },
    { name: "Waiver of Premium", basic: false, premium: true, elite: true },
];

export default function Packages() {
    const [category, setCategory] = useState<"vehicle" | "life">("vehicle");
    const [vehicleValue, setVehicleValue] = useState(5000000); // LKR
    const [age, setAge] = useState(30);

    const estimateVehiclePremium = (value: number) => {
        return Math.round(value * 0.012);
    };

    const estimateLifePremium = (age: number) => {
        // Simple mock calculation: base 50k + age factor
        return Math.round(50000 + (age * 1500));
    };

    const activePackages = category === "vehicle" ? vehiclePackages : lifePackages;
    const activePlans = category === "vehicle" ? vehiclePlans : lifePlans;
    const activeComparison = category === "vehicle" ? vehicleComparisonFeatures : lifeComparisonFeatures;

    return (
        <div className="pt-32 pb-24 min-h-screen bg-gray-50/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl lg:text-6xl font-extrabold text-primary mb-6"
                    >
                        Flexible <span className="text-gradient">Protection Plans</span>
                    </motion.h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                        Transparent pricing with AI-driven customizations. No hidden fees, just pure protection.
                    </p>

                    {/* Category Switcher */}
                    <div className="flex items-center justify-center p-1.5 bg-white/50 backdrop-blur-md rounded-2xl border border-gray-100 shadow-sm w-fit mx-auto">
                        <button
                            onClick={() => setCategory("vehicle")}
                            className={cn(
                                "flex items-center space-x-2 px-6 py-3 rounded-xl font-bold transition-all",
                                category === "vehicle" ? "bg-primary text-white shadow-lg" : "text-primary/60 hover:text-primary"
                            )}
                        >
                            <Shield className="w-5 h-5" />
                            <span>Vehicle Insurance</span>
                        </button>
                        <button
                            onClick={() => setCategory("life")}
                            className={cn(
                                "flex items-center space-x-2 px-6 py-3 rounded-xl font-bold transition-all",
                                category === "life" ? "bg-primary text-white shadow-lg" : "text-primary/60 hover:text-primary"
                            )}
                        >
                            <Heart className="w-5 h-5" />
                            <span>Life Insurance</span>
                        </button>
                    </div>
                </div>

                {/* Pricing Calculator */}
                <section className="mb-24 glass-card p-10 rounded-[2.5rem] border border-gray-100 max-w-4xl mx-auto overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <Calculator className="w-32 h-32 text-primary" />
                    </div>

                    <div className="relative z-10">
                        <h2 className="text-2xl font-bold text-primary mb-2 flex items-center space-x-3">
                            <Calculator className="w-6 h-6 text-secondary" />
                            <span>{category === "vehicle" ? "Vehicle Premium Calculator" : "Life Premium Estimator"}</span>
                        </h2>
                        <p className="text-muted-foreground mb-12 text-sm italic">
                            {category === "vehicle"
                                ? "Slide to estimate your premium based on vehicle market value."
                                : "Estimate your annual premium based on your current age."}
                        </p>

                        <div className="space-y-10">
                            {category === "vehicle" ? (
                                <div>
                                    <div className="flex justify-between items-center mb-6">
                                        <span className="text-sm font-bold uppercase tracking-wider text-primary">Vehicle Value (LKR)</span>
                                        <span className="text-2xl font-black text-secondary">
                                            {(vehicleValue / 1000000).toFixed(1)}M
                                        </span>
                                    </div>
                                    <input
                                        type="range"
                                        min="500000"
                                        max="50000000"
                                        step="500000"
                                        value={vehicleValue}
                                        onChange={(e) => setVehicleValue(parseInt(e.target.value))}
                                        className="w-full h-3 bg-muted rounded-lg appearance-none cursor-pointer accent-secondary"
                                    />
                                </div>
                            ) : (
                                <div>
                                    <div className="flex justify-between items-center mb-6">
                                        <span className="text-sm font-bold uppercase tracking-wider text-primary">Your Age</span>
                                        <span className="text-2xl font-black text-secondary">
                                            {age} Years
                                        </span>
                                    </div>
                                    <input
                                        type="range"
                                        min="18"
                                        max="65"
                                        step="1"
                                        value={age}
                                        onChange={(e) => setAge(parseInt(e.target.value))}
                                        className="w-full h-3 bg-muted rounded-lg appearance-none cursor-pointer accent-secondary"
                                    />
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/50 p-8 rounded-3xl border border-primary/5">
                                <div>
                                    <div className="text-xs font-bold text-muted-foreground uppercase mb-2">Estimated Premium / Year</div>
                                    <div className="text-4xl font-black text-primary">
                                        LKR {category === "vehicle"
                                            ? estimateVehiclePremium(vehicleValue).toLocaleString()
                                            : estimateLifePremium(age).toLocaleString()}
                                    </div>
                                    <p className="text-[10px] text-muted-foreground mt-2">
                                        *This is an AI estimation based on current market rates in Sri Lanka.
                                    </p>
                                </div>
                                <div className="flex flex-col justify-center space-y-4">
                                    <button
                                        onClick={() => (window as any).dispatchEvent(new CustomEvent("openChat"))}
                                        className="btn-secondary flex items-center justify-center space-x-2 w-full py-4 text-white"
                                    >
                                        <Bot className="w-5 h-5" />
                                        <span>Chat to Customize</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Package Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-24">
                    {activePackages.map((pkg, idx) => (
                        <PackageCard key={`${category}-${idx}`} {...pkg} />
                    ))}
                </div>

                {/* Comparison Table Section */}
                <section className="mb-24" id="comparison">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-primary mb-4">Detailed Comparison</h2>
                        <p className="text-muted-foreground">See exactly what's covered in each {category} plan.</p>
                    </div>
                    <div className="glass-card rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-2xl max-w-6xl mx-auto">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-primary/5">
                                        <th className="p-7 text-sm font-bold uppercase tracking-widest text-muted-foreground border-b border-gray-100">
                                            Feature
                                        </th>
                                        {activePlans.map((plan) => (
                                            <th key={plan.name} className="p-7 border-b border-gray-100 text-center relative">
                                                <div className="flex flex-col items-center space-y-2">
                                                    <plan.icon className={cn("w-6 h-6", plan.color)} />
                                                    <span className="text-xl font-bold text-primary">{plan.name}</span>
                                                </div>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {activeComparison.map((feature, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors text-primary">
                                            <td className="p-7 text-base font-bold">{feature.name}</td>
                                            <td className="p-7 text-center text-sm font-medium border-l border-gray-50">
                                                {typeof (feature as any).basic === "boolean" ? (
                                                    (feature as any).basic ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-red-300 mx-auto" />
                                                ) : (
                                                    (feature as any).basic
                                                )}
                                            </td>
                                            <td className="p-7 text-center text-sm font-bold bg-secondary/5 border-l border-gray-50">
                                                {typeof (feature as any).premium === "boolean" ? (
                                                    (feature as any).premium ? <Check className="w-5 h-5 text-secondary mx-auto" /> : <X className="w-5 h-5 text-red-300 mx-auto" />
                                                ) : (
                                                    (feature as any).premium
                                                )}
                                            </td>
                                            <td className="p-7 text-center text-sm font-medium border-l border-gray-50">
                                                {typeof (feature as any).elite === "boolean" ? (
                                                    (feature as any).elite ? <Check className="w-5 h-5 text-accent mx-auto" /> : <X className="w-5 h-5 text-red-300 mx-auto" />
                                                ) : (
                                                    (feature as any).elite
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Fleet Context */}
                <div className="flex flex-col md:flex-row items-center justify-between p-10 glass-card rounded-3xl border border-primary/5 bg-primary text-white overflow-hidden relative">
                    <div className="absolute -right-10 top-0 opacity-10">
                        <Bot className="w-64 h-64 text-white" />
                    </div>
                    <div className="relative z-10 max-w-xl">
                        <h3 className="text-2xl font-bold mb-4 flex items-center space-x-3">
                            <Info className="w-6 h-6 text-secondary" />
                            <span>{category === "vehicle" ? "Need a custom fleet plan?" : "Family & Group Discounts?"}</span>
                        </h3>
                        <p className="text-white/70 mb-0">
                            {category === "vehicle"
                                ? "Our AI can analyze your business fleet and provide a customized volume-based discount in seconds."
                                : "Protect your loved ones with specialized group life covers. AI analyzes your family structure for the best rates."}
                            Open the chatbot to start the specialized assessment.
                        </p>
                    </div>
                    <button
                        onClick={() => (window as any).dispatchEvent(new CustomEvent("openChat"))}
                        className="relative z-10 mt-8 md:mt-0 bg-white text-primary px-10 py-4 rounded-2xl font-bold hover:scale-105 transition-transform"
                    >
                        {category === "vehicle" ? "Start Fleet Chat" : "Get Family Quote"}
                    </button>
                </div>
            </div>
        </div>
    );
}

