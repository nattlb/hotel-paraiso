import { useState } from "react";

const links = [
  { id: "nosotros", label: "Nosotros" },
  { id: "habitaciones", label: "Habitaciones" },
  { id: "ofertas", label: "Ofertas" },
  { id: "servicios", label: "Servicios" },
  { id: "faq", label: "Preguntas frecuentes" },
  { id: "contacto", label: "Contacto" },
];

function Header() {
  const [abierto, setAbierto] = useState(false);

  return (
    <header className="header">
      <a href="#inicio" className="header-logo" onClick={() => setAbierto(false)}>
        Hotel Paraíso
      </a>

      <button
        className={`hamburguesa ${abierto ? "activa" : ""}`}
        onClick={() => setAbierto(!abierto)}
        aria-label="Abrir menú"
        aria-expanded={abierto}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`menu ${abierto ? "abierto" : ""}`}>
        {links.map((l) => (
          <a key={l.id} href={`#${l.id}`} onClick={() => setAbierto(false)}>
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;