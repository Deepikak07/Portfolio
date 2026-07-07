"use client";

import Link from "next/link";
import { ArrowLeft, Printer, Phone, Mail, MapPin } from "lucide-react";

// Custom SVG Icons to bypass lucide-react brand icon version issues
const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function ResumePage() {
  const objective = "Aspiring Computer Science and Data Science student with a strong foundation in programming, data analysis, and machine learning. Passionate about exploring the intersection of technology and data to solve real-world problems. Seeking an opportunity to apply academic knowledge, enhance technical expertise, and contribute to meaningful projects in a dynamic and growth-oriented environment.";

  const education = [
    {
      degree: "B.E. in Computer Science and Data Science",
      institution: "Sri Venkateshwara College of Engineering, Bangalore",
      duration: "2022-2026",
      score: "CGPA: 9.2"
    },
    {
      degree: "Pre-University (PCMB)",
      institution: "Gnana Jyothi Pre-University College, Jangamakote Cross",
      duration: "2022",
      score: "Result: 85.16%"
    },
    {
      degree: "Secondary School (CBSE)",
      institution: "Gnana Jyothi School, Jangamakote Cross",
      duration: "2020",
      score: "Result: 66.8%"
    }
  ];

  const experience = [
    {
      role: "Python & Machine Learning Intern",
      company: "Contriver",
      duration: "Feb 2026 – May 2026",
      points: [
        "Learned and applied Python, Machine Learning, and Deep Learning concepts through hands-on projects and real-world datasets."
      ]
    }
  ];

  const projects = [
    {
      title: "Automatic Speech-to-Sign Language Translator",
      description: "Developed an AI-based speech-to-sign language translation system using Python and NLP. Processed speech input, converted it to text, and mapped it to sign language gestures to improve communication accessibility.",
      tech: "Python, NLP, Speech Recognition, Machine Learning"
    },
    {
      title: "Symptom Analysis and Treatment Recommendation System",
      description: "Developed a machine learning-based healthcare recommendation system using Python. Performed symptom analysis, disease prediction, and treatment recommendations by integrating NLP techniques with healthcare data.",
      tech: "Python, Machine Learning, NLP, Scikit-learn, SQL"
    }
  ];

  const techSkills = [
    { category: "Programming Languages", skills: ["Python", "SQL", "Java (Basic)"] },
    { category: "Core Subjects", skills: ["Data Structures & Algorithms (DSA)", "Database Management System (DBMS)", "Operating Systems (OS)"] },
    { category: "Technologies & Tools", skills: ["Machine Learning", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"] },
    { category: "Data Analysis", skills: ["Data Cleaning", "Data Preprocessing", "Feature Engineering", "Model Evaluation"] },
    { category: "Data Visualization", skills: ["Power BI", "Tableau"] },
    { category: "Productivity Tools", skills: ["Microsoft Excel", "Git", "Visual Studio Code"] }
  ];

  const softSkills = [
    "Team Work",
    "Time management",
    "Adaptability",
    "Effective Communication",
    "Problem solving"
  ];

  const achievements = [
    "Hackathon Participation – Sri Krishna Institute of Technology",
    "Ideathon Participation – Brindavan College of Engineering",
    "Mini Anveshana Project Idea Presentation – Sri Venkateshwara College of Engineering",
    "Workshop on Tableau & Figma – BMS College of Engineering",
    "IR 4.0 Foundation Course – Edunet Foundation (in collaboration with Microsoft & SAP)",
    "Data Science with Python Internship – Agratas Academy Pvt. Ltd. (4 Weeks)",
    "Data Science Internship – System Tron (4 Weeks)"
  ];

  const languages = ["English", "Kannada", "Telugu"];
  const hobbies = ["Sketching", "Travelling"];

  return (
    <div className="min-h-screen bg-slate-900/10 dark:bg-black/40 py-10 px-4 sm:px-6 lg:px-8">
      {/* Interactive top toolbar (Hidden when printing) */}
      <div className="max-w-4xl mx-auto flex justify-between items-center mb-8 no-print bg-bg-secondary p-4 rounded-2xl border border-border-glass shadow-sm">
        <Link
          href="/"
          className="flex items-center gap-2 text-text-sub hover:text-text-main transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </Link>
        
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-md shadow-brand-blue/15 transition-all cursor-pointer hover:scale-105 active:scale-95"
        >
          <Printer className="w-4 h-4" /> Print / Save PDF
        </button>
      </div>

      {/* Main Resume Sheet */}
      <div className="max-w-4xl mx-auto bg-white text-slate-900 shadow-xl border border-slate-200/50 p-8 sm:p-12 rounded-2xl print-page print:p-0 print:border-none print:shadow-none print:rounded-none">
        
        {/* Header */}
        <div className="border-b-2 border-slate-800 pb-6 mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 uppercase">
              Deepika K
            </h1>
            <p className="text-md sm:text-lg font-bold text-slate-700 mt-1 tracking-wide uppercase">
              Computer Science & Data Science Engineer
            </p>
          </div>
          
          <div className="text-sm text-slate-600 space-y-1 sm:text-right">
            <p className="flex items-center md:justify-end gap-2">
              <Phone className="w-4 h-4 text-slate-700 inline" /> +91 9019987641
            </p>
            <p className="flex items-center md:justify-end gap-2">
              <Mail className="w-4 h-4 text-slate-700 inline" /> deepika.kraj2005@gmail.com
            </p>
            <p className="flex items-center md:justify-end gap-2">
              <MapPin className="w-4 h-4 text-slate-700 inline" /> Anupahalli, Hoskote, Bangalore(rural dist)
            </p>
            <p className="flex items-center md:justify-end gap-2">
              <Linkedin className="w-4 h-4 text-slate-700 inline" /> 
              <a href="https://www.linkedin.com/in/deepika-deepu-710522310" target="_blank" className="hover:underline">
                linkedin.com/in/deepika-deepu-710522310
              </a>
            </p>
            <p className="flex items-center md:justify-end gap-2">
              <Github className="w-4 h-4 text-slate-700 inline" />
              <a href="https://github.com/Deepikak07" target="_blank" className="hover:underline">
                github.com/Deepikak07
              </a>
            </p>
          </div>
        </div>

        {/* Objective */}
        <div className="mb-6">
          <h2 className="text-md font-bold text-slate-900 border-b border-slate-300 pb-1 mb-2 uppercase tracking-wider">
            Objective
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed text-justify">
            {objective}
          </p>
        </div>

        {/* Grid layout for Education, Experience, Projects vs Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column (Education, Experience, Projects) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Education */}
            <div>
              <h2 className="text-md font-bold text-slate-900 border-b border-slate-300 pb-1 mb-3 uppercase tracking-wider">
                Education
              </h2>
              <div className="space-y-3">
                {education.map((edu, idx) => (
                  <div key={idx} className="text-sm">
                    <div className="flex justify-between font-bold text-slate-800">
                      <span>{edu.degree}</span>
                      <span className="font-normal text-slate-500 text-xs shrink-0 ml-2">{edu.duration}</span>
                    </div>
                    <p className="text-xs text-slate-600 font-medium">{edu.institution}</p>
                    <p className="text-xs font-semibold text-slate-700 mt-0.5">{edu.score}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-md font-bold text-slate-900 border-b border-slate-300 pb-1 mb-3 uppercase tracking-wider">
                Internship Experience
              </h2>
              <div className="space-y-3">
                {experience.map((exp, idx) => (
                  <div key={idx} className="text-sm">
                    <div className="flex justify-between font-bold text-slate-800">
                      <span>{exp.role}</span>
                      <span className="font-normal text-slate-500 text-xs shrink-0 ml-2">{exp.duration}</span>
                    </div>
                    <p className="text-xs text-slate-600 font-medium">{exp.company}</p>
                    <ul className="list-disc list-inside text-xs text-slate-700 mt-1.5 space-y-1">
                      {exp.points.map((pt, pIdx) => (
                        <li key={pIdx} className="text-justify leading-relaxed">{pt}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-md font-bold text-slate-900 border-b border-slate-300 pb-1 mb-3 uppercase tracking-wider">
                Projects
              </h2>
              <div className="space-y-4">
                {projects.map((proj, idx) => (
                  <div key={idx} className="text-sm">
                    <h3 className="font-bold text-slate-800">{proj.title}</h3>
                    <p className="text-xs text-slate-700 mt-1 leading-relaxed text-justify">
                      {proj.description}
                    </p>
                    <p className="text-xs text-slate-600 mt-1.5">
                      <strong className="text-slate-800">Technologies:</strong> {proj.tech}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (Skills, Achievements, Hobbies) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Technical Skills */}
            <div>
              <h2 className="text-md font-bold text-slate-900 border-b border-slate-300 pb-1 mb-3 uppercase tracking-wider">
                Technical Skills
              </h2>
              <div className="space-y-2">
                {techSkills.map((category, idx) => (
                  <div key={idx} className="text-xs">
                    <span className="font-bold text-slate-800 block mb-0.5">{category.category}:</span>
                    <span className="text-slate-700">{category.skills.join(", ")}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h2 className="text-md font-bold text-slate-900 border-b border-slate-300 pb-1 mb-2 uppercase tracking-wider">
                Soft Skills
              </h2>
              <p className="text-xs text-slate-700 leading-relaxed">
                {softSkills.join(" • ")}
              </p>
            </div>

            {/* Achievements & Certifications */}
            <div>
              <h2 className="text-md font-bold text-slate-900 border-b border-slate-300 pb-1 mb-3 uppercase tracking-wider">
                Achievements & Certifications
              </h2>
              <ul className="list-disc list-inside text-[11px] sm:text-xs text-slate-700 space-y-1">
                {achievements.map((item, idx) => (
                  <li key={idx} className="leading-snug">{item}</li>
                ))}
              </ul>
            </div>

            {/* Languages */}
            <div>
              <h2 className="text-md font-bold text-slate-900 border-b border-slate-300 pb-1 mb-1.5 uppercase tracking-wider">
                Languages
              </h2>
              <p className="text-xs text-slate-700">
                {languages.join(" • ")}
              </p>
            </div>

            {/* Hobbies */}
            <div>
              <h2 className="text-md font-bold text-slate-900 border-b border-slate-300 pb-1 mb-1.5 uppercase tracking-wider">
                Hobbies
              </h2>
              <p className="text-xs text-slate-700">
                {hobbies.join(" • ")}
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
