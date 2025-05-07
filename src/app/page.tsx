"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Briefcase, CheckCircle, User, Code2, GraduationCap, X, Download } from "lucide-react";
import { SkillIcon } from "@/components/SkillIcon";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showResume, setShowResume] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const resumeRef = useRef<HTMLDivElement>(null);
  
  const handleMouseDown = (e: React.MouseEvent) => {
    if (isZoomed) {
      e.preventDefault();
      setIsDragging(true);
      setStartPos({ x: e.clientX, y: e.clientY });
    }
  };
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && isZoomed) {
      e.preventDefault();
      
      // คำนวณระยะทางที่เคลื่อนที่
      const deltaX = e.clientX - startPos.x;
      const deltaY = e.clientY - startPos.y;
      
      // อัปเดตตำแหน่งเริ่มต้นใหม่สำหรับการเคลื่อนที่ครั้งต่อไป
      setStartPos({ x: e.clientX, y: e.clientY });
      
      // อัปเดตตำแหน่งของรูปภาพ
      setPosition(prev => {
        // จำกัดการเคลื่อนที่ให้อยู่ในขอบเขต
        const maxOffset = 200;
        const newX = Math.max(Math.min(prev.x + deltaX, maxOffset), -maxOffset);
        const newY = Math.max(Math.min(prev.y + deltaY, maxOffset), -maxOffset);
        
        return { x: newX, y: newY };
      });
    }
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  const handleZoomClick = () => {
    if (isZoomed) {
      setPosition({ x: 0, y: 0 });
    }
    setIsZoomed(!isZoomed);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const elementTop = rect.top + window.scrollY;
      
      if (scrollPosition > elementTop - window.innerHeight * 0.8) {
        el.classList.add('show');
      } else {
        el.classList.remove('show');
      }
    });
  }, [scrollPosition]);
  
  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);
  
  return (
    <main className="min-h-screen gradient-bg text-white">
      <div className="container mx-auto px-4 py-16 relative z-[1]">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 gradient-text name-text">
              Apisit Yambangyang
            </h1>
            <p className="text-2xl text-purple-200 mb-4">Computer Engineering</p>
            
            {/* Profile Image */}
            <div className="mb-8 flex justify-center">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-purple-400 shadow-lg select-none">
                <img 
                  src="/mee.jpg" 
                  alt="Apisit Yambangyang" 
                  className="w-full h-full object-cover object-[center_top] scale-[4.2] -translate-y-0.1 pointer-events-none"
                  draggable="false"
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
            </div>
            
            <div className="flex flex-col justify-center items-center gap-3">
            <a href="https://github.com/nalikanon"
               target="_blank"
               rel="" >
            <Button variant="outline" className="border-purple-400 text-purple-200 hover:bg-purple-800 min-w-32 px-6">
            <Github className="mr-2 h-4 w-4" />
            GitHub
            </Button>
            </a>
            
              <Button variant="outline" className="border-purple-400 text-purple-200 hover:bg-purple-800 min-w-32 px-6">
                <Mail className="mr-2 h-4 w-4" />
                Mail : apisityambangyang@gmail.com
              </Button>

              <Button 
                variant="outline" 
                className="border-purple-400 text-purple-200 hover:bg-purple-800 min-w-32 px-6"
                onClick={() => setShowResume(!showResume)}
              >
                <Briefcase className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </div>
          </div>

          {/* Resume Popup */}
          {showResume && (
            <div className="fixed top-1/2 right-10 transform -translate-y-1/2 z-50" ref={resumeRef}>
              <div className="relative animate-fadeIn">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute -top-3 -right-3 rounded-full bg-purple-900 hover:bg-purple-800 border border-purple-500 w-6 h-6 flex items-center justify-center z-10" 
                  onClick={() => setShowResume(false)}
                >
                  <X className="h-3 w-3 text-white" />
                </Button>
                
                <div className="bg-white rounded-md shadow-lg overflow-hidden max-h-[85vh] w-[450px] border-2 border-purple-500 relative">
                  <div 
                    className={`overflow-hidden w-full h-full relative ${isZoomed ? 'cursor-grab' : 'cursor-zoom-in'} ${isDragging ? 'cursor-grabbing' : ''}`}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                  >
                    <img 
                      src="/resume.png" 
                      alt="Resume"
                      className="w-full h-auto select-none"
                      style={isZoomed ? { 
                        transform: `scale(1.5) translate(${position.x/3}px, ${position.y/3}px)`,
                        transition: isDragging ? 'none' : 'transform 0.2s ease',
                        willChange: 'transform'
                      } : undefined}
                      onClick={!isZoomed ? handleZoomClick : undefined}
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />
                    
                    {isZoomed && (
                      <Button 
                        variant="destructive" 
                        size="sm" 
                        className="absolute bottom-3 left-1/2 transform -translate-x-1/2 py-1 px-3 text-xs bg-purple-700 hover:bg-purple-600 focus:ring-2 focus:ring-purple-500 border-none"
                        onClick={() => {
                          setIsZoomed(false);
                          setPosition({ x: 0, y: 0 });
                        }}
                      >
                        cancel zooming
                      </Button>
                    )}
                  </div>
                </div>
                
                <div className="bg-purple-900/90 p-2 mt-2 rounded-md shadow-lg flex justify-center">
                  <a href="/resume.png" download="Resume_ApisitYambangyang.png" className="text-center text-purple-300 text-xs hover:text-white">
                    <Download className="h-3 w-3 mx-auto mb-1" />
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* About Section */}
          <Card className="p-8 card-blur mb-8 animate-on-scroll">
            <div className="flex items-center mb-4">
              <User className="w-6 h-6 text-purple-400 mr-3" />
              <h2 className="text-3xl font-bold text-purple-200">About Me</h2>
            </div>
            <p className="text-purple-100 leading-relaxed">
              I'm a Computer Engineering student at Mae Fah Luang University with a strong interest in web development and AI. 
              I enjoy building real projects and recently created a ChatAI system for MFU using Claude 3.5 from AWS.
              I'm eager to keep learning, improve my skills, and grow as a full-stack developer.
            </p>
          </Card>

          {/* Education Section */}
          <Card className="p-8 card-blur mb-8 animate-on-scroll">
            <div className="flex items-center mb-4">
              <GraduationCap className="w-6 h-6 text-purple-400 mr-3" />
              <h2 className="text-3xl font-bold text-purple-200">Education</h2>
            </div>
            <div className="experience-timeline">
              <div className="timeline-item">
                <div className="timeline-dot">
                  <CheckCircle className="w-6 h-6 text-yellow-500" />
                </div>
                <div className="flex flex-col md:flex-row md:items-center mb-2">
                  <h3 className="text-2xl font-bold text-white mr-6">2022 - 2025</h3>
                </div>
                <h4 className="text-xl font-semibold text-purple-200 mb-3">Mae Fah Luang University</h4>
                <p className="text-purple-100 mb-2">Bachelor of Engineering in Computer Engineering</p>
              </div>
            </div>
          </Card>

          {/* Experience Section */}
          <Card className="p-8 card-blur mb-8 animate-on-scroll">
            <div className="flex items-center mb-4">
              <Briefcase className="w-6 h-6 text-purple-400 mr-3" />
              <h2 className="text-3xl font-bold text-purple-200">Experience</h2>
            </div>
            <div className="experience-timeline">
              {/* 2025 Experience */}
              <div className="timeline-item">
                <div className="timeline-dot">
                  <CheckCircle className="w-6 h-6 text-yellow-500" />
                </div>
                <div className="flex flex-col md:flex-row md:items-center mb-2">
                  <h3 className="text-2xl font-bold text-white mr-6">2025</h3>
                  <p className="text-purple-200">Jan - Present</p>
                </div>
                <h4 className="text-xl font-semibold text-purple-200 mb-3">Web Application ChatAI For Mae Fah Luang University</h4>
                <ul className="list-disc pl-5 space-y-2 text-purple-100">
                  <li>Developed a ChatAI web application for Mae Fah Luang University using Claude 3.5 Sonnet via AWS.</li>
                  <li>Front-end, Back-end</li>
                  <li>JavaScript, TypeScript, TailwindCSS, NodeJS Express, MongoDB</li>
                </ul>
              </div>
              
              {/* 2024 Experience 1 */}
              <div className="timeline-item">
                <div className="timeline-dot">
                  <CheckCircle className="w-6 h-6 text-yellow-500" />
                </div>
                <div className="flex flex-col md:flex-row md:items-center mb-2">
                  <h3 className="text-2xl font-bold text-white mr-6">2024</h3>
                  <p className="text-purple-200">June - Nov</p>
                </div>
                <h4 className="text-xl font-semibold text-purple-200 mb-3">Application Booking Library System</h4>
                <ul className="list-disc pl-5 space-y-2 text-purple-100">
                  <li>Application for Library room booking</li>
                  <li>Front-end, Back-end</li>
                  <li>Dart, Flutter, JavaScript, Bootstrap, NodeJS Express, MySQL</li>
                </ul>
              </div>
              
              {/* 2024 Experience 2 */}
              <div className="timeline-item">
                <div className="timeline-dot">
                  <CheckCircle className="w-6 h-6 text-yellow-500" />
                </div>
                <div className="flex flex-col md:flex-row md:items-center mb-2">
                  <h3 className="text-2xl font-bold text-white mr-6">2024</h3>
                  <p className="text-purple-200">Jan - May</p>
                </div>
                <h4 className="text-xl font-semibold text-purple-200 mb-3">Web Application Booking Hotel System</h4>
                <ul className="list-disc pl-5 space-y-2 text-purple-100">
                  <li>Web application for hotel room booking</li>
                  <li>Front-end, Back-end</li>
                  <li>JavaScript, CSS, Bootstrap, NodeJS Express, MySQL</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Skills Section */}
          <Card className="p-8 card-blur mb-8 animate-on-scroll">
            <div className="flex items-center mb-4">
              <Code2 className="w-6 h-6 text-purple-400 mr-3" />
              <h2 className="text-3xl font-bold text-purple-200">Skills</h2>
            </div>
            
            {/* Frontend Skills */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-purple-300">Frontend</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["JavaScript", "TypeScript", "HTML", "CSS", "TailwindCSS", "Bootstrap", "Flutter", "Dart"].map((skill, index) => (
                  <div 
                    key={skill} 
                    className="skill-item animate-skills"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <SkillIcon name={skill} />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Backend Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-purple-300">Backend</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Python", "JavaScript", "Node.js", "Express", "MongoDB", "MySQL"].map((skill, index) => (
                  <div 
                    key={skill} 
                    className="skill-item animate-skills"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <SkillIcon name={skill} />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Projects Section - ถ้ามี */}
          <Card className="p-8 card-blur animate-on-scroll">
            {/* ... existing projects content ... */}
          </Card>
        </div>
      </div>
    </main>
  );
} 