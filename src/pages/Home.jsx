import "../style/Home.css";
import Contenido from "../components/Contenido.jsx";

export default function Home() {
    return (
        <div className="container_home">
            {/* Video difuso de fondo */}
            <video 
                className="video-background"
                src="https://res.cloudinary.com/dnao6nouz/video/upload/v1757038592/PinDown.io__zzzgalina_1757038570_lz5nov.mp4"
                autoPlay
                muted
                loop
                playsInline
            ></video>

            {/* Video principal normal */}
            <video 
                className="video-main"
                src="https://res.cloudinary.com/dnao6nouz/video/upload/v1757038592/PinDown.io__zzzgalina_1757038570_lz5nov.mp4"
                autoPlay
                muted
                loop
                playsInline
            ></video>
            <div className="contenido_text">
                <Contenido />
            </div>
        </div>
    );
}
