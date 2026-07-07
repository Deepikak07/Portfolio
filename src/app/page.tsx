"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Phone, Mail, MapPin, Terminal, ArrowRight, FileText, 
  Award, Briefcase, Code, Database, Eye, CheckCircle, 
  Sparkles, Compass, Palette, Languages, Send, User, ChevronRight, MessageSquare,
  Cpu, ExternalLink
} from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";
import LoadingScreen from "@/components/LoadingScreen";
import PortfolioContainer from "@/components/PortfolioContainer";

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

export default function PortfolioPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Collaboration",
    notes: ""
  });

  // Typing animation role definitions
  const [roleText, setRoleText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    "Computer Science & Data Science Engineer",
    "Python & Machine Learning Specialist",
    "AI Solution Developer"
  ];
  
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullText = roles[roleIndex];
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setRoleText(currentFullText.substring(0, roleText.length - 1));
      }, 30);
    } else {
      timer = setTimeout(() => {
        setRoleText(currentFullText.substring(0, roleText.length + 1));
      }, 70);
    }
    
    if (!isDeleting && roleText === currentFullText) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && roleText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }
    
    return () => clearTimeout(timer);
  }, [roleText, isDeleting, roleIndex]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      toast.success("Message sent successfully! Thank you.");
      setFormData({ name: "", email: "", subject: "Collaboration", notes: "" });
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Section Fade-in Animation Config
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  // Resume details arrays
  const softSkills = [
    { name: "Team Work", desc: "Collaborating productively in technical and multi-functional team spaces." },
    { name: "Time Management", desc: "Efficiently organizing project milestones and class schedules." },
    { name: "Adaptability", desc: "Quickly learning new technologies, tools, and methodologies." },
    { name: "Effective Communication", desc: "Expressing complex technical findings in simple terms." },
    { name: "Problem Solving", desc: "Applying structural thinking to debug code and analyze datasets." }
  ];

  const languages = ["English", "Kannada", "Telugu"];
  const hobbies = [
    { name: "Sketching", icon: Palette },
    { name: "Travelling", icon: Compass }
  ];

  const experience = {
    role: "Python & Machine Learning Intern",
    company: "Contriver",
    duration: "Feb 2026 – May 2026",
    points: [
      "Learned and applied Python, Machine Learning, and Deep Learning concepts through hands-on projects and real-world datasets."
    ]
  };

  const projects = [
    {
      title: "Automatic Speech-to-Sign Language Translator",
      desc: "Developed an AI-based speech-to-sign language translation system using Python and NLP. Processed speech input, converted it to text, and mapped it to sign language gestures to improve communication accessibility.",
      techs: ["Python", "NLP", "Speech Recognition", "Machine Learning"],
      github: "https://github.com/Deepikak07",
      image: "/project-sign.png"
    },
    {
      title: "Symptom Analysis and Treatment Recommendation System",
      desc: "Developed a machine learning-based healthcare recommendation system using Python. Performed symptom analysis, disease prediction, and treatment recommendations by integrating NLP techniques with healthcare data.",
      techs: ["Python", "Machine Learning", "NLP", "Scikit-learn", "SQL"],
      github: "https://github.com/Deepikak07",
      image: "/project-healthcare.png"
    }
  ];

  const education = [
    {
      degree: "B.E. in Computer Science and Data Science",
      inst: "Sri Venkateshwara College of Engineering, Bangalore",
      duration: "2022 - 2026",
      details: "CGPA: 9.2"
    },
    {
      degree: "Pre-University (PCMB)",
      inst: "Gnana Jyothi Pre-University College, Jangamakote Cross",
      duration: "2022",
      details: "Result: 85.16%"
    },
    {
      degree: "Secondary School (CBSE)",
      inst: "Gnana Jyothi School, Jangamakote Cross",
      duration: "2020",
      details: "Result: 66.8%"
    }
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

  const skillGroups = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", pct: 90 },
        { name: "SQL", pct: 85 },
        { name: "Java (Basic)", pct: 60 }
      ]
    },
    {
      title: "Technologies & Tools",
      icon: Cpu,
      skills: [
        { name: "Machine Learning", pct: 88 },
        { name: "Scikit-learn", pct: 85 },
        { name: "Pandas", pct: 88 },
        { name: "NumPy", pct: 85 },
        { name: "Matplotlib", pct: 80 }
      ]
    },
    {
      title: "Data Analysis",
      icon: Database,
      skills: [
        { name: "Data Cleaning", pct: 90 },
        { name: "Data Preprocessing", pct: 90 },
        { name: "Feature Engineering", pct: 85 },
        { name: "Model Evaluation", pct: 82 }
      ]
    },
    {
      title: "Data Visualization & Other Tools",
      icon: Eye,
      skills: [
        { name: "Power BI", pct: 80 },
        { name: "Tableau", pct: 75 },
        { name: "Git", pct: 82 },
        { name: "Visual Studio Code", pct: 90 },
        { name: "Microsoft Excel", pct: 85 }
      ]
    },
    {
      title: "Core Computer Science",
      icon: Terminal,
      skills: [
        { name: "Data Structures & Algorithms (DSA)", pct: 80 },
        { name: "Database Management System (DBMS)", pct: 85 },
        { name: "Operating Systems (OS)", pct: 78 }
      ]
    }
  ];

  const stats = [
    { value: "9.2", label: "B.E. CGPA" },
    { value: "85.1%", label: "Pre-University Result" },
    { value: "7+", label: "Achievements & Internships" },
    { value: "2", label: "AI & ML Projects" }
  ];

  return (
    <>
      <LoadingScreen />
      
      <PortfolioContainer>
        {/* HERO SECTION */}
        <section id="hero" className="min-h-screen flex items-center justify-center pt-24 pb-16 relative overflow-hidden">
          {/* Ambient light effects */}
          <div className="absolute top-[20%] right-[10%] w-[350px] aspect-square rounded-full bg-brand-cyan/15 blur-[100px] pointer-events-none animate-pulse-glow" />
          <div className="absolute bottom-[20%] left-[5%] w-[300px] aspect-square rounded-full bg-brand-purple/10 blur-[90px] pointer-events-none animate-pulse-glow" style={{ animationDelay: "3s" }} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full relative z-10">
            {/* Left Hero column */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="lg:col-span-7 space-y-6 text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-semibold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-brand-cyan" /> Recruiter-Friendly Personal Portfolio
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.02em] text-text-main leading-[0.95] max-w-3xl text-balance">
                Hi, I'm <span className="gradient-text">Deepika K</span>
              </h1>
              
              {/* Dynamic typing role container */}
              <div className="min-h-14 sm:min-h-12">
                <span className="typing-cursor bg-linear-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent font-semibold text-xl sm:text-2xl md:text-[1.75rem] leading-tight block max-w-2xl">
                  {roleText}
                </span>
              </div>
              
              <p className="text-base sm:text-lg text-text-sub leading-8 max-w-2xl">
                Aspiring Computer Science & Data Science student with a strong foundation in programming, analytics, and machine learning models. Passionate about applying academic theory and practical internship experience to develop intelligent software tools.
              </p>
              
              {/* Stats Counters */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 pt-2 pb-4">
                {stats.map((stat, idx) => (
                  <div key={idx} className="rounded-2xl border border-border-glass/70 bg-white/5 px-4 py-4 space-y-1.5">
                    <span className="text-xl sm:text-2xl md:text-3xl font-bold text-text-main block tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-[11px] sm:text-xs text-text-sub font-semibold uppercase tracking-[0.2em] block">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-brand-blue hover:opacity-90 text-white font-semibold px-6 sm:px-8 py-3.5 rounded-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 text-sm shadow-lg shadow-brand-blue/20 cursor-pointer"
                >
                  View Projects <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/resume"
                  className="bg-white/5 hover:bg-white/10 text-text-main font-semibold px-6 sm:px-8 py-3.5 rounded-xl border border-border-glass transition-all flex items-center justify-center gap-2 text-sm cursor-pointer hover:scale-[1.02] active:scale-95"
                >
                  <FileText className="w-4 h-4 text-brand-purple" /> Download Resume
                </Link>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-6 py-3.5 rounded-xl text-sm font-semibold text-text-sub hover:text-text-main hover:bg-white/5 transition-colors cursor-pointer text-center"
                >
                  Contact Me
                </a>
              </div>
            </motion.div>

            {/* Right Hero column (Professional Photo in Neon Glowing Frame) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-5 flex justify-center items-center relative mt-8 lg:mt-0"
            >
              {/* Double border glowing card container */}
              <div className="relative w-72 sm:w-80 aspect-[3/4] rounded-3xl p-1.5 gradient-bg shadow-2xl shadow-brand-blue/20 group">
                <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-brand-blue via-brand-purple to-brand-cyan opacity-40 blur-xl group-hover:opacity-60 transition-opacity duration-500" />
                
                {/* Photo masking block */}
                <div className="relative w-full h-full bg-[#0a0e17] rounded-[22px] overflow-hidden border border-white/5 flex items-center justify-center">
                  <img 
                    src="/profile.jpg" 
                    alt="Deepika K" 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
                  />
                  
                  {/* Glass layout card overlay */}
                  <div className="absolute bottom-4 left-4 right-4 glass p-3.5 rounded-xl border border-white/10 text-center">
                    <span className="text-xs font-bold text-white tracking-widest uppercase block">DEEPIKA K</span>
                    <span className="text-[10px] text-brand-cyan font-semibold block mt-0.5 uppercase tracking-wide">Bangalore, India</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ABOUT ME SECTION */}
        <section id="about" className="py-20 border-t border-border-glass/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto space-y-4 mb-16"
            >
              <h2 className="section-heading font-semibold tracking-[-0.02em] text-text-main">
                About <span className="bg-linear-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">Me</span>
              </h2>
              <p className="section-subtitle text-text-sub max-w-2xl mx-auto">
                Objective summary, soft skills, languages, and personal hobbies.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Profile Card & Objective */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="lg:col-span-2 glass-card p-8 md:p-10 relative overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-blue/15 rounded-full blur-2xl pointer-events-none" />
                <h3 className="text-2xl font-bold mb-6 text-text-main flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-brand-cyan" /> Objective
                </h3>
                <p className="text-text-sub leading-8 mb-6 text-left sm:text-justify text-base">
                  Aspiring Computer Science and Data Science student with a strong foundation in programming, data analysis, and machine learning. Passionate about exploring the intersection of technology and data to solve real-world problems. Seeking an opportunity to apply academic knowledge, enhance technical expertise, and contribute to meaningful projects in a dynamic and growth-oriented environment.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 pt-6 border-t border-border-glass">
                  <div>
                    <h4 className="text-xs font-bold text-text-sub uppercase tracking-[0.2em] mb-2">Location</h4>
                    <p className="text-sm font-semibold text-text-main flex items-center gap-1.5 leading-7">
                      <MapPin className="w-4 h-4 text-brand-blue" /> Anupahalli, Hoskote, Bangalore Rural
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-text-sub uppercase tracking-[0.2em] mb-2">Technical Core</h4>
                    <p className="text-sm font-semibold text-text-main flex items-center gap-1.5 leading-7">
                      <Sparkles className="w-4 h-4 text-brand-purple" /> Python, ML Models, Data Analytics
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Languages & Hobbies */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="glass-card p-8 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold mb-6 text-text-main flex items-center gap-2">
                    <Languages className="w-5 h-5 text-brand-purple" /> Languages
                  </h3>
                  <div className="flex flex-wrap gap-2.5 mb-8">
                    {languages.map((lang) => (
                      <span key={lang} className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-border-glass text-xs font-semibold text-text-main">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-border-glass">
                  <h3 className="text-xl font-bold mb-6 text-text-main flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-brand-cyan" /> Hobbies & Interests
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {hobbies.map((hobby) => {
                      const Icon = hobby.icon;
                      return (
                        <div key={hobby.name} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-border-glass hover:border-brand-blue/30 transition-all">
                          <div className="bg-brand-blue/10 p-2 rounded-lg">
                            <Icon className="w-4 h-4 text-brand-blue" />
                          </div>
                          <span className="text-xs font-semibold text-text-main">{hobby.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Soft Skills Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-8 text-text-main text-center">Core Soft Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="glass-card p-6 flex flex-col justify-between hover:border-brand-purple/30 group"
                  >
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-brand-purple/10 text-brand-purple flex items-center justify-center mb-4 font-bold text-sm group-hover:scale-110 transition-transform">
                        0{index + 1}
                      </div>
                      <h4 className="font-bold text-sm text-text-main mb-2">{skill.name}</h4>
                      <p className="text-xs sm:text-sm text-text-sub leading-7">{skill.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TECH SKILLS SECTION */}
        <section id="skills" className="py-20 border-t border-border-glass/40 bg-white/[0.005] dark:bg-black/[0.005]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto space-y-4 mb-16"
            >
              <h2 className="section-heading font-semibold tracking-[-0.02em] text-text-main">
                Technical <span className="bg-linear-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">Skills</span>
              </h2>
              <p className="section-subtitle text-text-sub max-w-2xl mx-auto">
                Structured categories of programming tools, development frameworks, and database packages.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillGroups.map((group, idx) => {
                const Icon = group.icon;
                return (
                  <motion.div
                    key={group.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="glass-card p-8 relative overflow-hidden flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-border-glass">
                        <div className="bg-brand-blue/10 p-2.5 rounded-xl border border-brand-blue/20">
                          <Icon className="w-5 h-5 text-brand-blue" />
                        </div>
                        <h3 className="font-bold text-lg text-text-main">{group.title}</h3>
                      </div>
                      
                      <div className="space-y-4">
                        {group.skills.map((skill) => (
                          <div key={skill.name} className="space-y-1.5">
                            <div className="flex justify-between items-center text-xs font-semibold">
                              <span className="text-text-main">{skill.name}</span>
                              <span className="text-brand-cyan">{skill.pct}%</span>
                            </div>
                            <div className="w-full h-2 bg-white/5 border border-border-glass rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.pct}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="h-full bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan rounded-full"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-20 border-t border-border-glass/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto space-y-4 mb-16"
            >
              <h2 className="section-heading font-semibold tracking-[-0.02em] text-text-main">
                Internship <span className="bg-linear-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">Experience</span>
              </h2>
              <p className="section-subtitle text-text-sub max-w-2xl mx-auto">
                Applied classroom concepts to practical settings during internship cycles.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="relative pl-8 sm:pl-12 border-l-2 border-brand-blue/30 space-y-4 pb-4"
              >
                {/* Timeline node */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-bg-primary border-2 border-brand-blue flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="text-xl font-bold text-text-main">{experience.role}</h3>
                    <p className="text-sm font-semibold text-brand-purple">{experience.company}</p>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue w-fit">
                    {experience.duration}
                  </span>
                </div>

                <ul className="list-disc list-inside space-y-2 text-sm text-text-sub leading-7 pt-2">
                  {experience.points.map((pt, index) => (
                    <li key={index} className="text-justify">{pt}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-20 border-t border-border-glass/40 bg-white/[0.005] dark:bg-black/[0.005]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto space-y-4 mb-16"
            >
              <h2 className="section-heading font-semibold tracking-[-0.02em] text-text-main">
                Featured <span className="bg-linear-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">Projects</span>
              </h2>
              <p className="section-subtitle text-text-sub max-w-2xl mx-auto">
                Applied AI systems and Machine Learning frameworks to complete core functional project models.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {projects.map((proj) => (
                <motion.div
                  key={proj.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="glass-card overflow-hidden flex flex-col justify-between group border border-border-glass rounded-[24px]"
                >
                  {/* Project Image Header */}
                  <div className="relative w-full aspect-video overflow-hidden border-b border-border-glass">
                    <img 
                      src={proj.image} 
                      alt={proj.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17]/80 via-[#0a0e17]/20 to-transparent pointer-events-none" />
                  </div>

                  <div className="p-8 space-y-5 flex-1 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div className="bg-brand-blue/10 p-2 rounded-lg border border-brand-blue/20 text-brand-blue">
                          <Terminal className="w-4 h-4" />
                        </div>
                        <div className="flex items-center gap-2">
                          <a
                            href={proj.github}
                            target="_blank"
                            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 border border-border-glass hover:bg-white/10 hover:text-text-main text-text-sub text-xs font-semibold transition-all"
                          >
                            <Github className="w-3.5 h-3.5" /> Source Code
                          </a>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-text-main group-hover:text-brand-blue transition-colors duration-300">
                        {proj.title}
                      </h3>
                      
                      <p className="text-sm text-text-sub leading-7 text-left sm:text-justify">
                        {proj.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-5 border-t border-border-glass">
                      <h4 className="text-xs font-bold text-text-sub uppercase tracking-[0.2em] mb-2.5">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {proj.techs.map((tech) => (
                          <span key={tech} className="px-2.5 py-1 rounded-lg bg-brand-purple/10 border border-brand-purple/20 text-xs font-semibold text-brand-purple">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="py-20 border-t border-border-glass/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto space-y-4 mb-16"
            >
              <h2 className="section-heading font-semibold tracking-[-0.02em] text-text-main">
                Education <span className="bg-linear-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">Timeline</span>
              </h2>
              <p className="section-subtitle text-text-sub max-w-2xl mx-auto">
                Academic track, performance details, and institution backgrounds.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto relative border-l-2 border-brand-blue/20 pl-8 space-y-12">
              {education.map((edu, idx) => (
                <motion.div
                  key={edu.degree}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="relative space-y-2"
                >
                  {/* Timeline circle */}
                  <div className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-bg-primary border-2 border-brand-blue flex items-center justify-center shadow-lg">
                    <div className="w-2 h-2 rounded-full bg-brand-cyan" />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-lg font-bold text-text-main">{edu.degree}</h3>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue w-fit">
                      {edu.duration}
                    </span>
                  </div>
                  
                  <p className="text-sm font-semibold text-brand-purple">{edu.inst}</p>
                  <p className="text-sm font-bold text-text-main bg-white/5 border border-border-glass px-3.5 py-1.5 rounded-lg w-fit">
                    {edu.details}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS & CERTIFICATIONS SECTION */}
        <section id="certifications" className="py-20 border-t border-border-glass/40 bg-white/[0.005] dark:bg-black/[0.005]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto space-y-4 mb-16"
            >
              <h2 className="section-heading font-semibold tracking-[-0.02em] text-text-main">
                Achievements & <span className="bg-linear-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">Certifications</span>
              </h2>
              <p className="section-subtitle text-text-sub max-w-2xl mx-auto">
                Hackathons, presentations, credentials, and supplementary training programs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {achievements.map((ach, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="glass-card p-6 flex items-start gap-4 hover:border-brand-purple/35 group"
                >
                  <div className="bg-brand-purple/10 p-3 rounded-xl border border-brand-purple/20 text-brand-purple shrink-0 group-hover:scale-105 transition-all">
                    <Award className="w-5 h-5 text-brand-purple" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xs font-bold text-text-sub uppercase tracking-[0.2em]">Credential 0{idx + 1}</h3>
                    <p className="text-sm font-semibold text-text-main leading-relaxed">
                      {ach}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-20 border-t border-border-glass/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto space-y-4 mb-16"
            >
              <h2 className="section-heading font-semibold tracking-[-0.02em] text-text-main">
                Get In <span className="bg-linear-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">Touch</span>
              </h2>
              <p className="section-subtitle text-text-sub max-w-2xl mx-auto">
                Reach out to discuss academic programs, research work, or internships.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
              {/* Contact Information Sidebar */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="lg:col-span-5 glass-card p-8 flex flex-col justify-between relative overflow-hidden"
              >
                <div className="space-y-8">
                  <h3 className="text-xl font-bold text-text-main">Contact Details</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-brand-blue/10 p-3 rounded-xl border border-brand-blue/20 text-brand-blue">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-text-sub uppercase tracking-[0.2em]">Phone</h4>
                        <p className="text-sm font-semibold text-text-main mt-0.5">+91 9019987641</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-brand-purple/10 p-3 rounded-xl border border-brand-purple/20 text-brand-purple">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-text-sub uppercase tracking-[0.2em]">Email</h4>
                        <a href="mailto:deepika.kraj2005@gmail.com" className="text-sm font-semibold text-text-main hover:text-brand-purple transition-colors mt-0.5 block">
                          deepika.kraj2005@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-brand-cyan/10 p-3 rounded-xl border border-brand-cyan/20 text-brand-cyan">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-text-sub uppercase tracking-[0.2em]">Address</h4>
                        <p className="text-sm font-semibold text-text-main mt-0.5 leading-7">
                          Anupahalli (village), Hoskote(Tq),<br />Bangalore (rural dist)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Connect buttons */}
                <div className="pt-8 border-t border-border-glass mt-8">
                  <h4 className="text-xs font-bold text-text-sub uppercase tracking-[0.2em] mb-4">Professional Networks</h4>
                  <div className="flex gap-3">
                    <a
                      href="https://www.linkedin.com/in/deepika-deepu-710522310"
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-border-glass text-xs font-semibold text-text-main hover:bg-white/10 hover:text-brand-purple transition-all"
                    >
                      <Linkedin className="w-4 h-4 text-brand-purple" /> LinkedIn
                    </a>
                    <a
                      href="https://github.com/Deepikak07"
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-border-glass text-xs font-semibold text-text-main hover:bg-white/10 hover:text-brand-cyan transition-all"
                    >
                      <Github className="w-4 h-4 text-brand-cyan" /> GitHub
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="lg:col-span-7 glass-card p-8 md:p-10"
              >
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-text-sub uppercase tracking-wider flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-brand-blue" /> Name
                      </label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-border-glass rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/50 text-text-main transition-all"
                        placeholder="Your full name"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-text-sub uppercase tracking-wider flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-brand-purple" /> Email
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-border-glass rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/50 text-text-main transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-text-sub uppercase tracking-wider flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-brand-cyan" /> Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-bg-secondary border border-border-glass rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 text-text-main transition-all"
                    >
                      <option value="Collaboration">Project Collaboration</option>
                      <option value="Internship">Internship Opportunity</option>
                      <option value="Academic">Academic / Research Inquiry</option>
                      <option value="General">General Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-text-sub uppercase tracking-wider flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-brand-purple" /> Message
                    </label>
                    <textarea
                      required
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full bg-white/5 border border-border-glass rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/50 text-text-main transition-all resize-none"
                      placeholder="Detail your message here..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-blue text-white font-semibold py-3.5 rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-blue/20 disabled:opacity-75 cursor-pointer text-sm hover:scale-[1.01]"
                  >
                    {isSubmitting ? "Sending..." : (
                      <>Send Message <Send className="w-4 h-4" /></>
                    )}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-12 border-t border-border-glass/40 bg-white/[0.005] dark:bg-black/[0.005]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="flex items-center justify-center gap-2">
              <div className="bg-brand-blue/15 p-2 rounded-xl border border-brand-blue/20">
                <Terminal className="w-4 h-4 text-brand-cyan" />
              </div>
              <span className="font-bold tracking-wider text-text-main text-sm">DEEPIKA K</span>
            </div>
            
            <p className="text-xs sm:text-sm text-text-sub leading-7 max-w-md mx-auto">
              Built as a premium, responsive portfolio website, representing academic and practical technical records. All details are extracted from verified CV documents.
            </p>

            <div className="text-xs text-text-sub pt-4 border-t border-border-glass/50 max-w-sm mx-auto">
              &copy; {new Date().getFullYear()} Deepika K. All rights reserved.
            </div>
          </div>
        </footer>
      </PortfolioContainer>
    </>
  );
}
