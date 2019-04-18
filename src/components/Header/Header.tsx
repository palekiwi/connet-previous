import * as React from "react";
import { DrawerMenu } from "src/components/DrawerMenu";
import styled, { css } from "styled-components";
import { greatPrimer } from "src/theme/typography";
import { weight, color, space, shadow } from "src/theme";
import { desktop } from "src/theme/media";
import { Link } from "src/components/Link";
import { Button } from "src/components/Button";
import { Container } from "src/components/Container";
import { Logo } from "src/components/Logo";
import Headroom from "react-headroom";
import { TopBar } from "./TopBar";

const Wrapper = styled.div`
  background: ${color("primary.main")};
  padding: ${space(3)} 0;
  box-shadow: ${shadow(1)};
  z-index: 5;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: ${color("white.light")};
`;

const Trigger = styled.div`
  display: block;
  ${desktop(css`
    display: none;
  `)}
`;

const Nav = styled.nav`
  display: flex;
`;

const NavItems = styled.div`
  display: none;
  ${desktop(css`
    display: flex;
  `)}
`;

export const Brand = styled(Link)`
  display: flex;
  align-items: center;
  transition: all 400ms ease-out;
  cursor: pointer;
`;

export const BrandName = styled.div`
  display: none;
  ${desktop(css`
    ${greatPrimer};
    display: block;
    margin-left: ${space(3)};
    margin-bottom: 0;
    font-weight: ${weight("bold")};
  `)}
`;

export const LogoWrapper = styled.div``;

export const LogoImg = styled.img`
  width: auto;
  height: ${props => props.theme.dimensions[1]};
`;

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
  <nav>
    {topbar && <TopBar phone={phone} height={topbarHeight} />}
    <Headroom
      pinStart={topbar ? topbarHeight : 0}
      style={{ zIndex: 99, height: "auto" }}
    >
      <Wrapper>
        <Container>
          <Inner>
            <Brand to="/">
              <Logo variant="light" width={60} opacity={1} />
              <BrandName>{title}</BrandName>
            </Brand>
            <Nav>
              <NavItems>
                {navItems.map(x => (
                  <Button to={x.to} key={x.to}>
                    {x.label}
                  </Button>
                ))}
              </NavItems>
              <Trigger>
                <DrawerMenu title={title} navItems={navItems} logo={logo} />
              </Trigger>
            </Nav>
          </Inner>
        </Container>
      </Wrapper>
    </Headroom>
  </nav>
);
