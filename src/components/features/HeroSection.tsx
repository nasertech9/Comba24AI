import { useEffect, useState, useRef } from "react";
import { ChevronRight, Play, Sparkles, Zap, Brain, Terminal } from "lucide-react";
import heroImg from "@/assets/hero-bg.jpg";

const ROTATING_WORDS = ["Apps", "Websites", "Games", "Videos", "Businesses", "Agents", "Anything"];

const FLOATING_CARDS = [
  { icon: "🧠", title: "Brain LLM", sub: "Autonomous reasoning", color: "blue", x: "left-4 sm:left-8", y: "top-32 sm:top-40" },
  { icon: "🎮", title: "Game Gen", sub: "2D/3D in seconds", color: "purple", x: "right-4 sm:right-8", y: "top-24 sm:top-32" },
  { icon: "⚡", title: "Auto Deploy", sub: "1-click cloud", color: "cyan", x: "right-4 sm:right-12", y: "bottom-24 sm:bottom-32" },
  { icon: "🤖", title: "AI Agent", sub: "Running tasks", color: "pink", x: "left-4 sm:left-12", y: "bottom-32 sm:bottom-44" },
];

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [fadeState, setFadeState] = useState<"in" | "out">("in");
  const [typedText, setTypedText] = useState("");
  const [promptActive, setPromptActive] = useState(false);
  const typeRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const DEMO_PROMPT = "Build a SaaS app with AI authentication...";

  useEffect(() => {
    const cycle = () => {
      setFadeState("out");
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
        setFadeState("in");
      }, 400);
    };
    const id = setInterval(cycle, 2200);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    let i = 0;
    setTypedText("");
    setPromptActive(false);
    const startDelay = setTimeout(() => {
      setPromptActive(true);
      typeRef.current = setInterval(() => {
        i++;
        setTypedText(DEMO_PROMPT.slice(0, i));
        if (i >= DEMO_PROMPT.length) {
          if (typeRef.current) clearInterval(typeRef.current);
        }
      }, 60);
    }, 1200);
    return () => {
      clearTimeout(startDelay);
      if (typeRef.current) clearInterval(typeRef.current);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImg})` }}
      />

      {/* Radial glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-blue/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[300px] bg-brand-purple/10 rounded-full blur-[100px]" />
      </div>

      {/* Floating cards — desktop only */}
      <div className="hidden lg:block">
        {FLOATING_CARDS.map((card, i) => (
          <div
            key={card.title}
            className={`absolute ${card.x} ${card.y} glass-card rounded-xl p-3 w-44 animate-float z-10`}
            style={{ animationDelay: `${i * 0.8}s` }}
          >
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">{card.icon}</span>
              <div>
                <div className="text-xs font-bold text-white">{card.title}</div>
                <div className="text-[10px] text-white/50">{card.sub}</div>
              </div>
            </div>
            <div className={`mt-2 h-1 w-full rounded-full bg-gradient-to-r ${
              card.color === "blue" ? "from-brand-blue to-blue-400" :
              card.color === "purple" ? "from-brand-purple to-purple-400" :
              card.color === "cyan" ? "from-brand-cyan to-teal-400" :
              "from-brand-pink to-pink-400"
            }`} />
          </div>
        ))}
      </div>

      {/* Main hero content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 border border-brand-blue/20">
          <div className="glow-dot animate-pulse" />
          <span className="text-sm font-medium text-brand-blue">Comba24 AI — The 2026 AI Operating System</span>
          <Sparkles size={14} className="text-brand-blue" />
        </div>

        {/* Main headline */}
        <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl xl:text-8xl leading-tight mb-6 tracking-tight">
          <span className="text-white">Build Anything</span>
          <br />
          <span className="text-white/90">With Your </span>
          <span className="gradient-text">AI Brain</span>
        </h1>

        {/* Rotating subheadline */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="text-lg sm:text-2xl text-white/60 font-medium">Design</span>
          <span
            className={`text-lg sm:text-2xl font-bold gradient-text-purple transition-all duration-400 min-w-[120px] text-center ${
              fadeState === "in" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
            style={{ transition: "opacity 0.4s, transform 0.4s" }}
          >
            {ROTATING_WORDS[wordIndex]}
          </span>
          <span className="text-lg sm:text-2xl text-white/60 font-medium">in Seconds</span>
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg text-white/55 max-w-2xl mx-auto mb-10 leading-relaxed">
          The world's most advanced multi-agent LLM OS. Autonomous AI workers, long-term memory,
          multimodal generation, and full-stack deployment — all in one platform.
        </p>

        {/* Demo prompt bar */}
        <div className="max-w-xl mx-auto mb-10">
          <div className="glass-card rounded-xl p-3 border border-brand-blue/20">
            <div className="flex items-center gap-2 mb-2">
              <Terminal size={12} className="text-brand-blue/60" />
              <span className="text-[10px] text-white/30 font-mono uppercase tracking-widest">AI Brain Prompt</span>
              <div className="ml-auto flex gap-1">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
              </div>
            </div>
            <div className="font-mono text-sm text-brand-blue/90 min-h-[20px] text-left px-1">
              {promptActive && (
                <>
                  {typedText}
                  <span className="animate-blink text-brand-blue">|</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button className="btn-neon px-8 py-4 rounded-xl text-base font-bold flex items-center gap-2 w-full sm:w-auto justify-center min-h-[52px]">
            <Zap size={18} />
            Start Building Free
            <ChevronRight size={16} />
          </button>
          <button className="btn-ghost-neon px-8 py-4 rounded-xl text-base font-semibold flex items-center gap-2 w-full sm:w-auto justify-center min-h-[52px]">
            <Play size={16} fill="currentColor" />
            Watch Demo
          </button>
          <button className="px-8 py-4 rounded-xl text-base font-semibold text-white/60 hover:text-white flex items-center gap-2 w-full sm:w-auto justify-center transition-colors min-h-[52px]">
            <Brain size={16} />
            Launch AI Agent
          </button>
        </div>

        {/* Trust bar */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/40">
          <div className="flex items-center gap-2">
            <div className="glow-dot-purple" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="glow-dot" />
            <span>Free tier forever</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="glow-dot-purple" />
            <span>50+ AI modules</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="glow-dot" />
            <span>Deploy in seconds</span>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-black to-transparent pointer-events-none" />
    </section>
  );
}
