import React from "react";
import { ArrowRight, Sparkles, MapPin, BookOpen, Music, FolderGit2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  personal: {
    fullName: string;
    brandName: string;
    title: string;
    tagline: string;
    studentId: string;
    studentClass: string;
    major: string;
    institution: string;
    hometown: string;
    location: string;
    avatarUrl: string;
    avatarFallbackUrl: string;
  };
}

export const HeroSection: React.FC<HeroSectionProps> = ({ personal }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-20 px-4 sm:px-6 lg:px-10 xl:px-12 overflow-hidden"
    >
      {/* Maximum width balanced for wide desktops & standard 13-16" laptop screens */}
      <div className="max-w-[1440px] mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          
          {/* Main Cinematic Text & Pitch (Col 1-7) */}
          <div className="lg:col-span-7 flex flex-col space-y-5 lg:space-y-6 text-center lg:text-left">
            {/* Live Student Pill */}
            <div className="flex items-center justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
                <span className="text-xs tracking-wide text-amber-300 font-medium font-mono whitespace-nowrap">
                  MSSV: {personal.studentId} • Lớp: {personal.studentClass}
                </span>
              </div>
            </div>

            {/* Cinematic Hero Title: TRẦN NGỌC PHƯỢNG */}
            <div className="space-y-1.5 sm:space-y-2 pt-0.5">
              <h1 className="font-cinematic text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-normal text-white leading-[1.18]">
                <span className="block text-silver-gradient pb-1">TRẦN NGỌC</span>
                <span className="block text-gold-gradient drop-shadow-[0_4px_25px_rgba(245,158,11,0.28)] pb-1 sm:pb-2">
                  PHƯỢNG
                </span>
              </h1>
              <p className="font-cinematic text-base sm:text-lg lg:text-xl text-amber-200/90 tracking-wide pt-0.5">
                Ngành {personal.major}
              </p>
            </div>

            {/* Subtitle / Tagline */}
            <p className="text-slate-300 text-sm sm:text-base lg:text-base xl:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {personal.tagline}. Sinh viên ngành{" "}
              <span className="text-amber-300 font-semibold">{personal.major}</span> tại{" "}
              <span className="text-white font-medium">{personal.institution}</span>, đam mê kết nối nghệ thuật thanh nhạc, nhạc cụ với ứng dụng công nghệ số và trí tuệ nhân tạo (AI).
            </p>

            {/* Key Metadata Badges (Responsive Wrap, Zero Clipping) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-1">
              <div className="flex items-center gap-1.5 text-xs text-slate-300 glass-pill px-3 sm:px-3.5 py-1.5 rounded-full whitespace-nowrap">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Quê quán: {personal.hometown}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-300 glass-pill px-3 sm:px-3.5 py-1.5 rounded-full whitespace-nowrap">
                <Music className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Sở thích: Chơi đàn, Hát</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-300 glass-pill px-3 sm:px-3.5 py-1.5 rounded-full whitespace-nowrap">
                <BookOpen className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Học phần: Công nghệ số & AI</span>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-3">
              <a href="#about" className="w-full sm:w-auto">
                <Button
                  variant="default"
                  size="lg"
                  className="w-full sm:w-auto font-medium group text-sm h-11 px-6 whitespace-nowrap"
                >
                  <span>Giới thiệu bản thân</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>

              <a href="#projects" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-white/20 hover:border-amber-400/60 text-sm h-11 px-6 whitespace-nowrap"
                >
                  <FolderGit2 className="w-4 h-4 mr-2 text-amber-400" />
                  <span>Dự án & Bài tập môn học</span>
                </Button>
              </a>

              <a href="#contact" className="w-full sm:w-auto">
                <Button
                  variant="cinematic"
                  size="lg"
                  className="w-full sm:w-auto text-sm h-11 px-6 whitespace-nowrap"
                >
                  <span>Liên hệ</span>
                </Button>
              </a>
            </div>

            {/* High-level Metric Strip */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-5 border-t border-white/10 max-w-xl mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-bold font-cinematic text-amber-400">6</div>
                <div className="text-xs text-slate-400 mt-0.5">Bài tập thực hành</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-bold font-cinematic text-amber-400">100%</div>
                <div className="text-xs text-slate-400 mt-0.5">Đam mê Nghệ thuật</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-bold font-cinematic text-amber-400">AI & Số</div>
                <div className="text-xs text-slate-400 mt-0.5">Đổi mới phương pháp</div>
              </div>
            </div>
          </div>

          {/* Profile Visual Card (Col 8-12) — Balanced spacing & fully visible on laptop screens */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end xl:justify-center px-2 sm:px-4">
            <div className="relative w-64 sm:w-72 lg:w-[290px] xl:w-[330px]">
              
              {/* Radiant Glow Behind Card */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-amber-500/30 via-yellow-500/15 to-blue-600/25 rounded-3xl blur-2xl opacity-75 animate-pulseGlow" />

              {/* Main Card Frame */}
              <div className="relative rounded-3xl overflow-hidden glass-card border border-white/15 p-2.5 sm:p-3 shadow-2xl">
                
                {/* Image Container with Calibrated Aspect Ratio for Laptops */}
                <div className="relative w-full aspect-[3.8/4.6] rounded-2xl overflow-hidden bg-slate-900">
                  <img
                    src={personal.avatarUrl}
                    alt={personal.fullName}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = personal.avatarFallbackUrl;
                    }}
                    className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-95 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Corner Accent Overlay */}
                  <div className="absolute top-2.5 left-2.5 px-3 py-1 rounded-full bg-slate-950/75 backdrop-blur-md border border-white/10 flex items-center gap-1.5 shadow-md">
                    <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
                    <span className="text-[10px] tracking-wider text-amber-200 font-mono">
                      Portfolio Chính Thức
                    </span>
                  </div>

                  {/* Bottom Image Bio Plate */}
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <div className="font-cinematic text-lg sm:text-xl font-bold text-white tracking-normal leading-tight drop-shadow-md">
                      {personal.fullName}
                    </div>
                    <div className="text-[11px] sm:text-xs text-amber-300 font-mono mt-0.5">
                      Ngành {personal.major}
                    </div>
                  </div>
                </div>

                {/* Sub-card Details (Compact, Clean, Never Overflows) */}
                <div className="p-2 sm:p-2.5 pt-3 space-y-2 text-xs">
                  <div className="flex justify-between items-center text-slate-300 border-b border-white/5 pb-1.5">
                    <span className="text-slate-400">Mã số sinh viên</span>
                    <span className="font-semibold text-amber-300 font-mono">{personal.studentId}</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-300 border-b border-white/5 pb-1.5">
                    <span className="text-slate-400">Lớp đào tạo</span>
                    <span className="font-semibold text-white font-mono">{personal.studentClass}</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-300 pt-0.5">
                    <span className="text-slate-400">Cơ sở đào tạo</span>
                    <span className="font-semibold text-emerald-400">ĐH Sư phạm Nghệ thuật TW</span>
                  </div>
                </div>
              </div>

              {/* Floating Decorative Glass Badge (Safe placement within screen bounds) */}
              <div className="hidden sm:flex absolute -bottom-3 -left-3 lg:-left-2 xl:-left-4 glass-card p-2.5 sm:p-3 rounded-2xl border border-white/15 shadow-2xl items-center gap-2.5 sm:gap-3 animate-float bg-slate-950/85 backdrop-blur-xl">
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-300 shrink-0">
                  <Music className="w-4 h-4" />
                </div>
                <div className="text-left pr-1">
                  <div className="text-xs font-bold text-white whitespace-nowrap">Sư phạm Âm nhạc & AI</div>
                  <div className="text-[10px] text-slate-400 whitespace-nowrap">Học phần Công nghệ số 2024</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
