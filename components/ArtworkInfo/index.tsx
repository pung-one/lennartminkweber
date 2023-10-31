"use client";
import styled from "styled-components";
import { PiArrowDownThin, PiArrowUpThin } from "react-icons/pi";
import { SetStateAction, useEffect, useState } from "react";
import StyledButton from "@/components/StyledButton";

export default function ArtworkInfo(props: {
  artworkData: artworkData;
  artworkCount: number;
  setArtworkCount: React.Dispatch<SetStateAction<number>>;
}) {
  const { artworkData, artworkCount, setArtworkCount } = props;
  const [artworkMetadata, setArtworkMetadata] = useState<artworkMetadata>({
    position: undefined,
    title: undefined,
    year: undefined,
    description: undefined,
    dimensions: undefined,
  });
  const { position, title, year, description, dimensions } = artworkMetadata;

  useEffect(() => {
    setArtworkMetadata({ ...artworkData[artworkCount] });
  }, [artworkCount]);

  return (
    <FlexContainer>
      <Navigation>
        <StyledButton
          onClick={() =>
            setArtworkCount((prev: any) => (prev > 0 ? (prev -= 1) : prev))
          }
        >
          <PiArrowUpThin />
        </StyledButton>
        <p>{`${artworkCount + 1}/${artworkData.length}`}</p>
        <StyledButton
          onClick={() =>
            setArtworkCount((prev: any) =>
              prev < artworkData.length - 1 ? (prev += 1) : prev
            )
          }
        >
          <PiArrowDownThin />
        </StyledButton>
      </Navigation>
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
  padding: 30px 0;
  p {
    height: 20px;
    padding: 0 35px;
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
