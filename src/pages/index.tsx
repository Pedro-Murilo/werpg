import Head from "next/head";

import ChallengeBox from "../components/ChallengeBox";
import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import Profile from "../components/Profile";
import CountdownProvider from "../context/CountdownContext";
import { Container } from "../styles/GlobalStyles";
import { SectionContainer } from "../styles/pages/HomeStyle";

export default function Home() {
  return (
    <>
      <Container>
        <Head>
          <title>Home | WeRPG</title>
        </Head>
        <ExperienceBar />

        <CountdownProvider>
          <SectionContainer>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </SectionContainer>
        </CountdownProvider>
      </Container>
    </>
  );
}
