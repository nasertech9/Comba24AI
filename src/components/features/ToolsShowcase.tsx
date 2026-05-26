import { useState } from "react";
import { TOOLS } from "@/constants";
import type { Tool } from "@/types";
import { ArrowRight, Sparkles, ChevronRight } from "lucide-react";
import dashboardImg from "@/assets/dashboard-preview.jpg";

function ToolTab({ tool, active, onClick }: { tool: Tool; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-4 py-4 rounded-xl transition-all duration-200 group ${
        active
          ? "bg-brand-blue/10 border border-brand-blue/30"
          : "glass-card hover:bg-white/5"
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl">{tool.icon}</span>
        <div>
          <div className={`font-bold text-sm ${active ? "text-brand-blue" : "text-white"}`}>
            {tool.name}
          </div>
          <div className="text-xs text-white/40 mt-0.5 leading-tight">{tool.description.slice(0, 50)}…</div>
        </div>
        <ChevronRight size={14} className={`ml-auto transition-transform ${active ? "rotate-90 text-brand-blue" : "text-white/20 group-hover:text-white/50"}`} />
      </div>
    </button>
  );
}

export default function ToolsShowcase() {
  const [activeId, setActiveId] = useState(TOOLS[0].id);
  const active = TOOLS.find((t) => t.id === activeId) ?? TOOLS[0];

  return (
    <section id="tools" className="relative py-16 sm:py-24 grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/20 mb-4">
            <Sparkles size={12} className="text-brand-purple" />
            <span className="text-xs font-semibold text-brand-purple uppercase tracking-widest">AI Creator Tools</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white mb-4">
            Prompt → <span className="gradient-text-purple">Reality</span>
          </h2>
          <p className="text-base sm:text-lg text-white/50 max-w-xl mx-auto">
            Type what you want. Watch it materialize. Faster than any tool you've used before.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Sidebar tabs */}
          <div className="flex flex-col gap-3">
            {TOOLS.map((tool) => (
              <ToolTab
                key={tool.id}
                tool={tool}
                active={tool.id === activeId}
                onClick={() => setActiveId(tool.id)}
              />
            ))}

            <div className="mt-2 p-4 glass-card-purple rounded-xl">
              <div className="text-xs text-white/40 mb-2 font-mono uppercase tracking-widest">Active AI Builder</div>
              <div className="font-bold text-lg text-white">{active.name}</div>
              <div className="text-sm text-white/50 mt-1">{active.description}</div>
              <button className="mt-3 btn-neon w-full py-2.5 rounded-lg text-sm flex items-center justify-center gap-2">
                Launch {active.name} <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Main panel */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* Preview window */}
            <div className="glass-card rounded-2xl overflow-hidden">
              {/* Window bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <div className="ml-4 flex-1 bg-white/5 rounded-md px-3 py-1 text-xs text-white/30 font-mono">
                  comba24.ai / {active.id}-builder
                </div>
              </div>
              {/* Dashboard image */}
              <div className="relative h-48 sm:h-64 overflow-hidden">
                <img
                  src={dashboardImg}
                  alt="AI Dashboard Preview"
                  className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-xs text-brand-blue font-mono mb-1">▶ Generating {active.name} output…</div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-brand-blue to-brand-purple rounded-full w-2/3 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

            {/* Demo prompts */}
            <div className="grid gap-3">
              <div className="text-xs text-white/30 font-mono uppercase tracking-widest px-1">
                Example Prompts — Click to Try
              </div>
              {active.demos.map((demo, i) => (
                <button
                  key={i}
                  className="glass-card rounded-xl px-4 py-3 text-left group hover:border-brand-blue/30 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-brand-blue text-xs font-mono font-bold">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-sm text-white/70 group-hover:text-white transition-colors flex-1">{demo}</span>
                    <ArrowRight size={14} className="text-white/20 group-hover:text-brand-blue transition-colors group-hover:translate-x-1 duration-200" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
