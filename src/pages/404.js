import React from "react"
import { Link } from "gatsby"
import ErrorPageStyles from "../styles/alt-page.module.scss"

export default () => (
  <div className={ErrorPageStyles.container}>
    <div className={ErrorPageStyles.contents}>
      <h1 className={ErrorPageStyles.title}>Error 404</h1>
      <p className={ErrorPageStyles.subtitle}>Couldn't find the page. <Link to="/">Go back home.</Link></p>
    </div>
  </div>
)
