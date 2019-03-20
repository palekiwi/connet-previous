import path from "path";
import { GatsbyCreatePages } from "./types";
import { languages } from "../src/i18n";

export const createPages: GatsbyCreatePages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      services: allMarkdownRemark(
        limit: 10
        filter: { fields: { type: { eq: "services" } } }
      ) {
        edges {
          node {
            frontmatter {
              lang
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then((result: any) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    result.data.services &&
      result.data.services.edges.forEach(({ node }: any) => {
        createPage({
          path: "/" + node.frontmatter.lang + node.fields.slug,
          component: path.resolve(`src/templates/servicesTemplate.tsx`),
          context: {
            languages,
            locale: node.frontmatter.lang,
            slug: node.fields.slug,
          },
        });
      });
    return result;
  });
};
