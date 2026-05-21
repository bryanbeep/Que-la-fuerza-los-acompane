import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        🧸 ToyLand
      </div>

      <ul className="nav-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Juguetes</a></li>
        <li><a href="#">Ofertas</a></li>
        <li><a href="#">Categorías</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>

      <button className="btn-shop">
        Comprar
      </button>
    </nav>
  );
}

export default Navbar;