"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Briefcase, CheckCircle, User, Code2, GraduationCap } from "lucide-react";
import { SkillIcon } from "@/components/SkillIcon";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  
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
            </div>
          </div>

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