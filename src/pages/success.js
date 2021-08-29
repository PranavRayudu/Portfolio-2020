import React from "react"
import { Link } from "gatsby"
import {container, contents, title, subtitle } from "../styles/status-page.module.scss"

export default function Success() {
  return <div className={container}>
    <div className={contents}>
      <h1 className={title}>Thank you!</h1>
      <p className={subtitle}>
        I will get back to you soon. Until then,{" "}
        <Link to="/">go back home.</Link>
      </p>
    </div>
  </div>
}
