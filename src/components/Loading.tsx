import Lottie from 'react-lottie';
import { LoadingContainer } from '../styles/GlobalStyles';

function Loading({ animationData }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  return (
    <LoadingContainer>
      <Lottie options={defaultOptions} height={250} width={250} />
    </LoadingContainer>
  )
}

export default Loading;