import "../style/Calendario.css";

export default function Calendario() {
  // Configuración: días especiales con tipo de ícono
  const diasEspeciales = {
    22: "corona",
  };

  // Septiembre 2025 comienza en lunes, así que el primer día es 1 (lunes)
  const primerDiaSemana = 1; // 0=domingo, 1=lunes
  const diasEnMes = 30; // Septiembre tiene 30 días

  const diasSemana = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

  // Crear array del calendario
  const calendario = [];

  // Agregar días vacíos al inicio
  for (let i = 0; i < primerDiaSemana; i++) {
    calendario.push(null);
  }

  // Agregar días reales del mes
  for (let dia = 1; dia <= diasEnMes; dia++) {
    calendario.push(dia);
  }

  return (
    <div className="container_calendario">
      <h1>Septiembre 2025</h1>

      {/* Días de la semana */}
      <div className="calendario_headers">
        {diasSemana.map((dia, index) => (
          <div key={index} className="header_dia">
            {dia}
          </div>
        ))}
      </div>

      {/* Días del mes */}
      <div className="calendario_dias">
        {calendario.map((dia, index) => (
          <div
            key={index}
            className={`dia ${dia ? "dia_activo" : "dia_vacio"}`}
          >
            {dia && (
              <>
                {/* Íconos especiales detrás del número */}
                {diasEspeciales[dia] === "corazon" && (
                  <span className="icono_especial">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#e63946"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icono_svg"
                    >
                      <path d="M12 21C12 21 4 13.5 4 8.5C4 5.5 6.5 3 9.5 3C11 3 12 4 12 4C12 4 13 3 14.5 3C17.5 3 20 5.5 20 8.5C20 13.5 12 21 12 21Z" />
                    </svg>
                  </span>
                )}
                {diasEspeciales[dia] === "corona" && (
                  <span className="icono_especial">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#f4c430"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icono_svg"
                    >
                      <path d="M2 6L5 16H19L22 6L17 10L12 4L7 10L2 6Z" />
                      <path d="M5 16H19" />
                      <path d="M9 20H15" />
                    </svg>
                  </span>
                )}

                <span className="numero_dia">{dia}</span>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
