import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <h3>🧸 ToyLand</h3>
        <p>La tienda favorita de los más pequeños.</p>
      </div>

      <div>
        <h4>Enlaces</h4>
        <ul>
          <li>Inicio</li>
          <li>Juguetes</li>
          <li>Ofertas</li>
          <li>Contacto</li>
        </ul>
      </div>

      <div>
        <h4>Contacto</h4>
        <p>info@toyland.com</p>
        <p>+598 99 123 456</p>
      </div>
    </footer>
  );
}

export default Footer;
