/* import styled from "styled-components";
import { PiArrowLeftThin, PiArrowRightThin } from "react-icons/pi";
import Image from "next/image";
import { useEffect, useState } from "react";
import StyledButton from "../StyledButton";
import { useKeyDown } from "@/lib/useKeyDown";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  enter: (slideDirection: string) => {
    return {
      x:
        slideDirection === "vertical"
          ? 0
          : slideDirection === "right"
          ? "-10%"
          : "10%",
      opacity: 0,
    };
  },
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: (slideDirection: string) => {
    return {
      x:
        slideDirection === "vertical"
          ? 0
          : slideDirection === "right"
          ? "10%"
          : "-10%",
      opacity: 0,
      transition: {
        x: { duration: 0.4 },
        opacity: { delay: 0.1, duration: 0.3 },
      },
    };
  },
};

export default function Gallery({
  artworkData,
  artworkCount,
}: {
  artworkData: ArtworkData;
  artworkCount: number;
}) {
  const [images, setImages] = useState<ArtworkImageData>(
    artworkData[artworkCount].images
  );

  const [imageCount, setImageCount] = useState<{
    count: number;
    slideDirection: string;
  }>({ count: 0, slideDirection: "right" });

  const [buttonEnabled, setButtonEnabled] = useState<boolean>(true);

  useEffect(() => {
    if (buttonEnabled) {
      setImageCount({ count: 0, slideDirection: "vertical" });
    }
    setImages(artworkData[artworkCount].images);
  }, [artworkCount]);

  const { url, width, height } = images[imageCount.count];

  function prevImage() {
    if (buttonEnabled) {
      setImageCount(({ count }) => {
        return {
          count: count > 0 ? (count -= 1) : images.length - 1,
          slideDirection: "left",
        };
      });
    }
  }

  function nextImage() {
    if (buttonEnabled) {
      setImageCount(({ count }) => {
        return {
          count: count < images.length - 1 ? (count += 1) : 0,
          slideDirection: "right",
        };
      });
    }
  }

  useKeyDown(prevImage, ["ArrowLeft"]);
  useKeyDown(nextImage, ["ArrowRight"]);

  return (
    <FlexContainer>
      <Navigation>
        <StyledButton onClick={() => prevImage()}>
          <PiArrowLeftThin />
        </StyledButton>
        <p>{`${imageCount.count + 1}/${images.length}`}</p>
        <StyledButton onClick={() => nextImage()}>
          <PiArrowRightThin />
        </StyledButton>
      </Navigation>
      {images && (
        <AnimatePresence
          initial={false}
          mode={"wait"}
          custom={imageCount.slideDirection}
        >
          <motion.div
            key={url}
            custom={imageCount.slideDirection}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            onAnimationStart={() => setButtonEnabled(false)}
            onAnimationComplete={() => setButtonEnabled(true)}
          >
            <StyledImage
              alt=""
              src={"https:" + url}
              width={width}
              height={height}
            />
          </motion.div>
        </AnimatePresence>
      )}
    </FlexContainer>
  );
}

const FlexContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-bottom: 5vh;
  width: 100%;
  overflow-x: hidden;
`;

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

const StyledImage = styled(Image)`
  object-fit: contain;
  object-position: top;
  width: 100%;
  height: ${({ width, height }) =>
    width && height && width > height ? "100%" : "80vh"};
  max-height: calc(80vh - 80px);
  padding: 0 5vw;
`;
 */
