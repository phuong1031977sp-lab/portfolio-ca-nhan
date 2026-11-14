import React from "react";
import { Music, Sparkles, ShieldCheck, Check, Flame, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SkillCategory } from "@/data/portfolioData";

interface SkillsSectionProps {
  skillCategories: SkillCategory[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skillCategories }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Music":
        return <Music className="w-5 h-5" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <Badge variant="gold" className="uppercase tracking-wide text-xs px-3.5 py-1 font-mono">
            Năng lực chuyên môn & Kỹ năng số
          </Badge>
          <h2 className="font-cinematic text-3xl sm:text-5xl font-bold text-white tracking-normal pt-1">
            Kỹ năng & <span className="text-gold-gradient">Năng lực</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto rounded-full" />
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base font-normal leading-relaxed">
            Sự kết hợp hài hòa giữa năng khiếu thanh nhạc, biểu diễn nhạc cụ và năng lực làm chủ công nghệ số, ứng dụng trí tuệ nhân tạo có trách nhiệm.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <Card
              key={idx}
              className="glass-card glass-card-hover p-6 sm:p-8 rounded-2xl flex flex-col justify-between border-white/10"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-white/10">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
                    {getIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="font-cinematic text-lg font-bold text-white tracking-normal">
                      {category.category}
                    </h3>
                    <span className="text-[11px] text-slate-400 font-mono">
                      Lĩnh vực rèn luyện
                    </span>
                  </div>
                </div>

                {/* Skill Bars */}
                <div className="space-y-5">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-medium text-slate-200">
                          {skill.name}
                        </span>
                        <span className="text-amber-400 font-mono font-medium">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="w-full h-2 rounded-full bg-slate-800/80 overflow-hidden border border-white/5 relative">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-300 transition-all duration-1000 shadow-[0_0_10px_rgba(245,158,11,0.5)]"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>

                      {skill.note && (
                        <div className="text-[10px] text-slate-400 font-mono flex items-center gap-1.5 pt-0.5">
                          <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                          <span>{skill.note}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Tag */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 text-amber-300">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Rèn luyện liên tục</span>
                </span>
                <span className="font-mono">K20H – SPAN</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Highlight Banner: 4 Core Pillars */}
        <div className="mt-12 glass-card p-6 sm:p-8 rounded-2xl border border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-amber-500/20 text-amber-400 shrink-0">
                <Music className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Năng khiếu Nghệ thuật</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed font-normal">
                  Đam mê ca hát và chơi đàn, cảm thụ âm nhạc tinh tế và định hướng sư phạm rõ nét.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-amber-500/20 text-amber-400 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Làm chủ Công nghệ AI</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed font-normal">
                  Thiết kế Prompt đa tầng hỗ trợ soạn giáo án, tạo học liệu và minh họa bài giảng trực quan.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-amber-500/20 text-amber-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Liêm chính Học thuật</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed font-normal">
                  Sử dụng AI có trách nhiệm, minh bạch nguồn gốc tài liệu, tôn trọng bản quyền tác giả.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-amber-500/20 text-amber-400 shrink-0">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Tinh thần Học hỏi</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed font-normal">
                  Chủ động tiếp cận các công cụ số mới, rèn luyện kỹ năng cá nhân theo phương pháp khoa học.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
