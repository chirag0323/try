import React, { useEffect } from "react";
import { useState, useRef } from "react";
import bgImage from "../assets/images.png";
import { GoPlay } from "react-icons/go";
import { BsPauseCircleFill } from "react-icons/bs";
import { ImPrevious, ImNext } from "react-icons/im";
import AOS from "aos";
import "aos/dist/aos.css";
const Player = ({ currentSong, currentIndex, nextSong, prevSong }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div>
      <audio ref={audioRef} src={currentSong.music} loop></audio>

      <div data-aos="zoom-in-up" className="player-card">
        <div className="image-container">
          <img className="music-image" src={bgImage} alt="image" />
        </div>

        {currentSong ? (
          <div>
            <h2 className="active-song-name">{currentSong.name}</h2>
            <h5 className="active-artist-name">{currentSong.creator}</h5>
          </div>
        ) : (
          ""
        )}

        <div className="control-icon">
          <ImPrevious
            color="white"
            size={40}
            className="icons"
            onClick={prevSong}
          />
          {isPlaying ? (
            <BsPauseCircleFill
              color="#ff5722"
              size={60}
              className="icons"
              onClick={togglePlay}
            />
          ) : (
            <GoPlay
              color="#ff5722"
              size={60}
              className="icons"
              onClick={togglePlay}
            />
          )}

          <ImNext
            color="white"
            size={40}
            className="icons"
            onClick={nextSong}
          />
        </div>
      </div>
    </div>
  );
};

export default Player;
