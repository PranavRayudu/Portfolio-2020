import { animated, useSpring } from "react-spring"
import { Link } from "gatsby"
import SidebarStyles from "../../styles/sidebar.module.scss"
import React from "react"

export default function({ to, children }) {
  const sensitivity = 0.3
  let bounds = [250, 110, 100, 140] // estimates only, need link's ref to ne valid

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

  const calc = (x, y) => [
    x - bounds[0] - (bounds[2] / 2),
    y - bounds[1] - (bounds[3] / 2)]

  const trans = (x, y) => `
    perspective(${bounds[2]}px) 
    rotateY(${clamp(x, -90, 90) * sensitivity}deg) 
    rotateX(${clamp(-y, -90, 90) * sensitivity}deg) scale(1)`
  // `translate3d(${x * sensitivity}px,${y * sensitivity}px,0)`

  const [pos, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }))

  const AnimatedLink = animated(Link)

  return (
    <AnimatedLink
      to={to}
      className={SidebarStyles.logoLink}
      aria-label={"Pranav Rayudu's Logo"}
      ref={el => {
        if (!el) return

        let bound = el.getBoundingClientRect()
        bounds = [bound.x, bound.y, bound.width, bound.height]
      }}

      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      onMouseLeave={() => set({ xy: [0, 0] })}
      style={{ transform: pos.xy.interpolate(trans) }}>
      {children}
    </AnimatedLink>
  )
}
