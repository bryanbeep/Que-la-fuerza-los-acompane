function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        background: "#0d0d0d",
        borderBottom: "0.5px solid #2a2a2a",
      }}
    >
      <div
        style={{ fontFamily: "serif", fontSize: "1.3rem", color: "#f0ece4" }}
      >
        Cine<span style={{ color: "#c8a96e" }}>App</span>
      </div>
      <ul style={{ display: "flex", gap: "1.5rem", listStyle: "none" }}>
        {["Inicio", "Películas", "Series", "Mi Lista"].map((link) => (
          <li key={link}>
            <a
              href="#"
              style={{
                color: "#9e9e9e",
                fontSize: "0.85rem",
                textDecoration: "none",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
