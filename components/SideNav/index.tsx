import styled from "styled-components";
import { usePathname } from "next/navigation";
import NavElement from "../NavElement";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useViewportSize } from "@/lib/useViewportSize";

export function SideNav() {
  const [showNav, setShowNav] = useState<boolean>(false);

  const pathname = usePathname();
  const router = useRouter();
  const { viewportSize } = useViewportSize();

  useEffect(() => {
    if (pathname === "/") {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  }, [pathname]);

  return (
    <Nav>
      {viewportSize.width < 1024 && pathname !== "/" && (
        <StyledButton onClick={() => setShowNav(!showNav)}>
          {showNav ? "Close" : "Menu"}
        </StyledButton>
      )}
      <List $showNav={showNav}>
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
  width: 15vw;
  @media only screen and (max-width: 1024px) {
    width: 12vw;
  }
`;

const List = styled.ul<{ $showNav: boolean }>`
  list-style: none;
  width: fit-content;
  margin: 0 auto;
  @media only screen and (max-width: 1024px) {
    position: absolute;
    top: 0;
    width: ${({ $showNav }) => ($showNav ? "88vw" : "0")};
    height: 100vh;
    overflow: hidden;
    margin-left: 12vw;
    padding-top: 5vh;
    background: white;
    z-index: 2;
  }
`;

const StyledButton = styled.button`
  background: none;
  border: none;
  color: black;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
`;
