import Head from "next/head"
import { memo } from "react"

interface props {
  title?: string
  description?: string
  keywords?: string
  robots?:
    | "index, nofollow"
    | "noindex, follow"
    | "noindex, nofollow"
    | "index, follow"
  image?: string
  video?: string
}

const PageMetaTags = (props: props) => {
  console.log(props)

  return (
    <Head>
      {props.title && (
        <>
          <title key="title">{props.title}</title>
          <meta property="og:title" content={props.title} />
          <meta name="twitter:title" content={props.title} />
        </>
      )}

      {props.description && (
        <>
          <meta
            key="description"
            name="description"
            content={props.description}
          />
          <meta property="og:description" content={props.description} />
          <meta name="twitter:description" content={props.description} />
        </>
      )}

      {props.keywords && <meta name="keywords" content={props.keywords} />}
      {props.robots && <meta name="robots" content={props.robots} />}

      {props.image && (
        <>
          <meta property="og:image" content={props.image} />
          <meta name="twitter:image" content={props.image} />
        </>
      )}

      {props.video && <meta property="og:video" content={props.video} />}

      <meta name="twitter:card" content="summary" />
      <meta property="og:type" content="article" />
    </Head>
  )
}

export default memo(PageMetaTags)
