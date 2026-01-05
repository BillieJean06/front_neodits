import type { CSSProperties } from "react";

export default function Home() {
    return (
        <main style={wrap}>
            <section style={hero}>
                <h1>Neodits</h1>
                <p style={subtitle}>
                    Plataforma de autenticação segura para aplicações modernas.
                </p>

                <div style={buttons}>
                    <a href="/register" style={primary}>
                        Criar conta
                    </a>
                    <a href="/login" style={secondary}>
                        Entrar
                    </a>
                </div>
            </section>

            <section style={features}>
                <h3>O que o Neodits oferece</h3>
                <ul>
                    <li>✔ Autenticação JWT segura</li>
                    <li>✔ Confirmação de e-mail</li>
                    <li>✔ Reset de senha</li>
                    <li>✔ Controle de acesso por nível</li>
                    <li>✔ Painel administrativo</li>
                    <li>✔ API própria pronta para integração</li>
                </ul>
            </section>

            <footer style={footer}>
                Neodits © 2026 • Plataforma de Autenticação Segura
            </footer>
        </main>
    );
}

const wrap: CSSProperties = {
    minHeight: "100vh",
    background: "#0b0b0b",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
};

const hero: CSSProperties = {
    textAlign: "center",
    paddingTop: 120,
};

const subtitle: CSSProperties = {
    color: "#aaa",
    maxWidth: 500,
    margin: "20px auto",
};

const buttons: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    gap: 20,
    marginTop: 30,
};

const primary: CSSProperties = {
    background: "#5c7cff",
    color: "#fff",
    padding: "12px 24px",
    borderRadius: 8,
    textDecoration: "none",
    fontWeight: 600,
};

const secondary: CSSProperties = {
    border: "1px solid #555",
    color: "#fff",
    padding: "12px 24px",
    borderRadius: 8,
    textDecoration: "none",
};

const features: CSSProperties = {
    maxWidth: 600,
    margin: "0 auto",
    color: "#bbb",
    paddingBottom: 80,
};

const footer: CSSProperties = {
    textAlign: "center",
    color: "#666",
    padding: 20,
    borderTop: "1px solid #222",
};
