import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import * as SnippetStyles from "./snippet.module.scss"
import { useTransition, animated } from "react-spring"
import { DialogOverlay, DialogContent } from "@reach/dialog"
import "@reach/dialog/styles.css"
import { OutboundLink } from "gatsby-plugin-google-analytics"

function WorkSnippet(props) {
  const AnimatedDialogOverlay = animated(DialogOverlay)
  const AnimatedDialogContent = animated(DialogContent)
  const [showDialog, setShowDialog] = React.useState(false)
  const transitions = useTransition(showDialog,{
    from: { opacity: 0, y: -10 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: 10 },
  })

  return (
    <div
      className={[
        props.superSnippet ? SnippetStyles.superSnippet : SnippetStyles.snippet,
        props.image ? SnippetStyles.hasImg : "",
      ].join(" ")}
      id={props.title.toLowerCase().replace(" ", "-")}
    >
      {props.image && (
        <GatsbyImage
          image={props.image.childImageSharp.gatsbyImageData}
          className={SnippetStyles.bannerImg}
          alt={props.title}
        />
      )}

      <div className={SnippetStyles.content}>
        <div className={SnippetStyles.body}>
          <h3 className={SnippetStyles.title}>{props.title}</h3>

          {(props.body || props.subtitle) && (
            <p className={`${SnippetStyles.text} ${SnippetStyles.hideSm}`}>
              {props.subtitle ? (
                props.subtitle
              ) : (
                <span dangerouslySetInnerHTML={{ __html: props.body }} />
              )}
            </p>
          )}

          <p className={`${SnippetStyles.text} ${SnippetStyles.showSm}`}>
            {props.body ? (
              <span dangerouslySetInnerHTML={{ __html: props.body }} />
            ) : (
              props.subtitle
            )}
          </p>
        </div>

        <div className={SnippetStyles.footer}>
          {props.body && props.subtitle && (
            <button
              type="button"
              className={`${SnippetStyles.button} ${SnippetStyles.hideSm}`}
              onClick={() => setShowDialog(true)}
            >
              More info
            </button>
          )}

          {props.link && (
            <OutboundLink
              href={props.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={SnippetStyles.link}
            >
              {props.link.text}
            </OutboundLink>
          )}
        </div>
      </div>

      {props.subtitle &&
        props.body &&
        transitions(( styles, item ) =>
            item && (
              <AnimatedDialogOverlay
                className={SnippetStyles.overlay}
                onDismiss={() => setShowDialog(false)}
                style={{ opacity: styles.opacity }}
              >
                <AnimatedDialogContent
                  // isOpen={showDialog}
                  className={SnippetStyles.dialog}
                  aria-label={"Project Card"}
                  style={{
                    transform: styles.y.to(
                      (value) => `translate3d(0px, ${value}px, 0px)`
                    ),
                  }}
                >
                  <h3 className={SnippetStyles.title}>{props.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: props.body }} />
                  <button
                    type="button"
                    className={SnippetStyles.button}
                    onClick={() => setShowDialog(false)}
                  >
                    Go Back
                  </button>
                </AnimatedDialogContent>
              </AnimatedDialogOverlay>
            )
        )}
    </div>
  )
}

export default WorkSnippet
