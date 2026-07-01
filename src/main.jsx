import React from "react";
import { createRoot } from "react-dom/client";
import {
  Bike,
  ChevronRight,
  MapPin,
  MessageCircle,
  PackageCheck,
  Phone,
  QrCode,
  ShieldCheck,
  Smartphone,
  WalletCards,
} from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import "./styles.css";

const phoneDisplay = "462 368 8190";
const phoneDial = "4623688190";
const phoneWa = "524623688190";
const repartidorImg = `${import.meta.env.BASE_URL}assets/repartidor.png`;
const logoImg = `${import.meta.env.BASE_URL}assets/logo-pacheco.png`;
const whatsappUrl =
  "https://wa.me/524623688190?text=Hola%2C%20quiero%20cotizar%20un%20envio%20en%20Irapuato.";
const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Moto Envios Pacheco
ORG:Moto Envios Pacheco
TEL;TYPE=CELL:${phoneDial}
ADR;TYPE=WORK:;;Irapuato;Guanajuato;;;Mexico
URL:${whatsappUrl}
NOTE:Envios en moto, comida, paquetes, pagos y mandados.
END:VCARD`;
const vcardUrl = `data:text/vcard;charset=utf-8,${encodeURIComponent(vcard)}`;

function ActionLink({ href, icon: Icon, label, detail, primary }) {
  return (
    <a className={`action-link${primary ? " primary" : ""}`} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      <span className="action-icon">
        <Icon size={22} aria-hidden="true" />
      </span>
      <span>
        <strong>{label}</strong>
        <small>{detail}</small>
      </span>
      <ChevronRight className="action-arrow" size={18} aria-hidden="true" />
    </a>
  );
}

function ServiceItem({ icon: Icon, title, text }) {
  return (
    <article className="service-item">
      <Icon size={22} aria-hidden="true" />
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}

function App() {
  const cardUrl = window.location.href;

  return (
    <main className="digital-shell">
      <section className="digital-card" aria-label="Tarjeta digital Moto Envios Pacheco">
        <div className="hero">
          <img className="hero-photo" src={repartidorImg} alt="Repartidor de Moto Envios Pacheco" />
          <div className="hero-overlay" />
          <div className="logo-badge">
            <img src={logoImg} alt="Logo de Moto Envios Pacheco" />
          </div>
        </div>

        <section className="profile">
          <p className="eyebrow">Irapuato, Guanajuato</p>
          <h1>Moto Envios Pacheco</h1>
          <p className="subtitle">Envios rapidos en moto, comida, paquetes, pagos y mandados. Servicio directo por WhatsApp.</p>
        </section>

        <section className="quick-actions" aria-label="Contacto rapido">
          <ActionLink href={whatsappUrl} icon={MessageCircle} label="Cotizar por WhatsApp" detail="Respuesta directa" primary />
          <ActionLink href={`tel:${phoneDial}`} icon={Phone} label="Llamar ahora" detail={phoneDisplay} />
          <ActionLink href={`sms:${phoneDial}`} icon={Smartphone} label="Enviar mensaje" detail="SMS al repartidor" />
        </section>

        <section className="info-strip" aria-label="Resumen del servicio">
          <div>
            <strong>Todo Irapuato</strong>
            <span>y sus alrededores</span>
          </div>
          <div>
            <strong>Servicio local</strong>
            <span>Irapuato, Gto.</span>
          </div>
        </section>

        <section className="service-list" aria-label="Servicios">
          <ServiceItem icon={Bike} title="Envios en moto" text="Rapido para traslados dentro de la ciudad." />
          <ServiceItem icon={PackageCheck} title="Paquetes y comida" text="Recoleccion y entrega de pedidos o encargos." />
          <ServiceItem icon={WalletCards} title="Pagos y mandados" text="Apoyo para vueltas, compras y pagos economicos." />
          <ServiceItem icon={ShieldCheck} title="Contacto directo" text="Atencion personalizada al numero 462 368 8190." />
        </section>

        <section className="qr-section" aria-label="Codigo QR">
          <div className="qr-copy">
            <QrCode size={24} aria-hidden="true" />
            <div>
              <h2>Escanea y abre la tarjeta</h2>
              <p>El QR abre esta tarjeta digital para ver los datos, servicios y botones de contacto.</p>
            </div>
          </div>
          <a className="qr-box" href={cardUrl} target="_blank" rel="noreferrer" aria-label="Abrir tarjeta digital con QR">
            <QRCodeSVG value={cardUrl} size={178} bgColor="#ffffff" fgColor="#07110c" level="H" includeMargin />
          </a>
        </section>

        <footer className="footer-actions">
          <a className="save-contact" href={vcardUrl} download="moto-envios-pacheco.vcf">
            Guardar contacto
          </a>
          <a className="map-link" href="https://maps.google.com/?q=Irapuato%2C%20Guanajuato" target="_blank" rel="noreferrer">
            <MapPin size={18} aria-hidden="true" />
            Irapuato, Gto.
          </a>
        </footer>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
