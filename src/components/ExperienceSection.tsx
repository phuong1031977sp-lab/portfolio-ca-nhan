import React from "react";
import { Calendar, MapPin, CheckCircle, GraduationCap, Music } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      id: "exp-1",
      role: "Sinh viên Thực hành Chuyên ngành Sư phạm Âm nhạc",
      organization: "Khoa Sư phạm Âm nhạc — Trường ĐH Sư phạm Nghệ thuật Trung ương",
      location: "Hà Nội, Việt Nam",
      period: "2024 – Hiện tại",
      description: "Thực hành rèn luyện kỹ năng thanh nhạc, thị tấu nhạc cụ, ký xướng âm và nghiên cứu các phương pháp giảng dạy âm nhạc cho học sinh các cấp.",
      responsibilities: [
        "Luyện tập thanh nhạc, làm chủ cao độ, trường độ và hơi thở trong biểu diễn",
        "Thực hành đệm đàn piano/organ phục vụ giảng dạy các bài hát trong chương trình giáo dục phổ thông",
        "Tập giảng và xây dựng các trò chơi âm nhạc tương tác kích thích sự sáng tạo của học sinh",
        "Ứng dụng chuyển đổi số vào thiết kế bài giảng âm nhạc sinh động, trực quan"
      ],
      skills: ["Thanh nhạc", "Đệm đàn", "Phương pháp giảng dạy", "Ký xướng âm", "Sư phạm Nghệ thuật"]
    },
    {
      id: "exp-2",
      role: "Thực hành Học phần Công nghệ số & Trí tuệ Nhân tạo",
      organization: "Học phần: Nhập môn Công nghệ số và ứng dụng AI (Lớp tín chỉ: 24)",
      location: "Hà Nội, Việt Nam",
      period: "Năm học 2024 – 2025",
      description: "Nghiên cứu và hoàn thành chuỗi 6 bài tập lớn ứng dụng công nghệ thông tin, quản lý dữ liệu học tập và khai thác AI có trách nhiệm.",
      responsibilities: [
        "Hoàn thành Báo cáo thực hành Bài tập 02: Khảo sát 11 tài liệu học thuật quốc tế về AI trong sáng tác và sản xuất âm nhạc",
        "Thực hiện Báo cáo thực hành Bài tập 03: Thiết kế và thử nghiệm Prompt 3 cấp độ trong dạy học cao độ, giai điệu",
        "Xây dựng cây thư mục học tập khoa học và chuẩn hóa quy tắc lưu trữ dữ liệu số cá nhân",
        "Phối hợp hiệu quả trong các dự án nhóm trực tuyến và xây dựng quy tắc liêm chính học thuật AI"
      ],
      skills: ["Kỹ thuật Prompt ChatGPT", "Tra cứu Google Scholar & DOI", "Quản lý dữ liệu", "Hợp tác trực tuyến", "Liêm chính học thuật"]
    }
  ];

  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <Badge variant="gold" className="uppercase tracking-wide text-xs px-3.5 py-1 font-mono">
            Hành trình Học tập & Thực hành
          </Badge>
          <h2 className="font-cinematic text-3xl sm:text-5xl font-bold text-white tracking-normal pt-1">
            Thực hành <span className="text-gold-gradient">Sư phạm & Kỹ năng số</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto rounded-full" />
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base font-normal leading-relaxed">
            Quá trình rèn luyện chuyên môn nghệ thuật song hành cùng các hoạt động thực hành công nghệ số và ứng dụng trí tuệ nhân tạo.
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp) => (
            <Card
              key={exp.id}
              className="glass-card glass-card-hover p-6 sm:p-10 rounded-2xl border-white/10 relative overflow-hidden"
            >
              {/* Subtle Ambient Card Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400">
                      <GraduationCap className="w-5 h-5" />
                    </span>
                    <span className="font-mono text-xs text-amber-300 uppercase tracking-wider">
                      Hoạt động thực hành trọng điểm
                    </span>
                  </div>

                  <h3 className="font-cinematic text-2xl font-bold text-white tracking-normal">
                    {exp.role}
                  </h3>
                  <div className="text-base sm:text-lg text-amber-400 font-medium mt-1 flex items-center gap-2">
                    <Music className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>{exp.organization}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs text-slate-400 font-mono">
                  <div className="flex items-center gap-1.5 glass-pill px-3 py-1.5 rounded-full">
                    <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 glass-pill px-3 py-1.5 rounded-full">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Overview Summary */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {exp.description}
              </p>

              {/* Responsibilities */}
              <div className="space-y-3 mb-6">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-white font-mono">
                  Nhiệm vụ & Kết quả rèn luyện
                </h4>
                <ul className="space-y-2.5 text-sm text-slate-300 font-normal">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Tags */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-400 mr-2 font-mono">Kỹ năng rèn luyện:</span>
                {exp.skills.map((skill, sIdx) => (
                  <Badge
                    key={sIdx}
                    variant="glass"
                    className="text-xs px-2.5 py-1 text-slate-200 border-white/10 hover:border-amber-400/40"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
