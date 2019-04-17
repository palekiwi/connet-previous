"use strict";

require("source-map-support").install();
require("ts-node").register({
  compilerOptions: {
    module: "commonjs",
    target: "es2017",
  },
});

const {
  onCreatePage,
  createPages,
  onCreateNode,
} = require("./gatsby-node/index.ts");

exports.createPages = createPages;
exports.onCreatePage = onCreatePage;
exports.onCreateNode = onCreateNode;
