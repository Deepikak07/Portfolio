"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Menu, X, FileText, ChevronRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  const getHref = (href: string) => {
    return pathname === "/resume" ? `/${href}` : href;
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === "/") {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? "border-b border-border-glass bg-bg-primary/80 backdrop-blur-md py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="bg-brand-blue/10 p-2 rounded-xl group-hover:bg-brand-blue/20 transition-all duration-300 border border-brand-blue/20">
              <Terminal className="w-5 h-5 text-brand-blue" />
            </div>
            <span className="font-bold text-xl tracking-tight text-text-main">
              DEEPIKA <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">K</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1.5">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={getHref(item.href)}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-text-sub hover:text-text-main hover:bg-white/5 transition-all duration-200"
              >
                {item.name}
              </a>
            ))}
            
            <div className="h-4 w-[1px] bg-border-glass mx-2" />

            <Link
              href="/resume"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium bg-brand-blue/10 hover:bg-brand-blue/20 text-brand-blue border border-brand-blue/20 transition-all duration-200"
            >
              <FileText className="w-4 h-4" />
              Resume
            </Link>

            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button & Toggles */}
          <div className="lg:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-border-glass transition-colors text-text-main"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-bg-primary/95 backdrop-blur-lg border-b border-border-glass overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={getHref(item.href)}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-text-sub hover:text-text-main hover:bg-white/5 transition-all"
                >
                  {item.name}
                  <ChevronRight className="w-4 h-4 text-text-sub/50" />
                </a>
              ))}
              
              <div className="h-[1px] bg-border-glass my-3" />

              <Link
                href="/resume"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-base font-semibold bg-brand-blue text-white shadow-lg shadow-brand-blue/20 hover:opacity-90 transition-all"
              >
                <FileText className="w-5 h-5" />
                View & Print Resume
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
