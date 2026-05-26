const TESTIMONIALS = [
  {
    text: "Comba24 AI replaced 3 of my full-time employees. My marketing agent runs campaigns, my coding agent ships features, and my support agent handles 500+ tickets a day.",
    author: "Marcus Lee",
    role: "SaaS Founder",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    stars: 5,
    stat: "3× faster",
  },
  {
    text: "I built and launched a full mobile app in 48 hours using the AI App Builder. What used to take my team 3 months now takes a weekend. This is the future.",
    author: "Priya Sharma",
    role: "Indie Developer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
    stars: 5,
    stat: "48hr ship",
  },
  {
    text: "The AI Game Generator is insane. Generated a fully playable RPG with dialogue trees, AI NPCs, and a custom economy system from a single paragraph prompt.",
    author: "Tyler Brooks",
    role: "Game Developer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
    stars: 5,
    stat: "1 prompt = game",
  },
  {
    text: "Our content team uses Comba24 AI to produce 50+ pieces of marketing content per day. The AI agents understand our brand voice better than new hires.",
    author: "Sofia Chen",
    role: "Head of Marketing, TechCo",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    stars: 5,
    stat: "50+ assets/day",
  },
  {
    text: "Deployed a full-stack SaaS platform with Stripe billing, auth, and a custom AI chatbot in 6 hours. Comba24 AI is what the internet looked like in 2026.",
    author: "Arjun Patel",
    role: "Startup CTO",
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=80&h=80&fit=crop&crop=face",
    stars: 5,
    stat: "Full SaaS in 6h",
  },
  {
    text: "The brain LLM routing is remarkable. It intelligently selects the best model for each task — I never have to think about which AI to use. It just works.",
    author: "Nina Kowalski",
    role: "AI Research Lead",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face",
    stars: 5,
    stat: "200+ models",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 mb-4">
            <span className="text-xs font-semibold text-brand-blue uppercase tracking-widest">★★★★★ Reviews</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white mb-4">
            Builders Who Use
            <br />
            <span className="gradient-text">Comba24 AI</span>
          </h2>
          <p className="text-base text-white/50 max-w-xl mx-auto">
            Join 10,000+ creators, developers, and businesses already building with AI.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-5 sm:p-6 flex flex-col"
            >
              {/* Stars + stat */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, si) => (
                    <span key={si} className="text-amber-400 text-sm">★</span>
                  ))}
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue font-bold">
                  {t.stat}
                </span>
              </div>

              {/* Quote */}
              <p className="text-sm text-white/65 leading-relaxed flex-1 mb-5 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-9 h-9 rounded-full object-cover border border-white/10"
                />
                <div>
                  <div className="text-sm font-bold text-white">{t.author}</div>
                  <div className="text-xs text-white/40">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
