import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "DevGrowthAI | Build Smart. Grow Faster.",
    template: "%s | DevGrowthAI",
  },
  description:
    "DevGrowthAI provides web development, full-stack applications, SEO, digital marketing, database solutions, and video editing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}