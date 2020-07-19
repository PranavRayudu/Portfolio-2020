import React, { useRef, useState } from "react"
import Sidebar from "../grid/MainGridSidebar"
import SidebarStyles from "../../styles/sidebar.module.scss"
import { StaticQuery, graphql, Link } from "gatsby"
import GatsbyImage from "gatsby-image"
import { useSpring, animated } from "react-spring"

import { IoIosArrowBack, IoLogoGithub, IoLogoLinkedin, IoMdPin, IoMdMail } from "react-icons/io"
import { FaUniversity } from "react-icons/fa"


const sensitivity = 0.3

export default function(props) {

  let bounds = [250, 110, 100, 140]

  const calc = (x, y) => {
    console.log(bounds)
    console.log(x - bounds[0] - (bounds[2] / 2),
      y - bounds[1] - (bounds[3] / 2))
    return [x - bounds[0] - (bounds[2] / 2),
      y - bounds[1] - (bounds[3] / 2)]
  }

  const trans = (x, y) => `perspective(100px) rotateY(${x * sensitivity}deg) rotateX(${-y * sensitivity}deg) scale(1)`
  // `translate3d(${x * sensitivity}px,${y * sensitivity}px,0)`
  const [pos, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }))

  const AnimatedLink = animated(Link)
  return (
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
            <div>
              <AnimatedLink
                to="/"
                className={SidebarStyles.logoLink}
                aria-label={"Pranav Rayudu's Logo"}
                ref={el => {
                  if (!el) return
                  console.log(el)
                  let bound = el.getBoundingClientRect()
                  bounds = [bound.x, bound.y, bound.width, bound.height]
                  console.log(bounds)
                }}
                onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
                onMouseLeave={() => set({ xy: [0, 0] })}
                style={{ transform: pos.xy.interpolate(trans) }}
              >
                <GatsbyImage
                  fluid={data.logo.childImageSharp.fluid}
                  className={SidebarStyles.logo}
                  alt={"Pranav Rayudu's Logo"}
                />
              </AnimatedLink>
            </div>

            <div>
              <div>CS @ UT Austin <FaUniversity className={SidebarStyles.highlightIcon}/></div>
              <div>tarakapranav@gmail.com <IoMdMail className={SidebarStyles.highlightIcon}/></div>
              <div>Austin, TX USA <IoMdPin className={SidebarStyles.highlightIcon}/></div>
            </div>

            <p>
              <Link to={props.link} className={"animate"}> {props.linkText}</Link>
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
                href="https://github.com/PranavRayudu"
                target="_blank"
                rel="noopener noreferrer"
                className={["plain-link", SidebarStyles.githubLeftMargin].join(" ")}
                aria-label={"Github link"}
              >
                <IoLogoGithub className={SidebarStyles.io}/>
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
