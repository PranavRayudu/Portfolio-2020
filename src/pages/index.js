import React from "react"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import { Grid, ReverseGrid } from "../components/layout/MainGrid"
import Sidebar from "../components/layout/MainGridSidebar"
import Content from "../components/layout/MainGridContent"
import MainPageStyles from "../styles/main-page.module.scss"
import WorkSnippet from "../components/common/WorkSnippet"

import {
  // IoIosArrowForward,
  IoIosArrowBack,
  IoLogoGithub,
  IoLogoLinkedin,
  // IoMdLocate,
  // IoMdMail,
  // IoIosPaper
} from "react-icons/io"
import GatsbyImage from "gatsby-image"

/**
 * TODO: add image support to page
 */
export default ({ data }) => (
  <div>
    <Helmet>
      {/*<meta charset="utf-8" />*/}
      <title>{data.site.siteMetadata.title}</title>
    </Helmet>

    <Grid>
      {
        //TODO: Modularize Sidebar so it can be used in about page too
      }
      <Sidebar className={MainPageStyles.sidebarIntro}>
        <div>
          <Link to="./"><GatsbyImage fluid={data.logo.childImageSharp.fluid} className={MainPageStyles.sidebarLogo} /></Link>
          <div>
            {/*<IoMdMail className={MainPageStyles.icon} />{" "}*/}
            <span>tarakapranav@gmail.com</span>
            <br />

            {/*<IoMdLocate className={MainPageStyles.icon} />{" "}*/}
            <span>Austin, TX USA</span>

            {/*<IoIosArrowForward className={MainPageStyles.icon} />*/}
            {/*<Link to="/about">About Me</Link>*/}
          </div>

          <p>
            {/*<IoIosArrowForward className={MainPageStyles.icon} />*/}
            <Link to="/about">About Me</Link>
            <IoIosArrowBack className={MainPageStyles.icon} />
            <br />
          </p>

          <div className="bottom-std-padded">
            <a href="https://www.linkedin.com/in/tarakapranav/">
              <IoLogoLinkedin className="io" />
            </a>
            <a
              href="https://github.com/FancyAlpha"
              className={MainPageStyles.githubLeftMargin}
            >
              <IoLogoGithub className="io" />
            </a>
          </div>

          <p className="no-margin">Recent Posts</p>

          <div>
            {data.allMarkdownRemark.edges.slice(0, 5).map(({ node }, key) => (
              <React.Fragment key={key.toString()}>
                {/*<IoIosPaper className={MainPageStyles.icon}/>*/}

                <Link
                  to={node.frontmatter.path}
                  className={MainPageStyles.blogPostsLinks}
                >
                  {node.frontmatter.title}
                </Link>
                <IoIosArrowBack className={MainPageStyles.icon} />
                <br />
              </React.Fragment>
            ))}
          </div>
        </div>
      </Sidebar>
      <Content className={MainPageStyles.mainContent}>
        <h1 className={MainPageStyles.title}>
          Hello, I'm <Link to="/about">Pranav Rayudu</Link>
        </h1>
        <h2 className={MainPageStyles.description}>
          I build websites and love working on robots and creative programming
          projects.
        </h2>
      </Content>
    </Grid>

    <ReverseGrid>
      <Sidebar className={MainPageStyles.sidebarWork}>
        <div className={MainPageStyles.sidebarDivider} />

        <div className={MainPageStyles.stickyTitle}>
          <h2>A Selection of my Projects</h2>
        </div>
      </Sidebar>

      <Content className={MainPageStyles.workContent}>
        <WorkSnippet
          title="Yar Pirate Ipsum"
          subtitle="Pirate Ipsum"
          body="Provost aye swing the lead lugger Letter of Marque Admiral of the Black dance the hempen jig draft loot hearties."
          image={data.birdTest.childImageSharp.fluid}
          link="https://google.com"
        />
        <WorkSnippet
          title="Tired of Lorem Ipsum?"
          subtitle="Cupcake Ipsum"
          body="Macaroon gingerbread gummies oat cake chocolate bar chocolate powder. Sweet croissant cupcake croissant jujubes."
          image={data.wireframeTest.childImageSharp.fluid}
          link="https://google.com"
        />
        <WorkSnippet
          title="Cheese Ipsum"
          subtitle="A Cheesy Lorem Ipsum Generator"
          body="I love cheese, especially queso cheese strings. Brie cheese and biscuits rubber cheese stinking bishop st. agur blue cheese manchego cheese strings red leicester."
          image={data.computerTest.childImageSharp.fluid}
          link="https://google.com"
        />
        <WorkSnippet
          title="Yar Pirate Ipsum"
          subtitle="Pirate Ipsum"
          body="Provost aye swing the lead lugger Letter of Marque Admiral of the Black dance the hempen jig draft loot hearties."
          image={data.birdTest.childImageSharp.fluid}
          link="https://google.com"
        />
        <WorkSnippet
          title="Tired of Lorem Ipsum"
          subtitle="Cupcake Ipsum"
          body="Macaroon gingerbread gummies oat cake chocolate bar chocolate powder. Sweet croissant cupcake croissant jujubes."
          image={data.wireframeTest.childImageSharp.fluid}
          link="https://google.com"
        />
        <WorkSnippet
          title="Cheese Ipsum"
          subtitle="A Cheesy Lorem Ipsum Generator"
          body="I love cheese, especially queso cheese strings. Brie cheese and biscuits rubber cheese stinking bishop st. agur blue cheese manchego cheese strings red leicester."
          image={data.computerTest.childImageSharp.fluid}
          link="https://google.com"
        />
      </Content>
    </ReverseGrid>

    {/*<ReverseGrid>*/}
    {/*  <Sidebar className={MainPageStyles.sidebarBlog}>*/}
    {/*    <div className={MainPageStyles.sidebarDivider} />*/}

    {/*    <h2>A bunch of stuff I did and wrote about [Blog]</h2>*/}
    {/*  </Sidebar>*/}

    {/*  <Content className={MainPageStyles.blogGrid}>*/}
    {/*    {console.log(data)}*/}
    {/*    {data.allMarkdownRemark.edges.map(({ node }) => (*/}
    {/*      <BlogSnippet*/}
    {/*        title={node.frontmatter.title}*/}
    {/*        subtitle={node.frontmatter.date}*/}
    {/*        body={node.frontmatter.description}*/}
    {/*        link={node.frontmatter.path}*/}
    {/*      />*/}
    {/*    ))}*/}
    {/*  </Content>*/}
    {/*</ReverseGrid>*/}
  </div>
)

//mediumZoom(document.querySelectorAll('.zoomable>picture>img'))

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 550, maxHeight: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

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

    birdTest: file(relativePath: { eq: "images/bird-test.jpeg" }) {
      ...fluidImage
    }

    wireframeTest: file(
      relativePath: { eq: "images/website-wireframe-test.jpg" }
    ) {
      ...fluidImage
    }

    computerTest: file(
      relativePath: { eq: "images/computer-mockup-test.jpg" }
    ) {
      ...fluidImage
    }
  }
`
