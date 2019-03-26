import * as React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";
import { withIntl } from "../i18n";
import { Image } from "../components/Image";
import { styled, Flex, Text } from "primithemes";
import { Button } from "../components/Button";
import { Link } from "../components/Link";
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

const ServicesPage: React.SFC<ServicesProps> = ({
  data: { content, services },
}) => {
  return (
    <Layout>
      <Banner
        title={content.frontmatter.title}
        image={content.frontmatter.image}
      />
      <Section>
        <Container>
          {services.edges.map(({ node }, i) => (
            <Flex
              key={i}
              w={1}
              flexWrap="wrap"
              flexDirection={"row"}
              bg="linear-gradient(30deg, hsl(0,0%,100%), hsl(0,0%,93%))"
            >
              <Flex w={[1, 1, 1 / 2]}>
                <Img style={{ width: "100%" }} fluid={node.frontmatter.image} />
              </Flex>
              <Flex
                p={4}
                w={[1, 1, 1 / 2]}
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <Text
                  mb={2}
                  is="h2"
                  fontSize={[5, 5, 5, 6]}
                  color="text.dark"
                  fontWeight={5}
                >
                  {node.frontmatter.title}
                </Text>
                <Text
                  mb={3}
                  fontSize={3}
                  is="h5"
                  fontWeight={2}
                  color="text.main"
                >
                  {node.frontmatter.subtitle}
                </Text>
                <Link to={node.fields.slug}>
                  <Button mt={2} variant="primary" contained>
                    Learn More
                  </Button>
                </Link>
              </Flex>
            </Flex>
          ))}
        </Container>
      </Section>
    </Layout>
  );
};

export default withIntl(ServicesPage);

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
