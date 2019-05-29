import React from "react"
import Sidebar from "../grid/MainGridSidebar"
import SidebarStyles from "../../styles/sidebar.module.scss"
import { StaticQuery, graphql, Link } from "gatsby"
import GatsbyImage from "gatsby-image"

import { IoIosArrowBack, IoLogoGithub, IoLogoLinkedin } from "react-icons/io"

export default props => (
  <StaticQuery
    query={graphql`
      query StuffQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
        ) {
          edges {
            node {
              excerpt

              frontmatter {
                path
                title
                date
              }
            }
          }
        }

        logo: file(relativePath: { eq: "images/logo-yellow.png" }) {
          childImageSharp {
            fluid(maxWidth: 100, maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Sidebar className={SidebarStyles.landingSidebar}>
        <div>
          <Link to="./">
            <GatsbyImage
              fluid={data.logo.childImageSharp.fluid}
              className={SidebarStyles.logo}
            />
          </Link>
          <div>
            <span>tarakapranav@gmail.com</span>
            <br />
            <span>Austin, TX USA</span>
          </div>

          <p>
            <Link to={props.link}> {props.linkText}</Link>
            <IoIosArrowBack className={SidebarStyles.icon} />
            <br />
          </p>

          <div className="bottom-std-padded">
            <a
              href="https://www.linkedin.com/in/tarakapranav/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoLinkedin className="io" />
            </a>
            <a
              href="https://github.com/FancyAlpha"
              target="_blank"
              rel="noopener noreferrer"
              className={SidebarStyles.githubLeftMargin}
            >
              <IoLogoGithub className="io"/>
            </a>
          </div>

          <p className="no-margin">Recent Posts</p>

          <div>
            {data.allMarkdownRemark.edges.slice(0, 5).map(({ node }, key) => (
              <React.Fragment key={key.toString()}>
                <Link
                  to={node.frontmatter.path}
                  className={SidebarStyles.blogPostsLinks}
                >
                  {node.frontmatter.title}
                </Link>
                <IoIosArrowBack className={SidebarStyles.icon} />
                <br />
              </React.Fragment>
            ))}
          </div>
        </div>
      </Sidebar>
    )}
  />
)
