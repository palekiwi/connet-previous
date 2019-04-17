import * as React from "react";
import styled from "styled-components";
import { trafalgar, pica } from "src/theme/typography";
import { space, color, weight } from "src/theme";

interface Props {
  title: React.ReactNode;
  subtitle: React.ReactNode;
}

const Wrapper = styled.div`
  text-align: "center";
  text-align: center;
`;

const Title = styled.h5`
  ${trafalgar}
  color: ${color("primary.main")};
  font-weight: ${weight("thin")};
  margin-bottom: ${space(2)}
`;
const Subtitle = styled.p`
  ${pica}
  text-transform: "uppercase";
  color: ${color("text.main")};
  margin-bottom: 0;
`;

const Highlight: React.SFC<Props> = ({ title, subtitle }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Wrapper>
  );
};

export { Highlight };
