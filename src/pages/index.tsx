import * as React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";
import { withIntl } from "../i18n";
import { Banner } from "../components/Banner";
import { AboutSummary } from "../components/About";
import { Categories } from "../components/Categories";
import { Box } from "primithemes";

interface ServiceNode {
  node: {
    frontmatter: {
      title: string;
      subtitle: string;
      image: any;
    };
    fields: {
      lang: string;
      slug: string;
    };
  };
}

interface Props {
  data: {
    content: {
      frontmatter: {
        title: string;
        subtitle: string;
        image: any;
        welcomeSection: {
          title: string;
          body: string;
        };
        servicesSection: {
          title: string;
          body: string;
        };
        facts: { title: string; value: string }[];
      };
    };
    services: {
      edges: ServiceNode[];
    };
  };
}

const IndexPage: React.SFC<Props> = ({ data: { content, services } }) => {
  return (
    <Layout>
      <Banner
        title={content.frontmatter.title}
        image={content.frontmatter.image}
      />
      <Box bg="background.light">
        <AboutSummary
          title={content.frontmatter.welcomeSection.title}
          body={content.frontmatter.welcomeSection.body}
          highlights={content.frontmatter.facts.map(f => ({
            title: f.value,
            subtitle: f.title,
          }))}
        />
      </Box>
      <Box>
        <Categories
          title={content.frontmatter.servicesSection.title}
          body={content.frontmatter.servicesSection.body}
          categoryLinks={services.edges.map(({ node }) => ({
            label: node.frontmatter.title,
            text: node.frontmatter.subtitle,
            image: node.frontmatter.image,
            to: node.fields.slug,
            buttonText: "Learn More",
          }))}
        />
      </Box>
    </Layout>
  );
};

export default withIntl(IndexPage);

export const query = graphql`
  query IndexPageQuery($locale: String!) {
    content: markdownRemark(
      fields: { lang: { eq: $locale }, pageName: { eq: "index" } }
    ) {
      frontmatter {
        title
        subtitle
        image {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        welcomeSection {
          title
          body
        }
        servicesSection {
          title
          body
        }
        facts {
          title
          value
        }
      }
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
                fluid(maxWidth: 800) {
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
