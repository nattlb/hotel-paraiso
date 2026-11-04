import "./App.css";
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import AcercaDeNosotros from "./components/AcercaDeNosotros";
import Reservas from "./components/Reservas";
import Ofertas from "./components/Ofertas";
import Servicios from "./components/Servicios";
import Opiniones from "./components/Opiniones";
import Faq from "./components/Faq";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import contacto from "./data/contacto";
import { IconoWhatsapp } from "./data/iconos";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Inicio />
        <AcercaDeNosotros />
        <Reservas />
        <Ofertas />
        <Servicios />
        <Opiniones />
        <Faq />
        <Contacto />
      </main>
      <Footer />

      <a
        className="whatsapp-flotante"
        href={contacto.whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Escribinos por WhatsApp"
      >
        <IconoWhatsapp />
      </a>
    </div>
  );
}

export default App;