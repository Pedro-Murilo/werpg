import Head from "next/head";
import Link from "next/link";

import ChallengeBox from "../components/ChallengeBox";
import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import Profile from "../components/Profile";
import CountdownProvider from "../context/CountdownContext";
import { Container } from "../styles/GlobalStyles";
import { SectionContainer, ContainerMissionsLink, MissionLink } from "../styles/pages/HomeStyle";

export default function Home() {
  return (
    <>
      <Container>
        <Head>
          <title>Home | WeRPG</title>
        </Head>

        <ExperienceBar />
        <ContainerMissionsLink>
          <Link href="/missions">
            <MissionLink>Missions</MissionLink>
          </Link>
        </ContainerMissionsLink>
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
