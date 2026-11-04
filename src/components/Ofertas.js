const ofertas = [
  {
    valor: "15%",
    detalle: "de descuento",
    titulo: "Escapada de fin de semana",
    texto: "Reservá 2 noches de viernes a domingo y ahorrá en tu estadía.",
    condicion: "Válida de viernes a domingo",
  },
  {
    valor: "3x2",
    detalle: "en estadías largas",
    titulo: "Quedate más, pagá menos",
    texto: "Reservá 3 noches y pagá solo 2 en habitaciones Doble y Suite.",
    condicion: "Habitaciones Doble y Suite",
  },
  {
    valor: "Gratis",
    detalle: "desayuno para niños",
    titulo: "Vacaciones en familia",
    texto: "Los menores de 10 años desayunan sin cargo junto a un adulto.",
    condicion: "Menores de 10 años",
  },
];

function Ofertas() {
  return (
    <section id="ofertas" className="seccion claro">
      <p className="eyebrow">Promociones</p>
      <h2>Ofertas especiales</h2>
      <div className="linea"></div>

      <div className="ofertas-grid">
        {ofertas.map((o) => (
          <article className="oferta" key={o.titulo}>
            <div className="oferta-cabecera">
              <span className="oferta-valor">{o.valor}</span>
              <span className="oferta-detalle">{o.detalle}</span>
            </div>

            <div className="oferta-cuerpo">
              <h3>{o.titulo}</h3>
              <p>{o.texto}</p>
              <small>{o.condicion}</small>
              <a href="#habitaciones" className="btn-outline oferta-boton">
                Reservar con esta oferta
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Ofertas;