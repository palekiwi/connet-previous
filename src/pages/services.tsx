import * as React from "react";
import { graphql } from "gatsby";
import { Image } from "../components/Image";
import { color, space } from "src/theme";
import { trafalgar, longPrimer } from "src/theme/typography";
import { tablet, desktop } from "src/theme/media";
import styled, { css } from "styled-components";
import { Button } from "src/components/Button";
import { Section } from "../components/Section";
import { Banner } from "../components/Banner";

const Img = styled(Image)`
  max-height: 300px;
  ${desktop(css`
    max-height: 100%;
  `)}
`;

interface ServiceNode {
  node: {
    fields: {
      lang: string;
      slug: string;
    };
    frontmatter: {
      title: string;
      subtitle: string;
      image: any;
    };
  };
}

interface ServicesProps {
  data: {
    content: {
      frontmatter: {
        title: string;
        subtitle?: string;
        image: any;
      };
      html: string;
    };
    services: {
      edges: ServiceNode[];
    };
  };
}

const Service = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  ${tablet(css`
    flex-direction: row;
  `)}
`;

const ImgWrapper = styled.div`
  width: 100%;
`;

const ContentPane = styled.div`
  background: linear-gradient(30deg, hsl(0, 0%, 100%), hsl(0, 0%, 93%));
  width: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  padding: ${space(4)} ${space(3)};
  flex-direction: column;
  text-align: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  ${tablet(css`
    padding-left: ${space(5)};
    padding-right: ${space(5)};
    text-align: left;
  `)}
  ${desktop(css`
    padding-left: ${space(6)};
    padding-right: ${space(6)};
    text-align: left;
  `)}
`;

const Title = styled.h2`
  ${trafalgar};
  margin-bottom: ${space(2)};
`;

const Subtitle = styled.div`
  ${longPrimer};
  margin-bottom: ${space(2)};
  color: ${color("text.main")};
`;

const Actions = styled.div`
  margin-top: ${space(2)};
`;

const ServicesPage: React.SFC<ServicesProps> = ({
  data: { content, services },
}) => {
  return (
    <>
      <Banner
        title={content.frontmatter.title}
        image={content.frontmatter.image}
      />
      <Section>
        {services.edges.map(({ node }, i) => (
          <Service key={i}>
            <ImgWrapper>
              <Img style={{ width: "100%" }} fluid={node.frontmatter.image} />
            </ImgWrapper>
            <ContentPane>
              <ContentWrapper>
                <Title>{node.frontmatter.title}</Title>
                <Subtitle>{node.frontmatter.subtitle}</Subtitle>
                <Actions>
                  <Button to={node.fields.slug} variant="primary" contained>
                    Learn More
                  </Button>
                </Actions>
              </ContentWrapper>
            </ContentPane>
          </Service>
        ))}
      </Section>
    </>
  );
};

export default ServicesPage;

export const query = graphql`
  query($locale: String!) {
    content: markdownRemark(
      fields: { pageName: { eq: "services" }, lang: { eq: $locale } }
    ) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
    services: allMarkdownRemark(
      filter: {
        frontmatter: { lang: { eq: $locale } }
        fields: { type: { eq: "services" } }
      }
      sort: { fields: [frontmatter___order] }
    ) {
      edges {
        node {
          frontmatter {
            title
            subtitle
            image {
              childImageSharp {
                fluid(maxWidth: 960, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
