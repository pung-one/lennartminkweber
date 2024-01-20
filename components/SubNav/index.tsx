import styled from "styled-components";

export default function SubNav({ children }: { children: React.ReactNode }) {
  return <SubNavigation>{children}</SubNavigation>;
}

const SubNavigation = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  list-style: none;
`;
