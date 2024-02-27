import { useState, useEffect } from "react";
import styled from "styled-components";

type Props = {
  handleClick: () => void;
  turningAngle: number;
  children: React.ReactNode;
};

type TurningParams = {
  origin: number;
  direction: "left" | "right";
  angle: number;
};

export default function NavElement({
  handleClick,
  turningAngle,
  children,
}: Props) {
  const [turningParams, setTurningParams] = useState<TurningParams>({
    origin: 0,
    direction: "right",
    angle: turningAngle,
  });

  function getTurningParams(e: {
    currentTarget: { getBoundingClientRect: () => any };
    clientX: number;
  }) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    setTurningParams({
      origin: x,
      direction: x > rect.width / 2 ? "left" : "right",
      angle: turningAngle,
    });
  }

  return (
    <Element
      $turningParams={turningParams}
      onClick={handleClick}
      onMouseEnter={getTurningParams}
    >
      {children}
    </Element>
  );
}

const Element = styled.li<{
  $turningParams: TurningParams;
}>`
  margin-bottom: 15px;
  width: fit-content;
  * {
    font-size: 20px;
  }
  p {
    transition: transform 0.15s ease;
    transform-origin: ${({ $turningParams }) =>
      `${$turningParams.origin}px top`};
    letter-spacing: 0.7px;
  }
  @media only screen and (min-width: 1025px) {
    &:hover {
      cursor: pointer;
      p {
        transform: ${({ $turningParams }) =>
          $turningParams.direction === "left"
            ? `rotate(-${$turningParams.angle}deg)`
            : `rotate(${$turningParams.angle}deg)`};
      }
    }
  }
`;
