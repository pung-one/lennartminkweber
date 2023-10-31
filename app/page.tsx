"use client";
import SideBar from "@/components/Sidebar";
import Link from "next/link";
import styled from "styled-components";
import Gallery from "@/components/Gallery";
import { useState, useEffect } from "react";

export default function Home() {
  const [artworkCount, setArtworkCount] = useState<number>(0);
  const [imageCounter, setImageCounter] = useState(0);

  const artworkData = [
    {
      position: 1,
      title: "Wo Eis ist, ist Kühle für zwei",
      year: "2023",
      description: "Versilbertes Glas, Aluminium",
      dimensions: "203 x 75 x 37 cm",
      images: [
        {
          width: 628,
          height: 887,
          url: "/images/eiskühle/Screenshot_2023-10-30_at_11.58.57_AM.png",
        },
        {
          width: 641,
          height: 888,
          url: "/images/eiskühle/Screenshot_2023-10-30_at_11.59.13_AM.png",
        },
        {
          width: 309,
          height: 465,
          url: "/images/eiskühle/Screenshot_2023-10-30_at_11.59.21_AM.png",
        },
      ],
    },
    {
      position: 1,
      title: "A Template for Disillusionment",
      year: "2019",
      description: "Stahlblech auf Stahlrahmen, MDF, Schaumstoff, Lichterkette",
      dimensions: "200 x 90 x 4 cm",
      images: [
        {
          width: 303,
          height: 202,
          url: "/images/disillusionment/Screenshot_2023-10-30_at_12.04.33_PM.png",
        },
        {
          width: 581,
          height: 888,
          url: "/images/disillusionment/Screenshot_2023-10-30_at_12.04.43_PM.png",
        },
      ],
    },
  ];

  useEffect(() => {
    setImageCounter(0);
  }, [artworkCount]);

  return (
    <PageContainer>
      <SideBar
        artworkData={artworkData}
        artworkCount={artworkCount}
        setArtworkCount={setArtworkCount}
      />
      <Gallery
        images={artworkData[artworkCount].images}
        imageCounter={imageCounter}
        setImageCounter={setImageCounter}
      />
    </PageContainer>
  );
}

const PageContainer = styled.main`
  position: relative;
  display: flex;
  width: 100%;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
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
