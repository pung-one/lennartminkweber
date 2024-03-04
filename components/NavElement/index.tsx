import { motion } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";

type Props = {
  handleClick: () => void;
  tiltAngle: number;
  children: React.ReactNode;
  initialAnimationDelay?: number;
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
    const origin = e.clientX - rect.left;
    const direction = origin > rect.width / 2 ? "left" : "right";
    const angle = direction === "left" ? `-${tiltAngle}` : `${tiltAngle}`;

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
      $initialAnimationDelay={initialAnimationDelay || 0}
    >
      {children}
    </Element>
  );
}

const Element = styled.li<{ $initialAnimationDelay: number }>`
  transition: transform 0.14s ease;
  transform-origin: var(--tilt-origin, 20% top);
  &:hover {
    transition: transform 0.15s ease;
    cursor: pointer;
    transform: var(--tilt-angle);
  }
  width: fit-content;
  * {
    font-size: 20px;
  }
`;
