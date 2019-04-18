import * as React from "react";
import { styled, Flex, Text } from "primithemes";
import { Button } from "../Button";
import { Image } from "../Image";
import { Link } from "src/components/Link";
import { Logo } from "src/components/Logo";
import { CloseButton } from "./CloseButton";
import { MenuButton } from "./MenuButton";
import { useDrawer, DrawerWrapper } from "src/components/DrawerWrapper";
import { color } from "src/theme";

const DrawerContent = styled(Flex)`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow-y: auto;
  color: ${color("text.dark")};
`;

const LogoImg = styled(Image)`
  margin: 0 auto;
`;

interface DrawerMenuProps {
  logo?: any;
  title?: React.ReactNode;
  navItems: { to: string; label: React.ReactNode }[];
}

const DrawerMenu: React.SFC<DrawerMenuProps> = ({ logo, title, navItems }) => {
  const { show, open, close } = useDrawer();

  return (
    <DrawerWrapper
      trigger={<MenuButton />}
      width="300px"
      show={show}
      open={open}
      close={close}
    >
      <DrawerContent flexDirection="column" bg="white.light" p={3}>
        <Flex justifyContent="flex-end">
          <CloseButton onClick={close} />
        </Flex>
        {logo ? (
          <Flex justifyContent="center" my={3}>
            <Link to="/" onClick={close}>
              <LogoImg critical fixed={logo} />
            </Link>
          </Flex>
        ) : (
          <Flex justifyContent="center">
            <Logo width={140} />
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
              <Button m={1} onClick={close} w={1}>
                {x.label}
              </Button>
            </Link>
          ))}
        </Flex>
      </DrawerContent>
    </DrawerWrapper>
  );
};

export { DrawerMenu };
