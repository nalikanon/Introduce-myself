import { ReactNode } from "react";
import { Database, Code, FileJson, Server, Braces, FileType, Smartphone, Globe, Cloud, Api, GraphQL } from "lucide-react";

interface SkillIconProps {
  name: string;
}

export function SkillIcon({ name }: SkillIconProps): ReactNode {
  const iconMap: Record<string, ReactNode> = {
    // Frontend
    "Python": <Code className="h-6 w-6 mb-2 mx-auto text-purple-400" />,
    "Dart": <FileJson className="h-6 w-6 mb-2 mx-auto text-purple-400" />,
    "CSS": <FileType className="h-6 w-6 mb-2 mx-auto text-purple-400" />,
    "MySQL": <Database className="h-6 w-6 mb-2 mx-auto text-purple-400" />,
    "JavaScript": <Braces className="h-6 w-6 mb-2 mx-auto text-purple-400" />,
    "HTML": <FileType className="h-6 w-6 mb-2 mx-auto text-purple-400" />,
    "MongoDB": <Server className="h-6 w-6 mb-2 mx-auto text-purple-400" />,
    "Flutter": <Smartphone className="h-6 w-6 mb-2 mx-auto text-purple-400" />,
    "TypeScript": <Braces className="h-6 w-6 mb-2 mx-auto text-purple-400" />,
    "TailwindCSS": <FileType className="h-6 w-6 mb-2 mx-auto text-purple-400" />,
    "Bootstrap": <FileType className="h-6 w-6 mb-2 mx-auto text-purple-400" />,
    "Node.js": <Server className="h-6 w-6 mb-2 mx-auto text-purple-400" />,
    "Express": <Server className="h-6 w-6 mb-2 mx-auto text-purple-400" />,
    
    // Backend
    "AWS": <Cloud className="h-6 w-6 mb-2 mx-auto text-purple-400" />,
    "RESTful API": <Api className="h-6 w-6 mb-2 mx-auto text-purple-400" />,
    "GraphQL": <Code className="h-6 w-6 mb-2 mx-auto text-purple-400" />,
  };

  return iconMap[name] || null;
} 