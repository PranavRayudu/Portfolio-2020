import React from "react"
import Sidebar from "../grid/GridSidebar"
import { sidebar, landingSidebar, logo, highlightIcon, io } from "./sidebar.module.scss"
import { StaticQuery, graphql, Link } from "gatsby"
import SpecialLogo from "./TiltLink"
import { GatsbyImage } from "gatsby-plugin-image"

import {
  IoIosArrowBack,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMdPin,
  IoMdMail,
} from "react-icons/io"
import { FaUniversity } from "react-icons/fa"

export default function LandingSidebar(props) {
  return (
    <StaticQuery
      query={graphql`
        query StuffQuery {
          logo: file(relativePath: { eq: "logo-yellow.png" }) {
            childImageSharp {
              gatsbyImageData(width: 100, height: 100)
            }
          }
        }
      `}
      render={(data) => (
        <Sidebar
          className={`${sidebar} ${landingSidebar}`}
        >
          <div>
            <SpecialLogo to={"/"}>
              <GatsbyImage
                image={data.logo.childImageSharp.gatsbyImageData}
                className={logo}
                alt={"Pranav Rayudu's Logo"}
              />
            </SpecialLogo>

            <div>
              <div>
                CS @ UT Austin&nbsp;
                <FaUniversity
                  className={`icon ${highlightIcon}`}
                />
              </div>
              <div>
                tarakapranav@gmail.com&nbsp;
                <IoMdMail className={`icon ${highlightIcon}`} />
              </div>
              <div>
                Austin, TX USA&nbsp;
                <IoMdPin className={`icon ${highlightIcon}`} />
              </div>
            </div>

            <p>
              <Link to={props.link} className={"animate"}>
                {props.linkText}
              </Link>
              &nbsp;
              <IoIosArrowBack
                className={`icon ${highlightIcon}`}
              />
              <br />
            </p>

            <div>
              <a
                href="https://www.linkedin.com/in/tarakapranav/"
                target="_blank"
                rel="noopener noreferrer"
                className={`plain-link ${io}`}
                aria-label={"Linkedin link"}
              >
                <IoLogoLinkedin />
              </a>
              <a
                href="https://github.com/PranavRayudu"
                target="_blank"
                rel="noopener noreferrer"
                className={`plain-link ${io}`}
                aria-label={"Github link"}
              >
                <IoLogoGithub />
              </a>
            </div>
            {/*<div>*/}
            {/*  {data.allMarkdownRemark.edges.slice(0, 5).map(({ node }, key) => (*/}
            {/*    <React.Fragment key={key.toString()}>*/}
            {/*      <Link*/}
            {/*        to={node.frontmatter.path}*/}
            {/*        className={blogPostsLinks}*/}
            {/*      >*/}
            {/*        {node.frontmatter.title}*/}
            {/*      </Link>*/}
            {/*      <IoIosArrowBack className={highlightIcon} />*/}
            {/*      <br />*/}
            {/*    </React.Fragment>*/}
            {/*  ))}*/}
          </div>
        </Sidebar>
      )}
    />
  )
}
