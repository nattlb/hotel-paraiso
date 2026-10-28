const habitaciones = [
  {
    id: 1,
    nombre: "Simple",
    descripcion: "Ideal para viajeros solos. Cama individual y escritorio.",
    precio: 50,
    img: "/imagenes/simple.jpg",
  },
  {
    id: 2,
    nombre: "Doble",
    descripcion: "Cama matrimonial, baño privado y vista a la ciudad.",
    precio: 80,
    img: "/imagenes/doble.jpg",
  },
  {
    id: 3,
    nombre: "Suite",
    descripcion: "Amplio living, cama king y balcón privado.",
    precio: 120,
    img: "/imagenes/suite.jpg",
  },
  {
    id: 4,
    nombre: "Premium",
    descripcion: "Habitación de lujo con vista panorámica y jacuzzi.",
    precio: 150,
    img: "/imagenes/premium.jpg",
  },
];

function Habitaciones() {
  return (
    <section id="habitaciones" className="seccion seccion-arena">
      <p className="etiqueta">Alojamiento</p>
      <h2>Nuestras habitaciones</h2>
      <div className="linea"></div>

      <div className="grid">
        {habitaciones.map((h) => (
          <div className="card" key={h.id}>
            <div className="card-img">
              <img src={h.img} alt={h.nombre} />
            </div>
            <div className="card-info">
              <h3>{h.nombre}</h3>
              <p className="desc">{h.descripcion}</p>
              <p className="precio">
                ${h.precio} <span>por noche</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Habitaciones;