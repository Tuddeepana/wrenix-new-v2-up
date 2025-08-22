import type { Metadata } from "next";
import {Inter} from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({subsets: ["latin"], variable: "--font-inter"});

export const metadata: Metadata = {
  title: "Wrenix",
  description: "Where Ideas Take Flight",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}