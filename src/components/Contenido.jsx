import { Button } from "primereact/button";
import "../style/Contenido.css";
import "../style/Responsive.css";
import Musica from "./Musica";
import Calendario from "./Calendario";
import Hora from "./Hora";
import Trazo from "../assets/trazo.svg";
import Trazo_dos from "../assets/trazo_dos.svg";

export default function Contenido() {
  return (
    <>
      <div className="container_texto_invitacion">
        <div className="svg-container">
          <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
            <defs>
              <path
                id="curve"
                d="M 20 150 Q 200 20 380 150"
                stroke="none"
                fill="none"
              />

              <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop
                  offset="0%"
                  style={{ stopColor: "rgb(255,255,124)", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "rgb(229,117,19)", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>

            <text className="svg-text">
              <textPath href="#curve" startOffset="50%" textAnchor="middle">
                ¡Ven a celebrar!
              </textPath>
            </text>
          </svg>
        </div>

        <div className="img_logo">
          <img
            src="https://res.cloudinary.com/dnao6nouz/image/upload/v1757452190/descarga_1_l5tlnh.jpg"
            alt=""
          />
          <div className="nombre">
            <h1>Celeste</h1>
          </div>
        </div>
        <div className="text_subtitlo flex">
          <p>esta cumpliendo</p>
          <p> 5 </p>
          <p> años</p>
        </div>
        <div className="musica_reproductor">
          <Musica />
        </div>
        <div className="img_trazo mt-4">
          <img src={Trazo} alt="" />
        </div>
        <div className="reserva_dia">
          <h2>Reserva este día</h2>
          <img src={Trazo_dos} alt="" />
          <div className="calendario">
            <Calendario />
          </div>
        </div>
        <div className="hora_fiesta">
          <h2>¡Tan solo faltan!</h2>
          <img src={Trazo_dos} alt="" />
          <div className="hora">
            <Hora />
          </div>
        </div>
        <div className="container_butons mb-5">
          <div className="buton_direccion">
            <a href="https://maps.app.goo.gl/8JVW2B5yPjbhDADKA" target="_blank">
              <Button icon="pi pi-map-marker" label="Ver Ubicación" />
            </a>
          </div>
          <div className="buton_whatsapp mt-4">
            <p>
              Todo esta siendo preparado con mucho amor, y tu compañía lo hará
              perfecto. Por favor, confirma tu asistencia en este día especial.
            </p>
            <a
              href="https://wa.me/51950874416?text=Hola%20quiero%20confirmar%20mi%20asistencia%20a%20tu%20fiesta."
              target="_blank"
            >
              <Button icon="pi pi-comment" label="Confirmar" />
            </a>
          </div>
        </div>
        <div className="texto_esperamos mt-2">
          <h1>¡Te esperamos!</h1>
        </div>
      </div>
    </>
  );
}
