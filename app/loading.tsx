"use client";
import styled from "styled-components";

export default function Loading() {
  return (
    <LoadingScreen>
      <Spinner />
    </LoadingScreen>
  );
}

const LoadingScreen = styled.div`
  width: 100vw;
  height: 100dvh;
  display: flex;
  justify-content: center;
  background: white;
`;

const Spinner = styled.div`
  margin-top: 38vh;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid black;
  border-bottom: 1px solid transparent;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  animation: spin 1s linear infinite;
`;
