import React from "react"
import { TransitionGroup, CSSTransition } from "react-transition-group"

const timeout = 250

class Animate extends React.PureComponent {
  render() {
    const { children, pathname } = this.props

    return (
      <TransitionGroup>
        <CSSTransition
          key={pathname}
          timeout={{
            enter: timeout,
            exit: timeout,
          }}
          classNames={"animateContainer"}
        >
          <div>{children}</div>
        </CSSTransition>
      </TransitionGroup>
    )
  }
}

export default Animate
