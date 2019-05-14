import React from "react"
import styles from "styled-components"

const Button = styled.a`
    
`

export default ({children}) => (
    <Button className={ButtonStyles.button}>{children}</Button>
)