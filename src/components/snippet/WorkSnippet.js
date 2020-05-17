import React from "react"
import Img from "gatsby-image"
import SnippetStyles from "./snippet.module.scss"
import { useTransition, animated } from "react-spring"
import { DialogOverlay, DialogContent } from "@reach/dialog"
import "@reach/dialog/styles.css"

function WorkSnippet(props) {

  const AnimatedDialogOverlay = animated(DialogOverlay)
  const AnimatedDialogContent = animated(DialogContent)
  const [showDialog, setShowDialog] = React.useState(false)
  const transitions = useTransition(showDialog, null, {
    from: { opacity: 0, y: -10 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: 10 },
  })

  return (
    <div className={props.superSnippet ? SnippetStyles.superSnippet : SnippetStyles.snippet}
         data-sal={"slide-up"} data-sal-delay={props.delay}>
      {props.image && <Img fluid={props.image} className={SnippetStyles.img}/>}

      <div>
        <h3 className={SnippetStyles.title}>{props.title}</h3>
        <p
          className={[SnippetStyles.text, SnippetStyles.hideSm].join(" ")}>
          {props.superSnippet ? props.body : props.subtitle}
        </p>
        <p className={[SnippetStyles.text, SnippetStyles.showSm].join(" ")}>{props.body}</p>

        {!props.superSnippet && <button
          type="button"
          className={[SnippetStyles.button, SnippetStyles.hideSm].join(" ")}
          onClick={() => setShowDialog(true)}>
          More info
        </button>
        }

        <a href={props.link} target="_blank" rel="noopener noreferrer" className={SnippetStyles.link}>
          Visit Site
        </a>
      </div>

      {!props.superSnippet && transitions.map(
        ({ item, props: styles }) =>
          item && (
            <AnimatedDialogOverlay style={{ opacity: styles.opacity }}>
              <AnimatedDialogContent
                isOpen={showDialog}
                onDismiss={() => setShowDialog(false)}
                className={SnippetStyles.dialog}
                style={{
                  transform: styles.y.interpolate(value => `translate3d(0px, ${value}px, 0px)`),
                }}>
                <h3 className={SnippetStyles.title}>{props.title}</h3>
                <p>{props.body}</p>
                <button
                  type="button"
                  className={SnippetStyles.button}
                  onClick={() => setShowDialog(false)}>
                  Go Back
                </button>
              </AnimatedDialogContent>
            </AnimatedDialogOverlay>
          ),
      )}
    </div>
  )
}

export default WorkSnippet
