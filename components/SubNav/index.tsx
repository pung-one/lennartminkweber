import { ShowsData, TextData } from "@/types";
import NavElement from "../NavElement";
import styled from "styled-components";

type Props = {
  navListData: ShowsData[] | TextData[];
  activeItemId: string;
  onChange: (show: ShowsData | TextData) => void;
};

export default function SubNav({
  navListData,
  activeItemId,
  onChange: setActiveElement,
}: Props) {
  return (
    <ShowsList>
      {navListData.map((element) => {
        return (
          <NavElement
            handleClick={() => setActiveElement(element)}
            isActive={activeItemId === element.id}
            turningAngle={3}
            key={element.id}
          >
            {element.title}
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
