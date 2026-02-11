import Groq from "groq-sdk";
import { NextResponse } from "next/server";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

const SYSTEM_PROMPT = `
You are the "InsureAI Assistant", a friendly and intelligent insurance AI for a Sri Lankan insurance company.
Your goal is to help users with their insurance needs, including vehicle and life insurance.

Key Information:
- Vehicle Plans: Basic (LKR 45K), Premium (LKR 60K), Elite (LKR 75K).
- Life Plans: Life Basic (10M sum assured), Life Premium (25M), Life Elite (50M+).
- Claims: AI-powered claims verification takes 7 seconds. Payouts within 24 hours.
- Location: Colombo World Trade Center (WTC).
- Tone: Professional, helpful, slightly high-tech but accessible.

Response Style:
- Be extremely concise. Use short paragraphs (1-2 sentences).
- Use bullet points for lists (like insurance plans).
- Avoid long blocks of text.
- Try to tie things back to insurance or speed/technology if natural.

If you don't know something specific about the company's internal policies beyond what's here, suggest they contact the team directly.
`;

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { messages } = body;

        if (!messages || !Array.isArray(messages) || messages.length === 0) {
            return NextResponse.json({ error: "Invalid request format." }, { status: 400 });
        }

        if (!process.env.GROQ_API_KEY) {
            return NextResponse.json(
                { error: "API Key not configured. Please add GROQ_API_KEY to your .env.local file." },
                { status: 500 }
            );
        }

        const completion = await groq.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: SYSTEM_PROMPT,
                },
                ...messages.map((m: any) => ({
                    role: m.role,
                    content: m.content,
                })),
            ],
            model: "llama-3.3-70b-versatile",
            temperature: 0.7,
            max_tokens: 1024,
        });

        const responseText = completion.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response.";

        return NextResponse.json({ content: responseText });
    } catch (error: any) {
        console.error("Chat API Error:", error);
        return NextResponse.json(
            { error: "Failed to process chat request.", details: error.message },
            { status: 500 }
        );
    }
}
