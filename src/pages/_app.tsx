import GlobalStyle from '../styles/GlobalStyles';

import { ChallengesProvider} from '../context/ChallengesContext';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
        <GlobalStyle />
        <Component {...pageProps} />
    </ChallengesProvider>
    )
}

export default MyApp
