import React, { useState, useEffect } from "react";
import { Menu, X, Download, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  fullName: string;
  brandName: string;
  major: string;
  studentId: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  fullName,
  brandName,
  major,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ["hero", "about", "education", "skills", "experience", "projects", "contact"];
      const scrollPos = window.scrollY + 220;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Trang chủ", href: "#hero" },
    { label: "Giới thiệu", href: "#about" },
    { label: "Học vấn", href: "#education" },
    { label: "Kỹ năng", href: "#skills" },
    { label: "Thực hành", href: "#experience" },
    { label: "Bài tập số", href: "#projects" },
    { label: "Liên hệ", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-slate-950/90 backdrop-blur-2xl border-b border-white/10 py-3 shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
          : "bg-slate-950/40 backdrop-blur-md py-4 sm:py-5 border-b border-white/5"
      }`}
    >
      {/* Wider, More Balanced Container across Laptop & Desktop Screens */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo / Brand Name: PHƯỢNG (Shrink-0 to protect branding) */}
          <a
            href="#hero"
            className="group flex items-center space-x-3 shrink-0 transition-transform duration-300 hover:scale-[1.02]"
          >
            <div className="px-3.5 py-1.5 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 flex items-center justify-center font-cinematic font-bold text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.4)] group-hover:shadow-[0_0_25px_rgba(245,158,11,0.7)] tracking-wider text-sm transition-all">
              {brandName}
            </div>
            <div className="flex flex-col text-left">
              <span className="font-cinematic text-base sm:text-lg font-bold tracking-normal text-white group-hover:text-amber-300 transition-colors whitespace-nowrap">
                {fullName}
              </span>
              <span className="text-[10px] sm:text-[11px] tracking-wide text-slate-400 font-mono whitespace-nowrap">
                {major} • Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Glassmorphic Nav Pills (Spacious, Zero Awkward Wrapping) */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 glass-pill px-3 xl:px-4 py-1.5 rounded-full shadow-inner border border-white/10 bg-slate-900/60 backdrop-blur-xl">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-[12px] xl:text-[13px] font-medium tracking-normal px-2.5 xl:px-3.5 py-1.5 rounded-full transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? "bg-amber-500 text-slate-950 font-semibold shadow-[0_0_15px_rgba(245,158,11,0.45)]"
                      : "text-slate-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons (Balanced Right Side) */}
          <div className="hidden lg:flex items-center space-x-3 shrink-0">
            <a
              href="#contact"
              className="text-xs font-medium tracking-normal text-slate-300 hover:text-amber-300 transition-colors px-2 py-1 flex items-center gap-1.5 whitespace-nowrap"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>Liên hệ</span>
            </a>

            <a href="#projects" className="shrink-0">
              <Button
                variant="cinematic"
                size="sm"
                className="h-9 px-4 rounded-full flex items-center gap-1.5 whitespace-nowrap font-medium"
              >
                <Download className="w-3.5 h-3.5 shrink-0" />
                <span>Xem Bài Tập Số</span>
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button (< 1024px) */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Mở menu điều hướng"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-nav mt-3 border-t border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300 bg-slate-950/95 backdrop-blur-2xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-sm tracking-wide font-medium transition-all ${
                    isActive
                      ? "bg-amber-500 text-slate-950 font-bold"
                      : "text-slate-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col space-y-3">
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full"
            >
              <Button variant="cinematic" className="w-full justify-center">
                <Download className="w-4 h-4 mr-2" />
                Xem Danh Mục Bài Tập
              </Button>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full"
            >
              <Button variant="outline" className="w-full justify-center">
                <Mail className="w-4 h-4 mr-2" />
                Gửi Lời Nhắn Cho Mình
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
