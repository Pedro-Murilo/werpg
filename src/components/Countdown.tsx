import { useState, useEffect } from "react";
import { CountdownButton, CountdownContainer } from "../styles/components/CountdownStyle";

function Countdown() {

  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');

  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  const startCountdown = () => {
      setActive(true);
  }

  useEffect(() => {
    if(active && time > 0) {
        setTimeout(() => {
            setTime(time -1);
        }, 1000)
    }
  }, [active, time])

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
      <CountdownButton
       type="button"
       onClick={startCountdown}
      >Start cicle</CountdownButton>
    </div>
  );
}

export default Countdown;
