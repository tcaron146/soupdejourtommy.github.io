"use client";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body className={inter.className}>
        <div className="h-[100vh] bg-secondary">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
