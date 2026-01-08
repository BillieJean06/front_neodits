"use client";

import { useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  const router = useRouter();

  const user = useMemo(() => {
    try {
      const raw = localStorage.getItem("neodits_user");
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }, []);

  useEffect(() => {
    if (!user) router.replace("/login");
  }, [user, router]);

  if (!user) return null;

  return (
    <>
      <Sidebar user={user} />

      <main style={styles.main}>
        <header style={styles.header}>
          <h1>Dashboard</h1>

          <button
            style={styles.logout}
            onClick={() => {
              localStorage.removeItem("neodits_token");
              localStorage.removeItem("neodits_user");
              router.replace("/login");
            }}
          >
            Sair
          </button>
        </header>

        <section style={styles.card}>
          <h2>Bem-vindo, {user.name}</h2>
          <p style={{ opacity: 0.7 }}>Sua conta está ativa e protegida.</p>

          <div style={styles.grid}>
            <Box title="Segurança" text="Conta verificada" />
            <Box title="Chamados" text="Sistema SLA ativo" />
            <Box title="Admin" text="Controle por níveis" />
            <Box title="Logs" text="Auditoria e histórico" />
          </div>
        </section>
      </main>
    </>
  );
}

function Box({ title, text }) {
  return (
    <div style={styles.box}>
      <strong>{title}</strong>
      <span style={{ opacity: 0.7 }}>{text}</span>
    </div>
  );
}

const styles = {
  main: {
    marginLeft: 300,
    minHeight: "100vh",
    padding: 40,
    background: "radial-gradient(circle at top, #1a1a1a, #000)",
    color: "#fff",
    fontFamily: "Inter, system-ui, sans-serif",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  logout: {
    background: "transparent",
    border: "1px solid #555",
    borderRadius: 20,
    padding: "8px 20px",
    color: "#fff",
  },
  card: {
    background: "rgb(255 255 255 / 5%)",
    borderRadius: 24,
    padding: 30,
  },
  grid: {
    marginTop: 30,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: 20,
  },
  box: {
    background: "rgb(255 255 255 / 4%)",
    borderRadius: 16,
    padding: 20,
  },
};
