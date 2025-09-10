import "../style/Contenido.css";

export default function Contenido() {
    return(
        <>
        <div className="container_texto_invitacion">
            <div class="svg-container">
                <svg width="600" height="150" viewBox="0 0 400 150">
                    <defs>
                        <path id="curve" d="M 20 80 Q 200 20 380 80" stroke="none" fill="none"/>
                    </defs>
                    <text class="svg-text">
                        <textPath href="#curve">¡Ven a celebrar!</textPath>
                    </text>
                </svg>
            </div>
            <div className="img_logo">
                <img src="https://res.cloudinary.com/dnao6nouz/image/upload/v1757452190/descarga_1_l5tlnh.jpg" alt="" />
            </div>
        </div>
        </>
    );
}