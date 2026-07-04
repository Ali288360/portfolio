"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [bootText, setBootText] = useState("INITIALIZING SECURE CHANNEL...");
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    // Check if already logged in
    const token = localStorage.getItem("admin_token");
    if (token) router.push("/admin");

    const msgs = [
      { text: "ENCRYPTING CONNECTION...", delay: 600 },
      { text: "VERIFYING IDENTITY MATRIX...", delay: 1200 },
      { text: "SECURE CHANNEL ESTABLISHED.", delay: 1800 },
    ];
    msgs.forEach(({ text, delay }) => {
      setTimeout(() => setBootText(text), delay);
    });
    setTimeout(() => setBooted(true), 2400);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (data.success) {
        localStorage.setItem("admin_token", data.token);
        router.push("/admin");
      } else {
        setError(data.error || "Access denied.");
      }
    } catch {
      setError("Connection failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Scanline overlay */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.1)_2px,rgba(0,0,0,0.1)_4px)] pointer-events-none opacity-20" />

      <AnimatePresence>
        {!booted ? (
          <motion.div
            key="boot"
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="text-neon-cyan font-mono text-lg md:text-2xl tracking-widest animate-pulse mb-6">
              {bootText}
            </div>
            <div className="w-64 h-1 bg-gray-800 rounded-full mx-auto overflow-hidden">
              <motion.div
                className="h-full bg-neon-cyan shadow-[0_0_10px_#00f3ff]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.4, ease: "linear" }}
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md mx-4"
          >
            {/* Card */}
            <div className="relative bg-black/80 border border-neon-cyan/30 rounded-2xl overflow-hidden backdrop-blur-md shadow-[0_0_60px_rgba(0,243,255,0.1)]">
              {/* Top glow line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />
              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-neon-cyan" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-neon-cyan" />

              <div className="p-8 md:p-10">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-neon-cyan/50 bg-neon-cyan/5 mb-4 relative">
                    <span className="text-2xl">🔐</span>
                    <div className="absolute inset-0 rounded-full border border-neon-purple/30 animate-spin-slow" />
                  </div>
                  <p className="text-neon-cyan font-mono text-xs tracking-[0.4em] uppercase mb-2">
                    Admin Access Portal
                  </p>
                  <h1 className="text-2xl md:text-3xl font-bold text-white">
                    Secure <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Login</span>
                  </h1>
                  <p className="text-gray-500 text-xs font-mono mt-2">
                    &gt; Authorized personnel only
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleLogin} className="space-y-5">
                  {/* Email */}
                  <div className="group">
                    <label className="text-[10px] font-mono text-neon-cyan tracking-widest uppercase mb-2 block">
                      Admin Email
                    </label>
                    <div className="relative">
                      <input
                        id="login-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="abdialiaa200@gmail.com"
                        className="w-full bg-black/60 border border-white/10 focus:border-neon-cyan/60 text-white placeholder-gray-600 rounded-lg px-4 py-3 text-sm font-mono outline-none transition-all duration-300 focus:shadow-[0_0_15px_rgba(0,243,255,0.1)]"
                      />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 text-sm">📧</div>
                    </div>
                  </div>

                  {/* Password */}
                  <div className="group">
                    <label className="text-[10px] font-mono text-neon-cyan tracking-widest uppercase mb-2 block">
                      Access Key
                    </label>
                    <div className="relative">
                      <input
                        id="login-password"
                        type={showPass ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="••••••••"
                        className="w-full bg-black/60 border border-white/10 focus:border-neon-cyan/60 text-white placeholder-gray-600 rounded-lg px-4 py-3 pr-12 text-sm font-mono outline-none transition-all duration-300 focus:shadow-[0_0_15px_rgba(0,243,255,0.1)]"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPass(!showPass)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-neon-cyan transition-colors text-sm"
                      >
                        {showPass ? "🙈" : "👁️"}
                      </button>
                    </div>
                  </div>

                  {/* Error */}
                  <AnimatePresence>
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2 text-red-400 font-mono text-xs bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3"
                      >
                        <span>⚠</span>
                        <span>ACCESS_DENIED: {error}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit Button */}
                  <motion.button
                    id="login-submit"
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full relative py-3 px-6 bg-neon-cyan/10 border border-neon-cyan/50 hover:border-neon-cyan hover:bg-neon-cyan/20 text-neon-cyan font-mono font-bold tracking-widest uppercase rounded-lg transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,243,255,0.3)] disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group"
                  >
                    <span className="relative z-10">
                      {loading ? "AUTHENTICATING..." : "INITIATE ACCESS →"}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-cyan/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </motion.button>
                </form>

                {/* Footer hint */}
                <div className="mt-6 pt-6 border-t border-white/5 text-center">
                  <p className="text-gray-600 font-mono text-[10px] tracking-widest">
                    SYSTEM: PORTFOLIO_ADMIN_v1.0
                  </p>
                  <a href="/" className="text-gray-500 hover:text-neon-cyan font-mono text-[10px] transition-colors mt-1 inline-block">
                    ← Return to Portfolio
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
