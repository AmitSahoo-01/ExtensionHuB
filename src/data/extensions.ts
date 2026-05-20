export interface Extension {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  version: string;
  size: string;
  downloadUrl: string;
  iconName: string; // Used to determine which Lucide icon to render
  rating: number;
  users: string;
}

export const extensions: Extension[] = [
  {
    id: "smart-auto-filler",
    name: "Smart Auto Filler",
    shortDescription: "Record and replay form data locally with complete privacy.",
    description: "A privacy-focused browser extension that records your input sequence on forms and replays it automatically. Replace complex profiles with a simple record/replay workflow.",
    version: "1.2.0",
    size: "1.4 MB",
    downloadUrl: "/downloads/smart-auto-filler.zip",
    iconName: "FileSpreadsheet",
    rating: 4.8,
    users: "12,000+"
  },
  {
    id: "subtitle-generator",
    name: "Subtitle Generator",
    shortDescription: "Generate stylized, responsive subtitles locally using AI.",
    description: "Extract audio and overlay highly responsive, readable subtitles on videos. Uses local transcription models ensuring no data is ever transmitted to external servers.",
    version: "2.0.1",
    size: "3.2 MB",
    downloadUrl: "/downloads/subtitle-generator.zip",
    iconName: "Subtitles",
    rating: 4.9,
    users: "8,500+"
  },
  {
    id: "ai-resume-builder",
    name: "AI Resume Builder",
    shortDescription: "Create professional ATS-friendly resumes offline.",
    description: "An offline resume designer that formats text dynamically using built-in templates. Analyzes Job Descriptions locally and suggests keywords for tailoring resumes.",
    version: "1.0.4",
    size: "2.1 MB",
    downloadUrl: "/downloads/ai-resume-builder.zip",
    iconName: "Briefcase",
    rating: 4.7,
    users: "5,200+"
  },
  {
    id: "benny-ui-components",
    name: "Benny UI Components",
    shortDescription: "Beautiful, reusable Tailwind CSS and React component library.",
    description: "Supercharge your front-end development with a library of copy-paste custom components, featuring gorgeous glassmorphic cards, grids, buttons, and animations.",
    version: "1.5.0",
    size: "4.5 MB",
    downloadUrl: "/downloads/benny-ui-components.zip",
    iconName: "LayoutGrid",
    rating: 4.9,
    users: "15,000+"
  }
];
