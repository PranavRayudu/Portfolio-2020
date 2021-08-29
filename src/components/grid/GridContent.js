import React from "react"
import { content } from "./grid.module.scss"

export default function gridContent(props) {
  return (
  <div
    className={`${content} ${props.className}`}
    style={props.style}>
    {props.children}
  </div>)
}
