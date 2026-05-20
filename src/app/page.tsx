"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExtensionCard from "@/components/ExtensionCard";
import InstallationGuide from "@/components/InstallationGuide";
import Features from "@/components/Features";
import AboutDeveloper from "@/components/AboutDeveloper";
import Footer from "@/components/Footer";
import { extensions } from "@/data/extensions";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#09090b] text-[#fafafa] flex flex-col justify-between">
      
      {/* Dynamic Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Extensions Showcase Section */}
      <section id="extensions" className="relative py-24 md:py-32 bg-[#09090b]/40">
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-[300px] h-[300px] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-indigo-500/5 blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold mb-4 shadow-[0_0_15px_rgba(168,85,247,0.1)]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Developer Toolkit</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6"
            >
              Explore Our Power Utilities
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-400 text-base sm:text-lg leading-relaxed"
            >
              Discover open-source, serverless Chrome extensions built specifically for developers. Download zip packages to install them locally in seconds.
            </motion.p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {extensions.map((extension) => (
              <ExtensionCard key={extension.id} extension={extension} />
            ))}
          </div>

        </div>
      </section>

      {/* Step-by-Step Installation Section */}
      <InstallationGuide />

      {/* Feature Highlighting Grid */}
      <Features />

      {/* About Coder Portfolio Section */}
      <AboutDeveloper />

      {/* Footer */}
      <Footer />

    </div>
  );
}
