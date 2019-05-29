import React from "react"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import { Grid, ReverseGrid } from "../components/grid/MainGrid"
import Sidebar from "../components/grid/MainGridSidebar"
import Content from "../components/grid/MainGridContent"
import LandingSidebar from "../components/common/LandingSidebarContent"
import SidebarStyles from "../styles/sidebar.module.scss"
import ContentStyles from "../styles/content.module.scss"
import WorkSnippet from "../components/snippet/WorkSnippet"

export default ({ data }) => (
  <div>
    <Helmet>
      {/*<meta charset="utf-8" />*/}
      <title>{data.site.siteMetadata.title}</title>
    </Helmet>

    <Grid>
      <LandingSidebar link="/about" linkText="About Me" />
      <Content className={ContentStyles.mainContent}>
        <h1 className={ContentStyles.title}>
          Hello, I'm <Link to="/about">Pranav Rayudu</Link>
        </h1>
        <h2 className={ContentStyles.description}>
          I build websites and love working on robots and creative programming
          projects.
          <br />
          <Link to="/about#contact-form">Need a website?</Link>
        </h2>
      </Content>
    </Grid>

    <ReverseGrid>
      <Sidebar className={SidebarStyles.infoSidebar}>
        <div className={SidebarStyles.divider} />

        <div className={SidebarStyles.stickyTitle}>
          <h2 className={SidebarStyles.title}>Featured Projects</h2>

          <p className={SidebarStyles.sidebarDescription}>
          I specialize in hand-crafted <em>front-end</em> web development and small-scale <em>responsive</em> websites for mobiles and desktops alike.
        </p>
        </div>
      </Sidebar>

      <Content className={ContentStyles.workContent}>
        <WorkSnippet
          title="Yar Pirate Ipsum"
          body="Provost aye swing the lead lugger Letter of Marque Admiral of the Black dance the hempen jig draft loot hearties."
          image={data.birdTest.childImageSharp.fluid}
          link="https://google.com"
        />
        <WorkSnippet
          title="Tired of Lorem Ipsum?"
          body="Macaroon gingerbread gummies oat cake chocolate bar chocolate powder."
          image={data.wireframeTest.childImageSharp.fluid}
          link="https://google.com"
        />
        <WorkSnippet
          title="Cheese Ipsum"
          body="I love cheese, especially queso cheese strings. Brie cheese and biscuits rubber cheese stinking bishop st."
          image={data.computerTest.childImageSharp.fluid}
          link="https://google.com"
        />
        <WorkSnippet
          title="Yar Pirate Ipsum"
          body="Provost aye swing the lead lugger Letter of Marque Admiral of the Black dance the hempen jig draft loot hearties."
          image={data.birdTest.childImageSharp.fluid}
          link="https://google.com"
        />
        <WorkSnippet
          title="Tired of Lorem Ipsum?"
          body="Macaroon gingerbread gummies oat cake chocolate bar chocolate powder."
          image={data.wireframeTest.childImageSharp.fluid}
          link="https://google.com"
        />
        <WorkSnippet
          title="Cheese Ipsum"
          body="I love cheese, especially queso cheese strings. Brie cheese and biscuits rubber cheese stinking bishop st."
          image={data.computerTest.childImageSharp.fluid}
          link="https://google.com"
        />
      </Content>
    </ReverseGrid>
  </div>
)

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
