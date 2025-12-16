import styled from "styled-components";
import { usePathname } from "next/navigation";
import NavElement from "../NavElement";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

type Props = {
  showNav: boolean;
  onChange: () => void;
};

export function NavMain({ showNav, onChange: handleChange }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  function handleClick(path: string) {
    if (path !== pathname) router.push(path);
    handleChange();
  }

  return (
    <AnimatePresence>
      {showNav && (
        <Nav
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.2 },
          }}
          exit={{ opacity: 0 }}
        >
          <List>
            <NavElement handleClick={() => handleClick("/")} tiltAngle={10}>
              <p>Exhibitions</p>
            </NavElement>

            <NavElement
              handleClick={() => handleClick("/texts")}
              tiltAngle={10}
            >
              <p>Texts</p>
            </NavElement>

            <NavElement
              handleClick={() => handleClick("/contact")}
              tiltAngle={10}
            >
              <p>Contact</p>
            </NavElement>

            <NavElement handleClick={() => handleClick("/info")} tiltAngle={10}>
              <p>Info</p>
            </NavElement>
          </List>
        </Nav>
      )}
    </AnimatePresence>
  );
}

const Nav = styled(motion.nav)`
  z-index: 2;
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100dvh;
  background: white;
`;

const List = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  list-style: none;
  width: fit-content;
  margin: 0 auto;
  top: 44%;
  transform: translateY(-50%);
`;
