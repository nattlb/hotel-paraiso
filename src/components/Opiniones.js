const opiniones = [
  {
    texto: "Habitaciones impecables y un ambiente muy tranquilo. Volveríamos sin dudar.",
    autor: "Carolina M.",
    detalle: "Habitación Premium",
  },
  {
    texto: "La atención del personal fue excelente y el desayuno, delicioso.",
    autor: "Martín R.",
    detalle: "Habitación Doble",
  },
  {
    texto: "Perfecto para viajar en familia: amplio, cómodo y todo muy limpio.",
    autor: "Lucía y familia",
    detalle: "Suite",
  },
];

function Opiniones() {
  return (
    <section id="opiniones" className="seccion claro">
      <p className="eyebrow">Opiniones</p>
      <h2>Lo que dicen nuestros huéspedes</h2>
      <div className="linea"></div>

      <div className="opiniones-grid">
        {opiniones.map((o) => (
          <figure className="opinion" key={o.autor}>
            <p className="estrellas">★★★★★</p>
            <blockquote>“{o.texto}”</blockquote>
            <figcaption>
              <strong>{o.autor}</strong>
              <span>{o.detalle}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Opiniones;