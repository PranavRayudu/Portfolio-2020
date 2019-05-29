import React from "react"
import { Link } from "gatsby"
import ErrorPageStyles from "../styles/alt-page.module.scss"

export default () => (
  <div className={ErrorPageStyles.container}>
    <div className={ErrorPageStyles.contents}>
      <h1 className={ErrorPageStyles.title}>Thank you!</h1>
      <p className={ErrorPageStyles.subtitle}>I will get back to you soon. Until then, <Link to="/">go back home.</Link></p>
    </div>
  </div>
)
