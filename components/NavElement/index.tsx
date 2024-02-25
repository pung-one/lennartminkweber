import { useState, useEffect } from "react";
import styled from "styled-components";

type Props = {
  handleClick: () => void;
  isActive: boolean;
  turningAngle: number;
  children: React.ReactNode;
};

export default function NavElement({
  handleClick,
  isActive,
  turningAngle,
  children,
}: Props) {
  return (
    <Element
      onClick={() => handleClick()}
      $isActive={isActive}
      $turningAngle={turningAngle}
    >
      {children}
    </Element>
  );
}

const Element = styled.li<{ $isActive: boolean; $turningAngle: number }>`
  margin-bottom: 15px;
  width: fit-content;
  * {
    font-size: 20px;
  }
  p {
    transform: ${({ $isActive, $turningAngle }) =>
      $isActive ? `rotate(${$turningAngle}deg)` : "rotate(0deg)"};
    transition: transform 0.2s ease;
    transform-origin: 20%;
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
