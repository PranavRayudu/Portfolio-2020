import React from "react"
import { graphql, Link } from "gatsby"
import { Grid, ReverseGrid } from "../components/grid/MainGrid"
import Sidebar from "../components/grid/MainGridSidebar"
import Content from "../components/grid/MainGridContent"
import LandingSidebar from "../components/common/LandingSidebarContent"
import SidebarStyles from "../styles/sidebar.module.scss"
import ContentStyles from "../styles/content.module.scss"
import WorkSnippet from "../components/snippet/WorkSnippet"

import {
  FaReact,
  FaFlask,
  FaNodeJs,
  FaJava,
  FaPython,
  FaJsSquare,
  FaLayerGroup,
  FaRobot,
  FaCss3Alt,
} from "react-icons/fa"
import { DiMongodb } from "react-icons/di"

export default ({ data }) => (
  <div>
    <Grid>
      <LandingSidebar link="/about" linkText="About Me"/>
      <Content className={`${ContentStyles.mainContent} animate`}>
        <h1 className={ContentStyles.title}>
          Hello, I'm <br/><Link to="/about">Pranav Rayudu</Link>
        </h1>
        <h2 className={ContentStyles.description}>
          I'm a full-stack developer who loves building robots and creative programming.
          <br/>

          <Link to="/about#contact-form">Let's talk.</Link>
          <br/>
        </h2>
      </Content>
    </Grid>

    <ReverseGrid className={ContentStyles.contentContainer}>
      <Sidebar className={SidebarStyles.infoSidebar}>

        <div className={"animate"}>
          <div className={SidebarStyles.divider}/>
          <div className={SidebarStyles.stickyTitle}>
            <h2 className={SidebarStyles.title}>Featured Projects</h2>
            <p className={[SidebarStyles.sidebarDescription].join(" ")}>
              I specialize in building beautiful <em>Full Stack</em> apps integrated
              with <em>Machine Learning</em>.
            </p>
            <div className={SidebarStyles.skills}>
              <section className={SidebarStyles.skillsSection}>
                <div className={SidebarStyles.chipStrong}><FaReact className={SidebarStyles.icon}/> React.js</div>
                <div className={SidebarStyles.chipStrong}><FaFlask className={SidebarStyles.icon}/> Flask</div>
                <div className={SidebarStyles.chipStrong}><FaNodeJs className={SidebarStyles.icon}/> Node.js</div>
                <div className={SidebarStyles.chipStrong}><DiMongodb className={SidebarStyles.icon}/> MongoDB</div>
              </section>

              <section className={SidebarStyles.skillsSection}>
                <div className={SidebarStyles.chip}><FaJava className={SidebarStyles.icon}/> Java</div>
                <div className={SidebarStyles.chip}>C / C++</div>
                <div className={SidebarStyles.chip}><FaPython className={SidebarStyles.icon}/> Python</div>
                <div className={SidebarStyles.chip}><FaJsSquare className={SidebarStyles.icon}/> Javascript</div>
                <div className={SidebarStyles.chip}><FaCss3Alt className={SidebarStyles.icon}/> HTML5 / CSS3</div>
              </section>

              <section className={SidebarStyles.skillsSection}>
                <div className={SidebarStyles.chipWeak}>Machine Learning</div>
                <div className={SidebarStyles.chipWeak}><FaLayerGroup className={SidebarStyles.icon}/> Full Stack</div>
                <div className={SidebarStyles.chipWeak}><FaRobot className={SidebarStyles.icon}/> Robotics</div>
                <div className={SidebarStyles.chipWeak}>Software Engineering</div>
              </section>
            </div>
          </div>
        </div>
      </Sidebar>

      <Content className={`${ContentStyles.workContent} animate`}>
        <WorkSnippet
          title="Picture This"
          subtitle={"App that crowd-sources affordable attractions around town. Uses a React Native and Flask + MongoDB stack"}
          // body="CRUD application that "
          image={data.phoneTest.childImageSharp.fluid}
          linkText="Visit Github"
          link="https://github.com/txconvergent/s20-community-culture"
          superSnippet
        />
        <WorkSnippet
          title="Kinetic Keys"
          subtitle={"Pose Detection game implemented in React.js and Tensorflow.js; Showcased at Convergent Side-Project Expo"}
          body="I love cheese, especially queso cheese strings. Brie cheese and biscuits rubber cheese stinking bishop st."
          image={data.computerTest.childImageSharp.fluid}
          link="https://kinetickeys.netlify.com/"
        />
        <WorkSnippet
          title="Paragon"
          subtitle={"Slackbot that monitors channels for aggressive behaviour using Natural Language Processing; Uses React.js and Node + MongoDB stack."}
          body="Provost aye swing the lead lugger Letter of Marque Admiral of the Black dance the hempen jig draft loot hearties."
          image={data.wireframeTest.childImageSharp.fluid}
          linkText={"View Github"}
          link="https://github.com/PranavRayudu/Aggression-Chat-Reporter-LeapHacks2020"
        />
        <WorkSnippet
          title="Hurricane Hero"
          subtitle={"Hurricane damage detector and reported implemented using React.js and Flask + CNN classifier running on Azure Cloud"}
          body="Macaroon gingerbread gummies oat cake chocolate bar chocolate powder."
          linkText={"View Github"}
          image={data.phoneTest.childImageSharp.fluid}
          link="https://github.com/sahiljain11/HACKTX19"
        />
        <WorkSnippet
          title="Realtime Identity Tracking Research"
          // subtitle={"Developed and benchmarked software on top YOLOv3 and Deepsort to recognize and track people; written in Python"}
          body="Developed and benchmarked software on top YOLOv3 and Deepsort to recognize and track people; written in Python"
          linkText={"Read Paper"}
          link="https://google.com"
        />
        <WorkSnippet
          title="Neural Net for MNIST dataset"
          subtitle={"Self-contained multilayer perceptron written in C++"}
          // body="I love cheese, especially queso cheese strings. Brie cheese and biscuits rubber cheese stinking bishop st."
          linkText={"View Github"}
          link="https://github.com/PranavRayudu/FeedforwardNeuralNetwork"
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
