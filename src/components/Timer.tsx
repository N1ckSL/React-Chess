import React, { FC, useEffect, useRef, useState } from "react";
import { Player } from "../models/Player";
import { Colors } from "../models/Colors";

interface TimerProps {
  currentPlayer: Player | null;
  restart: () => void;
}

const Timer: FC<TimerProps> = ({ currentPlayer, restart }) => {
  const [blackTime, setBlackTime] = useState(500);
  const [whiteTime, setWhiteTime] = useState(500);
  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    startTimer();
  }, [currentPlayer]);

  function startTimer() {
    if (timer.current) {
      clearInterval(timer.current);
    }
    const callback =
      currentPlayer?.color === Colors.WHITE
        ? decrementWhiteTimer
        : decrementBlackTimer;
    timer.current = setInterval(callback, 1000);
  }

  function decrementBlackTimer() {
    setBlackTime((prev) => prev - 1);
  }
  
  function decrementWhiteTimer() {
    setWhiteTime((prev) => prev - 1);
  }

  const handleRestart = () => {
    setBlackTime(500);
    setWhiteTime(500);
    restart();
  };

  return (
    <div className="timer-wrap">
      <div className="timer-btn-wrap">
        <button className="timer-btn" onClick={handleRestart}>
          Restart game
        </button>
      </div>
      <div className="players-timer-wrap">
        <h2 className="players-timer">Black - {blackTime}</h2>
        <h2 className="players-timer">White - {whiteTime}</h2>
      </div>
    </div>
  );
};

export default Timer;
