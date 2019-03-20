import * as React from "react";
import { MakeMenu } from "../utils/MakeMenu";
import { Drawer } from "../Drawer";
import { MenuButton } from "./MenuButton";
import { CloseButton } from "./CloseButton";
import { styled, Flex, Text } from "primithemes";
import { Button } from "../Button";
import { Image } from "../Image";
import { Link } from "../../i18n";

const Logo = styled(Image)`
  margin: 0 auto;
`;

const DrawerContent = styled(Flex)`
  height: 100vh;
  position: relative;
  overflow-y: auto;
`;

interface DrawerMenuProps {
  logo?: any;
  title?: React.ReactNode;
  navItems: { to: string; label: React.ReactNode }[];
}

const DrawerMenu: React.SFC<DrawerMenuProps> = ({ logo, title, navItems }) => {
  return (
    <MakeMenu>
      {injected => (
        <>
          <MenuButton onClick={injected.toggleMenu} />

          <Drawer
            open={injected.open}
            anchor={"right"}
            handleClose={injected.handleClose}
            toggleMenu={injected.toggleMenu}
            width={300}
          >
            <DrawerContent flexDirection="column" bg="background.light" p={3}>
              <Flex justifyContent="flex-end">
                <CloseButton onClick={injected.handleClose} />
              </Flex>
              {logo && (
                <Flex justifyContent="center" my={3}>
                  <Link to="/" onClick={injected.handleClose}>
                    <Logo critical fixed={logo} />
                  </Link>
                </Flex>
              )}
              {title && (
                <Text
                  mt={3}
                  color="primary.main"
                  is="h3"
                  fontSize={3}
                  textAlign="center"
                >
                  {title}
                </Text>
              )}
              <Flex justifyContent="center" flexDirection="column" p={3}>
                {navItems.map(x => (
                  <Link key={x.to} to={x.to}>
                    <Button m={1} onClick={injected.handleClose} w={1}>
                      {x.label}
                    </Button>
                  </Link>
                ))}
              </Flex>
            </DrawerContent>
          </Drawer>
        </>
      )}
    </MakeMenu>
  );
};

export { DrawerMenu };
