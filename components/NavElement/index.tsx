import { Key, useState } from "react";
import styled from "styled-components";

type Props = {
  handleClick: () => void;
  tiltAngle: number;
  children: React.ReactNode;
  initialAnimationDelay?: number;
};

type TiltParams = {
  origin: number;
  direction: "left" | "right";
  angle: number;
};

export default function NavElement({
  handleClick,
  tiltAngle,
  children,
  initialAnimationDelay,
}: Props) {
  const [tiltParams, setTiltParams] = useState<TiltParams>({
    origin: 0,
    direction: "right",
    angle: tiltAngle,
  });

  function getTiltParams(e: {
    currentTarget: { getBoundingClientRect: () => any };
    clientX: number;
  }) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    setTiltParams({
      origin: x,
      direction: x > rect.width / 2 ? "left" : "right",
      angle: tiltAngle,
    });
  }

  return (
    <Element
      $tiltParams={tiltParams}
      $initialAnimationDelay={initialAnimationDelay || 0}
      onClick={handleClick}
      onMouseEnter={getTiltParams}
    >
      {children}
    </Element>
  );
}

const Element = styled.li<{
  $tiltParams: TiltParams;
  $initialAnimationDelay: number;
}>`
  transform: rotate(-2deg);
  opacity: 0;
  transform-origin: 20% top;
  @keyframes initialSlide {
    0% {
      transform: rotate(-2deg);
      opacity: 0;
    }
    75% {
      opacity: 1;
    }
    100% {
      transform: rotate(0deg);
      opacity: 1;
    }
  }
  animation-name: initialSlide;
  animation-fill-mode: forwards;
  animation-duration: ${({ $initialAnimationDelay }) =>
    $initialAnimationDelay > 0 ? "0.3s" : "0s"};
  animation-delay: ${({ $initialAnimationDelay }) =>
    `${$initialAnimationDelay}s`};
  margin-bottom: 15px;
  width: fit-content;
  * {
    font-size: 20px;
  }
  p {
    transition: transform 0.15s ease;
    transform-origin: ${({ $tiltParams }) => `${$tiltParams.origin}px top`};
    letter-spacing: 0.7px;
  }
  @media only screen and (min-width: 1025px) {
    &:hover {
      cursor: pointer;
      p {
        transform: ${({ $tiltParams }) =>
          $tiltParams.direction === "left"
            ? `rotate(-${$tiltParams.angle}deg)`
            : `rotate(${$tiltParams.angle}deg)`};
      }
    }
  }
`;
