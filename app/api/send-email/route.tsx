import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import WelcomeTemplate from "@/emails/WelcomeTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
    await resend.emails.send({
        from: "...",
        to: "...",
        subject: "Hello from Resend!",
        react: <WelcomeTemplate name="Shashini" />
    })
    return NextResponse.json({ message: "Email sent" });
}