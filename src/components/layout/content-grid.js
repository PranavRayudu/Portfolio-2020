import React from "react"
import contentStyles from "./grid.module.scss"


export default ({children}) => (
    <div className={contentStyles.content}>
        <div className={contentStyles.innerContent}>
            {children}
        </div>
    </div>
)