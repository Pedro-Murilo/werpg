import { CountdownButton, CountdownContainer } from "../styles/components/CountdownStyle";

function Countdown() {
  return (
    <div>
      <CountdownContainer>
        <div>
          <span>2</span>
          <span>5</span>
        </div>
        <span>:</span>
        <div>
          <span>0</span>
          <span>0</span>
        </div>
      </CountdownContainer>
      <CountdownButton type="button">Start cicle</CountdownButton>
    </div>
  );
}

export default Countdown;
