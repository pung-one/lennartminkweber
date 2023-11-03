import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  PromiseLikeOfReactNode,
  MouseEventHandler,
  KeyboardEventHandler,
} from "react";
import styled from "styled-components";

export default function StyledButton({
  children,
  onClick,
}: {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | PromiseLikeOfReactNode
    | null
    | undefined;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}) {
  return <Button onClick={onClick}>{children}</Button>;
}

const Button = styled.button`
  background: none;
  border: none;
  transition: all 0.1s ease;
  color: black;
  color: black;
  &:hover {
    cursor: pointer;
    color: red;
    transform: scale(1.1);
  }
`;
