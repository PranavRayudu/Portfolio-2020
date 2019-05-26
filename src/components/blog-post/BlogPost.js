import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
//import Helmet from "gatsby-plugin-react-helmet"

import BlogPostStyles from "./blog-post.module.scss"

export default ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <div className={BlogPostStyles.container}>
      {/*<Helmet>*/}
      {/*  <title>Hello</title>*/}
      {/*</Helmet>*/}

      <h1>{frontmatter.title}</h1>
      <h3>{frontmatter.date}</h3>
      <div dangerouslySetInnerHTML={{ __html: html }} />

      <Link to="../">Go back to Home.</Link>
    </div>
  )
}

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        path
        title
        date
      }

      html
    }
  }
`
