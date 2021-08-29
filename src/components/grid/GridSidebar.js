import React from "react"
import { sidebar } from "./grid.module.scss"

export default function gridSidebar(props) {
  return (
    <div className={`${props.className} ${sidebar}`}>
      {props.children}
    </div>
  )
}
