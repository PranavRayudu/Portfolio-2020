import React from "react"
import contentStyles from "./grid.module.scss"

export default props => (
  <div className={[contentStyles.content, props.className].join(" ")}>
    {props.children}
  </div>
)