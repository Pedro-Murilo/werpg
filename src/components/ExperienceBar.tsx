import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import { HeaderExperience, CurrentExperience, ContainerExperience } from '../styles/components/ExperienceBarStyle';

export function ExperienceBar() {

    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

    return (
        <HeaderExperience>
            <span>0 xp</span>
            <ContainerExperience>
                <div style={{ width: `${percentToNextLevel}%` }} />
                <CurrentExperience style={{ left: `${percentToNextLevel}%` }}>{currentExperience}</CurrentExperience>
            </ContainerExperience>
            <span>{experienceToNextLevel} xp</span>
        </HeaderExperience>
    )
}