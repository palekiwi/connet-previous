interface Page {
  path: string;
  component: string;
  layout?: string;
  context?: object;
}

type Node = any;

interface Actions {
  createNode: (node: any) => void;
  createPage: (page: Page) => void;
  deletePage: (page: Page) => void;
  createParentChildLink: (param: { parent: Node; child: Node }) => void;
  createRedirect: (opts: {
    fromPath: string;
    isPermanent?: boolean;
    redirectInBrowser?: boolean;
    toPath: string;
  }) => void;
  createNodeField: (param: { node: any; name: string; value: string }) => void;
}

export type GatsbyCreatePages = (params: {
  graphql: any;
  actions: Actions;
}) => void;

export type GatsbyOnCreatePage = (params: {
  page: Page;
  graphql: any;
  actions: Actions;
}) => void;

export type GatsbyOnCreateNode = (params: {
  node: any;
  getNode: any;
  actions: Actions;
  createNodeId: any;
  createContentDigest: any;
}) => void;

export type GatsbySourceNodes = (params: {
  createNodeId: any;
  createContentDigest: any;
  getNodes(): Node[];
  getNode: any;
  actions: Actions;
}) => void;
