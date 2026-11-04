import { useState } from "react";
import Calendario from "./Calendario";

const IMG = process.env.PUBLIC_URL + "/imagenes/";

const habitaciones = [
  {
    id: 1,
    nombre: "Simple",
    desc: "Ideal para viajeros solos. Cama individual y escritorio.",
    precio: 50,
    personas: 1,
    servicios: ["Wi-Fi", "Escritorio", "Desayuno"],
    img: IMG + "simple.jpeg",
  },
  {
    id: 2,
    nombre: "Doble",
    desc: "Cama matrimonial, baño privado y vista a la ciudad.",
    precio: 80,
    personas: 2,
    servicios: ["Wi-Fi", "Baño privado", "Vista a la ciudad"],
    img: IMG + "doble.jpeg",
  },
  {
    id: 3,
    nombre: "Suite",
    desc: "Amplio living, cama king y balcón privado.",
    precio: 120,
    personas: 3,
    servicios: ["Wi-Fi", "Living", "Balcón privado"],
    img: IMG + "suite.jpeg",
  },
  {
    id: 4,
    nombre: "Premium",
    desc: "Habitación de lujo con vista panorámica y jacuzzi.",
    precio: 150,
    personas: 3,
    servicios: ["Wi-Fi", "Jacuzzi", "Vista panorámica"],
    img: IMG + "premium.jpeg",
  },
];

const horasLlegada = [
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00 o más tarde",
];

const datosIniciales = {
  nombre: "",
  apellido: "",
  documento: "",
  email: "",
  telefono: "",
  adultos: 1,
  ninos: 0,
  llegada: "15:00",
  comentarios: "",
  acepto: false,
};

const formato = (d) =>
  d.toLocaleDateString("es-AR", { day: "2-digit", month: "long", year: "numeric" });

function Reservas() {
  const [elegida, setElegida] = useState(null);
  const [entrada, setEntrada] = useState(null);
  const [salida, setSalida] = useState(null);
  const [datos, setDatos] = useState(datosIniciales);

  const noches = entrada && salida ? Math.round((salida - entrada) / 86400000) : 0;
  const total = elegida ? noches * elegida.precio : 0;

  const seleccionar = (h) => {
    setElegida(h);
    setTimeout(() => {
      document.getElementById("panel-reserva")?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 50);
  };

  const cambiarDato = (campo) => (e) =>
    setDatos({ ...datos, [campo]: e.target.value });

  const confirmar = (e) => {
    e.preventDefault();

    if (!entrada || !salida) {
      alert("Seleccioná en el calendario la fecha de entrada y la de salida.");
      return;
    }

    const huespedes = Number(datos.adultos) + Number(datos.ninos);
    if (huespedes > elegida.personas) {
      alert(
        `La habitación ${elegida.nombre} permite hasta ${elegida.personas} persona(s). ` +
          `Elegí otra habitación o reducí la cantidad de huéspedes.`
      );
      return;
    }

    const codigo = "PAR-" + Math.floor(1000 + Math.random() * 9000);

    alert(
      `¡Reserva confirmada!\n\n` +
        `Código: ${codigo}\n` +
        `Huésped: ${datos.nombre} ${datos.apellido}\n` +
        `Documento: ${datos.documento}\n` +
        `Contacto: ${datos.email} · ${datos.telefono}\n\n` +
        `Habitación: ${elegida.nombre}\n` +
        `Entrada: ${formato(entrada)}\n` +
        `Salida: ${formato(salida)}\n` +
        `Noches: ${noches}\n` +
        `Huéspedes: ${datos.adultos} adulto(s), ${datos.ninos} niño(s)\n` +
        `Hora de llegada: ${datos.llegada}\n` +
        `Total: $${total}`
    );

    setElegida(null);
    setEntrada(null);
    setSalida(null);
    setDatos(datosIniciales);
  };

  return (
    <section id="habitaciones" className="seccion beige">
      <p className="eyebrow">Alojamiento</p>
      <h2>Nuestras habitaciones</h2>
      <div className="linea"></div>

      <div className="cards">
        {habitaciones.map((h) => (
          <article key={h.id} className={`card ${elegida?.id === h.id ? "seleccionada" : ""}`}>
            <img src={h.img} alt={`Habitación ${h.nombre}`} />
            <div className="card-body">
              <h3>{h.nombre}</h3>
              <p>{h.desc}</p>
              <p className="card-datos">
                Hasta {h.personas} {h.personas === 1 ? "persona" : "personas"} ·{" "}
                {h.servicios.join(" · ")}
              </p>
              <div className="card-footer">
                <span className="precio">${h.precio} <small>por noche</small></span>
                <button className="btn-outline" onClick={() => seleccionar(h)}>
                  {elegida?.id === h.id ? "Elegida" : "Reservar"}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {elegida && (
        <form id="panel-reserva" className="panel-reserva" onSubmit={confirmar}>
          <h3>Reservar habitación {elegida.nombre}</h3>
          <p className="ayuda">Elegí tu fecha de entrada y luego la de salida.</p>

          <Calendario
            entrada={entrada}
            salida={salida}
            onChange={(e, s) => {
              setEntrada(e);
              setSalida(s);
            }}
          />

          <div className="resumen">
            <p>Entrada: <strong>{entrada ? formato(entrada) : "—"}</strong></p>
            <p>Salida: <strong>{salida ? formato(salida) : "—"}</strong></p>
            {noches > 0 && (
              <p>{noches} {noches === 1 ? "noche" : "noches"} · Total: <strong>${total}</strong></p>
            )}
          </div>

          <h4 className="form-titulo">Datos del huésped</h4>
          <div className="campos">
            <label className="campo">
              Nombre
              <input
                type="text"
                value={datos.nombre}
                onChange={cambiarDato("nombre")}
                placeholder="Tu nombre"
                required
              />
            </label>

            <label className="campo">
              Apellido
              <input
                type="text"
                value={datos.apellido}
                onChange={cambiarDato("apellido")}
                placeholder="Tu apellido"
                required
              />
            </label>

            <label className="campo">
              DNI o pasaporte
              <input
                type="text"
                value={datos.documento}
                onChange={cambiarDato("documento")}
                placeholder="Número de documento"
                required
              />
            </label>

            <label className="campo">
              Teléfono
              <input
                type="tel"
                value={datos.telefono}
                onChange={cambiarDato("telefono")}
                placeholder="Ej: 387 000 0000"
                required
              />
            </label>

            <label className="campo ancho">
              Correo electrónico
              <input
                type="email"
                value={datos.email}
                onChange={cambiarDato("email")}
                placeholder="tucorreo@ejemplo.com"
                required
              />
            </label>

            <label className="campo">
              Adultos
              <select value={datos.adultos} onChange={cambiarDato("adultos")}>
                {[1, 2, 3, 4].map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </label>

            <label className="campo">
              Niños
              <select value={datos.ninos} onChange={cambiarDato("ninos")}>
                {[0, 1, 2, 3].map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </label>

            <label className="campo ancho">
              Hora estimada de llegada
              <select value={datos.llegada} onChange={cambiarDato("llegada")}>
                {horasLlegada.map((h) => (
                  <option key={h} value={h}>{h}</option>
                ))}
              </select>
            </label>

            <label className="campo ancho">
              Comentarios o pedidos especiales
              <textarea
                rows="3"
                value={datos.comentarios}
                onChange={cambiarDato("comentarios")}
                placeholder="Alergias, cama extra, cuna, celebración especial..."
              />
            </label>
          </div>

          <label className="check">
            <input
              type="checkbox"
              checked={datos.acepto}
              onChange={(e) => setDatos({ ...datos, acepto: e.target.checked })}
              required
            />
            Acepto las condiciones de reserva y la política de cancelación
            gratuita hasta 48 horas antes de la llegada.
          </label>

          <button className="btn" type="submit" disabled={!salida}>
            Confirmar reserva
          </button>
        </form>
      )}
    </section>
  );
}

export default Reservas;