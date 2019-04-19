import * as React from "react";
import { DrawerMenu } from "src/components/DrawerMenu";
import styled, { css } from "styled-components";
import { useToggle } from "src/hooks";
import { greatPrimer } from "src/theme/typography";
import { weight, color, space, shadow } from "src/theme";
import { desktop, tablet } from "src/theme/media";
import { Link } from "src/components/Link";
import { Logo } from "src/components/Logo";
import { TopBar } from "./TopBar";

const Wrapper = styled.div`
  background: ${color("primary.main")};
  box-shadow: ${shadow(1)};
  z-index: 5;
  position: fixed;
  width: 100%;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${color("white.light")};
  padding: 0 ${space(3)};
  ${desktop(css`
    padding: 0 ${space(4)};
  `)}
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
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
  padding: ${space(3)} 0;
  align-items: center;
  transition: all 400ms ease-out;
  cursor: pointer;
`;

export const BrandName = styled.div`
  display: none;
  ${tablet(css`
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
}) => {
  const { show, open, close } = useToggle();
  return (
    <nav>
      {topbar && <TopBar phone={phone} height={topbarHeight} />}
      <Wrapper>
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
              <DrawerMenu
                show={show}
                open={open}
                close={close}
                title={title}
                navItems={navItems}
                logo={logo}
              />
            </Trigger>
          </Nav>
        </Inner>
      </Wrapper>
    </nav>
  );
};
