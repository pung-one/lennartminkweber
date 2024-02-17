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
    font-size: 25px;
  }
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
  @media only screen and (max-width: 1024px) {
    p {
      text-decoration: ${({ $isActive }) =>
        $isActive ? "line-through" : "none"};
      transition: text-decoration 0.2s ease;
    }
    &:hover {
      p {
        text-decoration: line-through;
        cursor: pointer;
      }
    }
  }
  @media only screen and (min-width: 1025px) {
    p {
      transform: ${({ $isActive, $turningAngle }) =>
        $isActive ? `rotate(${$turningAngle}deg)` : "rotate(0deg)"};
      transition: transform 0.2s ease;
      transform-origin: 50%;
    }
    &:hover {
      cursor: pointer;
      p {
        transform: ${({ $turningAngle }) => `rotate(-${$turningAngle}deg)`};
      }
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
  /* @media only screen and (max-width: 1024px) {
    p {
      position: relative;
      &:after {
        content: "";
        position: absolute;
        width: 20px;
        height: 1px;
        top: 5px;
        left: 0;
        background-color: black;
        transform: ${({ $isActive }) =>
    $isActive ? "scaleX(1) rotate(15deg)" : "scaleX(0) rotate(15deg)"};
        transition: transform 0.1s ease;
      }
      &:hover {
        cursor: pointer;
      }
      &:hover:after {
        transform: scaleX(1);
        transform-origin: center;
      }
    }
  } */
`;
