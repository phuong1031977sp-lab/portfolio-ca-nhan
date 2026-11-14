import React, { useState } from "react";
import { MapPin, Send, Copy, Check, MessageSquare, Sparkles, GraduationCap, Music } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ContactSectionProps {
  personal: {
    fullName: string;
    studentId: string;
    studentClass: string;
    major: string;
    institution: string;
    hometown: string;
    location: string;
  };
}

export const ContactSection: React.FC<ContactSectionProps> = ({ personal }) => {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Simulate sending message
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <Badge variant="gold" className="uppercase tracking-wide text-xs px-3.5 py-1 font-mono">
            Kết nối & Trao đổi học tập
          </Badge>
          <h2 className="font-cinematic text-3xl sm:text-5xl font-bold text-white tracking-normal pt-1">
            Liên hệ & <span className="text-gold-gradient">Giao lưu</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto rounded-full" />
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base font-normal leading-relaxed">
            Không gian kết nối, chia sẻ sản phẩm học tập và trao đổi kinh nghiệm cùng giảng viên, bạn bè và những người yêu âm nhạc, công nghệ số.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Student Profile Info Cards (Col 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Student ID & Class Card */}
            <Card className="glass-card glass-card-hover p-6 rounded-2xl border-white/10 relative overflow-hidden group">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Mã số sinh viên & Lớp
                    </span>
                    <div className="text-base sm:text-lg font-bold text-white mt-0.5 font-mono">
                      MSSV: {personal.studentId}
                    </div>
                    <span className="text-xs text-amber-300 font-mono mt-1 block">
                      {personal.studentClass}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personal.studentId, "mssv")}
                  className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  title="Sao chép MSSV"
                >
                  {copiedType === "mssv" ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </Card>

            {/* University & Major Card */}
            <Card className="glass-card glass-card-hover p-6 rounded-2xl border-white/10 relative overflow-hidden group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0">
                  <Music className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Cơ sở đào tạo & Chuyên ngành
                  </span>
                  <div className="text-base sm:text-lg font-bold text-white mt-0.5">
                    {personal.major}
                  </div>
                  <span className="text-xs text-slate-300 mt-1 block leading-relaxed">
                    {personal.institution}
                  </span>
                </div>
              </div>
            </Card>

            {/* Hometown & Location Card */}
            <Card className="glass-card p-6 rounded-2xl border-white/10">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Quê quán & Nơi học tập
                  </span>
                  <div className="text-base sm:text-lg font-bold text-white mt-0.5">
                    Quê quán: {personal.hometown}
                  </div>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed font-normal">
                    Học tập tại TP. Hà Nội • Thường trú tại Lào Cai, Việt Nam.
                  </p>
                </div>
              </div>
            </Card>

            {/* Verification Note */}
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="leading-relaxed">
                Thông tin xác thực theo hồ sơ học phần: Nhập môn Công nghệ số và ứng dụng Trí tuệ nhân tạo.
              </span>
            </div>

          </div>

          {/* Contact Message Form (Col 6-12) */}
          <div className="lg:col-span-7">
            <Card className="glass-card p-6 sm:p-8 rounded-2xl border-white/10">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-amber-400 shrink-0" />
                <h3 className="font-cinematic text-2xl font-bold text-white tracking-normal">
                  Gửi lời nhắn cho Phượng
                </h3>
              </div>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="font-cinematic text-2xl font-bold text-white tracking-normal">
                    Gửi lời nhắn thành công!
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed font-normal">
                    Cảm ơn bạn <span className="font-semibold text-white">{formData.name || ""}</span> đã ghé thăm Portfolio của Phượng! Mình sẽ phản hồi qua email <span className="text-amber-300 font-semibold">{formData.email}</span> trong thời gian sớm nhất.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                  >
                    Gửi lời nhắn khác
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider font-mono">
                        Họ và tên của bạn *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Nhập tên của bạn"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider font-mono">
                        Địa chỉ Email của bạn *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@vidu.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider font-mono">
                      Chủ đề liên hệ
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Trao đổi bài tập / Góp ý Portfolio / Giao lưu học tập"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider font-mono">
                      Nội dung tin nhắn *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Viết nội dung tin nhắn hoặc góp ý cho mình tại đây..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    className="w-full font-semibold group"
                  >
                    <span>Gửi lời nhắn</span>
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              )}
            </Card>
          </div>

        </div>

      </div>
    </section>
  );
};
