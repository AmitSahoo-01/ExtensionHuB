"use client";

import React from "react";
import { 
  DownloadCloud, 
  FolderOpen, 
  Settings, 
  ToggleRight, 
  UploadCloud, 
  CheckSquare 
} from "lucide-react";
import { motion } from "framer-motion";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function InstallationGuide() {
  const steps: Step[] = [
    {
      number: "01",
      title: "Download ZIP File",
      description: "Select your desired utility card above and click 'Download ZIP' to fetch the local package bundle.",
      icon: <DownloadCloud className="w-6 h-6 text-[#c4a46a]" />
    },
    {
      number: "02",
      title: "Extract the Archive",
      description: "Locate the downloaded file and extract the ZIP contents to a directory of your choice.",
      icon: <FolderOpen className="w-6 h-6 text-[#c4a46a]" />
    },
    {
      number: "03",
      title: "Open chrome://extensions",
      description: "Open Google Chrome and navigate to the Extensions management page by typing 'chrome://extensions' in the URL bar.",
      icon: <Settings className="w-6 h-6 text-[#c4a46a]" />
    },
    {
      number: "04",
      title: "Enable Developer Mode",
      description: "In the top-right corner of the Extensions page, toggle the switch that says 'Developer Mode' to active.",
      icon: <ToggleRight className="w-6 h-6 text-[#c4a46a]" />
    },
    {
      number: "05",
      title: "Click Load Unpacked",
      description: "Click the 'Load unpacked' button that appears in the top-left toolbar of the Extensions dashboard.",
      icon: <UploadCloud className="w-6 h-6 text-[#c4a46a]" />
    },
    {
      number: "06",
      title: "Select Extension Folder",
      description: "Browse to the folder where you extracted the ZIP files in Step 2, select the root folder, and click open.",
      icon: <CheckSquare className="w-6 h-6 text-[#c4a46a]" />
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="installation" className="relative py-24 md:py-32 bg-[#09090b]">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-[#c4a46a]/2 blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-10 w-[300px] h-[300px] rounded-full bg-zinc-800/5 blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.25em] text-[#c4a46a] mb-3"
          >
            Installation Guide
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6"
          >
            How to Install Extensions Manually
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-base sm:text-lg leading-relaxed"
          >
            Since these utilities run 100% locally and respect your private data, they are loaded directly into Chrome via Developer Mode. Follow these simple steps.
          </motion.p>
        </div>

        {/* Timeline Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {/* Connector Line for visual flow (Only visible on large screens) */}
          <div className="hidden lg:block absolute top-[90px] left-[5%] right-[5%] h-[2px] bg-zinc-800/40 -z-10" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-card rounded-3xl p-8 relative flex flex-col justify-between group overflow-hidden border border-zinc-800/40 hover:border-zinc-700 transition-all duration-300 shadow-md"
            >
              {/* Giant background step number */}
              <div className="absolute right-6 top-4 font-mono font-black text-6xl text-zinc-800/10 group-hover:text-[#c4a46a]/5 transition-colors pointer-events-none select-none">
                {step.number}
              </div>

              <div>
                {/* Step Icon & Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-inner group-hover:border-[#c4a46a]/20 transition-all duration-300">
                    {step.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-zinc-500 bg-zinc-900/80 px-2.5 py-1 rounded-md border border-zinc-800">
                    STEP {step.number}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#c4a46a] transition-colors">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Glowing bottom line indicator on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Pro Tip Callout Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 glass-card rounded-2xl p-6 border border-zinc-850 max-w-3xl mx-auto flex items-start gap-4 shadow-xl"
        >
          <div className="text-2xl mt-0.5">💡</div>
          <div>
            <h4 className="text-sm font-bold text-[#c4a46a] mb-1">Developer Pro-Tip</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              When updating an unpacked extension, you do not need to repeat these steps! Simply click the <strong className="text-white">Refresh Icon</strong> (🔁) on the extension card inside <code className="bg-zinc-900 px-1 py-0.5 rounded border border-zinc-800 text-[#c4a46a] text-[10px]">chrome://extensions</code> to reload the latest code changes instantly.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
