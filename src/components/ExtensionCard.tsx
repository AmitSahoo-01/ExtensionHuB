"use client";

import React, { useState } from "react";
import { Extension } from "@/data/extensions";
import { 
  FileSpreadsheet, 
  Subtitles, 
  Briefcase, 
  LayoutGrid, 
  Download, 
  Star, 
  CheckCircle
} from "lucide-react";
import { motion } from "framer-motion";

const ChromeIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="4" />
    <line x1="21.17" y1="8" x2="12" y2="8" />
    <line x1="3.95" y1="6.06" x2="8.54" y2="14" />
    <line x1="10.88" y1="21.94" x2="15.46" y2="14" />
  </svg>
);

interface ExtensionCardProps {
  extension: Extension;
}

export default function ExtensionCard({ extension }: ExtensionCardProps) {
  const [downloaded, setDownloaded] = useState(false);

  // Map icon name string to Lucide Icon component
  const getIcon = (name: string) => {
    switch (name) {
      case "FileSpreadsheet":
        return <FileSpreadsheet className="w-6 h-6 text-[#c4a46a]" />;
      case "Subtitles":
        return <Subtitles className="w-6 h-6 text-[#c4a46a]" />;
      case "Briefcase":
        return <Briefcase className="w-6 h-6 text-[#c4a46a]" />;
      case "LayoutGrid":
        return <LayoutGrid className="w-6 h-6 text-[#c4a46a]" />;
      default:
        return <LayoutGrid className="w-6 h-6 text-[#c4a46a]" />;
    }
  };

  // Get background color class for the icon wrapper based on extension type
  const getIconBg = (name: string) => {
    return "bg-zinc-900 border-zinc-800";
  };

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => {
      setDownloaded(false);
    }, 4000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="glass-card glass-card-hover rounded-3xl p-6 md:p-8 flex flex-col justify-between h-full relative overflow-hidden group"
    >
      {/* Decorative background glow */}
      <span className="absolute -top-10 -right-10 w-24 h-24 bg-[#c4a46a]/2 rounded-full blur-2xl group-hover:bg-[#c4a46a]/5 transition-all duration-500" />

      <div>
        {/* Header (Logo + Title + Info) */}
        <div className="flex items-start gap-4 mb-6">
          <div className={`p-4 rounded-2xl border ${getIconBg(extension.iconName)} flex items-center justify-center`}>
            {getIcon(extension.iconName)}
          </div>
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-[#c4a46a] transition-colors">
              {extension.name}
            </h3>
            <div className="flex items-center gap-3 mt-1.5 text-xs text-zinc-400">
              <span className="bg-zinc-800/80 px-2 py-0.5 rounded-md border border-zinc-700/50">
                v{extension.version}
              </span>
              <span>•</span>
              <span>{extension.size}</span>
            </div>
          </div>
        </div>

        {/* Ratings and User metrics */}
        <div className="flex items-center gap-4 mb-5 text-xs text-zinc-400">
          <div className="flex items-center gap-1 text-amber-400">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span className="font-semibold text-zinc-200">{extension.rating}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <span>{extension.users} users</span>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-zinc-300 text-sm leading-relaxed mb-6">
          {extension.description}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-4 border-t border-zinc-900">
        {/* Download Button */}
        <a
          href={extension.downloadUrl}
          download
          onClick={handleDownload}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold transition-all duration-300 border ${
            downloaded
              ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-300"
              : "bg-zinc-950 border-zinc-850 hover:bg-zinc-100 hover:text-black hover:border-white text-zinc-100 shadow-sm"
          }`}
        >
          {downloaded ? (
            <>
              <CheckCircle className="w-4 h-4 animate-bounce" />
              <span>Downloaded!</span>
            </>
          ) : (
            <>
              <Download className="w-4 h-4" />
              <span>Download ZIP</span>
            </>
          )}
        </a>

        {/* Add to Chrome Button (Scrolling down to manual installation step guide) */}
        <a
          href="#installation"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold bg-zinc-900 hover:bg-zinc-800 text-zinc-350 hover:text-white border border-zinc-800 hover:border-zinc-700 transition-all duration-300"
        >
          <ChromeIcon className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
          <span>Add to Chrome</span>
        </a>
      </div>
    </motion.div>
  );
}
