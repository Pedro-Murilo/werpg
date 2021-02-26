import Link from "next/link";
import { Container } from "../styles/GlobalStyles";
import { BackArrowLink, HeaderContainer } from "../styles/pages/MissionStyle";

import animationData from '../lottie/gympass-loading.json';
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

function Missions() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }, [])

  return (
    <>
    {loading ? (
      <Loading animationData={animationData} />
    ): (
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
    )}
    </>
  );
}

export default Missions;
