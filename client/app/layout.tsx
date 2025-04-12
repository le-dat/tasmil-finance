import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import ThirdWebProvider from "@/providers/ThirdWebProvider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vault Market | AI-Powered DeFi Trading Platform",
  description:
    "Experience the future of decentralized finance with Vault Market. AI-driven trading strategies, real-time market analysis, and secure DeFi protocols all in one platform.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords:
    "DeFi, AI trading, cryptocurrency, blockchain, decentralized finance, trading platform, artificial intelligence",
  authors: [{ name: "Vault Market Team" }],
  openGraph: {
    title: "Vault Market | AI-Powered DeFi Trading Platform",
    description:
      "Experience the future of decentralized finance with Vault Market. AI-driven trading strategies, real-time market analysis, and secure DeFi protocols all in one platform.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vault Market | AI-Powered DeFi Trading Platform",
    description:
      "Experience the future of decentralized finance with Vault Market. AI-driven trading strategies, real-time market analysis, and secure DeFi protocols all in one platform.",
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
        <ReactQueryProvider>
          <ThirdWebProvider>{children}</ThirdWebProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
