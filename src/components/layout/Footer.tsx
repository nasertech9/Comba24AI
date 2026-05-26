import { Link } from "react-router-dom";
import { Zap, Twitter, Github, Linkedin, Youtube } from "lucide-react";

const FOOTER_LINKS = {
  Platform: ["AI Website Builder", "AI App Builder", "AI Game Studio", "AI Design System", "AI Automation"],
  Agents: ["Marketing Agent", "Coding Agent", "Research Agent", "Finance Agent", "Support Agent"],
  Tools: ["AI Video Studio", "AI Music Studio", "AI Image Generator", "AI Analytics", "Cloud Console"],
  Company: ["About Us", "Blog", "Careers", "Press Kit", "Contact"],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-brand-border/60 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center">
                <Zap size={14} className="text-white" />
              </div>
              <span className="font-display font-bold text-white">
                Comba<span className="gradient-text">24 AI</span>
              </span>
            </Link>
            <p className="text-sm text-white/40 leading-relaxed max-w-[200px]">
              The Real Brain LLM Operating System for the next generation of builders.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {[Twitter, Github, Linkedin, Youtube].map((Icon, i) => (
                <button
                  key={i}
                  className="w-8 h-8 rounded-lg glass-card flex items-center justify-center text-white/40 hover:text-brand-blue transition-colors"
                >
                  <Icon size={14} />
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <div className="text-xs font-bold uppercase tracking-widest text-white/30 mb-4">{title}</div>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="section-divider mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <div>© 2026 Comba24 AI. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="glow-dot" style={{ width: 5, height: 5 }} />
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
