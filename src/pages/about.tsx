import * as React from "react";
import { graphql } from "gatsby";
import { Banner } from "../components/Banner";
import { Section } from "../components/Section";
import { Timeline } from "../components/Timeline";
import { Button } from "../components/Button";
import styled from "styled-components";
import { Container } from "../components/Container";
import { Content } from "src/components/Content";

const Intro = styled.div`
  background: ${props => props.theme.colors.background.light};
  width: 100%;
  padding: ${props => props.theme.sizes[4]} 0;
`;
const Tiles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${props => props.theme.sizes[3]} 0;
`;

const Tile = styled.div`
  padding: ${props => props.theme.sizes[1]};
`;

const StyledContent = styled(Content)`
  width: 100%;
  max-width: 660px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.sizes[3]};
  ${props => props.theme.devices[2]} {
    padding: 0;
  }
  text-align: center;
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
            <StyledContent dangerouslySetInnerHTML={{ __html: content.html }} />
          </Container>
          <Tiles>
            {services.edges.map(({ node }, i) => (
              <Tile key={i}>
                <Button to={node.fields.slug} contained variant="primary">
                  {node.frontmatter.title}
                </Button>
              </Tile>
            ))}
          </Tiles>
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
