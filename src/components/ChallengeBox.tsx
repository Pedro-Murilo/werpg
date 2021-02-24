import {
  ChallengeBoxContainer,
  ChallengeActive,
  ChallengeNotActive,
  FailedButton,
  SucceededButton,
} from "../styles/components/ChallengeBoxStyle";

function ChallengeBox() {
  const hasActiveChallenge = true;

  return (
    <ChallengeBoxContainer>
      {hasActiveChallenge ? (
        <ChallengeActive>
          <header>Earn 400 xp</header>

          <main>
            <img src="icons/body.svg" />
            <strong>New challenge</strong>
            <p>Get up and do a walk and some stretching</p>
          </main>

          <footer>
            <FailedButton type="button">Failed</FailedButton>
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
