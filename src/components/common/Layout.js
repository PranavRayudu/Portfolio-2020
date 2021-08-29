import React from "react"
import { Grid, ReverseGrid } from "../grid/Grid"
import Sidebar from "../grid/GridSidebar"
import LandingSidebar from "./LandingSidebar"
import { sidebar, infoSidebar } from "./sidebar.module.scss"
import Content from "../grid/GridContent"
import { heroContent, bodyContentContainer, bodyContent } from "./content.module.scss"

export default function Layout({ link, linkText, hero, sidebarContent, contentClass, children }) {
  return (
    <>
      <Grid>
        <LandingSidebar link={link} linkText={linkText} />
        <Content className={`${heroContent} animate`}>
          {hero}
        </Content>
      </Grid>

      <ReverseGrid className={bodyContentContainer}>
        <Sidebar
          className={`${sidebar} ${infoSidebar}`}
        >
          {sidebarContent}
        </Sidebar>
        <Content
          className={`${bodyContent} ${contentClass} animate`}
        >
          {children}
        </Content>
      </ReverseGrid>
    </>
  )
}
