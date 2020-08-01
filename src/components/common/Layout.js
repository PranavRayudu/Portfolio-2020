import React from "react"
import { Grid, ReverseGrid } from "../grid/Grid"
import Sidebar from "../grid/GridSidebar"
import LandingSidebar from "./LandingSidebar"
import SidebarStyles from "./sidebar.module.scss"
import Content from "../grid/GridContent"
import ContentStyles from "./content.module.scss"

export default ({ link, linkText, hero, sidebar, contentClass, children }) => (
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
      <Content className={`${ContentStyles.bodyContent} ${contentClass} animate`}>
        {children}
      </Content>
    </ReverseGrid>
  </>
)
