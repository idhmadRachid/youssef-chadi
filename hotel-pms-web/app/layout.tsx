import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Playfair_Display, Inter } from "next/font/google";

const serif = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="min-h-screen bg-[#fbfaf7] text-gray-900">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
