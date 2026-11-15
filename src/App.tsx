import { portfolioData } from "@/data/portfolioData";
import { BackgroundVideo } from "@/components/BackgroundVideo";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { EducationSection } from "@/components/EducationSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export function App() {
  const { personal, education, skillCategories, projects, achievements } =
    portfolioData;

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden text-slate-100 bg-slate-950 font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Fullscreen Looping Background Video with Clean Ambient Fallback & Strong Dark Overlay */}
      <BackgroundVideo
        videoSrcWebm="/videos/hero-bg.webm"
        videoSrcMp4="/videos/hero-bg.mp4"
        overlayOpacity={0.82}
      />

      {/* Floating Glassmorphic Navigation with Brand PHƯỢNG */}
      <Navbar
        fullName={personal.fullName}
        brandName={personal.brandName}
        major={personal.major}
        studentId={personal.studentId}
      />

      {/* Main Content Sections for TRẦN NGỌC PHƯỢNG */}
      <main className="relative z-10 flex flex-col space-y-12 sm:space-y-16 w-full overflow-x-hidden">
        <HeroSection personal={personal} />
        <AboutSection personal={personal} />
        <EducationSection education={education} achievements={achievements} />
        <SkillsSection skillCategories={skillCategories} />
        <ExperienceSection />
        <ProjectsSection projects={projects} />
<section id="summary" className="relative py-20 px-6">
  <div className="max-w-5xl mx-auto rounded-2xl border border-amber-400/20 bg-slate-900/70 p-8 sm:p-12">
    <div className="text-center space-y-5">
      <p className="text-amber-400 font-mono text-sm tracking-widest uppercase">
        Tổng kết quá trình học tập
      </p>

      <h2 className="text-3xl sm:text-4xl font-bold text-white">
        Tổng kết & <span className="text-amber-400">Định hướng phát triển</span>
      </h2>

      <div className="w-20 h-1 bg-amber-400 mx-auto rounded-full" />

      <p className="text-slate-300 leading-8 text-justify">
        Qua quá trình học tập học phần Nhập môn Công nghệ số và ứng dụng
        Trí tuệ nhân tạo, tôi đã có cơ hội tiếp cận và thực hành nhiều
        kỹ năng cần thiết trong môi trường số. Các bài tập giúp tôi nâng
        cao khả năng sử dụng công nghệ, tìm kiếm và đánh giá thông tin,
        xây dựng nội dung bằng AI, làm việc nhóm và sử dụng các công cụ
        trực tuyến.
      </p>

      <p className="text-slate-300 leading-8 text-justify">
        Bên cạnh những kiến thức đã đạt được, tôi cũng nhận thức rõ hơn
        về trách nhiệm khi sử dụng trí tuệ nhân tạo, đặc biệt là tính
        trung thực, an toàn và tôn trọng bản quyền trong học tập.
      </p>

      <p className="text-slate-300 leading-8 text-justify">
        Trong thời gian tới, tôi sẽ tiếp tục rèn luyện kỹ năng công nghệ
        số và ứng dụng AI một cách phù hợp vào quá trình học tập cũng như
        công việc giảng dạy âm nhạc trong tương lai.
      </p>

      <p className="text-amber-300 font-semibold pt-3">
        Xin chân thành cảm ơn!
      </p>
    </div>
  </div>
</section>
        <ContactSection personal={personal} />
      </main>

      {/* Signature Cinematic Footer */}
      <Footer
        fullName={personal.fullName}
        brandName={personal.brandName}
        title={personal.title}
        major={personal.major}
        courseModule={personal.courseModule}
        institution={personal.institution}
      />
    </div>
  );
}

export default App;
