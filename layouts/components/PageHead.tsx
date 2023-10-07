import Head from "next/head"

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
}

const PageHead = (props: props) => {
  return (
    <Head>
      <title>{props.title ?? "jupitr"}</title>

      {props.title && (
        <>
          <meta property="og:title" content={props.title} />
          <meta name="twitter:title" content={props.title} />
        </>
      )}

      <meta name="description" content={props.description ?? ""} />

      {props.description && (
        <>
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

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:type" content="article" />
        </>
      )}

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  )
}

export default PageHead
