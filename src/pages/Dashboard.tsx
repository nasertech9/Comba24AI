import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Zap, Brain, Activity, TrendingUp, Code, Layers, Play, ChevronRight,
  BarChart3, Globe, Smartphone, Gamepad2, Palette, Video, Music, Image,
  Bot, Cpu, Database, GitBranch, Plus, ArrowUpRight, Clock, Users
} from "lucide-react";

const SIDEBAR_ITEMS = [
  { icon: Brain, label: "Brain LLM", active: true },
  { icon: Code, label: "App Builder" },
  { icon: Globe, label: "Web Builder" },
  { icon: Gamepad2, label: "Game Studio" },
  { icon: Palette, label: "Design Studio" },
  { icon: Video, label: "Video Studio" },
  { icon: Music, label: "Music Studio" },
  { icon: Image, label: "Image Gen" },
  { icon: Bot, label: "AI Agents" },
  { icon: Zap, label: "Automation" },
  { icon: Database, label: "Cloud DB" },
  { icon: BarChart3, label: "Analytics" },
];

const RECENT_PROJECTS = [
  { name: "FitTrack Pro", type: "Mobile App", status: "deployed", time: "2h ago", icon: Smartphone, color: "#00d4ff" },
  { name: "NexaStore", type: "Website", status: "building", time: "4h ago", icon: Globe, color: "#8b5cf6" },
  { name: "Pixel Quest RPG", type: "Game", status: "deployed", time: "1d ago", icon: Gamepad2, color: "#ec4899" },
  { name: "BrandKit AI", type: "Design", status: "draft", time: "2d ago", icon: Palette, color: "#f59e0b" },
];

const AGENT_TASKS = [
  { agent: "CODEX", task: "Refactoring auth module", progress: 73, color: "#8b5cf6" },
  { agent: "ARIA", task: "Writing 12 ad variations", progress: 45, color: "#00d4ff" },
  { agent: "NOVA", task: "Research: Q3 market trends", progress: 91, color: "#06b6d4" },
  { agent: "PULSE", task: "SEO audit — 40 pages", progress: 28, color: "#f59e0b" },
];

const METRICS = [
  { label: "AI Tokens Used", value: "3.2M", change: "+18%", icon: Cpu, color: "#00d4ff" },
  { label: "Projects Built", value: "47", change: "+5 this week", icon: Layers, color: "#8b5cf6" },
  { label: "Active Agents", value: "4", change: "2 running", icon: Activity, color: "#10b981" },
  { label: "Monthly Revenue", value: "$12.4K", change: "+34%", icon: TrendingUp, color: "#f59e0b" },
];

const STATUS_COLORS = {
  deployed: "bg-emerald-400/10 text-emerald-400 border-emerald-400/20",
  building: "bg-brand-blue/10 text-brand-blue border-brand-blue/20",
  draft: "bg-white/10 text-white/40 border-white/20",
};

export default function Dashboard() {
  const [activeItem, setActiveItem] = useState("Brain LLM");
  const [promptValue, setPromptValue] = useState("");

  return (
    <div className="min-h-screen bg-brand-black flex flex-col">
      {/* Top bar */}
      <header className="h-14 border-b border-brand-border flex items-center px-4 sm:px-6 gap-4 shrink-0 bg-brand-dark/60 backdrop-blur-xl z-30">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center">
            <Zap size={13} className="text-white" />
          </div>
          <span className="font-display font-bold text-sm text-white hidden sm:inline">
            Comba<span className="gradient-text">24 AI</span>
          </span>
        </Link>

        <div className="flex-1 max-w-md mx-auto">
          <div className="relative">
            <Brain size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              className="w-full bg-white/5 border border-white/10 rounded-lg pl-8 pr-4 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-brand-blue/40 transition-colors"
              placeholder="Ask AI anything…"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-400/10 border border-emerald-400/20">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-emerald-400 font-semibold hidden sm:inline">All Systems Live</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center text-white text-xs font-bold">
            JD
          </div>
        </div>
      </header>

      <div className="flex flex-1 min-h-0">
        {/* Sidebar */}
        <aside className="w-14 sm:w-52 border-r border-brand-border bg-brand-dark/40 flex flex-col shrink-0 overflow-y-auto">
          <div className="p-2 sm:p-3 flex-1">
            <div className="hidden sm:block text-xs text-white/25 uppercase tracking-widest font-semibold px-2 mb-3 mt-2">
              AI Modules
            </div>
            {SIDEBAR_ITEMS.map(({ icon: Icon, label }) => (
              <button
                key={label}
                onClick={() => setActiveItem(label)}
                className={`w-full flex items-center gap-3 px-2 sm:px-3 py-2.5 rounded-xl mb-1 transition-all text-left group ${
                  activeItem === label
                    ? "bg-brand-blue/10 border border-brand-blue/20 text-brand-blue"
                    : "text-white/50 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon size={16} className="shrink-0" />
                <span className="hidden sm:inline text-sm font-medium">{label}</span>
              </button>
            ))}
          </div>

          <div className="p-2 sm:p-3 border-t border-brand-border">
            <button className="w-full flex items-center gap-3 px-2 sm:px-3 py-2.5 rounded-xl text-white/40 hover:text-white hover:bg-white/5 transition-all">
              <GitBranch size={16} className="shrink-0" />
              <span className="hidden sm:inline text-sm">GitHub Sync</span>
            </button>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          {/* Welcome */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="font-display font-black text-2xl sm:text-3xl text-white">
                AI Dashboard
              </h1>
              <p className="text-sm text-white/40 mt-0.5">
                {new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
              </p>
            </div>
            <button className="btn-neon px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-1.5">
              <Plus size={14} />
              <span className="hidden sm:inline">New Project</span>
            </button>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {METRICS.map(({ label, value, change, icon: Icon, color }) => (
              <div key={label} className="glass-card rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: `${color}15`, border: `1px solid ${color}25` }}
                  >
                    <Icon size={14} style={{ color }} />
                  </div>
                  <ArrowUpRight size={12} className="text-white/20" />
                </div>
                <div className="font-display font-black text-xl sm:text-2xl text-white">{value}</div>
                <div className="text-xs text-white/35 mt-0.5">{label}</div>
                <div className="text-xs mt-1.5" style={{ color }}>{change}</div>
              </div>
            ))}
          </div>

          {/* Brain LLM prompt */}
          <div className="glass-card rounded-2xl p-5 sm:p-6 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Brain size={16} className="text-brand-blue" />
              <span className="font-bold text-white">Brain LLM</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue font-mono">
                GPT-5 Class
              </span>
              <div className="ml-auto flex gap-1.5 text-xs text-white/30">
                <span className="px-2 py-0.5 rounded bg-white/5">Model: Auto</span>
                <span className="px-2 py-0.5 rounded bg-white/5">Memory: On</span>
              </div>
            </div>

            <textarea
              value={promptValue}
              onChange={(e) => setPromptValue(e.target.value)}
              placeholder="Build me a subscription SaaS app with user auth, Stripe billing, and an analytics dashboard…"
              rows={3}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-brand-blue/40 transition-colors resize-none mb-3"
            />

            <div className="flex flex-wrap items-center gap-2">
              {["Build App", "Build Website", "Generate Game", "Write Code", "Create Design"].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setPromptValue(tag + " — ")}
                  className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/50 hover:text-white hover:border-brand-blue/30 transition-all"
                >
                  {tag}
                </button>
              ))}
              <button className="btn-neon ml-auto px-5 py-2 rounded-xl text-sm font-bold flex items-center gap-1.5">
                <Zap size={13} />
                Generate
              </button>
            </div>
          </div>

          {/* Two columns: projects + agents */}
          <div className="grid lg:grid-cols-2 gap-5">
            {/* Recent Projects */}
            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <Layers size={15} className="text-brand-blue" />
                  <span className="font-bold text-white text-sm">Recent Projects</span>
                </div>
                <button className="text-xs text-white/40 hover:text-brand-blue transition-colors flex items-center gap-1">
                  View all <ChevronRight size={12} />
                </button>
              </div>

              <div className="space-y-3">
                {RECENT_PROJECTS.map(({ name, type, status, time, icon: Icon, color }) => (
                  <div key={name} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${color}12`, border: `1px solid ${color}20` }}
                    >
                      <Icon size={14} style={{ color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-white group-hover:text-brand-blue transition-colors truncate">{name}</div>
                      <div className="text-xs text-white/35">{type}</div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${STATUS_COLORS[status as keyof typeof STATUS_COLORS]}`}>
                        {status}
                      </span>
                      <span className="text-[10px] text-white/25 flex items-center gap-1">
                        <Clock size={9} /> {time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Agent Tasks */}
            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <Bot size={15} className="text-brand-purple" />
                  <span className="font-bold text-white text-sm">Agent Activity</span>
                </div>
                <button className="text-xs text-white/40 hover:text-brand-purple transition-colors flex items-center gap-1">
                  Manage <ChevronRight size={12} />
                </button>
              </div>

              <div className="space-y-4">
                {AGENT_TASKS.map(({ agent, task, progress, color }) => (
                  <div key={agent}>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold font-mono" style={{ color }}>{agent}</span>
                        <span className="text-xs text-white/45 truncate max-w-[140px]">{task}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-white/40">{progress}%</span>
                        <button className="text-white/20 hover:text-white transition-colors">
                          <Play size={10} fill="currentColor" />
                        </button>
                      </div>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${progress}%`,
                          background: `linear-gradient(90deg, ${color}, ${color}aa)`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <button className="mt-5 w-full py-2.5 rounded-xl border border-brand-purple/25 text-brand-purple text-sm font-semibold hover:bg-brand-purple/10 transition-colors flex items-center justify-center gap-2">
                <Bot size={14} />
                Deploy New Agent
              </button>
            </div>
          </div>

          {/* Quick tools grid */}
          <div className="mt-5 glass-card rounded-2xl p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-5">
              <Users size={15} className="text-white/50" />
              <span className="font-bold text-white text-sm">Quick Launch</span>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
              {[
                { icon: "🌐", label: "Website", color: "#00d4ff" },
                { icon: "📱", label: "Mobile App", color: "#8b5cf6" },
                { icon: "🎮", label: "Game", color: "#ec4899" },
                { icon: "🎨", label: "Design", color: "#f59e0b" },
                { icon: "🎬", label: "Video", color: "#10b981" },
                { icon: "🖼️", label: "Image", color: "#06b6d4" },
              ].map(({ icon, label, color }) => (
                <button
                  key={label}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all group"
                >
                  <span className="text-2xl">{icon}</span>
                  <span className="text-xs text-white/40 group-hover:text-white transition-colors font-medium">{label}</span>
                </button>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
