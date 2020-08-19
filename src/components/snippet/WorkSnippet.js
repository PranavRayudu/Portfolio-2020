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
    <div className={[
      props.superSnippet ? SnippetStyles.superSnippet : SnippetStyles.snippet,
      props.image ? SnippetStyles.hasImg : "",
    ].join(" ")} id={props.title.toLowerCase().replace(" ", "-")}>

      {props.image && <Img fluid={props.image.childImageSharp.fluid}
                           className={SnippetStyles.img}/>}

      <div className={SnippetStyles.content}>

        <div className={SnippetStyles.body}>
          <h3 className={SnippetStyles.title}>{props.title}</h3>

          {(props.body || props.subtitle) &&
          <p className={`${SnippetStyles.text} ${SnippetStyles.hideSm}`}>
            {props.subtitle ? props.subtitle : <span dangerouslySetInnerHTML={{__html: props.body}}/>}
          </p>}

          <p className={`${SnippetStyles.text} ${SnippetStyles.showSm}`}>
            {props.body ? <span dangerouslySetInnerHTML={{__html: props.body}}/> : props.subtitle}
          </p>

        </div>

        <div className={SnippetStyles.footer}>
          {!props.superSnippet && props.body && <button
            type="button"
            className={`${SnippetStyles.button} ${SnippetStyles.hideSm}`}
            onClick={() => setShowDialog(true)}>
            More info
          </button>
          }

          {props.link &&
          <a href={props.link.url} target="_blank" rel="noopener noreferrer" className={SnippetStyles.link}>
            {props.link.text}
          </a>}
        </div>
      </div>

      {!props.superSnippet && props.body && transitions.map(
        ({ item, props: styles }) =>
          item && (
            <AnimatedDialogOverlay
              className={SnippetStyles.overlay}
              onDismiss={() => setShowDialog(false)}
              style={{ opacity: styles.opacity }}>
              <AnimatedDialogContent
                isOpen={showDialog}
                className={SnippetStyles.dialog}
                style={{
                  transform: styles.y.interpolate(value => `translate3d(0px, ${value}px, 0px)`),
                }}>
                <h3 className={SnippetStyles.title}>{props.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: props.body }}/>
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
