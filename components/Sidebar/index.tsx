"use client";
import styled from "styled-components";
import ArtworkInfo from "../ArtworkInfo";
import { SetStateAction } from "react";

export default function SideBar(props: {
  artworkData: artworkData;
  artworkCount: number;
  setArtworkCount: React.Dispatch<SetStateAction<number>>;
}) {
  return (
    <Container>
      <ArtworkInfo
        artworkData={props.artworkData}
        artworkCount={props.artworkCount}
        setArtworkCount={props.setArtworkCount}
      />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 350px;
  height: 100vh;
  border-right: 1px solid black;
  @media only screen and (max-width: 1024px) {
    border-right: none;
    border-bottom: 1px solid black;
    width: 100%;
    height: auto;
  }
`;
