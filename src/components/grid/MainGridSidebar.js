import React from "react"
import gridStyles from "./grid.module.scss"

export default props => (
  <div className={`${props.className} ${gridStyles.sidebar}`}>
    {props.children}
  </div>
)
