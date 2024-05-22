import React, { useState, useRef,useEffect } from 'react';
import { motion } from "framer-motion";
import videoFile from "../videos/FirstDraft.mp4";
import Image from "../videos/placeholder-image.png";
import { FaPlay } from "react-icons/fa6";
import Magnetic from "./Magnetic";
import Logo from "../logo.png";
const Video = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const videoRef = useRef(null);
  
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

 
  const handleVideoClick = () => {
    setIsClicked(!isClicked);
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };


  const handleMouseEnter = () => {
    setShowPlayButton(true);
  };

  const handleMouseLeave = () => {
    setShowPlayButton(false);
  };


  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div className="section-1 center" id="section-1">
    <a href="#" className="logo">
      <img src={Logo} alt="Dinomite Logo" className="logo-img" />
    </a>
    <div className="main-circle center">
    <motion.div
    initial={{
      borderRadius: "50%",
      width:  isMobile? '65vw': '160px',
      height: isMobile? '65vw': '160px',
    }}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    onMouseMove={handleMouseMove}
    className="video_div"
    whileHover={!isPlaying ? { scale: 0.9, boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset", opacity: 0.8  } : {}}
    whileTap={{ scale: 0.95 }}
    animate={{
      borderRadius: isClicked ? "0%" : "50%",
      width: isClicked ? (isMobile ? '90vw':'850px') :(isMobile ? '65vw':'505px'),
      height: isClicked ? (isMobile ? '50vw':'500px') : (isMobile ? '65vw':'500px'),
    }}
    transition={{ duration: 0.4 }}
    style={{
      overflow: "hidden",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "black",
      position: "relative"
    }}
  >
    
    {!isPlaying && (
        <div
          onClick={handleVideoClick}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${Image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 1
          }}
        >
          {showPlayButton && (
            <button
              style={{
                position: 'absolute',
                top: `${mousePosition.y}px`,
                left: `${mousePosition.x}px`,
                width:"7rem",
                height:"7rem",
                fontSize: '24px',
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                color:'#318475',
                border: 'none',
                borderRadius: '50%',
                cursor: 'pointer',
                pointerEvents: 'none',
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
               <FaPlay/>
            </button>
          )}
        </div>
      )}
      <motion.video
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      ref={videoRef}
      onPlay={console.log("play")}
      onClick={console.log("click")}
      onPause={console.log("pause")}
        src={videoFile}
        controls
        loop
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: isPlaying ? 'block' : 'none'

        }}
      />
      
    </motion.div>
    </div>
    <div className="buttons">
        <Magnetic>
        <a href="#" class={isPlaying?'pause':'play'} onClick={handleVideoClick}  ></a>
        </Magnetic>
      </div>
    </div>
  );
};

export default Video;
