const servicios = [
  { numero: "01", titulo: "Wi-Fi gratis", texto: "Conexión rápida en todo el hotel." },
  { numero: "02", titulo: "Desayuno incluido", texto: "Todas las mañanas, de 7 a 10 h." },
  { numero: "03", titulo: "Estacionamiento", texto: "Cochera cubierta para huéspedes." },
  { numero: "04", titulo: "Recepción 24 h", texto: "Siempre alguien para ayudarte." },
  { numero: "05", titulo: "Limpieza diaria", texto: "Tu habitación impecable cada día." },
  { numero: "06", titulo: "Traslados", texto: "Servicio de traslado desde y hacia el aeropuerto." },
];

function Servicios() {
  return (
    <section id="servicios" className="seccion beige">
      <p className="eyebrow">Servicios</p>
      <h2>Todo lo que necesitás</h2>
      <div className="linea"></div>

      <div className="servicios-grid">
        {servicios.map((s) => (
          <article className="servicio" key={s.titulo}>
            <span className="servicio-num">{s.numero}</span>
            <h3>{s.titulo}</h3>
            <p>{s.texto}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Servicios;