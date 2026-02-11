"use client";

import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type Message = {
    id: string;
    role: "assistant" | "user";
    content: string;
};

const INITIAL_MESSAGES: Message[] = [
    {
        id: "1",
        role: "assistant",
        content: "Ayubowan! I'm your InsureAI assistant. How can I help you with your vehicle insurance today?",
    },
];

const SUGGESTIONS = [
    "Compare Premium vs Elite",
    "How fast are claims?",
    "Bike insurance?",
    "Flood claim process?",
];

export default function ChatbotWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOpenChat = () => setIsOpen(true);
        window.addEventListener("openChat", handleOpenChat);
        return () => window.removeEventListener("openChat", handleOpenChat);
    }, []);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = (text: string = inputValue) => {
        if (!text.trim()) return;

        const userMessage: Message = { id: Date.now().toString(), role: "user", content: text };
        setMessages((prev) => [...prev, userMessage]);
        setInputValue("");
        setIsTyping(true);

        // Call Real AI API
        const getAIResponse = async () => {
            try {
                const response = await fetch("/api/chat", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ messages: [...messages, userMessage] }),
                });

                const data = await response.json();

                if (data.error) {
                    throw new Error(data.error);
                }

                const botMessage: Message = {
                    id: (Date.now() + 1).toString(),
                    role: "assistant",
                    content: data.content
                };
                setMessages((prev) => [...prev, botMessage]);
            } catch (error: any) {
                console.error("Chatbot Error:", error);
                const errorMessage: Message = {
                    id: (Date.now() + 1).toString(),
                    role: "assistant",
                    content: "I'm having trouble connecting to my AI core right now. " +
                        (error.message.includes("API Key") ? "It looks like the API key is missing." : "Please try again in a moment.")
                };
                setMessages((prev) => [...prev, errorMessage]);
            } finally {
                setIsTyping(false);
            }
        };

        getAIResponse();
    };

    const [isAtBottom, setIsAtBottom] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.innerHeight + window.scrollY;
            const threshold = document.documentElement.scrollHeight - 100;
            setIsAtBottom(scrollPosition > threshold);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {!isAtBottom && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="fixed bottom-6 right-6 z-[100] flex flex-col items-end"
                >
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                className="w-[350px] sm:w-[400px] h-[550px] glass-card rounded-2xl mb-4 flex flex-col overflow-hidden border border-primary/10"
                            >
                                {/* Header */}
                                <div className="bg-primary p-4 text-white flex justify-between items-center">
                                    <div className="flex items-center space-x-3">
                                        <div className="bg-white/20 p-2 rounded-lg">
                                            <Bot className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-sm">InsureAI Assistant</h3>
                                            <p className="text-[10px] text-white/70 flex items-center">
                                                <span className="w-2 h-2 bg-green-400 rounded-full mr-1.5 animate-pulse" />
                                                Always Online
                                            </p>
                                        </div>
                                    </div>
                                    <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-md transition-colors">
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Chat Area */}
                                <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
                                    {messages.map((msg) => (
                                        <div
                                            key={msg.id}
                                            className={cn(
                                                "flex max-w-[80%] flex-col",
                                                msg.role === "user" ? "ml-auto items-end" : "items-start"
                                            )}
                                        >
                                            <div
                                                className={cn(
                                                    "p-3 rounded-2xl text-sm leading-relaxed shadow-sm",
                                                    msg.role === "user"
                                                        ? "bg-primary text-white rounded-tr-none"
                                                        : "bg-white text-gray-800 rounded-tl-none border border-gray-100"
                                                )}
                                            >
                                                {msg.content}
                                            </div>
                                        </div>
                                    ))}
                                    {isTyping && (
                                        <div className="flex items-center space-x-2 text-muted-foreground italic text-xs">
                                            <div className="flex space-x-1">
                                                <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                                <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                                <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></span>
                                            </div>
                                            <span>AI is thinking...</span>
                                        </div>
                                    )}
                                </div>

                                {/* Suggestions & Input */}
                                <div className="p-4 bg-white border-t border-gray-100">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {SUGGESTIONS.map((s) => (
                                            <button
                                                key={s}
                                                onClick={() => handleSend(s)}
                                                className="text-[11px] bg-muted hover:bg-primary/5 text-primary border border-primary/10 px-3 py-1.5 rounded-full transition-colors"
                                            >
                                                {s}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <input
                                            type="text"
                                            value={inputValue}
                                            onChange={(e) => setInputValue(e.target.value)}
                                            onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                            placeholder="Ask anything..."
                                            className="flex-1 bg-muted rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all border-none"
                                        />
                                        <button
                                            onClick={() => handleSend()}
                                            disabled={!inputValue.trim()}
                                            className="bg-primary text-white p-2.5 rounded-xl disabled:opacity-50 hover:bg-primary/90 transition-colors"
                                        >
                                            <Send className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <p className="text-[10px] text-center text-muted-foreground mt-3">
                                        Powered by InsureAI Core • v2.4
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className="bg-primary shadow-2xl shadow-primary/40 text-white p-4 rounded-2xl flex items-center space-x-3"
                    >
                        <div className="relative">
                            <MessageCircle className="w-6 h-6" />
                            {!isOpen && (
                                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-primary" />
                            )}
                        </div>
                        <span className="font-bold text-sm">AI Assistant</span>
                    </motion.button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
