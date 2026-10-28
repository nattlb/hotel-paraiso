function Contacto() {
  return (
    <section id="contacto" className="seccion">
      <p className="etiqueta">Escribinos</p>
      <h2>Contacto</h2>
      <div className="linea"></div>

      <div className="contacto-grid">
        <div className="contacto-info">
          <div className="dato">
            <h3>Teléfono</h3>
            <p>+54 11 5555-0123</p>
          </div>

          <div className="dato">
            <h3>Email</h3>
            <p>reservas@hotelparaiso.com</p>
          </div>

          <div className="dato">
            <h3>Dirección</h3>
            <p>Av. Siempre Viva 742</p>
          </div>

          <div className="dato">
            <h3>Seguinos</h3>
            <div className="redes">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                Facebook
              </a>
              <a
                href="https://wa.me/541155550123"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Nombre" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Mensaje" rows="5"></textarea>
          <button type="submit" className="btn">
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contacto;