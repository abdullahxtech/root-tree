import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "RootTree",
    description: "One root. Every link.",
    icons: {
        icon: "/favicon.svg"
    }
};

export default function RootLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}
