import styled from "styled-components";
import { usePathname } from "next/navigation";
import NavElement from "../NavElement";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  onChange: () => void;
};

export function NavMain({ onChange: handleChange }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  function handleClick(path: string) {
    handleChange();
    router.push(path);
  }

  return (
    <Nav
      key={"mainNav"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      exit={{ opacity: 0 }}
    >
      <List>
        <NavElement
          handleClick={() => handleClick("/work")}
          turningAngle={10}
          isActive={pathname === "/work"}
        >
          <p>Work</p>
        </NavElement>

        <NavElement
          handleClick={() => handleClick("/texts")}
          turningAngle={10}
          isActive={pathname === "/texts"}
        >
          <p>Texts</p>
        </NavElement>

        <NavElement
          handleClick={() => handleClick("/cv")}
          turningAngle={10}
          isActive={pathname === "/cv"}
        >
          <p>CV</p>
        </NavElement>

        <NavElement
          handleClick={() => handleClick("/contact")}
          turningAngle={10}
          isActive={pathname === "/contact"}
        >
          <p>Contact</p>
        </NavElement>
      </List>
    </Nav>
  );
}

const Nav = styled(motion.nav)`
  z-index: 2;
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: white;
`;

const List = styled.ul`
  position: relative;
  list-style: none;
  width: fit-content;
  margin: 0 auto;
  top: 50%;
  transform: translateY(-50%);
`;
