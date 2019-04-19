import * as React from "react";
import { graphql } from "gatsby";
import { Banner } from "../components/Banner";
import { Section } from "../components/Section";
import { Timeline } from "../components/Timeline";
import { Button } from "../components/Button";
import styled, { css } from "styled-components";
import { color, space } from "src/theme";
import { tablet, wide } from "src/theme/media";
import { Container } from "../components/Container";
import { Content } from "src/components/Content";

const Intro = styled.div`
  background: ${color("background.white")};
  width: 100%;
  padding: ${space(4)} ${space(3)};
`;

const ContentWrapper = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 100%;
  ${tablet(css`
    width: 80%;
  `)}
  ${wide(css`
    width: 60%;
  `)}
  margin-bottom: ${space(3)};
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  & ${Button} {
    margin: ${space(1)};
  }
`;

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
    <>
      <Banner
        image={content.frontmatter.image}
        title={content.frontmatter.title}
      />
      <Section>
        <Intro>
          <Container>
            <ContentWrapper>
              <Content dangerouslySetInnerHTML={{ __html: content.html }} />
            </ContentWrapper>
            <Links>
              {services.edges.map(({ node }, i) => (
                <Button to={node.fields.slug} contained variant="primary">
                  {node.frontmatter.title}
                </Button>
              ))}
            </Links>
          </Container>
        </Intro>
        <Timeline
          title={content.frontmatter.referencesSection.title}
          subtitle={content.frontmatter.referencesSection.subtitle}
          items={references.edges}
        />
      </Section>
    </>
  );
};

export default AboutTemplate;

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
