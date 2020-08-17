exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      title: String!
      date: Date!
      subtitle: String
      thumbnail: File @fileByRelativePath
      link: Link
      super: Boolean
    }
    type Link {
      url: String
      text: String
    }
  `
  createTypes(typeDefs)
}
