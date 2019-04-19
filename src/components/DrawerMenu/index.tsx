import * as React from "react";
import styled from "styled-components";
import { Button } from "src/components/Button";
import { Logo } from "src/components/Logo";
import { CloseButton } from "./CloseButton";
import { MenuButton } from "./MenuButton";
import { DrawerWrapper } from "src/components/DrawerWrapper";
import { weight, color, space } from "src/theme";
import { greatPrimer } from "src/theme/typography";
import { useKeyDown } from "src/components/DrawerWrapper/drawerHooks";

const DrawerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow-y: auto;
  color: ${color("text.dark")};
  background: ${color("white.light")};
  padding: ${space(3)};
`;

const LogoWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin: ${space(3)} 0;
`;

const Controls = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Title = styled.div`
  ${greatPrimer};
  color: ${color("primary.main")};
  font-weight: ${weight("bold")};
`;

interface DrawerMenuProps {
  logo?: any;
  title?: React.ReactNode;
  navItems: { to: string; label: React.ReactNode }[];
  show: boolean;
  open: any;
  close: any;
}

const DrawerMenu: React.SFC<DrawerMenuProps> = ({
  show,
  open,
  close,
  logo,
  title,
  navItems,
}) => {
  useKeyDown(show, close);
  return (
    <DrawerWrapper
      trigger={<MenuButton />}
      width="300px"
      show={show}
      open={open}
      close={close}
    >
      <DrawerContent>
        <Controls>
          <CloseButton onClick={close} />
        </Controls>
        <LogoWrapper>
          <Logo width={140} />
        </LogoWrapper>
        <Title>{title}</Title>
        {navItems.map(x => (
          <Button
            key={x.to}
            to={x.to}
            style={{ width: "100%" }}
            onClick={close}
          >
            {x.label}
          </Button>
        ))}
      </DrawerContent>
    </DrawerWrapper>
  );
};

export { DrawerMenu };
