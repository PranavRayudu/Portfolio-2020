import React from "react"
import { Link } from "gatsby"
import {container, contents, title, subtitle} from "../styles/status-page.module.scss"

export default function error() {
  return (
  <div className={container}>
    <div className={contents}>
      <h1 className={title}>Error 404</h1>
      <p className={subtitle}>
        Couldn't find the page. <Link to="/">Go back home.</Link>
      </p>
    </div>
  </div>
)}
