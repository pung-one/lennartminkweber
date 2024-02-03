import { ArtworkData, ShowsData } from "@/types";
import NavElement from "../NavElement";
import styled from "styled-components";

export default function ArtworkNavDesktop({
  showsData,
  activeItemId,
  onChange: handleChange,
}: {
  showsData: ShowsData[];
  activeItemId: string;
  onChange: (show: ShowsData) => void;
}) {
  return (
    <ArtworkList>
      {showsData.map((show) => {
        return (
          <NavElement
            handleClick={() => handleChange(show)}
            isActive={activeItemId === show.id}
            key={show.id}
          >
            {show.title}
          </NavElement>
        );
      })}
    </ArtworkList>
  );
}

const ArtworkList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  list-style: none;
`;
