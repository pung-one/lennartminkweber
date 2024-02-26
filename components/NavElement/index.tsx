import { useState, useEffect } from "react";
import styled from "styled-components";

type Props = {
  handleClick: () => void;
  turningAngle: number;
  children: React.ReactNode;
};

export default function NavElement({
  handleClick,
  turningAngle,
  children,
}: Props) {
  const [transOrig, setTransOrig] = useState<number>(20);

  function getRandomNumber() {
    return Math.floor(Math.random() * (80 - 20) + 20);
  }

  return (
    <Element
      $transOrig={transOrig}
      $turningAngle={turningAngle}
      onClick={() => handleClick()}
      onMouseEnter={() => setTransOrig(getRandomNumber())}
    >
      {children}
    </Element>
  );
}

const Element = styled.li<{ $turningAngle: number; $transOrig: number }>`
  margin-bottom: 15px;
  width: fit-content;
  * {
    font-size: 20px;
  }
  p {
    transition: transform 0.2s ease;
    transform-origin: ${({ $transOrig }) => `${$transOrig}%`};
    letter-spacing: 0.7px;
  }
  @media only screen and (min-width: 1025px) {
    &:hover {
      cursor: pointer;
      p {
        transform: ${({ $turningAngle }) => `rotate(-${$turningAngle}deg)`};
      }
    }
  }
`;
