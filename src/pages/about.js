import React from "react"
import { graphql, Link } from "gatsby"
import { Grid, ReverseGrid } from "../components/layout/MainGrid"
import Sidebar from "../components/layout/MainGridSidebar"
import Content from "../components/layout/MainGridContent"
import MainPageStyles from "../styles/main-page.module.scss"

import { IoIosArrowBack, IoLogoGithub, IoLogoLinkedin } from "react-icons/io"
import GatsbyImage from "gatsby-image"

export default ({ data }) => (
  <div>
    <Grid>
      <Sidebar className={MainPageStyles.sidebarAbout}>
        <div>
          <Link to="./">
            <GatsbyImage
              fluid={data.logo.childImageSharp.fluid}
              className={MainPageStyles.sidebarLogo}
            />
          </Link>

          <div>
            <span>tarakapranav@gmail.com</span>
            <br />
            <span>Austin, TX USA</span>
          </div>

          <p>
            <Link to="./">Home</Link>
            <IoIosArrowBack className={MainPageStyles.icon} />
            <br />
          </p>

          <div className="bottom-std-padded">
            <a
              href="https://www.linkedin.com/in/tarakapranav/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoLinkedin className="io" />
            </a>
            <a
              href="https://github.com/FancyAlpha"
              target="_blank"
              rel="noopener noreferrer"
              className={MainPageStyles.githubLeftMargin}
            >
              <IoLogoGithub className="io" />
            </a>
          </div>

          <p className="no-margin">Recent Posts</p>

          <div>
            {data.allMarkdownRemark.edges.slice(0, 5).map(({ node }) => (
              <React.Fragment>
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
      <Content className={MainPageStyles.aboutContent}>
        <h1 className={MainPageStyles.title}>Pranav Rayudu</h1>
        <h2 className={MainPageStyles.description}>
          I am a student at the University of Texas @ Austin. I like creating
          stuff. Also, here is some filler text about aliens: Ancient alien foo
          fighter sun disc, the answer is a resounding YES... Ancient alien
          space time Mayan, grey space time Vymaanika-Shaastra DNA manipulation.
          The answer is a resounding YES..., Worm hole flying vessels
          extraterrestrial origin, extraterrestrial origin alien space time.
          Mahabharata NASA worm hole,, the answer is a resounding YES....
        </h2>
      </Content>
    </Grid>

    <ReverseGrid>
      <Sidebar className={MainPageStyles.sidebarWork}>
        <div className={MainPageStyles.sidebarDivider} />

        <div className={MainPageStyles.stickyTitle}>
          <h2>Contact Me</h2>
        </div>
      </Sidebar>

      <Content className={MainPageStyles.aboutContent}>
        <form
          action="/success"
          method="get"
          className={MainPageStyles.form}
          autoComplete="on"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          {
            // GET: see vars in address bar
            //  POST: cannot see vars in address bar
          }

          <div className={MainPageStyles.inputGroup}>
            <input
              type="text"
              name="name"
              placeholder="Your Name Here"
              pattern="^([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+$"
              onFocus={e => (e.target.placeholder = "")}
              onBlur={e => (e.target.placeholder = "Your Name here")}
              className={MainPageStyles.nameInput}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onFocus={e => (e.target.placeholder = "")}
              onBlur={e => (e.target.placeholder = "Email Address")}
              className={MainPageStyles.emailInput}
              required
            />
            <textarea
              name="message"
              placeholder="Enter your message here"
              onFocus={e => (e.target.placeholder = "")}
              onBlur={e => (e.target.placeholder = "Enter your message here")}
              required
            />
          </div>
          <input
            type="submit"
            value="submit"
            className={MainPageStyles.submit}
          />
        </form>
      </Content>
    </ReverseGrid>
  </div>
)

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
  }
`
