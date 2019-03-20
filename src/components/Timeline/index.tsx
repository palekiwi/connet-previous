import * as React from "react";
import { Box, Flex, Text } from "primithemes";
import { Container } from "../Container";
import { Line, Wrapper, Marker, ProjectCard } from "./timelineStyles";

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

const Timeline: React.SFC<Props> = ({ title, subtitle, items }) => (
  <Box bg="grey.200" w={1}>
    <Flex flexDirection="column">
      <Box mt={4} mb={3}>
        <Text m={2} color="text.main" textAlign="center" is="h2">
          {title}
        </Text>
        <Text m={2} textAlign="center" is="p" color="text.primary">
          {subtitle}
        </Text>
      </Box>
      <Container>
        <Box m={3}>
          {items.map(({ node }, i) => (
            <Flex key={i}>
              <Line bg="grey.200" p={3} w={1}>
                <Wrapper i={i}>
                  <Marker bg="grey.300" b={4} borderColor="grey.200" />
                  <ProjectCard
                    radius={2}
                    w={1}
                    i={i}
                    py={3}
                    px={4}
                    bg="background.light"
                  >
                    <Text
                      mb={1}
                      fontSize={4}
                      fontWeight={2}
                      color="primary.main"
                    >
                      {node.frontmatter.date}
                    </Text>
                    <Text mb={2} fontSize={[2, 3, 3]} color="text.main">
                      {node.frontmatter.title}
                    </Text>
                    <Text color="secondary.main">
                      {node.frontmatter.customer}
                    </Text>
                    <Text color="text.light">{node.frontmatter.location}</Text>
                  </ProjectCard>
                </Wrapper>
              </Line>
            </Flex>
          ))}
        </Box>
      </Container>
    </Flex>
  </Box>
);

export { Timeline, TimelineItem };
