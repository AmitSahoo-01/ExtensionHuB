"use client";

import React from "react";
import { ArrowDown, Globe, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#09090b]"
    >
      {/* Background Image: purple gradient with tree branch silhouette */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-85 select-none pointer-events-none"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      />

      {/* Futuristic Grid Overlay */}
      <div className="absolute inset-0 z-5 animated-grid opacity-30 pointer-events-none" />
      
      {/* Radial Vignette to blend edges */}
      <div className="absolute inset-0 z-5 bg-gradient-to-t from-[#09090b] via-transparent to-[#09090b]/80 pointer-events-none" />
      <div className="absolute inset-0 z-5 bg-gradient-to-r from-[#09090b]/90 via-[#09090b]/40 to-transparent pointer-events-none" />

      {/* Floating Glow Orbs */}
      <div className="absolute top-1/4 left-1/3 w-[30vw] h-[30vw] rounded-full bg-[#c4a46a]/3 blur-[120px] animate-glow-pulse pointer-events-none z-5" />
      <div className="absolute bottom-1/4 right-1/4 w-[25vw] h-[25vw] rounded-full bg-zinc-800/10 blur-[100px] animate-glow-pulse pointer-events-none z-5" style={{ animationDelay: "-3s" }} />

      {/* Huge Vertical "DEVHUB" text inspired by reference image */}
      <div className="absolute right-4 sm:right-10 md:right-16 lg:right-24 top-1/2 -translate-y-1/2 z-10 flex flex-row-reverse items-center justify-center gap-4 sm:gap-6 md:gap-8 select-none pointer-events-none">
        {/* Large rotated text (on the right) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.15, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-white font-extrabold tracking-[0.25em] text-[8vh] sm:text-[11vh] md:text-[13vh] uppercase select-none font-sans leading-none whitespace-nowrap"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)", // Reverses top-to-bottom so it matches the image bottom-to-top format
          }}
        >
          DEVHUB
        </motion.div>

        {/* Small rotated subtitle (on the left of DEVHUB) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="text-[0.7vh] sm:text-[0.85vh] md:text-[1vh] font-medium tracking-[0.4em] text-zinc-400 uppercase select-none whitespace-nowrap"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
          }}
        >
          Powerful browser tools built for productivity and automation.
        </motion.div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-2xl text-left md:pr-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[#c4a46a] text-xs font-semibold mb-6 shadow-md"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Introducing DEVHUB V1.0</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 font-sans"
          >
            Ship Your Work{" "}
            <span className="block mt-2 bg-gradient-to-r from-zinc-100 to-[#c4a46a] bg-clip-text text-transparent drop-shadow-sm">
              Faster
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-zinc-300 max-w-lg mb-10 leading-relaxed"
          >
            Powerful browser tools built for productivity and automation. Fast, offline-first, and lightweight Chrome extensions that work without server APIs.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 items-center"
          >
            {/* Download Button */}
            <a
              href="#extensions"
              className="relative px-8 py-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-zinc-100 hover:text-black font-bold transition-all duration-350 shadow-md hover:-translate-y-0.5 group overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Download Extensions
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-zinc-100 transition-transform duration-300 -z-0" />
            </a>

            {/* View Projects Button */}
            <a
              href="#developer"
              className="px-8 py-4 rounded-2xl bg-zinc-900/50 hover:bg-zinc-800/80 text-zinc-200 hover:text-white font-bold transition-all duration-300 border border-zinc-800 hover:border-zinc-700 backdrop-blur-sm"
            >
              View Projects
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
        <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-400 font-bold">
          Scroll Explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 rounded-full border-2 border-zinc-600 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 bg-[#c4a46a] rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
