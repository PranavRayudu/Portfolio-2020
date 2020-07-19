import React from "react"
import { Helmet } from "react-helmet"
import { graphql, StaticQuery } from "gatsby"
import Animate from "../components/common/Animate"

export default function({ location, children }) {
  return (
    <>
      <StaticQuery
        query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
        render={data => (
          <Helmet>
            <title>{data.site.siteMetadata.title}</title>
            <meta name="description" content={data.site.siteMetadata.description}/>
          </Helmet>
        )}/>

      <Animate pathname={location.pathname}>
        {children}
      </Animate>
    </>
  )
}
