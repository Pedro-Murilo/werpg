import Link from "next/link";
import { Container } from "../styles/GlobalStyles";
import { BackArrowLink, HeaderContainer } from "../styles/pages/MissionStyle";

function Missions() {
  return (
    <Container>
      <HeaderContainer>
        <span>
          <Link href="/">
            <BackArrowLink>&larr;</BackArrowLink>
          </Link>
        </span>
          <h2>What missions are you thinking for today?</h2>
      </HeaderContainer>
    </Container>
  );
}

export default Missions;
