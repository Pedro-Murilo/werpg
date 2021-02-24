import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import { CompletedChallengesContainer } from '../styles/components/CompletedChallengesStyle';

function CompletedChallenges() {

    const { challengesCompleted } = useContext(ChallengesContext);

    return (
        <CompletedChallengesContainer>
            <span>Completed Challenges</span>
            <span>{challengesCompleted}</span>
        </CompletedChallengesContainer>
    )
}

export default CompletedChallenges;