function Header() {
  return (
    <header>
      <nav className="nav">
        <span className="logo">Hotel Paraíso</span>
        <div className="links">
          <a href="#about">Nosotros</a>
          <a href="#habitaciones">Habitaciones</a>
          <a href="#contacto">Contacto</a>
        </div>
      </nav>

      <div
        className="hero"
        style={{ backgroundImage: "url(/imagenes/premium.jpg)" }}
      >
        <div className="hero-contenido">
          <p className="hero-sub">Bienvenidos a</p>
          <h1>Hotel Paraíso</h1>
          <p className="hero-texto">
            Elegancia, calma y atención personalizada
          </p>
          <a href="#habitaciones" className="btn">
            Ver habitaciones
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;