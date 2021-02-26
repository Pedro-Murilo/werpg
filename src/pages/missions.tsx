import Link from "next/link";
import { Container } from "../styles/GlobalStyles";
import { BackArrowLink, HeaderContainer } from "../styles/pages/MissionStyle";

import animationData from "../lottie/gympass-loading.json";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { motion } from "framer-motion";
import { animationTwo, transition } from "../animations";
import { AnimatePresence } from "framer-motion";

function Missions() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1250);
  }, []);

  return (
    <>
      {loading ? (
        <Loading animationData={animationData} />
      ) : (
        <AnimatePresence exitBeforeEnter>
          <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={animationTwo}
            transition={transition}
          >
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
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}

export default Missions;
