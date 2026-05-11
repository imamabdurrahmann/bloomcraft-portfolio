"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        sessionStorage.setItem("adminLoggedIn", "true");
        router.push("/admin/dashboard");
      } else {
        setError("Password salah");
      }
    } catch {
      setError("Terjadi kesalahan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-pastel/20 to-mint-pastel/20 px-4">
      <div className="glass-card p-8 w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-display font-bold gradient-text mb-2">Admin</h1>
          <p className="text-secondary">Elly&apos;s Florist</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password"
              className="w-full px-4 py-3 rounded-xl border-2 border-border bg-white focus:border-primary focus:outline-none transition-colors"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full justify-center disabled:opacity-50"
          >
            {loading ? "Loading..." : "Masuk"}
          </button>
        </form>
      </div>
    </div>
  );
}