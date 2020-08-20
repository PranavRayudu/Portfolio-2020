import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/common/Layout"
import WorkSnippet from "../components/snippet/WorkSnippet"
import PageStyles from "../styles/pages.module.scss"

import {
  FaReact,
  FaFlask,
  FaNodeJs,
  FaJava,
  FaPython,
  FaJsSquare,
  FaLayerGroup,
  FaRobot,
  FaSass,
} from "react-icons/fa"
import { DiMongodb, DiMysql } from "react-icons/di"

function Hero() {
  return (
    <>
      <h1 className={PageStyles.title}>
        Hello, I'm <br/><Link to="/about">Pranav Rayudu</Link>
      </h1>
      <h2 className={PageStyles.description}>
        I'm a full-stack developer who loves building robots and creative programming.
        <br/>

        <Link to="/about#contact-form">Say Hi!</Link>
        <br/>
      </h2>
    </>
  )
}

function SidebarContent() {
  return (
    <div className={"animate"}>
      <div className={PageStyles.divider}/>
      <div className={PageStyles.stickyTitle}>
        <h2>Featured Projects</h2>
        <p className={PageStyles.sidebarDescription}>
          I specialize in building beautiful <em>Full Stack</em> apps integrated
          with <em>Machine Learning</em>.
        </p>
        <div className={PageStyles.skills}>
          <section className={PageStyles.skillsSection}>
            <div className={PageStyles.chipStrong}><FaReact className={"icon"}/> React.js</div>
            <div className={PageStyles.chipStrong}><FaFlask className={"icon"}/> Flask</div>
            <div className={PageStyles.chipStrong}><FaNodeJs className={"icon"}/> Node.js</div>
            <div className={PageStyles.chipStrong}><DiMongodb className={"icon"}/> MongoDB</div>
            <div className={PageStyles.chipStrong}><DiMysql classname={"icon"}/> MySQL</div>
            <div className={PageStyles.chipStrong}> Selenium</div>
          </section>

          <section className={PageStyles.skillsSection}>
            <div className={PageStyles.chip}><FaJava className={"icon"}/> Java</div>
            <div className={PageStyles.chip}>C / C++</div>
            <div className={PageStyles.chip}><FaPython className={"icon"}/> Python</div>
            <div className={PageStyles.chip}><FaJsSquare className={"icon"}/> Javascript</div>
            <div className={PageStyles.chip}><FaSass className={"icon"}/> HTML5 / Sass</div>
          </section>

          <section className={PageStyles.skillsSection}>
            <div className={PageStyles.chipWeak}>Machine Learning</div>
            <div className={PageStyles.chipWeak}><FaLayerGroup className={"icon"}/> Full Stack</div>
            <div className={PageStyles.chipWeak}><FaRobot className={"icon"}/> Robotics</div>
            <div className={PageStyles.chipWeak}>Software Engineering</div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default ({data}) => {

  const snippets = []

  data.allMarkdownRemark.edges.forEach(({node}) => {
    snippets.push(<WorkSnippet
      key={node.id}
      title={node.frontmatter.title}
      subtitle={node.frontmatter.subtitle}
      body={node.html}
      image={node.frontmatter.thumbnail}
      link={node.frontmatter.link}
      superSnippet={node.frontmatter.super}
    />)
  })

  return (
  <Layout
    link={"/about"}
    linkText={"About Me"}

    hero={<Hero/>}
    sidebar={<SidebarContent/>}
    contentClass={PageStyles.workContent}>
    {snippets}
  </Layout>
)}

export const query = graphql`
   {
    allMarkdownRemark(
    filter: {fileAbsolutePath: {regex : "/portfolio/"}},
    sort: {order: DESC, fields: frontmatter___date}) {
      edges {
        node {
          frontmatter {
            title
            subtitle
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 550, maxHeight: 400) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            link {
              url
              text
            }
            super
          }
          html
          id
        }
      }
    }
  }
`
