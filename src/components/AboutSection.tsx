import React from "react";
import { User, Sparkles, Heart, Target, Music, Compass } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AboutSectionProps {
  personal: {
    fullName: string;
    brandName: string;
    title: string;
    studentId: string;
    studentClass: string;
    major: string;
    courseModule: string;
    institution: string;
    hometown: string;
    bio: string[];
    learningGoals: string[];
    portfolioGoals: string[];
    profileTraits: { label: string; value: string }[];
    interests: string[];
  };
}

export const AboutSection: React.FC<AboutSectionProps> = ({ personal }) => {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <Badge variant="gold" className="uppercase tracking-wide text-xs px-3.5 py-1 font-mono">
            Hồ sơ cá nhân & Mục tiêu học tập
          </Badge>
          <h2 className="font-cinematic text-3xl sm:text-5xl font-bold text-white tracking-normal pt-1">
            Giới thiệu <span className="text-gold-gradient">bản thân</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto rounded-full" />
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base font-normal leading-relaxed">
            Sinh viên ngành Sư phạm Âm nhạc — Trường Đại học Sư phạm Nghệ thuật Trung ương
          </p>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Story & Bio (Col 1-7) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <Card className="glass-card border-white/10 p-6 sm:p-8 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-cinematic text-xl font-bold text-white tracking-normal">
                      Lời chào từ Trần Ngọc Phượng
                    </h3>
                    <p className="text-xs text-amber-300 font-mono mt-0.5">
                      {personal.institution}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
                  {personal.bio.map((paragraph, index) => (
                    <p key={index} className="text-justify">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Mục tiêu học tập */}
                <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-amber-300 font-mono flex items-center gap-2">
                    <Target className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Mục tiêu học tập trọng tâm</span>
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                    {personal.learningGoals.map((goal, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-2" />
                        <span className="leading-relaxed">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Mục tiêu xây dựng Portfolio */}
              <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border-l-4 border-amber-500 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <Compass className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div className="leading-relaxed">
                    <span className="font-semibold text-white">Mục tiêu của Portfolio: </span>
                    {personal.portfolioGoals.join(" ")}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Quick Traits & Details (Col 8-12) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Core Traits Grid */}
            <Card className="glass-card border-white/10 p-6">
              <h3 className="font-cinematic text-lg font-bold text-white mb-4 flex items-center gap-2 tracking-normal">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Thông tin sinh viên</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {personal.profileTraits.map((trait, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-amber-500/30 transition-all hover:bg-white/[0.06]"
                  >
                    <div className="text-[11px] tracking-wide text-amber-400/90 font-mono">
                      {trait.label}
                    </div>
                    <div className="text-sm font-semibold text-white mt-1">
                      {trait.value}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Hobbies & Interests */}
            <Card className="glass-card border-white/10 p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-cinematic text-lg font-bold text-white mb-4 flex items-center gap-2 tracking-normal">
                  <Heart className="w-4 h-4 text-amber-400" />
                  <span>Sở thích & Đam mê</span>
                </h3>

                <p className="text-xs text-slate-400 mb-4 leading-relaxed font-normal">
                  Đặc biệt yêu thích ca hát, chơi đàn và tìm tòi các phương pháp kết hợp công nghệ số cùng trí tuệ nhân tạo vào nghệ thuật âm nhạc.
                </p>

                <div className="flex flex-wrap gap-2">
                  {personal.interests.map((interest, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/60 border border-white/10 text-xs text-slate-200 hover:border-amber-400/40 hover:text-white transition-colors"
                    >
                      <Music className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{interest}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified Details Pill Footer */}
              <div className="pt-6 mt-6 border-t border-white/10 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-400 block mb-0.5">Quê quán</span>
                  <span className="font-medium text-white">{personal.hometown}</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Ngành đào tạo</span>
                  <span className="font-medium text-amber-300">{personal.major}</span>
                </div>
              </div>
            </Card>

          </div>

        </div>

      </div>
    </section>
  );
};
