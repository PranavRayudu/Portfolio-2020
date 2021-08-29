import React from "react"
import Layout from "../components/common/Layout"
import * as PageStyles from "../styles/pages.module.scss"

import { MdSend } from "react-icons/md"
import { FaPaintBrush, FaBiking, FaMicrochip } from "react-icons/fa"
import { graphql } from "gatsby"

function Hero({ data }) {
  return (
    <>
      <h1 className={PageStyles.title}>
        {data.markdownRemark.frontmatter.title}
      </h1>
      <div
        className={PageStyles.description}
        id={data.markdownRemark.id}
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      />

      <p className={PageStyles.iconList}>
        <span>
          <FaPaintBrush className={"icon"} />
        </span>
        <span>
          <FaBiking className={"icon"} />
        </span>
        <span>
          <FaMicrochip className={"icon"} />
        </span>
      </p>
    </>
  )
}

function SidebarContent() {
  return (
    <div className={"animate"}>
      <div className={PageStyles.divider} />

      <div className={PageStyles.stickyTitle}>
        <h2>Let's Talk</h2>
        <p> {/**className={PageStyles.sidebarDescription}>**/}
          I am always open for opportunities in Full-Stack engineering,
          Mobile/Web development, or Machine Learning. Or,{" "}
          <a href={"mailto:tarakapranav@gmail.com"}>email me</a>.
        </p>
      </div>
    </div>
  )
}

export default function About({ data }) {
  return (
  <Layout
    link={"/"}
    linkText={"Go Home"}
    hero={<Hero data={data} />}
    sidebar={<SidebarContent />}
    contentClass={PageStyles.aboutFormContent}
  >
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
      <input type="hidden" name="form-name" value="Contact Form" />
      <p hidden>
        <label>
          Humans, don't fill this out: <input name="bot-field" />
        </label>
      </p>

      <input
        type="text"
        name="name"
        aria-label={"name entry"}
        placeholder="Name *"
        pattern="^([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+$"
        onFocus={(e) => (e.target.placeholder = "")}
        onBlur={(e) => (e.target.placeholder = "Name *")}
        // className={ContentStyles.nameInput}
        required
      />

      <input
        type="email"
        aria-label={"email entry"}
        name="email"
        placeholder="Email *"
        onFocus={(e) => (e.target.placeholder = "")}
        onBlur={(e) => (e.target.placeholder = "Email *")}
        // className={ContentStyles.emailInput}
        required
      />

      <textarea
        name="message"
        aria-label={"message entry"}
        placeholder="Enter your message here *"
        onFocus={(e) => (e.target.placeholder = "")}
        onBlur={(e) => (e.target.placeholder = "Enter your message here *")}
        required
      />
      <button type="submit" className={PageStyles.submit}>
        SEND&nbsp;
        <MdSend className={"icon"} />
      </button>
    </form>
    {/*</Content>*/}
  </Layout>
)}

export const query = graphql`
  {
    markdownRemark(fileAbsolutePath: { regex: "/about/" }) {
      frontmatter {
        title
      }
      html
      id
    }
  }
`
