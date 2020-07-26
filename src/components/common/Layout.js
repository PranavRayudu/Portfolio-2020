import React from "react"
import { Grid, ReverseGrid } from "../grid/MainGrid"
import ContentStyles from "../../styles/content.module.scss"
import Sidebar from "../grid/MainGridSidebar"
import LandingSidebar from "./LandingSidebarContent"
import SidebarStyles from "../../styles/sidebar.module.scss"
import Content from "../grid/MainGridContent"

export default ({ link, linkText, hero, sidebar, children }) => (
  <>
    <Grid>
      <LandingSidebar link={link} linkText={linkText}/>
      <Content className={`${ContentStyles.heroContent} animate`}>
        {hero}
      </Content>
    </Grid>

    <ReverseGrid className={ContentStyles.bodyContentContainer}>
      <Sidebar className={`${SidebarStyles.sidebar} ${SidebarStyles.infoSidebar}`}>
        {sidebar}
      </Sidebar>

      {children}
    </ReverseGrid>
  </>
)
