import styled from "styled-components";
import { PiArrowDownThin, PiArrowUpThin } from "react-icons/pi";
import { SetStateAction, useEffect, useState } from "react";
import StyledButton from "@/components/StyledButton";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  enter: (slideDirection: string) => {
    return {
      y: slideDirection === "up" ? "-50%" : "50%",
      opacity: 0,
    };
  },
  center: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.3 },
  },
  exit: (slideDirection: string) => {
    return {
      y: slideDirection === "up" ? "50%" : "-50%",
      opacity: 0,
      transition: {
        x: { duration: 0.3 },
        opacity: { delay: 0.1, duration: 0.2 },
      },
    };
  },
};

export default function ArtworkInfo({
  artworkData,
  artworkCount,
  setArtworkCount,
}: {
  artworkData: ArtworkData;
  artworkCount: {
    count: number;
    slideDirection: string;
  };
  setArtworkCount: React.Dispatch<
    SetStateAction<{
      count: number;
      slideDirection: string;
    }>
  >;
}) {
  const [artworkMetadata, setArtworkMetadata] = useState<ArtworkMetadata>({
    title: undefined,
    year: undefined,
    description: undefined,
    dimensions: undefined,
  });

  const [buttonEnabled, setButtonEnabled] = useState<boolean>(true);

  const handleNavArtworks = {
    prevArtwork: () => {
      if (buttonEnabled) {
        setArtworkCount(({ count }) => {
          return {
            count: count > 0 ? (count -= 1) : artworkData.length - 1,
            slideDirection: "down",
          };
        });
      }
    },
    nextArtwork: () => {
      if (buttonEnabled) {
        setArtworkCount(({ count }) => {
          return {
            count: count < artworkData.length - 1 ? (count += 1) : 0,
            slideDirection: "up",
          };
        });
      }
    },
  };

  useEffect(() => {
    setArtworkMetadata(artworkData[artworkCount.count]);
  }, [artworkCount]);

  const { title, year, description, dimensions } = artworkMetadata;

  return (
    <FlexContainer>
      <Navigation>
        <StyledButton onClick={() => handleNavArtworks.prevArtwork()}>
          <PiArrowUpThin />
        </StyledButton>
        <p>{`${artworkCount.count + 1}/${artworkData.length}`}</p>
        <StyledButton onClick={() => handleNavArtworks.nextArtwork()}>
          <PiArrowDownThin />
        </StyledButton>
      </Navigation>
      <AnimatePresence
        initial={false}
        mode={"wait"}
        custom={artworkCount.slideDirection}
      >
        <motion.div
          key={artworkData[artworkCount.count].title}
          custom={artworkCount.slideDirection}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          onAnimationStart={() => setButtonEnabled(false)}
          onAnimationComplete={() => setButtonEnabled(true)}
        >
          <GridContainer>
            <Key>Titel:</Key>
            <Value>{title}</Value>
            <Key>Jahr:</Key>
            <Value>{year}</Value>
            <Key>Material:</Key>
            <Value>{description}</Value>
            <Key>Größe:</Key>
            <Value>{dimensions}</Value>
          </GridContainer>
        </motion.div>
      </AnimatePresence>
    </FlexContainer>
  );
}

const FlexContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`;

/* const Navigation = styled.nav`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 20px;
  p {
    padding: 35px 0;
  }
`; */

const Navigation = styled.nav`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  gap: 35px;
  button {
    display: flex;
    align-items: center;
  }
`;

const GridContainer = styled.div`
  position: relative;
  width: 300px;
  margin: 0 auto;
  display: grid;
  grid-gap: 10px 20px;
  grid-template-columns: min-content auto;
  grid-template-rows: auto auto auto auto;
`;

const Key = styled.p`
  justify-self: end;
`;

const Value = styled.p`
  justify-self: start;
  font-family: "Trinite Wide";
`;
