import React, { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Info, Sliders, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BackgroundVideoProps {
  videoSrcWebm?: string;
  videoSrcMp4?: string;
  overlayOpacity?: number;
}

export const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  videoSrcWebm = "/videos/hero-bg.webm",
  videoSrcMp4 = "/videos/hero-bg.mp4",
  overlayOpacity = 0.82, // Stronger default overlay for superior text contrast
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [currentOverlayOpacity, setCurrentOverlayOpacity] = useState(overlayOpacity);

  // High-performance clean cinematic procedural loop (zero text, zero watermarks)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Dynamic celestial particle network
    const particleCount = 80;
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.6 + 0.4,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.6 + 0.2,
      pulseSpeed: Math.random() * 0.015 + 0.005,
      hue: Math.random() > 0.4 ? 40 : 215, // Gold or soft deep blue
    }));

    let time = 0;

    const render = () => {
      time += 0.003;
      ctx.clearRect(0, 0, width, height);

      // Deep space atmospheric base
      const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
      bgGrad.addColorStop(0, "#030712");
      bgGrad.addColorStop(0.5, "#020617");
      bgGrad.addColorStop(1, "#010409");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Subtle celestial wave glows
      const waveGrad1 = ctx.createRadialGradient(
        width * 0.3 + Math.sin(time) * 120,
        height * 0.4 + Math.cos(time) * 80,
        50,
        width * 0.3,
        height * 0.4,
        width * 0.6
      );
      waveGrad1.addColorStop(0, "rgba(245, 158, 11, 0.04)");
      waveGrad1.addColorStop(1, "transparent");
      ctx.fillStyle = waveGrad1;
      ctx.fillRect(0, 0, width, height);

      const waveGrad2 = ctx.createRadialGradient(
        width * 0.75 + Math.cos(time * 0.8) * 100,
        height * 0.6 + Math.sin(time * 0.8) * 90,
        60,
        width * 0.75,
        height * 0.6,
        width * 0.7
      );
      waveGrad2.addColorStop(0, "rgba(59, 130, 246, 0.04)");
      waveGrad2.addColorStop(1, "transparent");
      ctx.fillStyle = waveGrad2;
      ctx.fillRect(0, 0, width, height);

      // Delicate constellation lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(245, 158, 11, ${0.1 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Render celestial glowing particles
      particles.forEach((p) => {
        if (isPlaying) {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }

        p.alpha += Math.sin(Date.now() * p.pulseSpeed) * 0.008;
        const clampedAlpha = Math.max(0.12, Math.min(0.85, p.alpha));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        if (p.hue === 40) {
          ctx.fillStyle = `rgba(251, 191, 36, ${clampedAlpha})`;
          ctx.shadowColor = "rgba(245, 158, 11, 0.35)";
        } else {
          ctx.fillStyle = `rgba(147, 197, 253, ${clampedAlpha})`;
          ctx.shadowColor = "rgba(96, 165, 250, 0.3)";
        }
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPlaying]);

  const togglePlay = () => {
    if (videoRef.current && videoLoaded && !videoError) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Clean, Watermark-Free Procedural Celestial Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Clean User-Provided Video Element (Loads user's custom video if available) */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        preload="auto"
        onLoadedData={() => {
          setVideoLoaded(true);
          setVideoError(false);
        }}
        onError={() => {
          setVideoError(true);
        }}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          videoLoaded && !videoError ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src={videoSrcWebm} type="video/webm" />
        <source src={videoSrcMp4} type="video/mp4" />
      </video>

      {/* Stronger Dark Overlay for Maximum Typography Readability */}
      <div
        className="absolute inset-0 transition-colors duration-500 pointer-events-none"
        style={{
          backgroundColor: `rgba(2, 6, 23, ${currentOverlayOpacity})`,
        }}
      />

      {/* Deep Obsidian Vignette: Ensures Center & Edges Maintain Contrast */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,6,23,0.45)_0%,rgba(2,6,23,0.92)_85%)] pointer-events-none" />

      {/* Soft Ambient Glows (Toned Down to Avoid Text Distraction) */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 left-1/3 w-80 h-80 bg-amber-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Video Control Pill (Interactive) */}
      <div className="pointer-events-auto absolute bottom-6 right-6 z-30 flex items-center space-x-2">
        {showControls && (
          <div className="glass-panel bg-slate-950/90 backdrop-blur-xl border border-white/10 rounded-full px-3.5 py-1.5 flex items-center space-x-2.5 shadow-2xl animate-in fade-in slide-in-from-right-4 duration-300">
            <button
              onClick={togglePlay}
              className="p-1.5 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              title={isPlaying ? "Tạm dừng hiệu ứng nền" : "Phát hiệu ứng nền"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={toggleMute}
              className="p-1.5 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              title={isMuted ? "Bật âm thanh" : "Tắt âm thanh"}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            </button>
            <div className="h-4 w-px bg-white/20 mx-0.5" />
            <div className="flex items-center space-x-1.5">
              <span className="text-[10px] text-slate-400 font-mono">Độ tối</span>
              <input
                type="range"
                min="0.4"
                max="0.95"
                step="0.05"
                value={currentOverlayOpacity}
                onChange={(e) => setCurrentOverlayOpacity(parseFloat(e.target.value))}
                className="w-16 h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-400"
                title="Điều chỉnh độ tối màn phủ"
              />
            </div>
            <div
              className="relative group cursor-help text-slate-400 hover:text-amber-300 p-1"
              title="Bạn có thể đặt video riêng (không phụ đề/chữ) vào public/videos/hero-bg.mp4 bất cứ lúc nào."
            >
              <Info className="w-3.5 h-3.5" />
            </div>
          </div>
        )}

        <Button
          variant="glass"
          size="icon"
          className="rounded-full w-9 h-9 border-white/15 bg-slate-950/80 hover:bg-slate-800/80 text-slate-300 hover:text-amber-400 shadow-lg"
          onClick={() => setShowControls(!showControls)}
          title="Tùy chỉnh video nền"
        >
          <Sliders className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
