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
  const elementRef = useRef<HTMLButtonElement>(null);

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
    <li>
      <Element
        type="button"
        ref={elementRef}
        onClick={handleClick}
        onMouseEnter={getTiltParams}
        $initialAnimationDelay={initialAnimationDelay || 0}
      >
        {children}
      </Element>
    </li>
  );
}

const Element = styled.button<{ $initialAnimationDelay: number }>`
  //initial animation
  opacity: 0;
  @keyframes initialFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation-name: initialFadeIn;
  animation-delay: ${({ $initialAnimationDelay }) =>
    `${$initialAnimationDelay}s`};
  animation-duration: 0.12s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;

  //hover
  transition: transform 0.14s ease;
  transform-origin: var(--tilt-origin);
  @media only screen and (min-width: 1025px) {
    &:hover {
      cursor: pointer;
      transform: var(--tilt-angle);
    }
  }

  //other styles
  background: none;
  border: none;
  width: fit-content;
  * {
    text-align: left;
    color: black;
    font-size: 20px;
    letter-spacing: 0.5px;
  }
`;
