"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Extensions", href: "#extensions" },
    { name: "Installation", href: "#installation" },
    { name: "Features", href: "#features" },
    { name: "Developer", href: "#developer" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-zinc-950/80 border-b border-zinc-900 py-3 backdrop-blur-md"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 group">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 group-hover:border-zinc-700 transition-all duration-300 shadow-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/favicon.ico" alt="Logo" className="w-5 h-5 object-contain" />
                <span className="absolute inset-0 rounded-xl bg-zinc-100/5 blur-sm scale-75 group-hover:scale-110 transition-all duration-300" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent tracking-wide font-sans">
                DEV<span className="text-[#c4a46a] font-extrabold">HUB</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-[#c4a46a] transition-colors font-medium relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#c4a46a] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Developer CTA Button */}
              <a
                href="#developer"
                className="relative px-5 py-2 rounded-xl text-xs font-semibold text-zinc-150 hover:text-black overflow-hidden group border border-zinc-800 flex items-center gap-2 transition-colors duration-300"
              >
                <div className="absolute inset-0 bg-zinc-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                <div className="absolute inset-0 bg-zinc-900/60 opacity-100 -z-20" />
                <Terminal className="w-3.5 h-3.5 text-[#c4a46a] group-hover:text-black transition-colors" />
                <span>Contact Me</span>
                {/* Glow ring */}
                <div className="absolute -inset-px rounded-xl bg-zinc-200 opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300 -z-30" />
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition-all duration-300"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[60px] z-40 bg-zinc-950/95 backdrop-blur-lg md:hidden border-t border-zinc-900 flex flex-col justify-between py-10 px-6"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-semibold text-zinc-300 hover:text-[#c4a46a] transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-col gap-4"
            >
              <a
                href="#developer"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-4 rounded-xl font-bold bg-zinc-900 hover:bg-zinc-100 hover:text-black border border-zinc-800 hover:border-white transition-all duration-300 text-white shadow-md"
              >
                Contact Developer
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
