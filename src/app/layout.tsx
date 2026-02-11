import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "AI-Powered Vehicle Insurance Sri Lanka | InsureAI",
    description: "Instant Quotes & Fast Claims powered by AI. Experience the future of vehicle insurance in Sri Lanka.",
};

import IntroWrapper from "@/components/IntroWrapper";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <IntroWrapper>
                    <Navbar />
                    <main className="min-h-screen">
                        {children}
                    </main>
                    <Footer />
                    <ChatbotWidget />
                </IntroWrapper>
            </body>
        </html>
    );
}
