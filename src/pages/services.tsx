import * as React from "react";
import { graphql } from "gatsby";
import { Image } from "../components/Image";
import { Trafalgar, LongPrimer } from "src/components/Text";
import styled from "styled-components";
import { Button } from "src/components/Button";
import { Section } from "../components/Section";
import { Banner } from "../components/Banner";
import { Container } from "../components/Container";

const Img = styled(Image)`
  ${props => props.theme.devices[0]} {
    max-height: 300px;
  }
  ${props => props.theme.devices[2]} {
    max-height: 100%;
  }
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
  flex-wrap: wrap;
  flex-direction: row;
  background: linear-gradient(30deg, hsl(0, 0%, 100%), hsl(0, 0%, 93%));
`;

const ImgWrapper = styled.div`
  width: 100%;
  ${props => props.theme.devices[2]} {
    width: 50%;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  padding: ${props => props.theme.sizes[4]} ${props => props.theme.sizes[3]};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  ${props => props.theme.devices[2]} {
    width: 50%;
  }
`;

const Title = styled(Trafalgar)`
  font-weight: 700;
  margin-bottom: ${props => props.theme.sizes[2]};
`;
const Subtitle = styled(LongPrimer)`
  font-size: ${props => props.theme.fontSizes[3]};
  margin-bottom: ${props => props.theme.sizes[2]};
  color: ${props => props.theme.colors.text.main};
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
        <Container>
          {services.edges.map(({ node }, i) => (
            <Service key={i}>
              <ImgWrapper>
                <Img style={{ width: "100%" }} fluid={node.frontmatter.image} />
              </ImgWrapper>
              <ContentWrapper>
                <Title>{node.frontmatter.title}</Title>
                <Subtitle>{node.frontmatter.subtitle}</Subtitle>
                <Button to={node.fields.slug} variant="primary" contained>
                  Learn More
                </Button>
              </ContentWrapper>
            </Service>
          ))}
        </Container>
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
