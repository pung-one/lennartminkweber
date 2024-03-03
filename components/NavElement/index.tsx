import { Key, useRef, useState } from "react";
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
  const elementRef = useRef<HTMLLIElement>(null);

  function getTiltParams(e: {
    currentTarget: { getBoundingClientRect: () => any };
    clientX: number;
  }) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const direction = x > rect.width / 2 ? "left" : "right";
    const origin = x;
    const angle = direction === "left" ? `-${tiltAngle}` : `${tiltAngle}`;

    console.log(`${origin}px top`);
    const element = elementRef.current;
    if (element) {
      element.style.setProperty("--tilt-origin", `${origin}px top`);
      element.style.setProperty("--tilt-angle", `rotate(${angle}deg)`);
    }
  }

  return (
    <Element
      ref={elementRef}
      onClick={handleClick}
      onMouseEnter={getTiltParams}
    >
      {children}
    </Element>
  );
}

const Element = styled.li`
  transition: transform 0.15s ease;
  transform-origin: var(--tilt-origin);
  &:hover {
    cursor: pointer;
    transform: var(--tilt-angle);
  }
  width: fit-content;
  * {
    font-size: 20px;
  }
`;
