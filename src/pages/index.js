import React from "react"
import { graphql, Link } from "gatsby"

import { Grid, ReverseGrid } from "../components/layout/main-grid"
import Sidebar from "../components/layout/main-grid-sidebar"
import Content from "../components/layout/main-grid-content"
import MainPageStyles from "../styles/main-page.module.scss"
import WorkSnippet from "../components/work-snippet"
import BlogSnippet from "../components/blog-snippet"

import { IoIosArrowForward, IoLogoGithub, IoLogoLinkedin, IoMdLocate, IoMdMail } from "react-icons/io"

/**
 * TODO: add image support to page
 */
export default ({data}) => (
    <div>
      <Grid>
            <Sidebar className={MainPageStyles.sidebarIntro}>

              <div className={MainPageStyles.iconGrid}>
                <IoMdMail className={MainPageStyles.icon}/> <span>tarakapranav@gmail.com</span>
                <IoMdLocate className={MainPageStyles.icon}/> <span>Austin, TX USA</span>
              </div>

              <div className={MainPageStyles.iconGrid}>
                <IoIosArrowForward  className={MainPageStyles.icon}/><Link to="/about">About Me</Link>
                <IoIosArrowForward  className={MainPageStyles.icon}/><Link to="/about">Visit Blog</Link>
              </div>


              <div>
                <a href="https://www.linkedin.com/in/tarakapranav/"><IoLogoLinkedin className="io"/></a>
                <a href="https://github.com/FancyAlpha" className={MainPageStyles.githubLeftMargin}><IoLogoGithub className="io"/></a>
              </div>
              {/*<Link to="/blog">> Blog</Link>*/}
            </Sidebar>

            <Content>
              <h1 className={MainPageStyles.title}>Hello, I'm <Link to="/about">Pranav Rayudu</Link></h1>
              <h2 className={MainPageStyles.description}>
                I build websites and love working on robots and creative programming projects.
              </h2>
            </Content>
        </Grid>

      <ReverseGrid>
        <Sidebar className={MainPageStyles.sidebarWork}>
          <h2>A bunch of stuff I did</h2>
        </Sidebar>

        <Content className={MainPageStyles.workGrid}>
          <WorkSnippet title="Yar Pirate Ipsum"
                       subtitle="Pirate Ipsum"
                       body="Provost aye swing the lead lugger Letter of Marque Admiral of the Black dance the hempen jig draft loot hearties. Walk the plank scuppers lee cackle fruit Davy Jones' Locker chandler fore gun landlubber or just lubber carouser."
                       image={data.birdTest.childImageSharp.fluid}
                       link="https://google.com" />
          <WorkSnippet title="Tired of how boring Lorem Ipsum got?"
                       subtitle="Cupcake Ipsum"
                       body="Macaroon gingerbread gummies oat cake chocolate bar chocolate powder. Sweet croissant cupcake croissant jujubes. Gummi bears macaroon pastry sesame snaps pudding cheesecake gingerbread."
                       image={data.wireframeTest.childImageSharp.fluid}
                       link="https://google.com" />
          <WorkSnippet title="Cheese Ipsum"
                       subtitle="A Cheesy Lorem Ipsum Generator"
                       body="I love cheese, especially queso cheese strings. Brie cheese and biscuits rubber cheese stinking bishop st. agur blue cheese manchego cheese strings red leicester. Cheesy grin the big cheese fondue hard cheese ricotta queso monterey jack feta."
                       image={data.computerTest.childImageSharp.fluid}
                       link="https://google.com" />
        </Content>
      </ReverseGrid>


      <ReverseGrid>
        <Sidebar className={MainPageStyles.sidebarBlog}>
          <h2>A bunch of stuff I did and wrote about [Blog]</h2>
        </Sidebar>

        <Content className={MainPageStyles.blogGrid}>
          <BlogSnippet title="Yar Pirate Ipsum"
                       subtitle="Pirate Ipsum"
                       body="Provost aye swing the lead lugger Letter of Marque Admiral of the Black dance the hempen jig draft loot hearties. Walk the plank scuppers lee cackle fruit Davy Jones' Locker chandler fore gun landlubber or just lubber carouser."
                       />
          <BlogSnippet title="Tired of how boring Lorem Ipsum got?"
                       subtitle="Cupcake Ipsum"
                       body="Macaroon gingerbread gummies oat cake chocolate bar chocolate powder. Sweet croissant cupcake croissant jujubes. Gummi bears macaroon pastry sesame snaps pudding cheesecake gingerbread."
                       />
          <BlogSnippet title="Cheese Ipsum"
                       subtitle="A Cheesy Lorem Ipsum Generator"
                       body="I love cheese, especially queso cheese strings. Brie cheese and biscuits rubber cheese stinking bishop st. agur blue cheese manchego cheese strings red leicester. Cheesy grin the big cheese fondue hard cheese ricotta queso monterey jack feta."
                       />
        </Content>
      </ReverseGrid>
    </div>
)


export const query = graphql`
  query {
    birdTest: file(relativePath: { eq: "bird-test.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 550) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wireframeTest: file(relativePath: { eq: "website-wireframe-test.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 550) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    computerTest: file(relativePath: { eq: "computer-mockup-test.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 550, maxHeight: 400) {
          
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `