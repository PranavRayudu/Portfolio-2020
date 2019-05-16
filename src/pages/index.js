import React from "react"
import {Link} from "gatsby"
import Grid from "../components/layout/main-grid"
import Sidebar from "../components/layout/main-grid-sidebar"
import Content from "../components/layout/main-grid-content"
import MainPageStyles from "../styles/main-page.module.scss"
import WorkSnippet from "../components/work-snippet"
import BlogSnippet from "../components/blog-snippet"

import {IoLogoLinkedin, IoLogoGithub} from "react-icons/io"
import {IoMdMail, IoMdLocate, IoIosArrowForward} from "react-icons/io"


// import Sidebar from "../components/layout/sidebar"
/**
 * Follow tutorial @ https://www.gatsbyjs.org/tutorial/part-one/#linking-between-pages
 */



/**
 * Refactor icon grid to fit all content on sidebar
 * TODO: [suggestion] let sidebar be sticky until scrolled and let colors be chosen
**/

export default () => (
    <div>
      <Grid>
            <Sidebar className={MainPageStyles.sidebarIntro}>

              <div className={MainPageStyles.iconGrid}>
                <IoMdMail className={MainPageStyles.icon}/> <span>tarakapranav@gmail.com</span>
                <IoMdLocate className={MainPageStyles.icon}/> <span>Austin, TX USA</span>
                <IoIosArrowForward  className={MainPageStyles.icon}/> <Link className="vertical-std-padded" to="/about">About Me</Link>
              </div>


              <div>
                <a href="https://www.linkedin.com/in/tarakapranav/"><IoLogoLinkedin className="io"/></a>
                <a href="https://github.com/FancyAlpha" className={MainPageStyles.githubLeftMargin}><IoLogoGithub className="io"/></a>
              </div>
              {/*<Link to="/blog">> Blog</Link>*/}
            </Sidebar>

            <Content>
              <h1 className={MainPageStyles.title}>Hello, I'm <span className="fg--pastel-red">Pranav Rayudu</span></h1>
              <h2 className={MainPageStyles.description}>
                I build websites and love working on robots and creative programming projects.
              </h2>
            </Content>
        </Grid>

      <Grid>
        <Sidebar className={MainPageStyles.sidebarWork}>
          <h2>A bunch of stuff I did</h2>
        </Sidebar>

        <Content className={MainPageStyles.workGrid}>
          <WorkSnippet title="Yar Pirate Ipsum"
                       subtitle="Pirate Ipsum"
                       body="Provost aye swing the lead lugger Letter of Marque Admiral of the Black dance the hempen jig draft loot hearties. Walk the plank scuppers lee cackle fruit Davy Jones' Locker chandler fore gun landlubber or just lubber carouser."
                       link="https://google.com" />
          <WorkSnippet title="Tired of how boring Lorem Ipsum got?"
                       subtitle="Cupcake Ipsum"
                       body="Macaroon gingerbread gummies oat cake chocolate bar chocolate powder. Sweet croissant cupcake croissant jujubes. Gummi bears macaroon pastry sesame snaps pudding cheesecake gingerbread."
                       link="https://google.com" />
          <WorkSnippet title="Cheese Ipsum"
                       subtitle="A Cheesy Lorem Ipsum Generator"
                       body="I love cheese, especially queso cheese strings. Brie cheese and biscuits rubber cheese stinking bishop st. agur blue cheese manchego cheese strings red leicester. Cheesy grin the big cheese fondue hard cheese ricotta queso monterey jack feta."
                       link="https://google.com" />
        </Content>
      </Grid>


      <Grid>
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
      </Grid>
    </div>
)