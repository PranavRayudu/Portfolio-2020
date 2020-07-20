import "./src/styles/normalize.css"
import "./src/styles/global.scss"

const transitionDelay = 250

export const shouldUpdateScroll =
  ({
     routerProps: { location },
     getSavedScrollPosition,
   }) => {
    if (location.action === "PUSH") {
      window.setTimeout(() => window.scrollTo(0, 0), transitionDelay)
    } else {
      if (location.hash) {
        window.setTimeout(scrollTo(location.hash), 10)
      } else {
        const savedPosition = getSavedScrollPosition(location)
        window.setTimeout(
          () => window.scrollTo(...(savedPosition || [0, 0])),
          transitionDelay,
        )
      }
    }
    return false
  }

/* global window, document */
const scrollTo = (id) => () => {
  const el = document.querySelector(id)
  if (el) window.scrollTo({ top: el.offsetTop - 40, behavior: "smooth" })
}
