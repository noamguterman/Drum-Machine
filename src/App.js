import React, { useEffect, useState } from "react"
import "./style.css"
import Heater1 from "./assets/Heater-1.mp3"
import Heater2 from "./assets/Heater-2.mp3"
import Heater3 from "./assets/Heater-3.mp3"
import Heater4 from "./assets/Heater-4.mp3"
import Clap from "./assets/Clap.mp3"
import OpenHH from "./assets/Open-HH.mp3"
import KickNHat from "./assets/Kick-n-Hat.mp3"
import Kick from "./assets/Kick.mp3"
import ClosedHH from "./assets/Closed-HH.mp3"

export default function App() {
  const [power, setPower] = useState(true)
  const [volume, setVolume] = useState(0.5)

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress)
    return () => {
      document.removeEventListener("keydown", handleKeyPress)
    }
  }, [power, volume])

  function handleKeyPress(event) {
    const key = event.key.toUpperCase()
    const audio = document.getElementById(key)
    if (audio) {
      const button = audio.parentElement
      const soundName = button.dataset.soundname
      const display = document.getElementById("display")
      if (power) {
        display.textContent = soundName
        audio.currentTime = 0
        audio.volume = volume
        audio.play()
      }
      else {
        display.textContent = ""
      }
    }
  }

  function playSound(event) {
    const audio = event.currentTarget.querySelector("audio")
    const display = document.getElementById("display")
    const soundName = event.currentTarget.dataset.soundname
    if (power) {
        display.textContent = soundName
        audio.currentTime = 0
        audio.volume = volume
        audio.play()
    }
    else {
        display.textContent = ""
    }
  }

  return (
    <div id="drum-machine">
      <div className="leftSide">
        <button
          id="heater1"
          className="drum-pad"
          onClick={playSound}
          data-soundname="Heater-1"
        >
          Q<audio src={Heater1} className="clip" id="Q"></audio>
        </button>
        <button
          id="heater2"
          className="drum-pad"
          onClick={playSound}
          data-soundname="Heater-2"
        >
          W<audio src={Heater2} className="clip" id="W"></audio>
        </button>
        <button
          id="heater3"
          className="drum-pad"
          onClick={playSound}
          data-soundname="Heater-3"
        >
          E<audio src={Heater3} className="clip" id="E"></audio>
        </button>
        <button
          id="heater4"
          className="drum-pad"
          onClick={playSound}
          data-soundname="Heater-4"
        >
          A<audio src={Heater4} className="clip" id="A"></audio>
        </button>
        <button
          id="clap"
          className="drum-pad"
          onClick={playSound}
          data-soundname="Clap"
        >
          S<audio src={Clap} className="clip" id="S"></audio>
        </button>
        <button
          id="openHh"
          className="drum-pad"
          onClick={playSound}
          data-soundname="Open-HH"
        >
          D<audio src={OpenHH} className="clip" id="D"></audio>
        </button>
        <button
          id="kickNHat"
          className="drum-pad"
          onClick={playSound}
          data-soundname="Kick-n'-Hat"
        >
          Z<audio src={KickNHat} className="clip" id="Z"></audio>
        </button>
        <button
          id="kick"
          className="drum-pad"
          onClick={playSound}
          data-soundname="Kick"
        >
          X<audio src={Kick} className="clip" id="X"></audio>
        </button>
        <button
          id="closedHh"
          className="drum-pad"
          onClick={playSound}
          data-soundname="Closed-HH"
        >
          C<audio src={ClosedHH} className="clip" id="C"></audio>
        </button>
      </div>
      <div className="rightSide">
        <label className="switch">
          Power
          <input 
            className="checkbox"
            type="checkbox" 
            checked={power} 
            onChange={() => setPower((prevPower) => !prevPower)} 
          />
          <span class="checkmark"></span>
        </label>
        <div id="display"></div>
        <div className="sliderContainer">
          <input 
            type="range" 
            className="volumeSlider"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
          />
        </div>
      </div>
    </div>
  )
}
