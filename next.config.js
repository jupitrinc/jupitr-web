// This file sets a custom webpack configuration to use your Next.js app

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [""],
    dangerouslyAllowSVG: true,
  },
  i18n: {
    locales: ["en-gb"],
    defaultLocale: "en-gb",
  },
}

module.exports = nextConfig
