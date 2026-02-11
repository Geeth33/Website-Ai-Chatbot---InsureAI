"use client";

import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";

interface PackageCardProps {
    name: string;
    price: string;
    features: string[];
    recommended?: boolean;
    href: string;
}

export default function PackageCard({
    name,
    price,
    features,
    recommended,
    href,
}: PackageCardProps) {
    return (
        <motion.div
            whileHover={{ y: -12, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={cn(
                "relative flex flex-col p-8 glass-morphic rounded-[2rem] h-full transition-shadow hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]",
                recommended ? "border-secondary/30 ring-1 ring-secondary/20 bg-secondary/5" : "bg-white/40"
            )}
        >
            {recommended && (
                <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                </div>
            )}

            <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-2">{name}</h3>
                <div className="flex items-baseline space-x-1">
                    <span className="text-3xl font-bold text-primary">LKR {price}</span>
                    <span className="text-muted-foreground text-sm">/year</span>
                </div>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
                {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-sm text-gray-600">
                        <Check className="w-5 h-5 text-secondary shrink-0" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <Link
                href={href}
                className={cn(
                    "flex items-center justify-center space-x-2 py-3 px-6 rounded-2xl font-semibold transition-all group",
                    recommended
                        ? "bg-secondary text-white hover:bg-secondary/90 shadow-lg shadow-secondary/20"
                        : "bg-muted text-primary hover:bg-gray-200"
                )}
            >
                <span>View Details</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
        </motion.div>
    );
}
