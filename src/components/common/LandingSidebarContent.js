import React from "react"
import Sidebar from "../grid/MainGridSidebar"
import SidebarStyles from "../../styles/sidebar.module.scss"
import { StaticQuery, graphql, Link } from "gatsby"
import GatsbyImage from "gatsby-image"

import { IoIosArrowBack, IoLogoGithub, IoLogoLinkedin, IoMdPin, IoMdMail } from "react-icons/io"

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
            <span>tarakapranav@gmail.com  <IoMdMail className={SidebarStyles.highlightIcon} /></span>
            <br />
            <span>Austin, TX USA <IoMdPin className={SidebarStyles.highlightIcon} /></span>
          </div>

          <p>
            <Link to={props.link}> {props.linkText}</Link>
            <IoIosArrowBack className={SidebarStyles.highlightIcon} />
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

          <p className={["no-margin", SidebarStyles.sidebarHeader].join(" ")}>Current Projects</p>

          <div>
            {data.allMarkdownRemark.edges.slice(0, 5).map(({ node }, key) => (
              <React.Fragment key={key.toString()}>
                <Link
                  to={node.frontmatter.path}
                  className={SidebarStyles.blogPostsLinks}
                >
                  {node.frontmatter.title}
                </Link>
                <IoIosArrowBack className={SidebarStyles.highlightIcon} />
                <br />
              </React.Fragment>
            ))}
          </div>
        </div>
      </Sidebar>
    )}
  />
)
