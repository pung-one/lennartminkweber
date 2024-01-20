import { PiArrowLeftThin, PiArrowRightThin } from "react-icons/pi";
import styled from "styled-components";

export default function ArtworkNavMobile({
  itemListLength,
  activeItemId,
  onChange: handleChange,
}: {
  itemListLength: number;
  activeItemId: number;
  onChange: (id: number) => void;
}) {
  const handleNavArtworks = {
    prevItem: () => {
      const prevId = activeItemId > 0 ? activeItemId - 1 : itemListLength - 1;
      handleChange(prevId);
    },
    nextItem: () => {
      const nextId = activeItemId < itemListLength - 1 ? activeItemId + 1 : 0;
      handleChange(nextId);
    },
  };

  return (
    <Navigation>
      <button onClick={() => handleNavArtworks.prevItem()}>
        <PiArrowLeftThin />
      </button>
      <p>{`${activeItemId + 1}/${itemListLength}`}</p>
      <button onClick={() => handleNavArtworks.nextItem()}>
        <PiArrowRightThin />
      </button>
    </Navigation>
  );
}

const Navigation = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: none;
    border: none;
    color: black;
    flex: 1;
    &:hover {
      cursor: pointer;
    }
  }
`;
