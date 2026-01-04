"use client";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    if (loading) return;

    setError("");
    setLoading(true);

    try {
      const res = await fetch("https://back-neodits-szma.vercel.app/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!data.success) {
        setError(data.message || "Usuário ou senha inválidos");
        return;
      }

      localStorage.setItem("neodits_user", JSON.stringify(data.user));
      localStorage.setItem("neodits_token", data.token);
      document.cookie = `neodits_token=${data.token}; path=/; max-age=7200; SameSite=Lax`;

      window.location.href = "/dashboard";
    } catch {
      setError("Erro ao conectar com o servidor.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login-wrap">
      <form className="login-card" onSubmit={handleLogin}>
        <h1 className="logo">Neodits</h1>
        <h3>LOGIN</h3>

        {error && <div className="error">{error}</div>}

        <input
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <a className="forgot" href="/forgot-password">
          Esqueceu sua senha?
        </a>

        <button disabled={loading}>{loading ? "Entrando..." : "Entrar"}</button>

        <p className="register">
          Ainda não tem conta? <a href="/register">Registre-se</a>
        </p>
      </form>

      <style jsx>{`
        .login-wrap {
          height: 100vh;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .login-card {
          width: 360px;
          padding: 40px;
          border-radius: 24px;
          background: #fff;
          box-shadow: 0 10px 40px rgba(84, 61, 230, 0.4);
          display: flex;
          flex-direction: column;
          gap: 14px;
          text-align: center;
        }

        .logo {
          font-size: 28px;
          letter-spacing: 3px;
          color: #4f46e5;
          margin: 0;
        }

        h3 {
          letter-spacing: 2px;
          color: #888;
        }

        input {
          padding: 12px 18px;
          border-radius: 999px;
          border: 1px solid #ccc;
          outline: none;
          font-size: 14px;
        }

        input:focus {
          border-color: #4f46e5;
        }

        .error {
          background: #ffecec;
          color: #ff4d4d;
          padding: 6px 12px;
          border-radius: 999px;
          font-size: 12px;
        }

        .forgot {
          font-size: 12px;
          color: #555;
          text-decoration: none;
        }

        button {
          margin-top: 10px;
          padding: 10px;
          border-radius: 999px;
          border: none;
          background: #4f46e5;
          color: #fff;
          font-weight: 700;
          cursor: pointer;
        }

        button:disabled {
          opacity: 0.6;
        }

        .register {
          font-size: 12px;
          color: #555;
        }

        .register a {
          font-weight: bold;
          color: #4f46e5;
        }
      `}</style>
    </div>
  );
}
