import { ShowsData, TextData } from "@/types";
import NavElement from "../NavElement";
import styled from "styled-components";

type Props = {
  navListData: ShowsData[] | TextData[];
  onChange: (show: ShowsData | TextData) => void;
  setModalOpen: (prev: boolean) => void;
};

export default function SubNav({
  navListData,
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
  flex-direction: column;
  gap: 15px;
  list-style: none;
  margin: 20vh 0 0 15vw;
  @media only screen and (max-width: 1024px) {
    margin: 150px auto;
    padding: 0 15px;
  }
`;
