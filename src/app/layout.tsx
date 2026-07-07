import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deepika K | Computer Science & Data Science Engineer Portfolio",
  description: "Professional portfolio of Deepika K, showcasing academic milestones, Python & Machine Learning internship achievements, NLP speech-to-sign translators, and diagnostic recommendation systems.",
  keywords: ["Deepika K", "Data Science Engineer", "Computer Science", "Machine Learning Portfolio", "Python developer", "NLP Speech to Sign Language", "Bangalore Developer"],
  authors: [{ name: "Deepika K" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <Navigation />
        <main className="flex-1 w-full relative">
          {children}
        </main>
        <Toaster 
          position="top-right" 
          toastOptions={{
            duration: 4500,
            style: {
              background: "#0d111b",
              color: "#f3f4f6",
              border: "1px solid rgba(59, 130, 246, 0.2)",
              borderRadius: "12px",
              fontSize: "14px",
            }
          }}
        />
      </body>
    </html>
  );
}
