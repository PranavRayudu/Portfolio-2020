import React from "react"
import { graphql, Link } from "gatsby"
import { Grid } from "../components/layout/MainGrid"
import Sidebar from "../components/layout/MainGridSidebar"
import Content from "../components/layout/MainGridContent"
import MainPageStyles from "../styles/main-page.module.scss"

import { IoIosArrowBack, IoLogoGithub, IoLogoLinkedin } from "react-icons/io"

export default ({ data }) => (
  <div>
    <Grid>
      <Sidebar className={MainPageStyles.sidebarIntro}>
        <div>
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
  }
`
