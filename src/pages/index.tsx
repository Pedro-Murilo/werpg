import Head from "next/head";
import Link from "next/link";
import { GetServerSideProps } from 'next';

import ChallengeBox from "../components/ChallengeBox";
import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import Profile from "../components/Profile";
import CountdownProvider from "../context/CountdownContext";
import { Container } from "../styles/GlobalStyles";
import { SectionContainer, ContainerMissionsLink, MissionLink } from "../styles/pages/HomeStyle";
import { ChallengesProvider } from "../context/ChallengesContext";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <>
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
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
      </ChallengesProvider>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  
  const {level, currentExperience, challengesCompleted} = ctx.req.cookies;
  
  return {
    props: {
      level: Number(level ?? 1),
      currentExperience: Number(currentExperience ?? 0),
      challengesCompleted: Number(challengesCompleted ?? 0)
    }
  }
}
