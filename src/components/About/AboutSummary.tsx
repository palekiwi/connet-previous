import * as React from "react";
import { Box, Flex } from "primithemes";
import { Text, Heading } from "../Text";
import { Content } from "src/components/Content";
import { FadeIn } from "../Reveal";
import { Container } from "../Container";

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

const AboutSummary: React.SFC<AboutSummaryProps> = ({
  title,
  subtitle,
  body,
  highlights,
  markdown,
}) => {
  return (
    <Box p={3}>
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
          <Flex flexWrap="wrap" w={1} p={3}>
            {highlights.map((h, i) => (
              <Flex
                p={3}
                w={[1, 1 / 2, 1 / 4]}
                key={i}
                alignItems="center"
                flexDirection="column"
              >
                <FadeIn once style={{ width: "100%" }}>
                  <Box w={1}>
                    <Heading
                      color="primary.main"
                      mb={2}
                      textAlign="center"
                      is="h5"
                      fontSize={[5, 6]}
                      fontWeight={2}
                    >
                      {h.title}
                    </Heading>
                    <Text
                      textTransform="uppercase"
                      color="text.main"
                      fontSize={1}
                      is="p"
                      textAlign="center"
                    >
                      {h.subtitle}
                    </Text>
                  </Box>
                </FadeIn>
              </Flex>
            ))}
          </Flex>
        </Container>
      )}
    </Box>
  );
};

export { AboutSummary, AboutSummaryProps, Highlight };
