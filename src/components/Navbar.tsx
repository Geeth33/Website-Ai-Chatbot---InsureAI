"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Shield, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
    { name: "Home", href: "/" },
    { name: "Packages", href: "/packages" },
    { name: "About", href: "/about" },
    { name: "Claims & FAQ", href: "/claims" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-4 sm:px-6 lg:px-8",
                scrolled ? "pt-4" : "pt-0"
            )}
        >
            <nav
                className={cn(
                    "mx-auto transition-all duration-500 ease-in-out overflow-hidden flex items-center w-full",
                    scrolled
                        ? "max-w-7xl glass-morphic rounded-2xl py-3 px-8 shadow-[0_8px_32px_rgba(0,0,0,0.1)] border-white/20"
                        : "max-w-7xl py-6 bg-transparent border-transparent"
                )}
            >
                <div className="flex justify-between items-center w-full">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link href="/" className="flex items-center space-x-2 group">
                            <div className="bg-primary p-2 rounded-xl shadow-lg shadow-primary/20 group-hover:rotate-12 transition-transform duration-300">
                                <Shield className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-black tracking-tighter text-primary">
                                Insure<span className="text-secondary">AI</span>
                            </span>
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "relative px-4 py-2 text-sm font-bold transition-colors hover:text-primary",
                                    pathname === item.href ? "text-primary" : "text-muted-foreground"
                                )}
                            >
                                {item.name}
                                {pathname === item.href && (
                                    <motion.div
                                        layoutId="nav-underline"
                                        className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </Link>
                        ))}
                        <div className="pl-4">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link href="/contact" className="btn-secondary py-2 px-6 text-sm font-bold shadow-xl shadow-secondary/20">
                                    Get Quote
                                </Link>
                            </motion.div>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-primary p-2 focus:outline-none"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </motion.button>
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-full left-4 right-4 mt-2 glass-morphic rounded-2xl p-4 space-y-4 shadow-2xl z-40"
                    >
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "block py-3 px-4 rounded-xl font-bold transition-all hover:bg-white/10",
                                    pathname === item.href ? "text-primary bg-primary/5" : "text-muted-foreground"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="block btn-secondary py-3 text-center font-bold"
                        >
                            Get Quote
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
