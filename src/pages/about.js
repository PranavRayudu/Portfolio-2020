import React from "react"
import Layout from "../components/common/Layout"
import PageStyles from "../styles/pages.module.scss"

import { MdSend } from "react-icons/md"
import { FaPaintBrush, FaBiking, FaMicrochip } from "react-icons/fa"

function Hero() {
  return (
    <>
      <h1 className={PageStyles.title}>Pranav Rayudu</h1>
      <div className={PageStyles.description}>
        <p>
          Pranav is a freshman at the University of Texas at Austin passionately
          pursuing his B.S in Computer Science. He has been practicing web
          design and programming since high school and has programmed in Java,
          C#, Python, PHP, and Javascript and used various front-end web
          frameworks and tools such as{" "}
          <a href="https://reactjs.org/">React.js</a>,{" "}
          <a href="https://p5js.org/">p5.js</a>,{" "}
          <a href="https://processing.org">Processing</a>,{" "}
          <a href="https://unity.com/">Unity Engine</a>,{" "}
          <a href="https://dotnet.microsoft.com/apps/desktop">
            .NET WPF Desktop Apps
          </a>
          , and more.
        </p>

        <p>

          Pranav placed 1<sup>st</sup> in the State and 4
          <sup>th</sup> at Nationals for <a href="https://bpa.org/nlc/">BPA</a>{" "}
          C# programming event and led team 7121's robot to the{" "}
          <a href="https://www.firstchampionship.org/houston">
            First Robotics (FRC) World Championships
          </a>{" "}
          in 2019 as the lead programmer.
        </p>

        <p>
          He also prefers diving right into the
          meat of any project and loves working on creative ideas like
          procedural terrain generation, particle effects, AI, and hardware like
          Arduino.
        </p>
      </div>

      <p className={PageStyles.iconList}>
        <span><FaPaintBrush className={"icon"}/></span>
        <span><FaBiking className={"icon"}/></span>
        <span><FaMicrochip className={"icon"}/></span>
      </p>
    </>
  )
}

function SidebarContent() {
  return (<div className={"animate"}>
    <div className={PageStyles.divider}/>

    <div className={PageStyles.stickyTitle}>
      <h2>Let's Talk</h2>
      <p className={PageStyles.sidebarDescription}>
        I am open to commissions for small websites, internships over the
        summer, or research projects. Shoot me a message and I'll get back
        to you!
      </p>
    </div>
  </div>)
}

export default () => (
  <Layout
    link={"/"}
    linkText={"Go Home"}
    hero={<Hero/>}
    sidebar={<SidebarContent/>}
    contentClass={PageStyles.aboutFormContent}>

      <form
        action="/success"
        method="POST"
        encType="application/x-www-form-urlencoded"
        className={PageStyles.form}
        id="contact-form"
        name="Contact Form"
        autoComplete="on"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        {
          // GET: see vars in address bar
          // POST: cannot see vars in address bar
        }
        <input type="hidden" name="form-name" value="Contact Form"/>
        <p hidden>
          <label>
            Humans, don't fill this out: <input name="bot-field"/>
          </label>
        </p>

        <input
          type="text"
          name="name"
          aria-label={"name entry"}
          placeholder="Name *"
          pattern="^([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+$"
          onFocus={e => (e.target.placeholder = "")}
          onBlur={e => (e.target.placeholder = "Name *")}
          // className={ContentStyles.nameInput}
          required
        />

        <input
          type="email"
          aria-label={"email entry"}
          name="email"
          placeholder="Email *"
          onFocus={e => (e.target.placeholder = "")}
          onBlur={e => (e.target.placeholder = "Email *")}
          // className={ContentStyles.emailInput}
          required
        />

        <textarea
          name="message"
          aria-label={"message entry"}
          placeholder="Enter your message here *"
          onFocus={e => (e.target.placeholder = "")}
          onBlur={e => (e.target.placeholder = "Enter your message here *")}
          required
        />
        <button type="submit" className={PageStyles.submit}>
          SEND&nbsp;<MdSend className={"icon"}/>
        </button>
      </form>
    {/*</Content>*/}
  </Layout>
)
