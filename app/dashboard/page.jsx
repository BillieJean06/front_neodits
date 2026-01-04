"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [user] = useState(() => {
    if (typeof window === "undefined") return null;
    try {
      return JSON.parse(localStorage.getItem("Neodits_user"));
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (!user) window.location.href = "/login";
  }, [user]);

  if (!user) return null;

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #1e1e1e, #000)",
        color: "#fff",
        padding: 40,
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 40,
        }}
      >
        <h1 style={{ fontSize: 28, letterSpacing: 2 }}>Neodits</h1>
        <button
          onClick={() => {
            localStorage.clear();
            window.location.href = "/login";
          }}
          style={{
            background: "transparent",
            border: "1px solid #555",
            padding: "8px 18px",
            borderRadius: 20,
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Sair
        </button>
      </header>

      <section
        style={{
          background: "rgba(255,255,255,.05)",
          borderRadius: 24,
          padding: 30,
          boxShadow: "0 0 40px rgba(0,0,0,.6)",
        }}
      >
        <h2 style={{ marginBottom: 10 }}>Olá, {user.name}</h2>
        <p style={{ opacity: 0.7 }}>Sua conta está ativa e protegida.</p>

        <div
          style={{
            marginTop: 30,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 20,
          }}
        >
          <Card title="Segurança" desc="Conta verificada e protegida" />
          <Card title="Painel" desc="Dashboard pronto para expansão" />
          <Card title="Logs" desc="Em breve: histórico de acessos" />
          <Card title="Admin" desc="Sistema de permissões ativo" />
        </div>
      </section>
    </main>
  );
}

function Card({ title, desc }) {
  return (
    <div
      style={{
        padding: 20,
        borderRadius: 18,
        background: "rgba(255,255,255,.04)",
        border: "1px solid rgba(255,255,255,.08)",
      }}
    >
      <strong style={{ display: "block", marginBottom: 6 }}>{title}</strong>
      <span style={{ opacity: 0.7 }}>{desc}</span>
    </div>
  );
}
