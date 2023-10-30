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
  height: 100vh;
  width: 350px;
  padding: 20px;
`;
