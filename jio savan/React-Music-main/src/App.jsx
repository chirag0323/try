import React, { useState } from "react";
import { audios } from "./AudioData";
import Player from "./components/Player";
import Navbar from "./components/Navbar";
import MoodSelector from "./components/MoodSelector";
import "./App.css";

const App = () => {
  const [songs, setSongs] = useState(audios);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [mood, setMood] = useState("default");

  const handleMoodChange = (newMood) => {
    setMood(newMood);
    // Apply the mood to the player (e.g., change color themes)
    document.documentElement.style.setProperty("--player-theme-color", moodColors[newMood]);
  };

  const nextSong = () => {
    setCurrentIndex((currentIndex) => {
      let newIndex = currentIndex + 1;
      return checkNumber(newIndex);
    });

    setCurrentSong(songs[currentIndex]);
  };

  const prevSong = () => {
    setCurrentIndex((currentIndex) => {
      let newIndex = currentIndex - 1;
      return checkNumber(newIndex);
    });

    setCurrentSong(songs[currentIndex]);
  };

  const checkNumber = (number) => {
    if (number > songs.length - 1) {
      return 0;
    }
    if (number < 0) {
      return songs.length - 1;
    }
    return number;
  };

  const handleLogin = () => {
    // Placeholder function for handling login
    console.log("Login button clicked");
  };

  const handleSignup = () => {
    // Placeholder function for handling signup
    console.log("Signup button clicked");
  };

  const moodColors = {
    calm: "#89CFF0",
    energetic: "#FF4500",
    happy: "#FFD700",
    sad: "#A9A9A9",
    default: "#ffffff",
  };

  return (
    <>
      <div className="player-main">
        <div className={`app-main mood-${mood}`}>
          <Navbar />
          <MoodSelector onMoodChange={handleMoodChange} />
          <div className="auth-buttons">
            <button className="login-button" onClick={handleLogin}>
              Log In
            </button>
            <button className="signup-button" onClick={handleSignup}>
              Sign Up
            </button>
          </div>
        </div>
        <Player
          currentSong={currentSong}
          currentIndex={currentIndex}
          nextSong={nextSong}
          prevSong={prevSong}
        />
      </div>
    </>
  );
};

export default App;
