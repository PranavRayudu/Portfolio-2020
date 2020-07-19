import React from "react"
import LandingSidebar from "./LandingSidebarContent"
import { Grid, ReverseGrid } from "../grid/MainGrid"
import ContentStyles from "../../styles/content.module.scss"
import Content from "../grid/MainGridContent"
import Sidebar from "../grid/MainGridSidebar"
import SidebarStyles from "../../styles/sidebar.module.scss"

export default ({ link, linkText, hero, sidebar, children }) => (
  <>
    <Grid>
      <LandingSidebar link={link} linkText={linkText}/>
      {hero}
    </Grid>

    <ReverseGrid className={ContentStyles.contentContainer}>
      <Sidebar className={SidebarStyles.infoSidebar}>
        {sidebar}
      </Sidebar>

      {children}
    </ReverseGrid>
  </>
)
