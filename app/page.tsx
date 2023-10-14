"use client";
import Link from "next/link";
import styled from "styled-components";

export default function Home() {
  return (
    <PageContainer>
      <Card>
        <p>Lennart Mink Weber</p>
        <StyledLink href={"mailto:lennartminkweber@gmail.com"}>
          Email
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
  gap: 30px;
  width: 330px;
  height: 203px;
  border: 1px solid black;
  background: white;
  transform: translateY(-50%) rotateZ(-2deg);
  transform-origin: left bottom;
  box-shadow: 10px 10px 20px -10px grey;
  &:hover {
    transform: translateY(-50%) rotateZ(-0deg);
    box-shadow: none;
  }
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  p {
    font-size: 20px;
  }
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
