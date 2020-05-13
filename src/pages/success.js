import React from "react"
import { Link } from "gatsby"
import SuccessPageStyles from "../styles/status-page.module.scss"

export default () => (
  <div className={SuccessPageStyles.container}>
    <div className={SuccessPageStyles.contents}>
      <h1 className={SuccessPageStyles.title}>Thank you!</h1>
      <p className={SuccessPageStyles.subtitle}>I will get back to you soon. Until then, <Link to="/">go back home.</Link></p>
    </div>
  </div>
)
