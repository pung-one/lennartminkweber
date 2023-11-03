import styled from "styled-components";
import ArtworkInfo from "../ArtworkInfo";
import { SetStateAction } from "react";

export default function SideBar({
  artworkData,
  artworkCount,
  setArtworkCount,
}: {
  artworkData: ArtworkData;
  artworkCount: number;
  setArtworkCount: React.Dispatch<SetStateAction<number>>;
}) {
  return (
    <Container>
      <ArtworkInfo
        artworkData={artworkData}
        artworkCount={artworkCount}
        setArtworkCount={setArtworkCount}
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
