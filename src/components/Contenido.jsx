import "../style/Contenido.css";
import Musica from "./Musica";
import Calendario from "./Calendario";
import Trazo from "../assets/trazo.svg";

export default function Contenido() {
  return (
    <>
      <div className="container_texto_invitacion">
        <div className="svg-container">
          <svg width="600" height="150" viewBox="0 0 365 150">
            <defs>
              <path
                id="curve"
                d="M 10 110 Q 200 0 390 130"
                stroke="none"
                fill="none"
              />

              {/* Gradiente SVG */}
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
              <textPath href="#curve">¡Ven a celebrar!</textPath>
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
          <div className="calendario">
            <Calendario />
          </div>
        </div>
      </div>
    </>
  );
}
