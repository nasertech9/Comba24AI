import { FEATURES } from "@/constants";
import type { Feature } from "@/types";
import { ArrowRight } from "lucide-react";

const COLOR_MAP = {
  blue: {
    icon: "bg-brand-blue/10 text-brand-blue",
    glow: "group-hover:shadow-glow-blue",
    tag: "status-live",
    bar: "from-brand-blue to-cyan-400",
    badge: "bg-brand-blue/10 border-brand-blue/30 text-brand-blue",
  },
  purple: {
    icon: "bg-brand-purple/10 text-brand-purple",
    glow: "group-hover:shadow-glow-purple",
    tag: "status-live",
    bar: "from-brand-purple to-purple-400",
    badge: "bg-brand-purple/10 border-brand-purple/30 text-brand-purple",
  },
  cyan: {
    icon: "bg-cyan-500/10 text-cyan-400",
    glow: "group-hover:shadow-glow-blue",
    tag: "status-live",
    bar: "from-cyan-400 to-teal-400",
    badge: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400",
  },
  pink: {
    icon: "bg-pink-500/10 text-pink-400",
    glow: "group-hover:shadow-glow-purple",
    tag: "status-beta",
    bar: "from-pink-400 to-rose-400",
    badge: "bg-pink-500/10 border-pink-500/30 text-pink-400",
  },
  green: {
    icon: "bg-emerald-500/10 text-emerald-400",
    glow: "",
    tag: "status-live",
    bar: "from-emerald-400 to-green-400",
    badge: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
  },
  yellow: {
    icon: "bg-amber-500/10 text-amber-400",
    glow: "",
    tag: "status-live",
    bar: "from-amber-400 to-yellow-400",
    badge: "bg-amber-500/10 border-amber-500/30 text-amber-400",
  },
};

const TAG_LABELS = { live: "Live", beta: "Beta", soon: "Coming Soon" };
const TAG_CLASSES = { live: "status-live", beta: "status-beta", soon: "status-soon" };

function FeatureCard({ feature }: { feature: Feature }) {
  const c = COLOR_MAP[feature.color];
  return (
    <div className={`glass-card rounded-2xl p-5 sm:p-6 group relative overflow-hidden cursor-default`}>
      {/* Corner accent */}
      <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl ${c.bar} opacity-5 rounded-bl-full`} />

      {/* Tag */}
      <div className="flex items-start justify-between mb-4">
        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${c.icon} flex items-center justify-center text-xl sm:text-2xl flex-shrink-0`}>
          {feature.icon}
        </div>
        <span className={`text-xs px-2.5 py-1 rounded-full border font-semibold ${TAG_CLASSES[feature.tag]}`}>
          {TAG_LABELS[feature.tag]}
        </span>
      </div>

      {/* Content */}
      <h3 className="font-display font-bold text-base sm:text-lg text-white mb-2 leading-snug">
        {feature.title}
      </h3>
      <p className="text-sm text-white/50 leading-relaxed mb-4">
        {feature.description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className={`h-0.5 flex-1 rounded-full bg-gradient-to-r ${c.bar} opacity-30 group-hover:opacity-70 transition-opacity`} />
        <button className="ml-3 text-xs text-white/40 group-hover:text-white/80 transition-colors flex items-center gap-1">
          Explore <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}

export default function FeaturesGrid() {
  return (
    <section id="features" className="relative py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 mb-4">
            <div className="glow-dot" style={{ width: 6, height: 6 }} />
            <span className="text-xs font-semibold text-brand-blue uppercase tracking-widest">Platform Modules</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white mb-4">
            Everything You Need to
            <br />
            <span className="gradient-text">Build the Future</span>
          </h2>
          <p className="text-base sm:text-lg text-white/50 max-w-2xl mx-auto">
            12 AI-powered modules working in harmony. From idea to deployed product in minutes, not months.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
