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

import { FaReact, FaFlask, FaNodeJs, FaJava, FaPython, FaJs, FaLayerGroup, FaRobot } from "react-icons/fa"
import { DiMongodb } from "react-icons/di"

export default ({ data }) => (
  <div>
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <meta name="description" content={data.site.siteMetadata.description}/>
    </Helmet>

    <Grid>
      <LandingSidebar link="/about" linkText="About Me"/>
      <Content className={ContentStyles.mainContent}>
        <h1 className={ContentStyles.title}>
          Hello, I'm <br/><Link to="/about">Pranav Rayudu</Link>
        </h1>
        <h2 className={ContentStyles.description}>
          I am a full-stack developer who loves building robots and creative programming.
          <br/>
          <Link to="/about#contact-form">Want to talk?</Link>
          <br/>
        </h2>
      </Content>
    </Grid>

    <ReverseGrid>
      <Sidebar className={SidebarStyles.infoSidebar}>
        <div className={SidebarStyles.divider}/>

        <div className={SidebarStyles.stickyTitle}>
          <h2 className={SidebarStyles.title}>Featured Projects</h2>

          <p className={SidebarStyles.sidebarDescription}>
            I specialize in hand-crafted <em>front-end</em> web development and small-scale <em>responsive</em> websites
            for mobiles and desktops alike.
          </p>

          <p className={SidebarStyles.skills}>

            <section className={SidebarStyles.skillsSection}>
              <div className={SidebarStyles.chipStrong}><FaReact className={SidebarStyles.icon}/> React.js</div>
              <div className={SidebarStyles.chipStrong}><FaFlask className={SidebarStyles.icon}/> Flask</div>
              <div className={SidebarStyles.chipStrong}><FaNodeJs className={SidebarStyles.icon}/> Node.js</div>
              <div className={SidebarStyles.chipStrong}><DiMongodb classname={SidebarStyles.icon}/> MongoDB</div>
            </section>

            <section className={SidebarStyles.skillsSection}>
              <div className={SidebarStyles.chip}><FaJava className={SidebarStyles.icon}/> Java</div>
              <div className={SidebarStyles.chip}>C / C++</div>
              <div className={SidebarStyles.chip}><FaPython className={SidebarStyles.icon}/> Python</div>
              <div className={SidebarStyles.chip}><FaJs className={SidebarStyles.icon}/> Javascript</div>
            </section>

            <section className={SidebarStyles.skillsSection}>
              <div className={SidebarStyles.chipWeak}>Machine Learning</div>
              <div className={SidebarStyles.chipWeak}><FaLayerGroup className={SidebarStyles.icon}/> Full Stack</div>
              <div className={SidebarStyles.chipWeak}><FaRobot className={SidebarStyles.icon}/> Robotics</div>
              <div className={SidebarStyles.chipWeak}>Software Engineering</div>
            </section>
          </p>

        </div>
      </Sidebar>

      <Content className={ContentStyles.workContent}>
        <WorkSnippet
          title="Picture This"
          subtitle={"CRUD app that crowd-sources affordable attractions around town. Uses a React Native and Flask + MongoDB stack."}
          body="CRUD application that crowd-sources affordable attractions around town. How about some more description text here? This seems to affect the size of the box by quite a bit? Let's see her now ... did it grow bigger? It might have. This is a vey annoying development."
          image={data.phoneTest.childImageSharp.fluid}
          link="https://google.com"
          delay={0}
          superSnippet
        />
        <WorkSnippet
          title="Kinetic Keys"
          subtitle={"Pose Detection game implemented in React and Tensorflow.js"}
          body="I love cheese, especially queso cheese strings. Brie cheese and biscuits rubber cheese stinking bishop st."
          image={data.computerTest.childImageSharp.fluid}
          link="https://google.com"
          delay={150}
        />
        <WorkSnippet
          title="Paragon"
          subtitle={"Slackbot that monitors channels for aggressive behaviour using Natural Language Processing; Uses React.js and Node + MongoDB stack."}
          body="Provost aye swing the lead lugger Letter of Marque Admiral of the Black dance the hempen jig draft loot hearties."
          image={data.wireframeTest.childImageSharp.fluid}
          link="https://google.com"
          delay={0}
        />
        <WorkSnippet
          title="Hurricane Hero"
          subtitle={"Hurricane damage detector and reported implemented using React.js and Flask + CNN classifier running on Azure Cloud"}
          body="Macaroon gingerbread gummies oat cake chocolate bar chocolate powder."
          image={data.phoneTest.childImageSharp.fluid}
          link="https://google.com"
          delay={100}
        />
        <WorkSnippet
          title="Neural Net for MNIST dataset"
          subtitle={"Self-contained multilayer perceptron written in C++"}
          body="I love cheese, especially queso cheese strings. Brie cheese and biscuits rubber cheese stinking bishop st."
          // image={data.computerTest.childImageSharp.fluid}
          link="https://google.com"
          delay={200}
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
        description
      }
    }
   
    
    appleTest: file(relativePath: { eq: "images/apple-notebook.jpg" }) {
      ...fluidImage
    }
    
    phoneTest: file(relativePath: { eq: "images/smartphone-with-application.jpg" }) {
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
