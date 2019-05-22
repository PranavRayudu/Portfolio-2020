import React from "react"
import sidebarStyles from "./grid.module.scss"

export default props => (
    <div className={[props.className, sidebarStyles.sidebar].join(' ')}>
            {props.children}
    </div>
)