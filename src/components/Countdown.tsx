import { useContext } from "react";
import { CountdownButton, CountdownContainer, AbandonCycleButton } from "../styles/components/CountdownStyle";
import { CountdownContext } from '../context/CountdownContext';

function Countdown() {

  const { 
      minutes, 
      seconds, 
      hasFinished, 
      isActive, 
      startCountdown, 
      resetCountdown 
    } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');

  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');


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
