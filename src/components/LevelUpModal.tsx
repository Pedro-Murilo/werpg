import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import { Overlay, ContainerModal, HeaderModal, ButtonModal } from '../styles/components/LevelUpModalStyles';
import LevelUpAnimation from './LevelUpAnimation';
import animationData from '../lottie/confetti.json';

function LevelUpModal() {

    const { level, closeLevelUpModal } = useContext(ChallengesContext);

    return (
        <Overlay>
            <ContainerModal>
                <HeaderModal>{level}</HeaderModal>
                <LevelUpAnimation animationData={animationData} />
                <strong>Congratulations!</strong>
                <p>Level up!</p>

                <ButtonModal type="button" onClick={closeLevelUpModal}>
                    <img src="/icons/close.svg" alt="Close" />
                </ButtonModal>
            </ContainerModal>
        </Overlay>
    )
}

export default LevelUpModal;