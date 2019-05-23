import React from "react"
import masterGridStyles from "./grid.module.scss"

class Grid extends React.Component {
  render() {
    return (
      <main className={masterGridStyles.gridStraight}>
        {this.props.children}
      </main>
    )
  }
}

class ReverseGrid extends React.Component {
  render() {
    return (
      <main className={masterGridStyles.gridReverse}>
        {this.props.children}
      </main>
    )
  }
}

export { Grid, ReverseGrid }
