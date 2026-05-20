"use client";

import React from "react";
import { 
  Zap, 
  KeyRound, 
  ShieldCheck, 
  WifiOff, 
  Feather, 
  Code2 
} from "lucide-react";
import { motion } from "framer-motion";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function Features() {
  const features: Feature[] = [
    {
      title: "Fast Installation",
      description: "Load unpacked files directly into Chrome. Get up and running in under a minute without waiting for Web Store reviews.",
      icon: <Zap className="w-5 h-5 text-purple-400" />
    },
    {
      title: "No API Keys Required",
      description: "Forget monthly API subscription fees or secret keys. These utilities run natively with zero developer configuration.",
      icon: <KeyRound className="w-5 h-5 text-pink-400" />
    },
    {
      title: "Privacy Focused",
      description: "All processing happens inside your sandbox browser. No tracking pixels, external telemetry, or data mining.",
      icon: <ShieldCheck className="w-5 h-5 text-indigo-400" />
    },
    {
      title: "Works 100% Offline",
      description: "No internet connection? No problem. Full features remain available offline without talking to external cloud servers.",
      icon: <WifiOff className="w-5 h-5 text-emerald-400" />
    },
    {
      title: "Lightweight Footprint",
      description: "Highly optimized JavaScript, HTML, and CSS. Zero background service worker bloat, keeping your Chrome running fast.",
      icon: <Feather className="w-5 h-5 text-cyan-400" />
    },
    {
      title: "Open Source Code",
      description: "Transparency is our foundation. Inspect every line of code on GitHub, fork it, compile it yourself, or suggest changes.",
      icon: <Code2 className="w-5 h-5 text-purple-400" />
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="features" className="relative py-24 md:py-32 bg-[#09090b]/50">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 animated-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.25em] text-purple-400 mb-3"
          >
            Capabilities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6"
          >
            Built for Power, Designed for Privacy
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-base sm:text-lg leading-relaxed"
          >
            Our extensions are engineered with clean code and security-first architecture. Here is why developers and power users choose them.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-card rounded-2xl p-6 md:p-8 flex flex-col items-start hover:border-purple-500/20 hover:bg-[#18122B]/20 transition-all duration-300 group"
            >
              {/* Feature Icon */}
              <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-purple-500/40 transition-all duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
