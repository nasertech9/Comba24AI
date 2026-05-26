import { Zap, Brain, ChevronRight, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-16 sm:py-28 overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-purple/40 to-transparent" />

      {/* Radial glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-blue/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-brand-purple/10 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-brand-blue/25 mb-8">
          <Sparkles size={14} className="text-brand-blue" />
          <span className="text-sm text-brand-blue font-semibold">The 2026 AI Operating System is Here</span>
        </div>

        {/* Headline */}
        <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white leading-tight mb-6 tracking-tight">
          Your AI Brain
          <br />
          <span className="gradient-text">Awaits</span>
        </h2>

        <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
          The most powerful AI platform ever built. Design, code, automate, and deploy anything
          — with intelligence that thinks for itself.
        </p>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button className="btn-neon px-10 py-4 rounded-xl font-bold flex items-center gap-2.5 w-full sm:w-auto justify-center min-h-[54px] text-lg">
            <Zap size={20} />
            Start Building Free
            <ChevronRight size={18} />
          </button>
          <button className="btn-ghost-neon px-10 py-4 rounded-xl font-semibold flex items-center gap-2.5 w-full sm:w-auto justify-center min-h-[54px] text-lg">
            <Brain size={18} />
            See All Features
          </button>
        </div>

        {/* Microcopy */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/40">
          <span>✓ Free forever plan</span>
          <span>✓ No credit card required</span>
          <span>✓ Cancel anytime</span>
          <span>✓ 50+ AI modules</span>
        </div>
      </div>
    </section>
  );
}
