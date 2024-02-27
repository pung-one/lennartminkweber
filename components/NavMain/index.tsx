import styled from "styled-components";
import { usePathname } from "next/navigation";
import NavElement from "../NavElement";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  showNav: boolean;
  onChange: () => void;
};

export function NavMain({ showNav, onChange: handleChange }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  function handleClick(path: string) {
    handleChange();
    router.push(path);
  }

  return (
    <AnimatePresence>
      {showNav && (
        <Nav
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.3 } }}
          exit={{ opacity: 0 }}
        >
          <List>
            <NavElement handleClick={() => handleClick("/")} turningAngle={10}>
              <p>Work</p>
            </NavElement>

            <NavElement
              handleClick={() => handleClick("/texts")}
              turningAngle={10}
            >
              <p>Texts</p>
            </NavElement>

            <NavElement
              handleClick={() => handleClick("/cv")}
              turningAngle={10}
            >
              <p>CV</p>
            </NavElement>

            <NavElement
              handleClick={() => handleClick("/contact")}
              turningAngle={10}
            >
              <p>Contact</p>
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
  list-style: none;
  width: fit-content;
  margin: 0 auto;
  top: 44%;
  transform: translateY(-50%);
`;
