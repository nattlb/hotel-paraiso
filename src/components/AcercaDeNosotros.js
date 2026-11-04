function AcercaDeNosotros() {
  return (
    <section id="nosotros" className="seccion claro">
      <p className="eyebrow">Nuestra historia</p>
      <h2>Acerca de nosotros</h2>
      <div className="linea"></div>

      <p className="texto-centro">
        Hotel Paraíso nace con una idea sencilla: el mejor lujo es la
        tranquilidad. Cada habitación está pensada con materiales nobles,
        tonos suaves y espacios despejados para que puedas descansar sin
        distracciones.
      </p>
      <p className="texto-centro">
        Nuestro equipo cuida cada detalle, desde la llegada hasta el
        desayuno, para que tu estadía sea simple y agradable.
      </p>

      <div className="nosotros-datos">
        <div>
          <strong>4</strong>
          <span>Tipos de habitación</span>
        </div>
        <div>
          <strong>24 h</strong>
          <span>Recepción</span>
        </div>
        <div>
          <strong>100%</strong>
          <span>Atención personalizada</span>
        </div>
      </div>
    </section>
  );
}

export default AcercaDeNosotros;