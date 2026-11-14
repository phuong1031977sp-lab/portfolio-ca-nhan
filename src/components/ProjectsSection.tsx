import React, { useState } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectItem } from "@/data/portfolioData";
import { ProjectModal } from "./ProjectModal";

interface ProjectsSectionProps {
  projects: ProjectItem[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tất cả");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const categories = ["Tất cả", "Công nghệ số", "Trí tuệ nhân tạo (AI)", "Sư phạm Âm nhạc", "Hợp tác số"];

  const filteredProjects =
    selectedCategory === "Tất cả"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <Badge variant="gold" className="uppercase tracking-wide text-xs px-3.5 py-1 font-mono">
            Danh mục sản phẩm học phần
          </Badge>
          <h2 className="font-cinematic text-3xl sm:text-5xl font-bold text-white tracking-normal pt-1">
            Dự án & <span className="text-gold-gradient">Bài tập thực hành</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto rounded-full" />
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base font-normal leading-relaxed">
            Tổng hợp các bài tập được thực hiện trong học phần Nhập môn Công nghệ số và ứng dụng Trí tuệ nhân tạo, thể hiện từng nhóm kỹ năng số từ cơ bản đến nâng cao.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 font-mono ${
                selectedCategory === cat
                  ? "bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.4)] scale-105"
                  : "bg-slate-900/60 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="glass-card glass-card-hover p-6 sm:p-8 rounded-2xl border-white/10 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
              onClick={() => setActiveProject(project)}
            >
              {/* Subtle Corner Ambient Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

              <div>
                {/* Card Top Meta */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <Badge variant="outline" className="text-xs font-mono border-amber-500/30 text-amber-300 bg-amber-500/5">
                    {project.category}
                  </Badge>
                  <span className="text-xs text-amber-300/80 font-mono">
                    {project.chapter}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-cinematic text-xl sm:text-2xl font-bold text-white group-hover:text-amber-200 transition-colors mb-3 flex items-start justify-between gap-3 tracking-normal">
                  <span className="leading-tight">{project.title}</span>
                  <ArrowUpRight className="w-5 h-5 text-amber-400 shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform mt-1" />
                </h3>

                {/* Summary */}
                <p className="text-sm text-slate-300 font-normal leading-relaxed mb-6">
                  {project.summary}
                </p>

                {/* Metric or Highlight */}
                {project.metrics && (
                  <div className="mb-6 inline-flex items-center gap-1.5 text-xs text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg">
                    <Sparkles className="w-3.5 h-3.5 shrink-0" />
                    <span>{project.metrics}</span>
                  </div>
                )}
              </div>

              {/* Card Footer: Tags & Action Button */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5"
                    >
                      #{tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-[10px] font-mono text-slate-500">
                      +{project.tags.length - 3} thêm
                    </span>
                  )}
                </div>

                <span className="text-xs font-semibold text-amber-400 group-hover:underline font-mono">
                  Xem chi tiết bài tập &rarr;
                </span>
              </div>
            </Card>
          ))}
        </div>

        {/* Project Detail Modal */}
        <ProjectModal
          project={activeProject}
          isOpen={!!activeProject}
          onClose={() => setActiveProject(null)}
        />

      </div>
    </section>
  );
};
