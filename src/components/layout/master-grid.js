import React from "react"
import masterGridStyles from "./grid.module.scss"

export default ({children}) => (
    <main className={masterGridStyles.grid}>
        {children}
    </main>
)