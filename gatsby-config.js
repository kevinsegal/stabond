module.exports = {
  siteMetadata: {
    title: "Adhesives & Silicon Composites by Stabond",
    author: "Stabond Corporation",
    description: "Stabond Corporation is a California based manufacturer of specialty engineered adhesives, sealants, coatings and silicone compounds."
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: "posts",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          "gatsby-remark-copy-linked-files",
        ],
      },
    },
    { 
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `titillium web\:400,400i,700,700i`
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`
  ],
}
