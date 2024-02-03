import { useState, useEffect } from "react";
import styled from "styled-components";

type Props = {
  handleClick: () => void;
  isActive: boolean;
  children: React.ReactNode;
};

export default function NavElement({ handleClick, isActive, children }: Props) {
  const [turningDeg, setTurningDeg] = useState<number>(0);

  useEffect(() => {
    if (window) {
      setTurningDeg(Math.floor(Math.random() * 6 + 3));
    }
  }, [children]);

  return (
    <Element
      onClick={() => handleClick()}
      $isActive={isActive}
      $turningDeg={turningDeg}
    >
      {children}
    </Element>
  );
}

const Element = styled.li<{ $isActive: boolean; $turningDeg: number }>`
  margin-bottom: 15px;
  width: fit-content;
  /* p {
    opacity: ${({ $isActive }) => ($isActive ? "0.5" : "1")};
    transition: opacity 0.2s ease;
  }
  &:hover {
    p {
      opacity: 0.5;
      cursor: pointer;
    }
  } */
  p {
    transform: ${({ $isActive, $turningDeg }) =>
      $isActive ? `rotate(-${$turningDeg}deg)` : "rotate(0deg)"};
    transition: transform 0.2s ease;
    transform-origin: 22%;
  }
  &:hover {
    cursor: pointer;
    p {
      transform: ${({ $turningDeg }) => `rotate(-${$turningDeg}deg)`};
    }
  }
  /* p {
    transform: ${({ $isActive }) => ($isActive ? "scaleX(0.8)" : "scaleX(1)")};
    transition: transform 0.1s ease;
    transform-origin: left;
  }
  &:hover {
    p {
      transform: scaleX(0.8);
      cursor: pointer;
    }
  } */
  /* p {
    position: relative;
    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      bottom: 0;
      right: 0;
      background-color: black;
      transform: ${({ $isActive }) => ($isActive ? "scaleX(1)" : "scaleX(0)")};
      transition: transform 0.1s ease;
    }
    &:hover {
      cursor: pointer;
    }
    &:hover:after {
      transform: scaleX(1);
      transform-origin: center;
    }
  } */
`;
