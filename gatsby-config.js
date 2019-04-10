module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-132891493-1",
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: ["/admin/**"],
      },
    },
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-layout",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-favicon",
      options: {
        logo: "./src/images/logos/logo-square.jpg",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "controlnet-international",
        short_name: "ctn",
        start_url: "/",
        background_color: "#336699",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "./src/images/logos/logo.png", // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-polyfill-io`,
      options: {
        features: [
          "Number.isInteger",
          "Object.entries",
          "Set",
          "String.prototype.startsWith",
          "Array.prototype.findIndex",
          "Array.prototype.includes",
        ],
      },
    },
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/assets/`,
        name: "assets",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images/`,
        name: "images",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/data/`,
        name: "data",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-root-import",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: [
        {
          resolve: "gatsby-remark-relative-images-v2",
        },
        {
          resolve: "gatsby-remark-images",
          options: {
            maxWidth: 768,
          },
        },
      ],
    },
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        analyzerMode: "server",
        analyzerPort: "3001",
      },
    },
  ],
};
