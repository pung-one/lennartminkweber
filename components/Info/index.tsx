import Link from "next/link";
import { SetStateAction } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export default function InfoBox({
  setShowInfo,
  infos,
}: {
  setShowInfo: React.Dispatch<SetStateAction<boolean>>;
  infos: any;
}) {
  const cvUrl = infos.items[0].fields.cv.fields.file.url;
  return (
    <Container
      initial={{ scaleX: 0, x: "-50%" }}
      animate={{ scaleX: 1, x: "-50%", transition: { duration: 0.2 } }}
      exit={{ scaleX: 0, x: "-50%" }}
    >
      <CloseButton onClick={() => setShowInfo(false)}>close</CloseButton>
      <LinkContainer>
        <StyledLink href={"https:" + cvUrl} target="_blank">
          CV
        </StyledLink>
        <StyledLink href={""}>Exhibitions</StyledLink>
        <StyledLink href={""}>Contact</StyledLink>
      </LinkContainer>
    </Container>
  );
}

const Container = styled(motion.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  width: 350px;
  height: 250px;
  border: 1px solid black;
  background: white;
  p {
    font-size: 20px;
    font-family: "Trinite Wide";
  }
`;

const LinkContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: white;
  border: none;
  color: black;
  &:hover {
    cursor: pointer;
    color: red;
    transform: scale(1.1);
  }
`;

const StyledLink = styled(Link)`
  position: relative;
  font-size: 20px;
  color: black;
  font-family: "Trinite Wide";
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    right: 0;
    background-color: black;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.2s ease-out;
  }
  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;
