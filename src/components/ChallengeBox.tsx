import { useContext } from "react";
import { ChallengesContext } from "../context/ChallengesContext";
import {
  ChallengeBoxContainer,
  ChallengeActive,
  ChallengeNotActive,
  FailedButton,
  SucceededButton,
} from "../styles/components/ChallengeBoxStyle";

function ChallengeBox() {

  const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

  return (
    <ChallengeBoxContainer>
      {activeChallenge ? (
        <ChallengeActive>
          <header>Earn {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>New challenge</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <FailedButton
                type="button"
                onClick={resetChallenge}
            >Failed
            </FailedButton>
            <SucceededButton type="button">Completed</SucceededButton>
          </footer>
        </ChallengeActive>
      ) : (
        <ChallengeNotActive>
          <strong>End a cycle to receive a challenge</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level up" />
            Level up by completing challenges
          </p>
        </ChallengeNotActive>
      )}
    </ChallengeBoxContainer>
  );
}

export default ChallengeBox;
