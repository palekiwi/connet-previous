import * as React from "react";
import { Container } from "../Container";
import { Line, Wrapper, Marker, ProjectCard } from "./timelineStyles";
import styled from "styled-components";
import {
  Trafalgar,
  DoublePica,
  Paragon,
  GreatPrimer,
  Brevier,
} from "src/components/Text";

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
  background: ${props => props.theme.colors.grey[200]};
  width: 100%;
`;
const Header = styled.div`
  text-align: center;
  padding: ${props => props.theme.sizes[3]};
`;

const Title = styled(Trafalgar)`
  text-color: ${props => props.theme.colors.text.main};
  font-weight: 700;
  margin-bottom: ${props => props.theme.sizes[2]};
`;
const Subtitle = styled(DoublePica)``;

const Items = styled.div`
  margin: ${props => props.theme.sizes[3]};
`;

const Year = styled(Paragon)`
  margin-bottom: ${props => props.theme.sizes[1]};
  font-size: ${props => props.theme.fontSizes[4]};
  font-weight: ${props => props.theme.fontWeights[2]};
  color: ${props => props.theme.colors.primary.main};
`;

const PTitle = styled(GreatPrimer)`
  margin-bottom: ${props => props.theme.sizes[2]};
  color: ${props => props.theme.colors.text.main};
`;

const Customer = styled(GreatPrimer)`
  margin-bottom: ${props => props.theme.sizes[2]};
`;

const Location = styled(Brevier)`
  margin-bottom: ${props => props.theme.sizes[2]};
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
          <Line key={i} bg="grey.200" p={3} w={1}>
            <Wrapper i={i}>
              <Marker bg="grey.300" b={4} borderColor="grey.200" />
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
