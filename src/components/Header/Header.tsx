import * as React from "react";
import { DrawerMenu } from "src/components/DrawerMenu";
import styled, { css } from "styled-components";
import { greatPrimer } from "src/theme/typography";
import { weight, color, space, shadow } from "src/theme";
import { desktop } from "src/theme/media";
import { Link } from "src/components/Link";
import { Container } from "src/components/Container";
import { Logo } from "src/components/Logo";
import Headroom from "react-headroom";
import { TopBar } from "./TopBar";

const Wrapper = styled.div`
  background: ${color("primary.main")};
  box-shadow: ${shadow(1)};
  z-index: 5;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${color("white.light")};
`;

const Nav = styled.nav`
  display: flex;
`;

const NavItems = styled.div`
  display: none;
  ${desktop(css`
    height: 100%;
    display: flex;
    justify-content: center;
  `)}
`;

const NavItem = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 ${space(3)};
  border-bottom: 2px solid transparent;
  transition: 400ms ease-out;
  &:hover {
    background: ${color("divider.light")};
  }
  &.active {
    border-color: ${color("white.light")};
  }
`;

export const Brand = styled(Link)`
  display: flex;
  padding: ${space(3)};
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

const Trigger = styled.div`
  display: block;
  ${desktop(css`
    display: none;
  `)}
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
                  <NavItem to={x.to} key={x.to}>
                    {x.label}
                  </NavItem>
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
