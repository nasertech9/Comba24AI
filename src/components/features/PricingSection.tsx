import { useState } from "react";
import { Check, Star, Zap } from "lucide-react";
import { PRICING } from "@/constants";

export default function PricingSection() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="relative py-16 sm:py-24">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-purple/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/20 mb-4">
            <Star size={12} className="text-brand-purple" />
            <span className="text-xs font-semibold text-brand-purple uppercase tracking-widest">Pricing Plans</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white mb-4">
            Scale With Your
            <br />
            <span className="gradient-text">AI Ambitions</span>
          </h2>
          <p className="text-base sm:text-lg text-white/50 max-w-xl mx-auto mb-6">
            Start free. Upgrade when you're ready to build bigger.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 glass-card rounded-full px-2 py-2">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${!annual ? "bg-brand-blue text-brand-black" : "text-white/50"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${annual ? "bg-brand-blue text-brand-black" : "text-white/50"}`}
            >
              Annual
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${annual ? "bg-brand-black/20" : "bg-emerald-500/20 text-emerald-400"}`}>
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRICING.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-6 sm:p-8 flex flex-col ${
                plan.highlighted
                  ? "animate-pulse-glow"
                  : "glass-card"
              }`}
              style={plan.highlighted ? {
                background: "linear-gradient(135deg, rgba(0,212,255,0.08), rgba(139,92,246,0.08))",
                border: "1px solid rgba(0,212,255,0.3)",
                boxShadow: "0 0 40px rgba(0,212,255,0.15), 0 0 80px rgba(139,92,246,0.1)",
              } : {}}
            >
              {/* Badge */}
              {plan.badge && (
                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-brand-blue to-brand-purple text-white"
                    : "bg-brand-purple/20 border border-brand-purple/40 text-brand-purple"
                }`}>
                  {plan.badge}
                </div>
              )}

              {/* Plan name */}
              <div className="mb-1">
                <div className="flex items-center gap-2">
                  {plan.highlighted && <Zap size={14} className="text-brand-blue" />}
                  <span className={`font-display font-bold text-lg ${plan.highlighted ? "text-brand-blue" : "text-white"}`}>
                    {plan.name}
                  </span>
                </div>
              </div>
              <p className="text-sm text-white/45 mb-6 leading-relaxed">{plan.description}</p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-end gap-1.5">
                  <span className="font-display font-black text-4xl sm:text-5xl text-white">
                    ${annual ? Math.floor(plan.price * 0.8) : plan.price}
                  </span>
                  <span className="text-white/40 text-sm mb-2 font-medium">
                    {plan.price === 0 ? "forever" : `/ ${plan.interval}`}
                  </span>
                </div>
                {annual && plan.price > 0 && (
                  <div className="text-xs text-emerald-400 mt-1">
                    Save ${Math.floor(plan.price * 0.2 * 12)}/year
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check size={15} className={`mt-0.5 flex-shrink-0 ${plan.highlighted ? "text-brand-blue" : "text-brand-purple"}`} />
                    <span className="text-white/65">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all ${
                  plan.highlighted
                    ? "btn-neon"
                    : "btn-ghost-neon"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Enterprise callout */}
        <div className="mt-8 glass-card rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div>
            <div className="font-bold text-white text-lg">Enterprise</div>
            <div className="text-sm text-white/50 mt-0.5">Unlimited scale, dedicated models, white-label, on-premise deployment, and 24/7 enterprise SLA.</div>
          </div>
          <button className="sm:ml-auto btn-ghost-neon px-6 py-3 rounded-xl text-sm font-semibold whitespace-nowrap">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
}
