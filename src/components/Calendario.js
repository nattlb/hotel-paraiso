import { useState } from "react";

const MESES = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];
const DIAS = ["L", "M", "X", "J", "V", "S", "D"];

const sinHora = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
const mismoDia = (a, b) => a && b && a.getTime() === b.getTime();

function Calendario({ entrada, salida, onChange }) {
  const hoy = sinHora(new Date());
  const [mes, setMes] = useState(new Date(hoy.getFullYear(), hoy.getMonth(), 1));

  const primerDia = (new Date(mes.getFullYear(), mes.getMonth(), 1).getDay() + 6) % 7;
  const diasEnMes = new Date(mes.getFullYear(), mes.getMonth() + 1, 0).getDate();

  const celdas = [];
  for (let i = 0; i < primerDia; i++) celdas.push(null);
  for (let d = 1; d <= diasEnMes; d++) celdas.push(new Date(mes.getFullYear(), mes.getMonth(), d));

  const elegir = (dia) => {
    if (dia < hoy) return;
    if (!entrada || (entrada && salida)) {
      onChange(dia, null); // empieza un rango nuevo
    } else if (dia <= entrada) {
      onChange(dia, null);
    } else {
      onChange(entrada, dia);
    }
  };

  const cambiarMes = (n) =>
    setMes(new Date(mes.getFullYear(), mes.getMonth() + n, 1));

  const puedeRetroceder =
    mes.getFullYear() > hoy.getFullYear() || mes.getMonth() > hoy.getMonth();

  return (
    <div className="calendario">
      <div className="cal-top">
        <button type="button" onClick={() => cambiarMes(-1)} disabled={!puedeRetroceder} aria-label="Mes anterior">
          ‹
        </button>
        <span>{MESES[mes.getMonth()]} {mes.getFullYear()}</span>
        <button type="button" onClick={() => cambiarMes(1)} aria-label="Mes siguiente">
          ›
        </button>
      </div>

      <div className="cal-grid">
        {DIAS.map((d) => (
          <div key={d} className="cal-dia-nombre">{d}</div>
        ))}
        {celdas.map((dia, i) => {
          if (!dia) return <div key={i}></div>;
          const pasado = dia < hoy;
          const esEntrada = mismoDia(dia, entrada);
          const esSalida = mismoDia(dia, salida);
          const enRango = entrada && salida && dia > entrada && dia < salida;
          const clases = [
            "cal-celda",
            pasado && "pasado",
            (esEntrada || esSalida) && "extremo",
            enRango && "rango",
          ].filter(Boolean).join(" ");
          return (
            <button key={i} type="button" className={clases} disabled={pasado} onClick={() => elegir(dia)}>
              {dia.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Calendario;