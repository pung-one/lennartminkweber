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
      const prevId = activeItemId > 0 ? activeItemId - 1 : itemListLength;
      handleChange(prevId);
    },
    nextItem: () => {
      const nextId = activeItemId < itemListLength - 1 ? activeItemId + 1 : 0;
      handleChange(nextId);
    },
  };

  return (
    <Navigation>
      <StyledButton onClick={() => handleNavArtworks.prevItem()}>
        <PiArrowLeftThin />
      </StyledButton>
      <p>{`${activeItemId + 1}/${itemListLength}`}</p>
      <StyledButton onClick={() => handleNavArtworks.nextItem()}>
        <PiArrowRightThin />
      </StyledButton>
    </Navigation>
  );
}

const Navigation = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  button {
    display: flex;
    align-items: center;
  }
`;

const StyledButton = styled.button`
  background: none;
  border: none;
  color: black;
  &:hover {
    cursor: pointer;
  }
`;
