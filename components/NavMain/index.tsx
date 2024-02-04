import styled from "styled-components";
import { usePathname } from "next/navigation";
import NavElement from "../NavElement";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function NavMain() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Nav>
      <List>
        <NavElement
          handleClick={() => router.push("/work")}
          turningAngle={10}
          isActive={pathname === "/work"}
        >
          <p>Work</p>
        </NavElement>

        <NavElement
          handleClick={() => router.push("/texts")}
          turningAngle={10}
          isActive={pathname === "/texts"}
        >
          <p>Texts</p>
        </NavElement>

        <NavElement
          handleClick={() => router.push("/cv")}
          turningAngle={10}
          isActive={pathname === "/cv"}
        >
          <p>CV</p>
        </NavElement>

        <NavElement
          handleClick={() => router.push("/contact")}
          turningAngle={10}
          isActive={pathname === "/contact"}
        >
          <p>Contact</p>
        </NavElement>
      </List>
    </Nav>
  );
}

const Nav = styled.nav`
  width: 15vw;
  @media only screen and (max-width: 1024px) {
    width: 100%;
    padding: 3vh 0 0;
  }
`;

const List = styled.ul`
  list-style: none;
  width: fit-content;
  margin: 0 auto;
  @media only screen and (max-width: 1024px) {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
`;
