import { ShowsData, TextData } from "@/types";
import NavElement from "../NavElement";
import styled from "styled-components";

type Props = {
  navListData: ShowsData[] | TextData[];
  activeItemId?: string;
  onChange: (show: ShowsData | TextData) => void;
  setModalOpen: (prev: boolean) => void;
};

export default function SubNav({
  navListData,
  activeItemId,
  onChange: setActiveElement,
  setModalOpen,
}: Props) {
  return (
    <Container>
      <ShowsList>
        {navListData.map((element) => {
          return (
            <NavElement
              handleClick={() => {
                setActiveElement(element);
                setModalOpen(true);
              }}
              isActive={activeItemId === element.id}
              turningAngle={3}
              key={element.id}
            >
              {element.title}
            </NavElement>
          );
        })}
      </ShowsList>
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  display: flex;
  list-style: none;
  width: 100%;
  height: 100%;
`;

const ShowsList = styled.ul`
  position: relative;
  display: flex;
  overflow-y: scroll;
  flex-direction: column;
  gap: 20px;
  list-style: none;
  padding: 20vh 10px;
  @media only screen and (min-width: 1025px) {
    padding: 20vh 0 0 10vw;
  }
`;
