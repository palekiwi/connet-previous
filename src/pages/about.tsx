import * as React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";
import { withIntl } from "../i18n";
import { Banner } from "../components/Banner";
import { Section } from "../components/Section";
import { Timeline } from "../components/Timeline";
import { Box, Flex } from "primithemes";
import { Button } from "../components/Button";
import { Link } from "../components/Link";
import { Container } from "../components/Container";
import { Content } from "src/components/Content";

interface ServiceNode {
  node: {
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
    };
  };
}

interface ReferenceNode {
  node: {
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
      customer: string;
      date: string;
      location: string;
    };
  };
}
interface AboutContent {
  frontmatter: {
    title: string;
    image: any;
    referencesSection: {
      title: string;
      subtitle: string;
    };
  };
  html: string;
}

interface AboutTemplateProps {
  data: {
    content: AboutContent;
    services: {
      edges: ServiceNode[];
    };
    references: {
      edges: ReferenceNode[];
    };
  };
}

const AboutTemplate: React.SFC<AboutTemplateProps> = ({ data }) => {
  const { content, services, references } = data;
  return (
    <Layout>
      <Banner
        image={content.frontmatter.image}
        title={content.frontmatter.title}
      />
      <Section>
        <Box bg="background.light" pb={0} py={3} w={1}>
          <Container>
            <Content
              my={4}
              w={[1, 1, 3 / 4, 2 / 3]}
              mx="auto"
              px={[3, 3, 0]}
              dangerouslySetInnerHTML={{ __html: content.html }}
              style={{ textAlign: "center" }}
            />
          </Container>
          <Flex my={3} p={3} justifyContent="center" flexWrap="wrap">
            {services.edges.map(({ node }, i) => (
              <Flex key={i} p={1}>
                <Link to={node.fields.slug}>
                  <Button contained variant="primary">
                    {node.frontmatter.title}
                  </Button>
                </Link>
              </Flex>
            ))}
          </Flex>
          <Box my={3}>
            <Timeline
              title={content.frontmatter.referencesSection.title}
              subtitle={content.frontmatter.referencesSection.subtitle}
              items={references.edges}
            />
          </Box>
        </Box>
      </Section>
    </Layout>
  );
};

export default withIntl(AboutTemplate);

export const query = graphql`
  query($locale: String!) {
    content: markdownRemark(
      fields: { pageName: { eq: "about" }, lang: { eq: $locale } }
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
        referencesSection {
          title
          subtitle
        }
      }
      html
    }
    services: allMarkdownRemark(
      filter: {
        frontmatter: { lang: { eq: $locale } }
        fields: { type: { eq: "services" } }
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
    references: allMarkdownRemark(
      filter: {
        frontmatter: { lang: { eq: $locale } }
        fields: { type: { eq: "references" } }
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            customer
            location
          }
        }
      }
    }
  }
`;
