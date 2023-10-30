"use client";
import styled from "styled-components";
import { PiArrowDownThin, PiArrowUpThin } from "react-icons/pi";
import { SetStateAction } from "react";

export default function ArtworkInfo(props: {
  artworkData: artworkData;
  artworkCount: number;
  setArtworkCount: React.Dispatch<SetStateAction<number>>;
}) {
  const { artworkData, artworkCount, setArtworkCount } = props;
  const { position, title, year, description, dimensions } =
    artworkData[artworkCount];

  return (
    <FlexContainer>
      <Navigation>
        <PiArrowUpThin
          onClick={() =>
            setArtworkCount((prev: any) => (prev > 0 ? (prev -= 1) : prev))
          }
        />
        <p>{`${artworkCount + 1}/${artworkData.length}`}</p>
        <PiArrowDownThin
          onClick={() =>
            setArtworkCount((prev: any) =>
              prev < artworkData.length - 1 ? (prev += 1) : prev
            )
          }
        />
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
`;

const Navigation = styled.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-right: 20px;
`;

const GridContainer = styled.div`
  position: relative;
  display: grid;
  grid-gap: 5px 10px;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto auto;
`;

const Key = styled.p`
  justify-self: start;
`;

const Value = styled.p`
  justify-self: start;
`;
