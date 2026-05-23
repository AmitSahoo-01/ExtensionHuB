import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DEVHUB | Benny Chrome Extensions Hub",
  description:
    "Discover and download powerful browser extensions, productivity utilities, and UI tools built for automation and privacy. Designed and developed by Benny.",
  keywords: [
    "Chrome Extensions",
    "Browser Extensions",
    "Smart Auto Filler",
    "Subtitle Generator",
    "AI Resume Builder",
    "Benny UI Components",
    "Developer Portfolio",
    "Automation Tools",
    "Privacy First Extensions",
  ],
  authors: [{ name: "Benny" }],
  openGraph: {
    title: "DEVHUB | Benny Chrome Extensions Hub",
    description:
      "Discover and download powerful browser extensions and tools designed by Benny.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "DEVHUB | Chrome Extensions Hub",
    description:
      "Discover and download powerful browser extensions and tools designed by Benny.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
