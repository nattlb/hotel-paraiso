const preguntas = [
  {
    pregunta: "¿A qué hora es el check-in y el check-out?",
    respuesta:
      "El check-in es desde las 14:00 y el check-out hasta las 10:00. Si llegás antes o necesitás salir más tarde, consultanos y lo coordinamos según disponibilidad.",
  },
  {
    pregunta: "¿El desayuno está incluido?",
    respuesta:
      "Sí, todas las tarifas incluyen desayuno de 7:00 a 10:00. Los menores de 10 años desayunan sin cargo junto a un adulto.",
  },
  {
    pregunta: "¿Puedo cancelar o modificar mi reserva?",
    respuesta:
      "Podés cancelar sin costo hasta 48 horas antes de la llegada. Para modificar fechas o habitación, escribinos por WhatsApp o usá el formulario de consultas.",
  },
  {
    pregunta: "¿Tienen estacionamiento?",
    respuesta:
      "Contamos con cochera cubierta para huéspedes, sujeta a disponibilidad. Te recomendamos avisarnos al reservar.",
  },
  {
    pregunta: "¿Aceptan mascotas?",
    respuesta:
      "Aceptamos mascotas pequeñas en algunas habitaciones. Consultanos antes de reservar para confirmar la disponibilidad.",
  },
];

function Faq() {
  return (
    <section id="faq" className="seccion beige">
      <p className="eyebrow">Ayuda</p>
      <h2>Preguntas frecuentes</h2>
      <div className="linea"></div>

      <div className="faq">
        {preguntas.map((p) => (
          <details key={p.pregunta}>
            <summary>{p.pregunta}</summary>
            <p>{p.respuesta}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export default Faq;