"use client";

import {usePathname} from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {Analytics} from "@vercel/analytics/react";

export default function ClientLayout({children}: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isComingSoonPage = pathname === "/coming-soon";

    if (isComingSoonPage) {
        return (
            <>
                {children}
                <Analytics/>
            </>
        )
    }

    return (
        <>
            <div className="flex flex-col min-h-screen justify-between">
                <Navbar/>
                <main className="">{children}</main>
                <Footer/>
                <Analytics/>
            </div>
        </>
    );
}