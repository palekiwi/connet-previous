import * as React from "react";
import { graphql } from "gatsby";
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
      };
    };
    welcomeSection: {
      frontmatter: {
        title: string;
        subtitle: string;
      };
      html: string;
    };
    servicesSection: {
      frontmatter: {
        title: string;
        subtitle: string;
      };
      html: string;
    };
    companyFacts: {
      frontmatter: {
        facts: { title: string; value: string }[];
      };
    };
    services: {
      edges: ServiceNode[];
    };
  };
}

const IndexPage: React.SFC<Props> = ({
  data: { content, welcomeSection, servicesSection, companyFacts, services },
}) => {
  return (
    <>
      <Banner
        title={content.frontmatter.title}
        image={content.frontmatter.image}
      />
      <Box bg="background.light">
        <AboutSummary
          title={welcomeSection.frontmatter.title}
          markdown={welcomeSection.html}
          highlights={companyFacts.frontmatter.facts.map(f => ({
            title: f.value,
            subtitle: f.title,
          }))}
        />
      </Box>
      <Box>
        <Categories
          title={servicesSection.frontmatter.title}
          markdown={servicesSection.html}
          categoryLinks={services.edges.map(({ node }) => ({
            label: node.frontmatter.title,
            text: node.frontmatter.subtitle,
            image: node.frontmatter.image,
            to: node.fields.slug,
            buttonText: "Learn More",
          }))}
        />
      </Box>
    </>
  );
};

export default IndexPage;

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
      }
      html
    }
    welcomeSection: markdownRemark(
      fields: { lang: { eq: $locale }, pageName: { eq: "welcome-section" } }
    ) {
      frontmatter {
        title
        subtitle
      }
      html
    }
    companyFacts: markdownRemark(
      fields: { lang: { eq: $locale }, pageName: { eq: "company-facts" } }
    ) {
      frontmatter {
        facts {
          title
          value
        }
      }
    }
    servicesSection: markdownRemark(
      fields: { lang: { eq: $locale }, pageName: { eq: "services" } }
    ) {
      frontmatter {
        title
        subtitle
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
