import { useContext } from "react";
import { ChallengesContext } from "../context/ChallengesContext";
import { CountdownContext } from "../context/CountdownContext";
import {
  ChallengeBoxContainer,
  ChallengeActive,
  ChallengeNotActive,
  FailedButton,
  SucceededButton,
} from "../styles/components/ChallengeBoxStyle";

import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  );
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
      <AnimateSharedLayout>
    <ChallengeBoxContainer>
        {activeChallenge ? (
          <ChallengeActive layout layoutId="challenge">
            <header>Earn {activeChallenge.amount} xp</header>

            <main>
              <img src={`icons/${activeChallenge.type}.svg`} />
              <strong>New challenge</strong>
              <p>{activeChallenge.description}</p>
            </main>

            <footer>
              <FailedButton type="button" onClick={handleChallengeFailed}>
                Failed
              </FailedButton>
              <SucceededButton type="button" onClick={handleChallengeSucceeded}>
                Completed
              </SucceededButton>
            </footer>
          </ChallengeActive>
        ) : (
          <AnimatePresence>
            <ChallengeNotActive layout layoutId="challenge">
              <strong>End a cycle to receive a challenge</strong>
              <p>
                <img src="icons/level-up.svg" alt="Level up" />
                Level up by completing challenges
              </p>
            </ChallengeNotActive>
          </AnimatePresence>
        )}
    </ChallengeBoxContainer>
      </AnimateSharedLayout>
  );
}

export default ChallengeBox;
