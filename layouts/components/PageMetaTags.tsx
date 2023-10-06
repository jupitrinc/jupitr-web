import Head from "next/head"
import { memo } from "react"
import { urlHelper } from "../../helper/urlHelper"

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
  company_name?: string
}

const PageMetaTags = (props: props) => {
  const ogUrl = urlHelper.ogImageUrl(
    props.title as string,
    props.image as string,
    props.company_name as string
  )
  return (
    <Head>
      {props.title && (
        <>
          <title key="title">
            {props.title} | {props.company_name}
          </title>
          <meta
            property="og:title"
            content={`${props.title} | ${props.company_name}`}
          />
          <meta
            name="twitter:title"
            content={`${props.title} | ${props.company_name}`}
          />
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
          <meta property="og:image" content={ogUrl} />
          <meta name="twitter:image" content={ogUrl} />
        </>
      )}

      {props.video && <meta property="og:video" content={props.video} />}

      <meta name="twitter:card" content="summary" />
      <meta property="og:type" content="article" />
    </Head>
  )
}

export default memo(PageMetaTags)
