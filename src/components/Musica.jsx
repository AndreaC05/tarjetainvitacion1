import { useState, useRef, useEffect } from "react";
import { Button } from "primereact/button";
import Music from "../assets/Music/tinkerbell.mp3";
import "../style/Musica.css";

export default function Musica() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Pon aquí la ruta de tu archivo de música
  const musicFile = Music; // Cambia esto por tu archivo

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };


  return (
    <>
      <div className="container_reproductor">
        <audio
          ref={audioRef}
          src={musicFile}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={handleEnded}
        />

        <Button
          icon="pi pi-refresh"
          className="control-icon"
          text
          onClick={() => {
            /* shuffle logic */
          }}
        />

        <Button
          icon="pi pi-step-backward-alt"
          className="control-icon"
          text
          onClick={() => {
            audioRef.current.currentTime -= 10;
          }}
        />

        <Button
          icon={isPlaying ? "pi pi-pause" : "pi pi-play"}
          className="play-button"
          onClick={togglePlayPause}
        />

        <Button
          icon="pi pi-step-forward-alt"
          className="control-icon"
          text
          onClick={() => {
            audioRef.current.currentTime += 10;
          }}
        />

        <Button
          icon="pi pi-replay"
          className="control-icon"
          text
          onClick={() => {
            /* repeat logic */
          }}
        />
      </div>
    </>
  );
}
