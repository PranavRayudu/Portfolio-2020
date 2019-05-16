import React from "react"
import SnippetStyles from "../styles/snippet.module.scss"

export default props => (
  <div className={SnippetStyles.snippet}>
    <h1 className={SnippetStyles.title}>{props.title}</h1>
    <h2 className={SnippetStyles.subtitle}>{props.subtitle}</h2>
    <p className={SnippetStyles.text}>{props.body}</p>
    <a href={props.link}>Visit Site</a>
  </div>
)
