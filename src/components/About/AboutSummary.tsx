import * as React from "react";
import styled from "styled-components";
import { space, color } from "src/theme";
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

const Wrapper = styled.section`
  background: ${color("background.light")};
  padding: ${space(5)} ${space(3)};
`;

const ContentWrapper = styled.div`
  text-align: center;
  width: 100%;
  margin-bottom: ${space(3)};
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
      <Container>
        <ContentWrapper>
          <Content dangerouslySetInnerHTML={{ __html: markdown }} />
        </ContentWrapper>
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
    </Wrapper>
  );
};

export { AboutSummary, Highlight };
