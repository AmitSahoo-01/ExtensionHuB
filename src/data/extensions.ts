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
    name: "EasyFill - Smart Auto Filler",
    shortDescription: "Record and replay form data locally with complete privacy.",
    description: "A privacy-focused browser extension that records your input sequence on forms and replays it automatically. Replace complex profiles with a simple record/replay workflow.",
    version: "1.0",
    size: "1.4 MB",
    downloadUrl: "/downloads/smart-auto-filler.zip",
    iconName: "FileSpreadsheet",
    rating: 4.8,
    users: "12,000+"
  },
  {
    id: "subtitle-generator",
    name: "Auto Subtitle Generator",
    shortDescription: "Generate stylized, responsive subtitles locally using AI.",
    description: "Extract audio and overlay highly responsive, readable subtitles on videos. Uses local transcription models ensuring no data is ever transmitted to external servers.",
    version: "1.0",
    size: "3.2 MB",
    downloadUrl: "/downloads/subtitle-generator.zip",
    iconName: "Subtitles",
    rating: 4.9,
    users: "8,500+"
  },
];
