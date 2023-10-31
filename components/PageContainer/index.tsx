"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Gallery from "../Gallery";
import SideBar from "../Sidebar";
import styled from "styled-components";

export default function PageContainer(props: {
  artworkDataProp: artworkData;
  entries: any;
}) {
  const [artworks, setArtworks] = useState();
  const [artworkCount, setArtworkCount] = useState<number>(0);
  const [imageCounter, setImageCounter] = useState<number>(0);

  console.log(props.entries);

  useEffect(() => {
    setImageCounter(0);
  }, [artworkCount]);

  return (
    <Container>
      <SideBar
        artworkData={props.artworkDataProp}
        artworkCount={artworkCount}
        setArtworkCount={setArtworkCount}
      />
      <Gallery
        images={props.artworkDataProp[artworkCount].images}
        imageCounter={imageCounter}
        setImageCounter={setImageCounter}
      />
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  display: flex;
  width: 100%;
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
    transition: transform 0.2s ease-out;
  }
  &:hover:after {
    transform: scaleX(0);
    transform-origin: bottom right;
  }
`;
