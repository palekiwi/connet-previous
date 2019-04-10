import * as React from "react";
import { graphql } from "gatsby";
import { Flex } from "primithemes";
import { Banner } from "../components/Banner";
import { Section, SectionHeader } from "../components/Section";
import { Content } from "src/components/Content";
import { Container } from "src/components/Container";

interface ServicesTemplateProps {
  data: {
    service: any;
  };
}

const ServicesTemplate: React.SFC<ServicesTemplateProps> = ({ data }) => {
  const { service } = data;
  return (
    <>
      <Banner
        title={service.frontmatter.title}
        image={service.frontmatter.image}
      />
      <Section>
        <SectionHeader title={service.frontmatter.subtitle} />
        <Container>
          <Flex p={3} w={1}>
            <Content dangerouslySetInnerHTML={{ __html: service.html }} />
          </Flex>
        </Container>
      </Section>
    </>
  );
};

export default ServicesTemplate;

export const query = graphql`
  query($slug: String!, $locale: String!) {
    service: markdownRemark(
      fields: { slug: { eq: $slug } }
      frontmatter: { lang: { eq: $locale } }
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
      fields {
        slug
      }
    }
  }
`;
