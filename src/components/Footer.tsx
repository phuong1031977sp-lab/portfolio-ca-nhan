import React from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FooterProps {
  fullName: string;
  brandName: string;
  title: string;
  major: string;
  courseModule: string;
  institution: string;
}

export const Footer: React.FC<FooterProps> = ({
  fullName,
  brandName,
  major,
  courseModule,
  institution,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-slate-950/90 backdrop-blur-2xl py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-20 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-white/10">
          
          {/* Brand & Monogram (Col 1-6) */}
          <div className="md:col-span-6 space-y-3 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <div className="px-3.5 py-1.5 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 flex items-center justify-center font-cinematic font-bold text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.4)] text-sm tracking-wide">
                {brandName}
              </div>
              <span className="font-cinematic text-xl font-bold tracking-normal text-white">
                {fullName}
              </span>
            </div>
            <p className="text-xs text-amber-300 font-mono tracking-wide">
              Ngành {major} • {institution}
            </p>
            <p className="text-xs text-slate-400 max-w-md mx-auto md:mx-0 leading-relaxed font-normal">
              Portfolio cá nhân học phần: <span className="text-slate-200">{courseModule}</span>. Thể hiện quá trình rèn luyện kỹ năng số, khai thác AI và sáng tạo nội dung giáo dục âm nhạc.
            </p>
          </div>

          {/* Quick Nav Links (Col 7-10) */}
          <div className="md:col-span-4 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-xs font-mono tracking-wide text-slate-400">
            <a href="#hero" className="hover:text-amber-300 transition-colors">
              Trang chủ
            </a>
            <a href="#about" className="hover:text-amber-300 transition-colors">
              Giới thiệu
            </a>
            <a href="#education" className="hover:text-amber-300 transition-colors">
              Học vấn
            </a>
            <a href="#skills" className="hover:text-amber-300 transition-colors">
              Kỹ năng
            </a>
            <a href="#experience" className="hover:text-amber-300 transition-colors">
              Thực hành
            </a>
            <a href="#projects" className="hover:text-amber-300 transition-colors">
              Bài tập số
            </a>
            <a href="#contact" className="hover:text-amber-300 transition-colors">
              Liên hệ
            </a>
          </div>

          {/* Back to top (Col 11-12) */}
          <div className="md:col-span-2 flex justify-center md:justify-end">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="rounded-full w-11 h-11 border-white/20 bg-slate-900/60 hover:bg-amber-500 hover:text-slate-950 text-slate-200 transition-all shadow-lg"
              title="Về đầu trang"
            >
              <ArrowUp className="w-5 h-5" />
            </Button>
          </div>

        </div>

        {/* Official Footer Text from Document */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <div className="text-center sm:text-left">
            {fullName} | Ngành {major} | Học phần {courseModule}
          </div>
          <div className="flex items-center gap-1.5 text-amber-400/80">
            <span>© {new Date().getFullYear()} {fullName}. All rights reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
