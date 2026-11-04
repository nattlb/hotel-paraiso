import { useState } from "react";
import contacto from "../data/contacto";
import { IconoInstagram, IconoFacebook, IconoWhatsapp } from "../data/iconos";

function Contacto() {
  const [enviado, setEnviado] = useState(false);
  const [nombreEnviado, setNombreEnviado] = useState("");

  const enviar = (e) => {
    e.preventDefault();
    setNombreEnviado(new FormData(e.target).get("nombre"));
    setEnviado(true);
    e.target.reset();
  };

  return (
    <section id="contacto" className="seccion claro">
      <p className="eyebrow">Contacto</p>
      <h2>Contacto y consultas</h2>
      <div className="linea"></div>

      <div className="contacto-grid">
        <div className="contacto-info">
          <h4>Dirección</h4>
          <p>{contacto.direccion}</p>

          <h4>Teléfono</h4>
          <p>{contacto.telefono}</p>

          <h4>WhatsApp</h4>
          <p>
            <a href={contacto.whatsappLink} target="_blank" rel="noreferrer">
              {contacto.whatsapp}
            </a>
          </p>

          <h4>Correo</h4>
          <p>
            <a href={"mailto:" + contacto.email}>{contacto.email}</a>
          </p>

          <h4>Recepción</h4>
          <p>Atención las 24 horas</p>

          <h4>Seguinos</h4>
          <div className="redes">
            <a href={contacto.instagram} target="_blank" rel="noreferrer">
              <IconoInstagram /> Instagram
            </a>
            <a href={contacto.facebook} target="_blank" rel="noreferrer">
              <IconoFacebook /> Facebook
            </a>
            <a href={contacto.whatsappLink} target="_blank" rel="noreferrer">
              <IconoWhatsapp /> WhatsApp
            </a>
          </div>
        </div>

        <form className="contacto-form" onSubmit={enviar}>
          <input name="nombre" type="text" placeholder="Nombre y apellido" required />
          <input name="email" type="email" placeholder="Correo electrónico" required />
          <input name="telefono" type="tel" placeholder="Teléfono (opcional)" />

          <select name="asunto" defaultValue="reservas">
            <option value="reservas">Reservas y disponibilidad</option>
            <option value="servicios">Servicios del hotel</option>
            <option value="facturacion">Facturación</option>
            <option value="otro">Otro</option>
          </select>

          <textarea name="mensaje" rows="5" placeholder="Escribí tu consulta" required />

          <button type="submit" className="btn">
            Enviar consulta
          </button>

          {enviado && (
            <p className="exito">
              ¡Gracias, {nombreEnviado}! Recibimos tu consulta y te responderemos
              a la brevedad.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contacto;