import { Link } from "react-router-dom";
import { Zap, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-black flex items-center justify-center px-4">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-blue/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-brand-purple/5 rounded-full blur-[80px]" />
      </div>

      <div className="text-center relative z-10">
        {/* 404 */}
        <div className="font-display font-black text-[120px] sm:text-[180px] leading-none gradient-text opacity-20 mb-4 select-none">
          404
        </div>

        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 border border-brand-blue/20 flex items-center justify-center mx-auto mb-6 -mt-10">
          <Zap size={24} className="text-brand-blue" />
        </div>

        <h1 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
          This page doesn't exist
        </h1>
        <p className="text-base text-white/45 max-w-sm mx-auto mb-8">
          The AI couldn't find this dimension. Let's get you back to the main platform.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link to="/" className="btn-neon px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 w-full sm:w-auto justify-center">
            <Home size={15} />
            Go to Homepage
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn-ghost-neon px-6 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <ArrowLeft size={15} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
