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
