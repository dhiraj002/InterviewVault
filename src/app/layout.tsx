import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import NavBar from "../components/NavBar";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "InterviewVault - Share Your Competitive Exam Interview Experiences",
    description: "Connect with aspirants by sharing your UPSC, SSB, and other competitive exam interview experiences. Learn from real stories and prepare better.",
    icons: {
        icon: "/InterviewVault_logo.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <Toaster position="top-right" reverseOrder={false} />
                <NavBar />
                <main className="">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
