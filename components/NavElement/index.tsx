import styled from "styled-components";

type Props = {
  handleClick: () => void;
  isActive: boolean;
  children: React.ReactNode;
};

export default function NavElement({ handleClick, isActive, children }: Props) {
  return (
    <Element onClick={() => handleClick()} $isActive={isActive}>
      <p>{children}</p>
    </Element>
  );
}

const Element = styled.li<{ $isActive: boolean }>`
  margin-bottom: 15px;
  width: fit-content;
  /* p {
    transform: ${({ $isActive }) =>
    $isActive ? "rotate(-3deg)" : "rotate(0deg)"};
    transition: transform 0.2s ease;
    transform-origin: center bottom;
  }
  &:hover {
    p {
      transform: rotate(-3deg);
      cursor: pointer;
    }
  } */
  p {
    transform: ${({ $isActive }) =>
      $isActive ? "skew(-20deg)" : "skew(0deg)"};
    transition: transform 0.2s ease;
    transform-origin: center center;
  }
  &:hover {
    p {
      transform: skew(-20deg);
      cursor: pointer;
    }
  }
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
