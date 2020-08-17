import React from "react"
import Sidebar from "../grid/GridSidebar"
import SidebarStyles from "./sidebar.module.scss"
import { StaticQuery, graphql, Link } from "gatsby"
import SpecialLogo from "./TiltLink"
import GatsbyImage from "gatsby-image"

import { IoIosArrowBack, IoLogoGithub, IoLogoLinkedin, IoMdPin, IoMdMail } from "react-icons/io"
import { FaUniversity } from "react-icons/fa"

export default function(props) {
  return (
    <StaticQuery
      query={graphql`
      query StuffQuery {
        logo: file(relativePath: { eq: "logo-yellow.png" }) {
          childImageSharp {
            fluid(maxWidth: 100, maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
      render={data => (
        <Sidebar className={`${SidebarStyles.sidebar} ${SidebarStyles.landingSidebar}`}>
          <div>
            <SpecialLogo to={"/"}>
              <GatsbyImage
                fluid={data.logo.childImageSharp.fluid}
                className={SidebarStyles.logo}
                alt={"Pranav Rayudu's Logo"}
              />
            </SpecialLogo>

            <div>
              <div>CS @ UT Austin&nbsp;<FaUniversity className={`icon ${SidebarStyles.highlightIcon}`}/></div>
              <div>tarakapranav@gmail.com&nbsp;<IoMdMail className={`icon ${SidebarStyles.highlightIcon}`}/></div>
              <div>Austin, TX USA&nbsp;<IoMdPin className={`icon ${SidebarStyles.highlightIcon}`}/></div>
            </div>

            <p>
              <Link to={props.link} className={"animate"}>{props.linkText}</Link>
              &nbsp;<IoIosArrowBack className={`icon ${SidebarStyles.highlightIcon}`}/>
              <br/>
            </p>

            <div>
              <a
                href="https://www.linkedin.com/in/tarakapranav/"
                target="_blank"
                rel="noopener noreferrer"
                className={`plain-link ${SidebarStyles.io}`}
                aria-label={"Linkedin link"}>
                <IoLogoLinkedin/>
              </a>
              <a
                href="https://github.com/PranavRayudu"
                target="_blank"
                rel="noopener noreferrer"
                className={`plain-link ${SidebarStyles.io}`}
                aria-label={"Github link"}>
                <IoLogoGithub/>
              </a>
            </div>
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
}
