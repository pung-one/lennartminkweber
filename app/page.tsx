"use client";
import Link from "next/link";
import styled from "styled-components";

export default function Home() {
  return (
    <PageContainer>
      <Card>
        <StyledLink href={"mailto:lennartminkweber@gmail.com"}>
          Kontakt
        </StyledLink>
      </Card>
    </PageContainer>
  );
}

const PageContainer = styled.main`
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 38.2vh;
  width: 100%;
  height: 100vh;
`;

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 330px;
  height: 203px;
  border: 1px solid black;
  background: white;
  transform: translateY(-50%);
  transform-origin: left bottom;
`;

const StyledLink = styled(Link)`
  position: relative;
  font-weight: normal;
  &:hover {
  }
  transition: font-weight 0.3s ease;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    right: 0;
    background-color: black;
    transform: scaleX(1);
    transform-origin: bottom left;
    transition: transform 0.2s ease-out;
  }
  &:hover:after {
    transform: scaleX(0);
    transform-origin: bottom right;
  }
`;
