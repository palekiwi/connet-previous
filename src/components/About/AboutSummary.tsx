import * as React from "react";
import styled, { css } from "styled-components";
import { space } from "src/theme";
import { tablet, desktop } from "src/theme/media";
import { Content } from "src/components/Content";
import { FadeIn } from "../Reveal";
import { Container } from "../Container";
import { Highlight } from "./Highlight";
import { Tiles, Tile } from "src/components/Tiles";

interface Highlight {
  title: React.ReactNode;
  subtitle: React.ReactNode;
}

interface AboutSummaryProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  body?: string | React.ReactNode[];
  markdown?: any;
  highlights: Highlight[];
}

const Wrapper = styled.div``;

const ContentWrapper = styled.div`
  padding: ${space(3)};
  text-align: center;
  ${tablet(css`
    padding-left: 10%;
    padding-right: 10%;
  `)}
  ${desktop(css`
    padding-left: 20%;
    padding-right: 20%;
  `)}
`;

const AboutSummary: React.SFC<AboutSummaryProps> = ({
  title,
  subtitle,
  body,
  highlights,
  markdown,
}) => {
  return (
    <Wrapper>
      {markdown && (
        <Container>
          <ContentWrapper>
            <Content dangerouslySetInnerHTML={{ __html: markdown }} />
          </ContentWrapper>
        </Container>
      )}
      {!!highlights && (
        <Container>
          <Tiles gutter={3}>
            {highlights.map((h, i) => (
              <Tile w={[1, 1 / 2, 1 / 4]} key={i}>
                <FadeIn once style={{ width: "100%" }}>
                  <Highlight title={h.title} subtitle={h.subtitle} />
                </FadeIn>
              </Tile>
            ))}
          </Tiles>
        </Container>
      )}
    </Wrapper>
  );
};

export { AboutSummary, AboutSummaryProps, Highlight };
