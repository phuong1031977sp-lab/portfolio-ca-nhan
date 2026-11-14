
import React from "react";
import { X, Download, ExternalLink, PlayCircle } from "lucide-react";
import { ProjectItem } from "@/data/portfolioData";

interface ProjectModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-amber-500/30 bg-slate-950 p-6 sm:p-8 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full border border-white/10 p-2 text-slate-300 hover:bg-white/10 hover:text-white"
          aria-label="Đóng"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-6 pr-10">
          <span className="text-xs font-mono uppercase tracking-wider text-amber-400">
            {project.chapter}
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-white">
            {project.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            {project.description}
          </p>
        </div>

        {project.deliverables && project.deliverables.length > 0 && (
          <div className="mb-6">
            <h3 className="mb-3 font-semibold text-amber-300">
              Nội dung thực hiện
            </h3>
            <ul className="space-y-2">
              {project.deliverables.map((item, index) => (
                <li key={index} className="flex gap-2 text-sm text-slate-300">
                  <span className="text-amber-400">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mb-6 flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6">
          <h3 className="mb-4 font-semibold text-white">
            Tài liệu bài tập
          </h3>

          <div className="flex flex-col sm:flex-row gap-3">
            {project.documentUrl && (
              <a
                href={project.documentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-amber-500 px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-amber-400"
              >
                <ExternalLink className="h-4 w-4" />
                Xem bài tập
              </a>
            )}

            {project.downloadUrl && (
              <a
                href={project.downloadUrl}
                download
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-sm font-bold text-amber-300 transition hover:bg-amber-500/20"
              >
                <Download className="h-4 w-4" />
                Tải tài liệu
              </a>
            )}
          </div>

          {project.videoUrl && (
            <a
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <PlayCircle className="h-5 w-5 text-amber-400" />
              Xem video bài tập
            </a>
          )}
        </div>

        <p className="mt-5 text-center text-xs text-slate-500">
          Portfolio cá nhân · Nhập môn Công nghệ số và ứng dụng Trí tuệ nhân tạo
        </p>
      </div>
    </div>
  );
};
