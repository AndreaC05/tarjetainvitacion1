import React, { useEffect, useState } from "react";
import "../style/Hora.css";

export default function Hora() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    // 🔧 Aquí defines tu fecha y hora objetivo (ejemplo: 15 de septiembre de 2025, 7:00 PM)
    const targetDate = new Date("2025-09-22T18:00:00"); // Formato ISO

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference <= 0) {
                clearInterval(interval);
                setTimeLeft({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                });
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / (1000 * 60)) % 60);
                const seconds = Math.floor((difference / 1000) % 60);

                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container_hora">
            <div className="contador">
                <div className="dia_tiempo">
                    <span>{timeLeft.days} : </span>
                    <span>Días</span>
                </div>
                <div className="hora_tiempo">
                    <span>{String(timeLeft.hours).padStart(2, '0')} :</span>
                    <span>Horas</span>
                </div>
                <div className="minutos_tiempo">
                    <span>{String(timeLeft.minutes).padStart(2, '0')} :</span>
                    <span>Minutos</span>
                </div>
                <div className="segundos_tiempo">
                    <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
                    <span>Segundos</span>
                </div>
            </div>
        </div>
    );
}
