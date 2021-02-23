import CompletedChallenges from "../components/CompletedChallenges";
import { ExperienceBar } from "../components/ExperienceBar";
import Profile from "../components/Profile";
import { Container } from "../styles/GlobalStyles";
import { SectionContainer } from "../styles/pages/HomeStyle";

export default function Home() {
  return (
    <>
      <Container>  
        <ExperienceBar />

        <SectionContainer>
          <div>
            <Profile />
            <CompletedChallenges />
          </div>
            <div>

            </div>
        </SectionContainer>
      </Container>
    </>
  );
}
