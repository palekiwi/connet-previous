import * as React from "react";
import { Container } from "../Container";
import { Line, Wrapper, Marker, ProjectCard } from "./timelineStyles";
import styled from "styled-components";
import { weight, color, space } from "src/theme";
import {
  paragon,
  trafalgar,
  doublePica,
  greatPrimer,
  pica,
  longPrimer,
} from "src/theme/typography";

interface TimelineItem {
  node: {
    frontmatter: {
      date: React.ReactNode;
      title: React.ReactNode;
      customer: React.ReactNode;
      location: React.ReactNode;
    };
  };
}

interface Props {
  title: string;
  subtitle: string;
  items: TimelineItem[];
}

const Section = styled.section`
  background: ${color("grey.200")};
  width: 100%;
  padding: ${space(4)} ${space(3)};
`;
const Header = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  ${trafalgar};
  color: ${color("text.main")};
  font-weight: ${weight("bold")};
  margin-bottom: 0;
`;
const Subtitle = styled.h5`
  ${doublePica};
  margin-bottom: 0;
`;

const Items = styled.div`
  margin: ${space(3)};
`;

const Year = styled.h3`
  ${paragon};
  color: ${color("primary.main")};
  margin-bottom: ${space(2)};
  font-weight: ${weight("thin")};
`;

const PTitle = styled.h5`
  ${greatPrimer};
  color: ${color("text.dark")};
  margin-bottom: ${space(2)};
`;

const Customer = styled.div`
  ${pica};
  color: ${color("secondary.main")};
  margin-bottom: ${space(0)};
`;

const Location = styled.small`
  ${longPrimer};
  color: ${color("text.main")};
`;

const Timeline: React.SFC<Props> = ({ title, subtitle, items }) => (
  <Section>
    <Header>
      <Title as="h2">{title}</Title>
      <Subtitle as="h5">{subtitle}</Subtitle>
    </Header>
    <Container>
      <Items>
        {items.map(({ node }, i) => (
          <Line key={i}>
            <Wrapper i={i}>
              <Marker />
              <ProjectCard i={i}>
                <Year as="h3">{node.frontmatter.date}</Year>
                <PTitle>{node.frontmatter.title}</PTitle>
                <Customer color="secondary.main">
                  {node.frontmatter.customer}
                </Customer>
                <Location color="text.light">
                  {node.frontmatter.location}
                </Location>
              </ProjectCard>
            </Wrapper>
          </Line>
        ))}
      </Items>
    </Container>
  </Section>
);

export { Timeline, TimelineItem };
