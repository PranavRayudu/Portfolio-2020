import React from "react"

export default props => (
  <header>
    <h1>
      {props.title}
    </h1>

    <p>
      {props.body}
    </p>
  </header>
)