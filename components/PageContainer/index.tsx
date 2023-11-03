"use client";
import Link from "next/link";
import { useState } from "react";
import Gallery from "../Gallery";
import SideBar from "../Sidebar";
import styled, { css } from "styled-components";
import InfoBox from "../Info";

export default function PageContainer({
  artworkData,
}: {
  artworkData: ArtworkData;
}) {
  const [artworkCount, setArtworkCount] = useState<number>(0);
  const [showInfo, setShowInfo] = useState<boolean>(false);

  return (
    <>
      <Container $showInfo={showInfo}>
        <SideBar
          artworkData={artworkData}
          artworkCount={artworkCount}
          setArtworkCount={setArtworkCount}
          setShowInfo={setShowInfo}
        />
        <Gallery artworkData={artworkData} artworkCount={artworkCount} />
      </Container>
      {showInfo && <InfoBox setShowInfo={setShowInfo} />}
    </>
  );
}

type ContainerProps = {
  $showInfo: boolean;
};

const Container = styled.main<ContainerProps>`
  position: relative;
  display: flex;
  width: 100%;
  pointer-events: ${({ $showInfo }) => ($showInfo ? "none" : "auto")};
  filter: ${({ $showInfo }) => ($showInfo ? "blur(8px) opacity(25%)" : "none")};
  transition: filter 0.2s ease;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const StyledLink = styled(Link)`
  position: relative;
  font-weight: normal;
  &:hover {
  }
  transition: font-weight 0.3s ease;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    right: 0;
    background-color: black;
    transform: scaleX(1);
    transform-origin: bottom left;
    transition: transform 0.1s ease-out;
  }
  &:hover:after {
    transform: scaleX(0);
    transform-origin: bottom right;
  }
`;
