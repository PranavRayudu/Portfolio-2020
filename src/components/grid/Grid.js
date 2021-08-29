import React from "react"
import { gridStraight, gridReverse } from "./grid.module.scss"

function Grid(props) {
  return (
    <main className={`${gridStraight} ${props.class}`}>
      {props.children}
    </main>
  )
}

function ReverseGrid(props) {
  return (
    <main className={`${gridReverse} ${props.className}`}>
      {props.children}
    </main>
  )
}

export { Grid, ReverseGrid }
