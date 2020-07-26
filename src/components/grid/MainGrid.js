import React from "react"
import masterGridStyles from "./grid.module.scss"

function Grid(props) {

  return (
    <main className={`${masterGridStyles.gridStraight} ${props.class}`}>
      {props.children}
    </main>
  )
}

function ReverseGrid(props) {

  return (
    <main className={`${masterGridStyles.gridReverse} ${props.className}`}>
      {props.children}
    </main>
  )
}

export { Grid, ReverseGrid }
