const HERO = process.env.PUBLIC_URL + "/imagenes/hero.jpeg";

function Inicio() {
  return (
    <>
      <section
        id="inicio"
        className="inicio"
        style={{ backgroundImage: `url(${HERO})` }}
      >
        <p className="eyebrow">Bienvenidos a</p>
        <h1>Hotel Paraíso</h1>
        <p className="inicio-sub">Elegancia, calma y atención personalizada</p>
        <div className="hero-botones">
          <a href="#habitaciones" className="btn">
            Ver habitaciones
          </a>
          <a href="#contacto" className="btn btn-claro">
            Hacer una consulta
          </a>
        </div>
      </section>

      <section className="franja">
        <div className="franja-grid">
          <div>
            <strong>14:00</strong>
            <span>Check-in</span>
          </div>
          <div>
            <strong>10:00</strong>
            <span>Check-out</span>
          </div>
          <div>
            <strong>24 h</strong>
            <span>Recepción</span>
          </div>
          <div>
            <strong>Gratis</strong>
            <span>Wi-Fi y desayuno</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Inicio;