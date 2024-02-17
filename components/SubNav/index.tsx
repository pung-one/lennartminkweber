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
  height: 100vh;
  width: 100vw;
  padding-left: 10vw;
`;

const ShowsList = styled.ul`
  position: relative;
  display: flex;
  height: 100vh;
  overflow-y: scroll;
  flex-direction: column;
  gap: 20px;
  list-style: none;
  padding: 20vh 0 0;
`;
