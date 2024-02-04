import { ShowsData } from "@/types";
import NavElement from "../NavElement";
import styled from "styled-components";

export default function ShowsNav({
  showsData,
  activeItemId,
  onChange: handleChange,
}: {
  showsData: ShowsData[];
  activeItemId: string;
  onChange: (show: ShowsData) => void;
}) {
  return (
    <ShowsList>
      {showsData.map((show) => {
        return (
          <NavElement
            handleClick={() => handleChange(show)}
            isActive={activeItemId === show.id}
            turningAngle={3}
            key={show.id}
          >
            {show.title}
          </NavElement>
        );
      })}
    </ShowsList>
  );
}

const ShowsList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  list-style: none;
  @media only screen and (max-width: 1024px) {
    padding-top: 10px;
  }
`;
