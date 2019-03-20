import { GatsbyOnCreateNode } from "./types";
import slugify from "slugify";
const { fmImagesToRelative } = require("gatsby-remark-relative-images-v2");

export const onCreateNode: GatsbyOnCreateNode = ({
  node,
  getNode,
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node);

  if (node.internal.type === "MarkdownRemark") {
    const parent = getNode(node.parent);
    const type = parent.relativeDirectory.split("/").slice(-1)[0];

    const getSlugField = (node: any, nodeType: string) => {
      switch (nodeType) {
        case "wines":
          return node.frontmatter["wineId"];
        case "wineries":
          return node.frontmatter["wineryId"];
        case "promos":
          return node.frontmatter["promoId"];
        case "events":
          return node.frontmatter["eventId"];
        default:
          return node.id;
      }
    };
    createNodeField({ node, name: "type", value: type });
    createNodeField({
      node,
      name: "slug",
      value: "/" + slugify(getSlugField(node, type), { lower: true }),
    });

    if (["settings", "content"].indexOf(node.fields.type) > -1) {
      const [pageName, lang] = parent.name.split(".");
      createNodeField({ node, name: "pageName", value: pageName });
      createNodeField({ node, name: "lang", value: lang });
    }
  }
};
