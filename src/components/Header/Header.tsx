import * as React from "react";
import { DrawerMenu } from "src/components/DrawerMenu";
import { styled, Card, Box, Flex, Text } from "primithemes";
import { Link } from "src/components/Link";
import { Button } from "src/components/Button";
import { Container } from "src/components/Container";
import { Logo } from "src/components/Logo";
import Headroom from "react-headroom";
import { TopBar } from "./TopBar";

const Trigger = styled.div`
  display: block;
  ${props => props.theme.devices[2]} {
    display: none;
  }
`;

const Nav = styled(Flex)`
  display: none;
  ${props => props.theme.devices[2]} {
    display: flex;
  }
`;

export const Wrapper = styled(Card)`
  z-index: 5;
`;

export const Brand = styled(Flex)`
  transition: all 400ms ease-out;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;

export const LogoWrapper = styled(Flex)``;

export const LogoImg = styled.img`
  width: auto;
  height: ${props => props.theme.dimensions[1]};
`;

export const BrandName = styled(Text)``;

interface HeaderProps {
  logo?: any;
  title: React.ReactNode;
  navItems: { to: string; label: React.ReactNode }[];
  topbar?: boolean;
  phone: string;
}

const topbarHeight = 30;

export const Header: React.SFC<HeaderProps> = ({
  logo,
  title,
  navItems,
  topbar,
  phone,
}) => (
  <Box>
    {topbar && <TopBar phone={phone} height={topbarHeight} />}
    <Headroom
      pinStart={topbar ? topbarHeight : 0}
      style={{ zIndex: 99, height: "auto" }}
    >
      <Wrapper bg="white.light" p={3} shadow={1}>
        <Container>
          <Flex
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Link to="/">
              <Brand alignItems="center">
                {logo ? (
                  <LogoWrapper alignItems="center">
                    <LogoImg src={logo.childImageSharp.fixed.src} />
                  </LogoWrapper>
                ) : (
                  <Logo variant="dark" width={60} opacity={0.8} />
                )}
                <BrandName
                  display={["none", "none", "none", "block"]}
                  fontSize={3}
                  fontWeight={4}
                  ml={3}
                  color="text.dark"
                >
                  {title}
                </BrandName>
              </Brand>
            </Link>
            <Flex>
              <Nav>
                {navItems.map(x => (
                  <Button fontSize={2} ml={1} to={x.to} key={x.to}>
                    {x.label}
                  </Button>
                ))}
              </Nav>
              <Trigger>
                <DrawerMenu title={title} navItems={navItems} logo={logo} />
              </Trigger>
            </Flex>
          </Flex>
        </Container>
      </Wrapper>
    </Headroom>
  </Box>
);
