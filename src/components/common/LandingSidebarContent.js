import React from "react"
import Sidebar from "../grid/MainGridSidebar"
import SidebarStyles from "../../styles/sidebar.module.scss"
import { StaticQuery, graphql, Link } from "gatsby"
import GatsbyImage from "gatsby-image"

import { IoIosArrowBack, IoLogoGithub, IoLogoLinkedin, IoMdPin, IoMdMail } from "react-icons/io"
import { FaUniversity } from "react-icons/fa"

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
          <Link to="./" className={SidebarStyles.logoLink} aria-label={"Pranav Rayudu's Logo"}>
            <GatsbyImage
              fluid={data.logo.childImageSharp.fluid}
              className={SidebarStyles.logo}
              alt={"Pranav Rayudu's Logo"}
            />
          </Link>

          <div>
            <div>CS @ UT Austin <FaUniversity className={SidebarStyles.highlightIcon}/></div>
            <div>tarakapranav@gmail.com <IoMdMail className={SidebarStyles.highlightIcon}/></div>
            <div>Austin, TX USA <IoMdPin className={SidebarStyles.highlightIcon}/></div>
          </div>

          <p>
            <Link to={props.link}> {props.linkText}</Link>
            <IoIosArrowBack className={SidebarStyles.highlightIcon}/>
            <br/>
          </p>

          <div>
            <a
              href="https://www.linkedin.com/in/tarakapranav/"
              target="_blank"
              rel="noopener noreferrer"
              className={"plain-link"}
              aria-label={"Linkedin link"}
            >
              <IoLogoLinkedin className={SidebarStyles.io}/>
            </a>
            <a
              href="https://github.com/FancyAlpha"
              target="_blank"
              rel="noopener noreferrer"
              className={["plain-link", SidebarStyles.githubLeftMargin].join(" ")}
              aria-label={"Github link"}
            >
              <IoLogoGithub className={SidebarStyles.io}/>
            </a>
          </div>

          {/*<p className={["no-margin", SidebarStyles.sidebarHeader].join(" ")}>Current Projects</p>*/}

          {/*<div>*/}
          {/*  {data.allMarkdownRemark.edges.slice(0, 5).map(({ node }, key) => (*/}
          {/*    <React.Fragment key={key.toString()}>*/}
          {/*      <Link*/}
          {/*        to={node.frontmatter.path}*/}
          {/*        className={SidebarStyles.blogPostsLinks}*/}
          {/*      >*/}
          {/*        {node.frontmatter.title}*/}
          {/*      </Link>*/}
          {/*      <IoIosArrowBack className={SidebarStyles.highlightIcon} />*/}
          {/*      <br />*/}
          {/*    </React.Fragment>*/}
          {/*  ))}*/}
        </div>
      </Sidebar>
    )}
  />
)
