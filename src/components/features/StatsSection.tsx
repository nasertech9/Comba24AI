import { useEffect, useState, useRef } from "react";
import { STATS } from "@/constants";

function AnimatedCounter({ target, suffix = "" }: { target: string; suffix?: string }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const numStr = target.replace(/[^0-9.]/g, "");
          const num = parseFloat(numStr);
          const prefix = target.replace(numStr, "").replace(suffix, "");
          let start = 0;
          const duration = 1800;
          const step = (num / duration) * 16;
          const interval = setInterval(() => {
            start += step;
            if (start >= num) {
              setDisplay(target.replace(suffix, ""));
              clearInterval(interval);
            } else {
              setDisplay(prefix + Math.floor(start * 10) / 10);
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, suffix]);

  return (
    <div ref={ref} className="font-display font-black text-4xl sm:text-5xl gradient-text">
      {display}{suffix}
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="section-divider mb-12" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="glass-card rounded-2xl p-6 sm:p-8 text-center group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <div className="mt-2 text-sm sm:text-base text-white/50 font-medium">{stat.label}</div>
              <div className="mt-3 h-0.5 w-8 mx-auto rounded-full bg-gradient-to-r from-brand-blue to-brand-purple opacity-50 group-hover:opacity-100 group-hover:w-16 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
      <div className="section-divider mt-12" />
    </section>
  );
}
