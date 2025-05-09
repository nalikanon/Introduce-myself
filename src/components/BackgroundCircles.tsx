"use client";

import { useTheme } from "./ThemeProvider";
import { useEffect, useState } from "react";

export function BackgroundCircles() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted || theme !== "light") return null;
  
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Large circles */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-300/20 blur-3xl" style={{ top: '-200px', right: '-200px', animation: 'float-circle-1 25s infinite alternate ease-in-out' }} />
      
      <div className="absolute w-[800px] h-[800px] rounded-full bg-blue-500/15 blur-3xl" style={{ bottom: '-300px', left: '-300px', animation: 'float-circle-2 30s infinite alternate-reverse ease-in-out' }} />
      
      {/* Medium circles */}
      <div className="absolute w-[300px] h-[300px] rounded-full bg-sky-400/25 blur-2xl" style={{ top: '40%', right: '-100px', animation: 'float-circle-3 20s infinite alternate ease-in-out' }} />
      
      <div className="absolute w-[250px] h-[250px] rounded-full bg-indigo-400/20 blur-xl" style={{ top: '30%', left: '50px', animation: 'float-circle-4 18s infinite alternate-reverse ease-in-out' }} />
      
      {/* Small circles */}
      <div className="absolute w-[150px] h-[150px] rounded-full bg-blue-200/30 blur-md" style={{ top: '20%', left: '30%', animation: 'float-circle-5 15s infinite alternate ease-in-out' }} />
      
      <div className="absolute w-[100px] h-[100px] rounded-full bg-sky-300/30 blur-md" style={{ bottom: '15%', right: '25%', animation: 'float-circle-6 12s infinite alternate-reverse ease-in-out' }} />
      
      <div className="absolute w-[120px] h-[120px] rounded-full bg-blue-400/20 blur-md" style={{ top: '60%', left: '15%', animation: 'float-circle-7 18s infinite alternate ease-in-out' }} />
      
      <div className="absolute w-[80px] h-[80px] rounded-full bg-indigo-300/25 blur-sm" style={{ top: '10%', right: '40%', animation: 'float-circle-8 10s infinite alternate-reverse ease-in-out' }} />
      
      <style jsx>{`
        @keyframes float-circle-1 {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-40px, 40px); }
        }
        @keyframes float-circle-2 {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, -60px); }
        }
        @keyframes float-circle-3 {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-30px, 30px); }
        }
        @keyframes float-circle-4 {
          0% { transform: translate(0, 0); }
          100% { transform: translate(35px, -25px); }
        }
        @keyframes float-circle-5 {
          0% { transform: translate(0, 0); }
          100% { transform: translate(20px, 30px); }
        }
        @keyframes float-circle-6 {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-25px, -15px); }
        }
        @keyframes float-circle-7 {
          0% { transform: translate(0, 0); }
          100% { transform: translate(15px, -35px); }
        }
        @keyframes float-circle-8 {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-15px, 20px); }
        }
      `}</style>
    </div>
  );
} 