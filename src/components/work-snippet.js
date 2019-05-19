import React from "react"
import Img from "gatsby-image"
import SnippetStyles from "../styles/snippet.module.scss"

export default ({title, subtitle, body, image, link}) => (
  <div className={SnippetStyles.snippet}>
      {image && (<Img fluid={image} />)}
    <h1 className={SnippetStyles.title}>{title}</h1>
    <h2 className={SnippetStyles.subtitle}>{subtitle}</h2>
    <p className={SnippetStyles.text}>{body}</p>

    <a href={link} target="_blank" rel="noopener noreferrer">Visit Site</a>
  </div>
)
