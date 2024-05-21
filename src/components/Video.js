import React, { useRef, useEffect, useState } from 'react';

const Video = ({ src }) => {
  const [isReady, setIsReady] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleCanPlay = () => {
      setIsReady(true);
      videoElement.play();
    };

    if (videoElement) {
      videoElement.addEventListener('canplay', handleCanPlay);
      return () => {
        videoElement.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, [src]);

  useEffect(() => {
    if (isReady) {
      videoRef.current.play().catch(error => {
        // This catch block prevents the error from being thrown
        console.error('Failed to play video:', error);
      });
    }
  }, [isReady]);

  return (
    <video ref={videoRef} controls>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
