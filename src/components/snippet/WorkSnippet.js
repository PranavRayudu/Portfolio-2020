import React from "react"
import Img from 'gatsby-image'
import SnippetStyles from "./snippet.module.scss"

export default ({ title, subtitle, body, image, link, delay }) => (
  <div className={SnippetStyles.snippet} data-sal={"slide-up"} data-sal-delay={delay}>
    {image && <Img fluid={image} className={SnippetStyles.img}/>}
    <h1 className={SnippetStyles.title}>{title}</h1>
    <p className={SnippetStyles.text}>{body}</p>

    <a href={link} target="_blank" rel="noopener noreferrer">
      Visit Site
    </a>
  </div>
)
