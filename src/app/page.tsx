import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Briefcase, CheckCircle } from "lucide-react";
import { SkillIcon } from "@/components/SkillIcon";

export default function Home() {
  return (
    <main className="min-h-screen gradient-bg text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 gradient-text name-text">
              Apisit Yambangyang
            </h1>
            <p className="text-2xl text-purple-200 mb-8">AI Developer & Software Engineer</p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" className="border-purple-400 text-purple-200 hover:bg-purple-800">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Button variant="outline" className="border-purple-400 text-purple-200 hover:bg-purple-800">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
              <Button variant="outline" className="border-purple-400 text-purple-200 hover:bg-purple-800">
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </Button>
            </div>
          </div>

          {/* About Section */}
          <Card className="p-8 card-blur mb-8">
            <h2 className="text-3xl font-bold mb-4 text-purple-200">About Me</h2>
            <p className="text-purple-100 leading-relaxed">
              I'm a Computer Engineering student at Mae Fah Luang University with a strong interest in web development and AI. 
              I enjoy building real projects and recently created a ChatAI system for MFU using Claude 3.5 from AWS.
              I'm eager to keep learning, improve my skills, and grow as a full-stack developer.
            </p>
          </Card>

          {/* Experience Section */}
          <Card className="p-8 card-blur mb-8">
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
                  <li>Integrated with MongoDB, TailwindCSS, TypeScript, and Node.js for a seamless full-stack experience.</li>
                  <li>Front-end, Back-end</li>
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
                  <li>Flutter, MySQL</li>
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
                  <li>NodeJS Express, MySQL</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Skills Section */}
          <Card className="p-8 card-blur mb-8">
            <h2 className="text-3xl font-bold mb-4 text-purple-200">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Python", "JavaScript", "HTML", "CSS", "Dart", "Flutter", "MongoDB", "MySQL"].map((skill, index) => (
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
          </Card>

          {/* Projects Section */}
          <Card className="p-8 card-blur">
            <h2 className="text-3xl font-bold mb-4 text-purple-200">Projects</h2>
            <div className="space-y-4">
              <div className="p-4 bg-purple-800/30 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-200 mb-2">MFU ChatAI System</h3>
                <p className="text-purple-100">
                  Developed a ChatAI system for Mae Fah Luang University using Claude 3.5 from AWS to provide question answering services and assist students.
                </p>
              </div>
              <div className="p-4 bg-purple-800/30 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-200 mb-2">Flutter Mobile Application</h3>
                <p className="text-purple-100">
                  Built a mobile application with Flutter and Dart connected to MongoDB database to create a smooth user experience.
                </p>
              </div>
              <div className="p-4 bg-purple-800/30 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-200 mb-2">Web Portfolio</h3>
                <p className="text-purple-100">
                  Designed and developed a personal portfolio website using Next.js, TypeScript, and Tailwind CSS with responsive and beautiful design.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
} 