"use client";

import React from "react";
import { Globe, Heart } from "lucide-react";

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-16 relative overflow-hidden z-10">
      {/* Subtle glow */}
      <span className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#c4a46a]/2 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          
          {/* Logo & Description */}
          <div className="md:col-span-2 space-y-4">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/favicon.ico" alt="Logo" className="w-4 h-4 object-contain" />
              </div>
              <span className="text-lg font-bold text-white tracking-wide">
                DEV<span className="text-[#c4a46a] font-extrabold">HUB</span>
              </span>
            </a>
            <p className="text-zinc-400 text-sm max-w-sm leading-relaxed">
              A private, serverless hub for high-performance Chrome utilities. Boost your browser efficiency and automate tasks locally.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-zinc-500">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="text-zinc-400 hover:text-[#c4a46a] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#extensions" className="text-zinc-400 hover:text-[#c4a46a] transition-colors">
                  Browse Extensions
                </a>
              </li>
              <li>
                <a href="#installation" className="text-zinc-400 hover:text-[#c4a46a] transition-colors">
                  Installation Steps
                </a>
              </li>
              <li>
                <a href="#features" className="text-zinc-400 hover:text-[#c4a46a] transition-colors">
                  Key Features
                </a>
              </li>
            </ul>
          </div>

          {/* Socials & Connect */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-zinc-500">
              Find Me
            </h4>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-300"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-300"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href="https://benny.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-300"
                aria-label="Portfolio"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-zinc-500">
              Have suggestions? Let me know!
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-zinc-900/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            &copy; {currentYear} DEVHUB. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Built with</span>
            <Heart className="w-3 h-3 text-[#c4a46a] fill-current" />
            <span>by</span>
            <a href="#developer" className="text-zinc-400 hover:text-[#c4a46a] font-semibold transition-colors">
              Benny
            </a>
            <span>• Runs locally offline</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
