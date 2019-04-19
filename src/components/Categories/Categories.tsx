import * as React from "react";
import { Image } from "src/components/Image";
import { Button } from "src/components/Button";
import styled from "styled-components";
import { weight, space, color, radius, shadow } from "src/theme";
import { Container } from "src/components/Container";
import { Tiles, Tile } from "src/components/Tiles";
import { greatPrimer, longPrimer } from "src/theme/typography";

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

const Wrapper = styled.div`
  padding: ${space(4)} 0;
`;

const Card = styled.div`
  display: flex;
  overflow: hidden;
  border-radius: ${radius(2)};
  width: 100%;
  height: 100%;
  box-shadow: ${shadow(1)};
  flex-direction: column;
  background: ${color("background.light")};
`;

const CardContent = styled.div`
  flex-grow: 1;
  padding: ${space(3)};
`;

const Title = styled.h3`
  ${greatPrimer};
  color: ${color("primary.main")};
  font-weight: ${weight("bold")};
  margin-bottom: ${space(1)};
`;

const Subtitle = styled.p`
  ${longPrimer};
  margin-bottom: 0;
`;

const Actions = styled.div`
  padding: ${space(3)};
`;

const Categories: React.SFC<Props> = ({
  image,
  gradient,
  title,
  subtitle,
  markdown,
  body,
  categoryLinks,
}) => (
  <Wrapper>
    {markdown && (
      <Container>
        <Content
          dangerouslySetInnerHTML={{ __html: markdown }}
          style={{ textAlign: "center" }}
        />
      </Container>
    )}
    <Container>
      <Tiles gutter={3}>
        {categoryLinks.map((x, i) => (
          <Tile key={i} w={[1, 1 / 2, 1 / 4]}>
            <FadeIn once style={{ width: "100%", height: "100%" }}>
              <Card key={x.to}>
                <Image style={{ height: 140 }} fluid={x.image} />
                <CardContent>
                  <Title>{x.label}</Title>
                  <Subtitle>{x.text}</Subtitle>
                </CardContent>
                <Actions>
                  <Button to={x.to} outlined>
                    {x.buttonText}
                  </Button>
                </Actions>
              </Card>
            </FadeIn>
          </Tile>
        ))}
      </Tiles>
    </Container>
  </Wrapper>
);

export { Categories };
