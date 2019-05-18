import React from "react"
import { Link } from "gatsby"
import { Grid } from "../components/layout/main-grid"
import Sidebar from "../components/layout/main-grid-sidebar"
import Content from "../components/layout/main-grid-content"
import MainPageStyles from "../styles/main-page.module.scss"

import { IoIosHome, IoLogoGithub, IoLogoLinkedin, IoMdLocate, IoMdMail } from "react-icons/io"

export default () => (
  <div>
    <Grid>
      <Sidebar className={MainPageStyles.sidebarIntro}>

        <div className={MainPageStyles.iconGrid}>
          <IoMdMail className={MainPageStyles.icon}/> <span>tarakapranav@gmail.com</span>
          <IoMdLocate className={MainPageStyles.icon}/> <span>Austin, TX USA</span>
          <IoIosHome  className={MainPageStyles.icon}/> <Link className="vertical-std-padded" to="/">Back to Home</Link>
        </div>

        <div>
          <a href="https://www.linkedin.com/in/tarakapranav/"><IoLogoLinkedin className="io"/></a>
          <a href="https://github.com/FancyAlpha" className={MainPageStyles.githubLeftMargin}><IoLogoGithub className="io"/></a>
        </div>
        {/*<Link to="/blog">> Blog</Link>*/}
      </Sidebar>

      <Content>
        <h1 className={MainPageStyles.title}><span className="fg--aqua">Pranav Rayudu</span></h1>
        <p className={MainPageStyles.description}>
          I am a student at the University of Texas @ Austin. I like creating stuff. Also, here is some filler text about aliens:
          Ancient alien foo fighter sun disc, the answer is a resounding YES... Ancient alien space time Mayan, grey space time Vymaanika-Shaastra DNA manipulation. The answer is a resounding YES..., Worm hole flying vessels extraterrestrial origin, extraterrestrial origin alien space time. Mahabharata NASA worm hole,, the answer is a resounding YES....
        </p>
      </Content>
    </Grid>
  </div>
)
