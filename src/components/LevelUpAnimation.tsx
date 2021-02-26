import Lottie from 'react-lottie';
import { LevelUpAnimationContainer } from '../styles/components/LevelUpModalStyles';

function LevelUpAnimation({ animationData }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  return (
    <LevelUpAnimationContainer>
      <Lottie options={defaultOptions} height={350} width={450} />
    </LevelUpAnimationContainer>
  )
}

export default LevelUpAnimation;