import * as React from "react";
import { weight, space, color } from "src/theme";
import { foolscap, doublePica } from "src/theme/typography";
import styled from "styled-components";

const Page = styled.div`
  display: flex;
  flex-grow: 1;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  ${foolscap};
  margin: ${space(3)};
  color: ${color("secondary.main")};
  font-weight: ${weight("bold")};
`;

const Subtitle = styled.p`
  ${doublePica};
  color: ${color("text.main")};
`;

const NotFound: React.SFC<{}> = () => {
  return (
    <Page>
      <Title>404</Title>
      <Subtitle>Not Found</Subtitle>
    </Page>
  );
};

export default NotFound;
