import { GatsbySourceNodes } from "./types";

export const sourceNodes: GatsbySourceNodes = ({
  actions,
  getNodes,
  getNode,
  createNodeId,
  createContentDigest,
}) => {
  const { createNodeField } = actions;

  getNodes()
    .filter(
      n1 => n1.internal.type === "MarkdownRemark" && n1.fields.type === "wines"
    )
    .forEach(wineNode => {
      const promos = getNodes()
        .filter(
          n =>
            n.internal.type === "MarkdownRemark" &&
            n.fields.type === "promos" &&
            n.frontmatter.lang === wineNode.frontmatter.lang &&
            (n.frontmatter.wines.includes(wineNode.frontmatter.originalId) ||
              n.frontmatter.kinds.includes(wineNode.frontmatter.kind) ||
              n.frontmatter.wineries.includes(wineNode.frontmatter.winery))
        )
        .map(p => p.id)
        .join(",");

      createNodeField({ node: wineNode, name: "promos", value: promos });
    });
};
