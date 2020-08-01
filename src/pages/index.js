import React from "react"
import { Link } from "gatsby"
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
  FaCss3Alt,
} from "react-icons/fa"
import { DiMongodb } from "react-icons/di"

function Hero() {
  return (
    <>
      <h1 className={PageStyles.title}>
        Hello, I'm <br/><Link to="/about">Pranav Rayudu</Link>
      </h1>
      <h2 className={PageStyles.description}>
        I'm a full-stack developer who loves building robots and creative programming.
        <br/>

        <Link to="/about#contact-form">Let's talk.</Link>
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
          </section>

          <section className={PageStyles.skillsSection}>
            <div className={PageStyles.chip}><FaJava className={"icon"}/> Java</div>
            <div className={PageStyles.chip}>C / C++</div>
            <div className={PageStyles.chip}><FaPython className={"icon"}/> Python</div>
            <div className={PageStyles.chip}><FaJsSquare className={"icon"}/> Javascript</div>
            <div className={PageStyles.chip}><FaCss3Alt className={"icon"}/> HTML5 / CSS3</div>
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

export default () => (
  <Layout
    link={"/about"}
    linkText={"About Me"}

    hero={<Hero/>}
    sidebar={<SidebarContent/>}
    contentClass={PageStyles.workContent}>
    <>
      <WorkSnippet
        title="Picture This"
        subtitle={"App that crowd-sources affordable attractions around town. Uses a React Native and Flask + MongoDB stack"}
        // body="CRUD application that "
        image={"images/smartphone-with-application.jpg"}
        linkText="Visit Github"
        link="https://github.com/txconvergent/s20-community-culture"
        superSnippet
      />
      <WorkSnippet
        title="Kinetic Keys"
        subtitle={"Pose Detection game implemented in React.js and Tensorflow.js; Showcased at Convergent Side-Project Expo"}
        body="I love cheese, especially queso cheese strings. Brie cheese and biscuits rubber cheese stinking bishop st."
        image={"images/computer-mockup-test.jpg"}
        link="https://kinetickeys.netlify.com/"
      />
      <WorkSnippet
        title="Paragon"
        subtitle={"Slackbot that monitors channels for aggressive behaviour using Natural Language Processing; Uses React.js and Node + MongoDB stack."}
        body="Provost aye swing the lead lugger Letter of Marque Admiral of the Black dance the hempen jig draft loot hearties."
        image={"images/website-wireframe-test.jpg"}
        linkText={"View Github"}
        link="https://github.com/PranavRayudu/Aggression-Chat-Reporter-LeapHacks2020"
      />
      <WorkSnippet
        title="Hurricane Hero"
        subtitle={"Hurricane damage detector and reported implemented using React.js and Flask + CNN classifier running on Azure Cloud"}
        body="Macaroon gingerbread gummies oat cake chocolate bar chocolate powder."
        linkText={"View Github"}
        image={"images/smartphone-with-application.jpg"}
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
    </>
  </Layout>
)
