import contacto from "../data/contacto";
import { IconoInstagram, IconoFacebook, IconoWhatsapp } from "../data/iconos";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <p className="footer-logo">Hotel Paraíso</p>
          <p>Elegancia, calma y atención personalizada.</p>
          <div className="redes">
            <a href={contacto.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <IconoInstagram />
            </a>
            <a href={contacto.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <IconoFacebook />
            </a>
            <a href={contacto.whatsappLink} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <IconoWhatsapp />
            </a>
          </div>
        </div>

        <div>
          <h4>Contacto</h4>
          <p>{contacto.direccion}</p>
          <p>{contacto.telefono}</p>
          <p>{contacto.email}</p>
        </div>

        <div>
          <h4>Horarios</h4>
          <p>Check-in: desde las 14:00</p>
          <p>Check-out: hasta las 10:00</p>
          <p>Recepción: 24 horas</p>
        </div>

        <div>
          <h4>Navegación</h4>
          <a href="#nosotros">Nosotros</a>
          <a href="#habitaciones">Habitaciones</a>
          <a href="#ofertas">Ofertas</a>
          <a href="#servicios">Servicios</a>
          <a href="#faq">Preguntas frecuentes</a>
          <a href="#contacto">Contacto</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">
          © 2026 Hotel Paraíso · Lenguaje IV · Universidad Católica de Salta
        </p>
      </div>
    </footer>
  );
}

export default Footer;