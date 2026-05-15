function Banner() {
  return (
    <section
      style={{ padding: "4rem 2rem", background: "#111", textAlign: "center" }}
    >
      <span
        style={{
          fontSize: "0.7rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#c8a96e",
          border: "0.5px solid #c8a96e66",
          padding: "0.3rem 0.8rem",
          borderRadius: "2rem",
          display: "inline-block",
          marginBottom: "1.5rem",
        }}
      >
        Catálogo 2025
      </span>
      <h1
        style={{
          fontFamily: "serif",
          fontSize: "2.5rem",
          color: "#f0ece4",
          marginBottom: "1rem",
          maxWidth: "600px",
          margin: "0 auto 1rem",
        }}
      >
        Descubrí tu próxima película favorita
      </h1>
      <p style={{ color: "#7a7a7a", marginBottom: "2rem" }}>
        Miles de títulos. Una sola pantalla.
      </p>
      <button
        style={{
          background: "#c8a96e",
          color: "#0d0d0d",
          border: "none",
          padding: "0.75rem 2rem",
          fontWeight: "600",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          cursor: "pointer",
          borderRadius: "2px",
        }}
      >
        Explorar catálogo
      </button>
    </section>
  );
}

export default Banner;
