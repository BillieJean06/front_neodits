import Image from "next/image";
import Link from "next/link";

export default function Sidebar({ user }) {
  return (
    <aside style={styles.sidebar}>
      <div style={styles.header}>
        <Image src="/logo.svg" alt="Neodits" width={36} height={36} />
        <strong>Neodits</strong>
      </div>

      <nav style={styles.menu}>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/tickets">Chamados</Link>
        {user.role === "admin" && <Link href="/admin">Admin</Link>}
        <Link href="/account">Minha conta</Link>
      </nav>
    </aside>
  );
}

const styles = {
  sidebar: {
    position: "fixed",
    top: 20,
    left: 20,
    bottom: 20,
    width: 260,
    borderRadius: 20,
    background: "rgb(0 0 0 / 30%)",
    backdropFilter: "blur(30px)",
    padding: 20,
    color: "#fff",
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 20,
  },
  menu: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
};
