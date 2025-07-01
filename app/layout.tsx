import Navigation from "@/components/navigation";
import { Metadata } from "next";
import { Inter } from "next/font/google";

import "../app/globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bima Adityo Kurniawan - Full Stack Developer",
  description: "Portfolio of Bima Adityo Kurniawan, a passionate full stack developer specializing in React, Next.js, modern web technologies",
  keywords: ["Bima Adityo Kurniawan", "developer", "portfolio", "react", "nextjs"],
  authors: [{ name: "Bima Adityo Kurniawan" }],
  openGraph: {
    title: "Bima Adityo Kurniawan - Full Stack Developer",
    description: "Portfolio showcasing my work experience, projects, and certifications",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen bg-background">
          {children}
        </main>
      </body>
    </html>
  )
}