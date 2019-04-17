import * as React from "react";
import styled from "styled-components";
import { space } from "src/theme";
import { Content } from "src/components/Content";
import { FadeIn } from "../Reveal";
import { Container } from "../Container";
import { Highlight } from "./Highlight";

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

const Wrapper = styled.div`
  padding: ${space(3)};
`;

const Tiles = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: ${space(3)};
`;
const Tile = styled.div`
  padding: ${space(3)};
  flex: 1 1 auto;
  display: flex;
  & > div {
    flex: 1 0 auto;
  }
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
          <Content
            w={[1, 1, 3 / 4, 2 / 3]}
            mx="auto"
            px={[3, 3, 0]}
            style={{ textAlign: "center" }}
            dangerouslySetInnerHTML={{ __html: markdown }}
          />
        </Container>
      )}
      {!!highlights && (
        <Container>
          <Tiles>
            {highlights.map((h, i) => (
              <Tile key={i}>
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
