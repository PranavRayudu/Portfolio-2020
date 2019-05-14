import React from "react"
import sidebarStyles from "./grid.module.scss"


export default ({children}) => (
    <div className={sidebarStyles.sidebar}>
        <div className={sidebarStyles.sidebarContent}>
            {children}
        </div>
    </div>
)