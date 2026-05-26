import { AGENTS } from "@/constants";
import type { Agent } from "@/types";
import { Activity, Play, Pause, Zap } from "lucide-react";

const STATUS_CONFIG = {
  active: { label: "Active", dot: "bg-emerald-400", text: "text-emerald-400", pulse: true },
  running: { label: "Running", dot: "bg-brand-blue", text: "text-brand-blue", pulse: true },
  idle: { label: "Idle", dot: "bg-white/30", text: "text-white/40", pulse: false },
};

function AgentCard({ agent }: { agent: Agent }) {
  const sc = STATUS_CONFIG[agent.status];

  return (
    <div className="glass-card rounded-2xl p-5 group relative overflow-hidden">
      {/* Glow bg */}
      <div
        className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-5 blur-2xl group-hover:opacity-15 transition-opacity"
        style={{ background: agent.color }}
      />

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
          style={{ background: `${agent.color}15`, border: `1px solid ${agent.color}25` }}
        >
          {agent.avatar}
        </div>
        <div className="flex items-center gap-1.5">
          <div className={`w-2 h-2 rounded-full ${sc.dot} ${sc.pulse ? "animate-pulse" : ""}`} />
          <span className={`text-xs font-semibold ${sc.text}`}>{sc.label}</span>
        </div>
      </div>

      {/* Name */}
      <div className="mb-1">
        <span
          className="font-display font-black text-xl"
          style={{ color: agent.color }}
        >
          {agent.name}
        </span>
      </div>
      <div className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-3">
        {agent.role}
      </div>
      <p className="text-sm text-white/55 leading-relaxed mb-4">
        {agent.description}
      </p>

      {/* Capabilities */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {agent.capabilities.map((cap) => (
          <span
            key={cap}
            className="text-xs px-2 py-1 rounded-md font-medium"
            style={{
              background: `${agent.color}12`,
              border: `1px solid ${agent.color}25`,
              color: agent.color,
            }}
          >
            {cap}
          </span>
        ))}
      </div>

      {/* CTA */}
      <div className="flex items-center gap-2">
        <button
          className="flex-1 py-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all"
          style={{
            background: `${agent.color}15`,
            border: `1px solid ${agent.color}30`,
            color: agent.color,
          }}
        >
          {agent.status === "idle" ? <Play size={12} /> : <Activity size={12} />}
          {agent.status === "idle" ? "Activate" : "View Task"}
        </button>
        <button className="p-2.5 glass-card rounded-lg text-white/40 hover:text-white transition-colors">
          <Zap size={14} />
        </button>
      </div>
    </div>
  );
}

export default function AgentsSection() {
  return (
    <section id="agents" className="relative py-16 sm:py-24">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
            <Activity size={12} className="text-emerald-400" />
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">AI Workforce</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white mb-4">
            Your Autonomous
            <br />
            <span className="gradient-text">AI Employees</span>
          </h2>
          <p className="text-base sm:text-lg text-white/50 max-w-2xl mx-auto">
            Deploy specialized AI agents that work 24/7, collaborate with each other, access APIs, and run your entire business automatically.
          </p>
        </div>

        {/* Agent grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {AGENTS.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-8 glass-card rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center">
              <Zap size={18} className="text-brand-blue" />
            </div>
            <div>
              <div className="font-bold text-white">Build Custom AI Agents</div>
              <div className="text-sm text-white/50">Define roles, capabilities, tools, and memory for any use case</div>
            </div>
          </div>
          <button className="btn-neon px-6 py-3 rounded-xl text-sm font-bold sm:ml-auto whitespace-nowrap">
            Create Agent
          </button>
        </div>
      </div>
    </section>
  );
}
