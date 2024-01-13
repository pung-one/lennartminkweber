"use client";
import styled from "styled-components";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavElement from "../NavElement";
import { useRouter } from "next/navigation";

export function SideNav() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Nav>
      <List>
        <NavElement
          handleClick={() => router.push("/work")}
          isActive={pathname === "/work"}
        >
          Work
        </NavElement>

        <NavElement
          handleClick={() => router.push("/texts")}
          isActive={pathname === "/texts"}
        >
          Texts
        </NavElement>

        <NavElement
          handleClick={() => router.push("/cv")}
          isActive={pathname === "/cv"}
        >
          CV
        </NavElement>

        <NavElement
          handleClick={() => router.push("/contact")}
          isActive={pathname === "/contact"}
        >
          Contact
        </NavElement>
      </List>
    </Nav>
  );
}

const Nav = styled.nav`
  width: 200px;
`;

const List = styled.ul`
  list-style: none;
  width: fit-content;
  margin: 0 auto;
`;
