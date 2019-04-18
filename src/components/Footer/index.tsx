import * as React from "react";
import styled, { css } from "styled-components";
import { Container } from "src/components/Container";
import { space, color, weight } from "src/theme";
import { desktop } from "src/theme/media";
import { brevier, pica, greatPrimer } from "src/theme/typography";
import { Logo } from "src/components/Logo";
import { Link } from "src/components/Link";

const Main = styled.div`
  padding: ${space(3)} 0;
  position: relative;
  overflow: hidden;
  background: ${color("grey.800")};
  color: ${color("white.light")};
  border-top: 4px solid ${color("primary.main")};
`;

const MainInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: ${space(4)} 0;
  color: ${color("grey.400")};
  ${desktop(css`
    flex-direction: row;
  `)};
`;

const Contact = styled.div`
  margin-top: ${space(3)};
  text-align: center;
  ${desktop(css`
    margin-top: 0;
    margin-left: ${space(4)};
    text-align: left;
  `)}
`;

const Title = styled.div`
  ${greatPrimer};
  font-weight: ${weight("bold")};
  margin-bottom: ${space(2)};
  color: ${color("grey.100")};
`;
const ContactInfo = styled.div`
  color: inherit;
  ${pica};
  margin-bottom: ${space(1)};
  &:last-child {
    margin-bottom: 0;
  }
`;

const Copyright = styled.p`
  ${brevier};
  margin-bottom: 0;
  padding: ${space(2)};
  text-align: center;
  background: ${color("black.main")};
  color: ${color("grey.600")};
  & span {
    color: ${color("grey.300")};
  }
`;

interface Props {
  logo?: any;
  title: React.ReactNode;
  phone?: React.ReactNode;
  email?: React.ReactNode;
  address?: React.ReactNode[];
}

const Footer: React.SFC<Props> = ({ logo, title, phone, email, address }) => (
  <footer>
    <Main>
      <Container>
        <MainInner>
          <Link to="/">
            <Logo opacity={0.9} variant="light" width={130} />
          </Link>
          <Contact>
            <Title>{title}</Title>
            <ContactInfo>{phone}</ContactInfo>
            <ContactInfo>{email}</ContactInfo>
          </Contact>
        </MainInner>
      </Container>
    </Main>
    <Copyright>
      © 2018 Copyright: <span>{title}</span>
    </Copyright>
  </footer>
);

export { Footer };
