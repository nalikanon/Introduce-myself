import { ReactNode } from "react";
import { Database, Code, FileJson, Braces, FileType, Smartphone } from "lucide-react";

interface SkillIconProps {
  name: string;
}

export function SkillIcon({ name }: SkillIconProps): ReactNode {
  const iconMap: Record<string, ReactNode> = {
    // Frontend
    "Python": <Braces className="h-6 w-6 mb-2 mx-auto text-purple-400" />,
    "Dart": <FileJson className="h-6 w-6 mb-2 mx-auto text-purple-400" />,
    "CSS": <FileType className="h-6 w-6 mb-2 mx-auto text-purple-400" />,
    "MySQL": <Database className="h-6 w-6 mb-2 mx-auto text-purple-400" />,
    "JavaScript": <Braces className="h-6 w-6 mb-2 mx-auto text-purple-400" />,
    "HTML": <FileType className="h-6 w-6 mb-2 mx-auto text-purple-400" />,
    "MongoDB": <Database className="h-6 w-6 mb-2 mx-auto text-purple-400" />,
    "Flutter": <Smartphone className="h-6 w-6 mb-2 mx-auto text-purple-400" />,
    "TypeScript": <Code className="h-6 w-6 mb-2 mx-auto text-purple-400" />,
    "TailwindCSS": <Code className="h-6 w-6 mb-2 mx-auto text-purple-400" />,
    "Bootstrap": <FileType className="h-6 w-6 mb-2 mx-auto text-purple-400" />,
    "Node.js": <Code className="h-6 w-6 mb-2 mx-auto text-purple-400" />,
    "Express": <Code className="h-6 w-6 mb-2 mx-auto text-purple-400" />,
  };

  return iconMap[name] || null;
} 