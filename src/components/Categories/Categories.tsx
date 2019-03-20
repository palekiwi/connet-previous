import * as React from "react";
import { Image } from "../Image";
import { Button } from "../Button";
import { Box, Card, Flex, Text } from "primithemes";
import { Container } from "../Container";
import { Link } from "src/components/Link";
import { Content } from "src/components/Content";
import { FadeIn } from "../Reveal";

interface CategoryLink {
  label: React.ReactNode;
  text?: React.ReactNode;
  buttonText: React.ReactNode;
  image: any;
  to: string;
}

type Props = {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  markdown?: any;
  body?: string | React.ReactNode[];
  categoryLinks: CategoryLink[];
  image?: any;
  gradient?: string;
};

const Categories: React.SFC<Props> = ({
  image,
  gradient,
  title,
  subtitle,
  markdown,
  body,
  categoryLinks,
}) => (
  <Box my={3}>
    {markdown && (
      <Container>
        <Content
          my={4}
          w={[1, 1, 3 / 4, 2 / 3]}
          mx="auto"
          px={[3, 3, 0]}
          dangerouslySetInnerHTML={{ __html: markdown }}
        />
      </Container>
    )}
    <Container>
      <Flex p={2} flexWrap="wrap">
        {categoryLinks.map((x, i) => (
          <Flex key={i} w={[1, 1 / 2, 1 / 2, 1 / 4]} p={2}>
            <FadeIn once style={{ width: "100%" }}>
              <Card
                radius={2}
                w={1}
                key={x.to}
                shadow={1}
                flexDirection="column"
                bg="background.light"
                style={{ height: "100%" }}
              >
                <Flex flexDirection="column" style={{ height: "100%" }}>
                  <Image style={{ height: 140 }} fluid={x.image} />
                  <Box m={3} style={{ flexGrow: 1 }}>
                    <Text
                      is="h3"
                      color="primary.main"
                      fontWeight={4}
                      fontSize={3}
                    >
                      {x.label}
                    </Text>
                    {x.text && (
                      <Text mt={2} is="p">
                        {x.text}
                      </Text>
                    )}
                  </Box>
                  <Flex m={3}>
                    <Link to={x.to}>
                      <Button outlined>{x.buttonText}</Button>
                    </Link>
                  </Flex>
                </Flex>
              </Card>
            </FadeIn>
          </Flex>
        ))}
      </Flex>
    </Container>
  </Box>
);

export { Categories };
