import React from 'react';
import { useState, useRef, useEffect } from "react";
import '../Styles/Home.css';


const videos = [
  {
    src: "/guayaquilPe.webm",
    title: "",
    description: "",
  },
  {
    src: "/221180_large.mp4",
    title: "",
    description: "",
  },
  {
    src: "/girl.mp4",
    title: "",
    description: "",
  },
  {
    src: "/videoFondo.mp4",
    title: "",
    description: "",
  },
];

const Home = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef(null);

  const handleVideoEnded = () => {
    if (currentVideo < videos.length - 1) {
      setCurrentVideo((prev) => prev + 1);
    } else {
      setCurrentVideo(0); // Reiniciar al primer video al final
    }
  };

  useEffect(() => {
    // Reinicia el video cuando cambia el índice actual
    if (videoRef.current) {
      videoRef.current.load(); // Cargar el nuevo video
    }
  }, [currentVideo]);

  return (
    <div className="home">
      <div className="video-container">
        <video
          ref={videoRef}
          className="watermark-video"
          autoPlay
          loop={false}
          muted
          onEnded={handleVideoEnded}
          key={currentVideo} // Cambia la clave para reiniciar el video
        >
          <source src={videos[currentVideo].src} type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
      </div>
      <div className="content">
        <h1>Bienvenidos a la Iglesia de Dios de Ecuador</h1>
        <p>Canalizamos su ayuda para causas importantes</p>
      </div>
    </div>
  );
}

export default Home;


