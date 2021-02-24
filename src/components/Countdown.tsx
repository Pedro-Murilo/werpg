import { useState, useEffect } from "react";
import { CountdownButton, CountdownContainer, AbandonCycleButton } from "../styles/components/CountdownStyle";

let countdownTimeout: NodeJS.Timeout;

function Countdown() {

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');

  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  const startCountdown = () => {
      setIsActive(true);
  }

  const resetCountdown = () => {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
  }

  useEffect(() => {
    if(isActive && time > 0) {
        countdownTimeout = setTimeout(() => {
            setTime(time -1);
        }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
    }
  }, [isActive, time])

  return (
    <div>
      <CountdownContainer>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </CountdownContainer>

      { hasFinished ? (
         <CountdownButton
         disabled
        >
          Finished cycle
        </CountdownButton>
      ) : (
        <>
        { isActive ? (
          <AbandonCycleButton
          type="button"
          onClick={resetCountdown}
         >
           Abandon cycle
         </AbandonCycleButton>
        ) : (
          <CountdownButton
          type="button"
          onClick={startCountdown}
         >
           Start cycle
         </CountdownButton>
        )}
        </>
      )}

    </div>
  );
}

export default Countdown;
