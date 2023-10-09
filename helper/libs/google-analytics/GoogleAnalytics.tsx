import React from "react"
import Script, { ScriptProps } from "next/script"
import { usePageViews } from "./page-views/usePageViews"

type GoogleAnalyticsProps = {
  measurementId: string | undefined
  gtagUrl?: string
  strategy?: ScriptProps["strategy"]
  debugMode?: boolean
  defaultConsent?: "granted" | "denied"
  nonce?: string
}

type WithPageView = GoogleAnalyticsProps & {
  trackPageViews?: boolean
}

type WithIgnoreHashChange = GoogleAnalyticsProps & {
  trackPageViews?: {
    ignoreHashChange: boolean
  }
}

export function GoogleAnalytics({
  debugMode = false,
  measurementId,
  gtagUrl = "https://www.googletagmanager.com/gtag/js",
  strategy = "afterInteractive",
  defaultConsent = "granted",
  trackPageViews = true,
  nonce,
}: WithPageView | WithIgnoreHashChange): JSX.Element | null {
  const _gaMeasurementId = measurementId

  usePageViews({
    gaMeasurementId: _gaMeasurementId,
    ignoreHashChange:
      typeof trackPageViews === "object"
        ? trackPageViews?.ignoreHashChange
        : false,
    disabled: !trackPageViews,
  })

  if (!_gaMeasurementId) {
    return null
  }

  return (
    <>
      <Script src={`${gtagUrl}?id=${_gaMeasurementId}`} strategy={strategy} />
      <Script id="google-analytics" nonce={nonce}>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            ${
              defaultConsent === "denied"
                ? `gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied'
            });`
                : ``
            }
            gtag('config', '${_gaMeasurementId}', {
              page_path: window.location.pathname,
              ${debugMode ? `debug_mode: ${debugMode},` : ""}
            });
          `}
      </Script>
    </>
  )
}
