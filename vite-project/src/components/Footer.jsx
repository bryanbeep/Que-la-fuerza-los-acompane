function Footer() {
  return (
    <footer
      style={{
        padding: "2.5rem 2rem 1.5rem",
        background: "#0a0a0a",
        borderTop: "0.5px solid #2a2a2a",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1.5rem",
          marginBottom: "2rem",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "serif",
              fontSize: "1.2rem",
              marginBottom: "0.4rem",
            }}
          >
            Cine<span style={{ color: "#c8a96e" }}>App</span>
          </p>
          <p style={{ fontSize: "0.8rem", color: "#555" }}>
            Tu cine, donde quieras.
          </p>
        </div>
        <nav
          style={{
            display: "flex",
            gap: "1.5rem",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          {["Sobre nosotros", "Contacto", "Términos"].map((link) => (
            <a
              key={link}
              href="#"
              style={{
                fontSize: "0.8rem",
                color: "#666",
                textDecoration: "none",
              }}
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
      <div
        style={{
          borderTop: "0.5px solid #1e1e1e",
          paddingTop: "1rem",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}
      >
        <p style={{ fontSize: "0.75rem", color: "#444" }}>© 2025 CineApp</p>
        <div style={{ display: "flex", gap: "0.8rem" }}>
          {["Instagram", "Twitter", "YouTube"].map((red) => (
            <a
              key={red}
              href="#"
              style={{
                fontSize: "0.75rem",
                color: "#555",
                textDecoration: "none",
              }}
            >
              {red}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
