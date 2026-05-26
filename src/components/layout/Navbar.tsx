import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Zap, ChevronRight } from "lucide-react";
import { NAV_ITEMS } from "@/constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    if (href.startsWith("#")) {
      if (!isHome) {
        navigate("/");
        setTimeout(() => {
          const el = document.querySelector(href);
          el?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-black/90 backdrop-blur-xl border-b border-brand-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-purple rounded-lg opacity-80 group-hover:opacity-100 transition-opacity" />
              <Zap size={16} className="relative z-10 text-white" strokeWidth={2.5} />
            </div>
            <span className="font-display font-bold text-lg text-white">
              Comba<span className="gradient-text">24</span>
            </span>
            <span className="hidden sm:inline-block text-xs px-1.5 py-0.5 rounded bg-brand-blue/10 border border-brand-blue/20 text-brand-blue font-mono">
              AI
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/5 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button className="btn-ghost-neon px-4 py-2 rounded-lg text-sm font-semibold">
              Sign In
            </button>
            <button className="btn-neon px-5 py-2 rounded-lg text-sm flex items-center gap-1.5">
              Start Building
              <ChevronRight size={14} />
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-brand-dark/95 backdrop-blur-xl border-b border-brand-border">
          <div className="px-4 py-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="w-full text-left px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <button className="btn-ghost-neon px-4 py-2.5 rounded-lg text-sm font-semibold w-full">
                Sign In
              </button>
              <button className="btn-neon px-4 py-2.5 rounded-lg text-sm font-bold w-full flex items-center justify-center gap-1.5">
                Start Building <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
