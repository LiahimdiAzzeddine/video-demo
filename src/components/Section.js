import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import videoFile from "../videos/FirstDraft.mp4";
import Image from "../videos/placeholder-image.png";
import Logo from "../logo.png";

const Section = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showText, setShowText] = useState(true); // Etat pour gérer la visibilité du texte

  const videoRef = useRef(null);

  const handleAnimationComplete = () => {
    setIsAnimating(false);
  };

  const togglePlay = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setShowVideo((prev) => !prev);
      setShowText(false); // Masquer le texte lorsque l'utilisateur clique sur l'image
    }
  };

  const handleVideoPlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleVideoPause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleButtonClick = () => {
    if (showVideo) {
      handleVideoPause();
    } else {
      handleVideoPlay();
    }
    togglePlay();
  };

  return (
    <div className="section-1 center" id="section-1">
      <a href="#" className="logo">
        <img src={Logo} alt="Dinomite Logo" className="logo-img" />
      </a>
      <div className="main-circle center">
        {showVideo ? (
          <motion.video
            src={videoFile}
            controls
            className={`video square`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            autoPlay
          />
        ) : (
          <motion.img
            src={Image}
            className="video"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={togglePlay}
            onAnimationComplete={handleAnimationComplete}
          />
        )}
      </div>
      {showText && ( // Afficher le texte uniquement s'il est visible
        <h4 className="featured-text featured-text-1" id="dinomite">
          DINOMITE
        </h4>
      )}
    </div>
  );
};

export default Section;
