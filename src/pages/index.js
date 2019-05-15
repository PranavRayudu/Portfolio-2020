import React from "react"
import style from "styled-components"
import {Link} from "gatsby"
import Grid from "../components/layout/master-grid"
import Sidebar from "../components/layout/sidebar-grid"
import Content from "../components/layout/content-grid"
import BlogSnippet from "../components/blog-snippet"

import {IoLogoLinkedin} from "react-icons/io"
import {IoLogoGithub} from "react-icons/io"

import {IoMdMail} from "react-icons/io"
import {IoMdLocate} from "react-icons/io"

// import Sidebar from "../components/layout/sidebar"
/**
 * Follow tutorial @ https://www.gatsbyjs.org/tutorial/part-one/#linking-between-pages
 */


const Title = style.h1`
  font-size: 5em;
`;
const Subtitle = style.h2`
  margin-top: 2em;
  //font-size: 1em;
  line-height: 1.5em;
  font-weight: normal;
  
  color: grey;
  
  max-width:  900px;
`;

/** TODO: gridify this to align icons properly
 * TODO: add separate stylesheet for index and about pages
 * TODO: let sidebar be sticky until scrolled and let colors be chosen
**/

export default () => (
    <div>
      <Grid>
            <Sidebar>
                <h3>Contact Me</h3>


                <p><IoMdMail/> tarakapranav@gmail.com</p>
                <p><IoMdLocate/> Austin, TX USA</p>

              <p>
                <a href="https://www.linkedin.com/in/tarakapranav/"><IoLogoLinkedin className="io"/></a>
                <a href="https://github.com/FancyAlpha"><IoLogoGithub className="io"/></a>
              </p>

              <Link to="/about">> About Me</Link>
            </Sidebar>

            <Content>

              <Title>Hello, I'm <span className="highlight">Pranav Rayudu</span></Title>
              <Subtitle>I build websites and love working on robots or creative programming projects.
                        I am a student at the University of Texas @ Austin studying CS.</Subtitle>
            </Content>
        </Grid>

      <Grid>
        <Sidebar>
          <h3>A bunch of stuff I do</h3>
        </Sidebar>

        <Content>

          <BlogSnippet title="Testing" subtitle="actually tho" body="This is a test" />
        </Content>
      </Grid>
    </div>
)