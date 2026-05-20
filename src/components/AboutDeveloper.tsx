"use client";

import React from "react";
import { 
  Globe, 
  Terminal, 
  ArrowUpRight, 
  Code,
  Briefcase
} from "lucide-react";
import { motion } from "framer-motion";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function AboutDeveloper() {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com",
      icon: <GithubIcon className="w-4 h-4" />,
      color: "hover:bg-zinc-800 hover:text-white border-zinc-800"
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: <LinkedinIcon className="w-4 h-4 text-[#0077b5]" />,
      color: "hover:bg-[#0077b5]/10 hover:text-[#0077b5] border-zinc-800 hover:border-[#0077b5]/30"
    },
    {
      name: "Portfolio",
      href: "https://benny.dev",
      icon: <Globe className="w-4 h-4 text-purple-400" />,
      color: "hover:bg-purple-500/10 hover:text-purple-400 border-zinc-800 hover:border-purple-500/30"
    }
  ];

  const techStack = [
    "Next.js", "React", "TypeScript", "Tailwind CSS", "Chrome Extension API", "Framer Motion"
  ];

  return (
    <section id="developer" className="relative py-24 md:py-32 bg-[#09090b]">
      {/* Background gradients */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-600/10 blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.25em] text-purple-400 mb-3"
          >
            The Architect
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
          >
            About The Developer
          </motion.h2>
        </div>

        {/* Dynamic Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Bio Side (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Freelance & Contracts</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Hi, I&apos;m Benny
            </h3>

            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              A passionate developer building useful tools, browser extensions, automation products, and UI systems. My focus is on creating developer tools that solve real productivity problems while maintaining speed and strict user privacy.
            </p>

            {/* Tech Stack Pills */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-[0.1em] text-zinc-500 flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5 text-purple-400" />
                <span>Primary Tech Stack</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:border-purple-500/30 hover:text-purple-300 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-xl border text-sm font-semibold text-zinc-300 hover:text-white transition-all duration-300 ${social.color}`}
                >
                  {social.icon}
                  <span>{social.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-55 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Terminal Mockup Side (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="glass-card rounded-2xl border border-purple-500/10 overflow-hidden shadow-2xl relative">
              
              {/* Terminal Window Header */}
              <div className="bg-zinc-900/80 px-4 py-3 border-b border-purple-500/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-purple-400" />
                  <span className="text-xs font-mono font-semibold text-zinc-400">benny-config.json</span>
                </div>
                {/* Control dots */}
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
              </div>

              {/* Terminal content */}
              <div className="p-6 font-mono text-xs text-zinc-300 overflow-x-auto leading-relaxed whitespace-pre bg-zinc-950/70">
                <div className="text-purple-400">{`{`}</div>
                <div className="pl-4">
                  <span className="text-indigo-400">&quot;developer&quot;</span>: <span className="text-emerald-400">&quot;Benny&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-indigo-400">&quot;role&quot;</span>: <span className="text-emerald-400">&quot;Automation & Tooling Specialist&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-indigo-400">&quot;philosophy&quot;</span>: <span className="text-amber-400">{`[`}</span>
                </div>
                <div className="pl-8 text-zinc-400">
                  &quot;Local execution by default&quot;,<br />
                  &quot;Zero-telemetry product design&quot;,<br />
                  &quot;Stellar typography and layouts&quot;
                </div>
                <div className="pl-4 text-amber-400">{`]`},</div>
                <div className="pl-4">
                  <span className="text-indigo-400">&quot;interests&quot;</span>: <span className="text-amber-400">{`[`}</span>
                  <span className="text-emerald-400">&quot;W3C Standards&quot;</span>, <span className="text-emerald-400">&quot;Chromium MV3&quot;</span>
                  <span className="text-amber-400">{`]`}</span>,
                </div>
                <div className="pl-4">
                  <span className="text-indigo-400">&quot;status&quot;</span>: <span className="text-emerald-400">&quot;Building Chrome utilities&quot;</span>
                </div>
                <div className="text-purple-400">{`}`}</div>

                {/* Simulated build success */}
                <div className="border-t border-zinc-800 mt-6 pt-4 text-[10px] text-zinc-500">
                  $ npm run build --release<br />
                  <span className="text-emerald-500">✓ Compiled client bundles successfully</span><br />
                  <span className="text-purple-400">✓ Exported 4 chrome-extension package structures</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
