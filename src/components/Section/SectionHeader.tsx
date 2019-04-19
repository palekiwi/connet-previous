import * as React from "react";
import styled from "styled-components";
import { color, space, weight } from "src/theme";

const Wrapper = styled.div`
  margin: ${space(3)};
  margin-top: ${space(4)};
  flex-direction: column;
  max-width: 600;
  text-align: center;
`;

const Title = styled.h2`
  font-weight: ${weight("thin")};
  color: ${color("text.dark")};
`;
const Subtitle = styled.div`
  margin-top: ${space(4)};
  color: ${color("primary.main")};
`;

interface Props {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  body?: React.ReactNode[];
}

export const SectionHeader: React.SFC<Props> = ({
  children,
  title,
  subtitle,
}) => (
  <Wrapper>
    <Title>{title}</Title>
    {!!subtitle && <Subtitle>{subtitle}</Subtitle>}
  </Wrapper>
);
