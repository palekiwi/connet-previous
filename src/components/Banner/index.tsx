import * as React from "react";
import styled from "styled-components";
import { weight, color, space } from "src/theme";
import { canon, doublePica } from "src/theme/typography";
import { BannerWrapper } from "./BannerWrapper";

const Inner = styled.div`
  padding: ${space(4)};
  text-align: center;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
`;

const Title = styled.h1`
  ${canon}
  margin: 0;
  text-transform: uppercase;
  font-weight: ${weight("bold")};
  color: ${color("primary.main")};
`;

const Subtitle = styled.h4`
  ${doublePica}
  color: ${color("text.main")};
  margin: 0;
  margin-top: ${space(3)}
`;

export interface BannerProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  image: any;
}

const Banner: React.SFC<BannerProps> = props => {
  return (
    <BannerWrapper image={props.image}>
      <Inner>
        <Title>{props.title}</Title>
        {props.subtitle && <Subtitle>{props.subtitle}</Subtitle>}
      </Inner>
    </BannerWrapper>
  );
};

export { Banner };
