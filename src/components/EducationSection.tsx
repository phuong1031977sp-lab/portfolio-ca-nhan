import React from "react";
import { MapPin, CheckCircle, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EducationItem, AchievementItem } from "@/data/portfolioData";

interface EducationSectionProps {
  education: EducationItem[];
  achievements: AchievementItem[];
}

export const EducationSection: React.FC<EducationSectionProps> = ({
  education,
  achievements,
}) => {
  return (
    <section id="education" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <Badge variant="gold" className="uppercase tracking-wide text-xs px-3.5 py-1 font-mono">
            Quá trình đào tạo & Học thuật
          </Badge>
          <h2 className="font-cinematic text-3xl sm:text-5xl font-bold text-white tracking-normal pt-1">
            Học vấn & <span className="text-gold-gradient">Thành tích</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto rounded-full" />
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base font-normal leading-relaxed">
            Nền tảng đào tạo chuyên sâu ngành Sư phạm Âm nhạc kết hợp nghiên cứu đổi mới phương pháp giảng dạy bằng công nghệ số và trí tuệ nhân tạo.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative border-l-2 border-amber-500/20 ml-4 sm:ml-8 md:ml-32 pl-6 sm:pl-10 space-y-12">
          {education.map((item) => (
            <div key={item.id} className="relative group">
              
              {/* Timeline Glowing Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-amber-400 group-hover:border-amber-300 group-hover:bg-amber-400 flex items-center justify-center transition-all duration-300 shadow-[0_0_15px_rgba(245,158,11,0.5)]">
                <div className="w-2 h-2 rounded-full bg-amber-400 group-hover:bg-slate-950 transition-colors" />
              </div>

              {/* Year Stamp Pill for Desktop */}
              <div className="hidden md:block absolute -left-36 top-1 text-right w-28">
                <span className="font-mono text-xs font-semibold text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/30">
                  {item.period}
                </span>
              </div>

              {/* Education Card */}
              <Card className="glass-card glass-card-hover p-6 sm:p-8 rounded-2xl relative overflow-hidden">
                {/* Mobile Year Badge */}
                <div className="md:hidden inline-block mb-3">
                  <span className="font-mono text-xs font-semibold text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/30">
                    {item.period}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-cinematic text-xl sm:text-2xl font-bold text-white group-hover:text-amber-200 transition-colors tracking-normal">
                      {item.degree}
                    </h3>
                    <div className="text-base text-amber-400 font-medium mt-1">
                      {item.institution}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <div className="inline-block text-xs uppercase tracking-wider font-semibold text-slate-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-md mb-4">
                  Chuyên ngành: <span className="text-amber-300">{item.major}</span>
                </div>

                {/* Highlights List */}
                <ul className="space-y-2.5 text-slate-300 text-sm font-normal">
                  {item.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>

            </div>
          ))}
        </div>

        {/* Certifications and Key Achievements Section */}
        <div className="mt-20 pt-16 border-t border-white/10">
          <div className="text-center space-y-2 mb-10">
            <h3 className="font-cinematic text-2xl font-bold text-white tracking-normal">
              Cột mốc & Thành tích Nổi bật
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-normal">
              Kết quả rèn luyện và nghiên cứu trong học phần Nhập môn Công nghệ số và ứng dụng Trí tuệ nhân tạo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((ach) => (
              <Card
                key={ach.id}
                className="glass-card glass-card-hover p-6 rounded-xl flex flex-col justify-between border-white/10"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
                      <Award className="w-5 h-5" />
                    </div>
                    <Badge variant="outline" className="text-[10px] font-mono border-amber-500/30 text-amber-300">
                      {ach.year}
                    </Badge>
                  </div>

                  <h4 className="font-semibold text-white text-base mb-1">
                    {ach.title}
                  </h4>
                  <div className="text-xs text-amber-300 font-mono mb-3">
                    {ach.organization}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {ach.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Ghi nhận</span>
                  <span className="font-medium text-amber-200">{ach.badge}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
