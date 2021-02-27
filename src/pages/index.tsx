import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { GetServerSideProps } from "next";

import animationData from "../lottie/rocket-loading.json";

import ChallengeBox from "../components/ChallengeBox";
import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import Profile from "../components/Profile";
import CountdownProvider from "../context/CountdownContext";
import { Container } from "../styles/GlobalStyles";
import {
  SectionContainer,
  ContainerMissionsLink,
  MissionLink,
} from "../styles/pages/HomeStyle";
import { ChallengesProvider } from "../context/ChallengesContext";
import Loading from "../components/Loading";
import { motion } from "framer-motion";
import { animationOne } from "../animations";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Exercises(props: HomeProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <>
        <Loading animationData={animationData} />
        <Head>
          <title>WeRPG</title>
        </Head>
        </>
      ) : (
        <motion.div
          initial="out"
          animate="in"
          exit="out"
          variants={animationOne}
        >
          <ChallengesProvider
            level={props.level}
            currentExperience={props.currentExperience}
            challengesCompleted={props.challengesCompleted}
          >
            <Container>
              <Head>
                <title>Exercises | WeRPG</title>
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
        </motion.div>
      )}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level ?? 1),
      currentExperience: Number(currentExperience ?? 0),
      challengesCompleted: Number(challengesCompleted ?? 0),
    },
  };
};
