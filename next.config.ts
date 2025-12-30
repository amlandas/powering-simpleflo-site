import type { NextConfig } from "next"

// TODO: Tighten CSP by replacing unsafe-inline with nonces/hashes once scripts/styles are audited.
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ")

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: contentSecurityPolicy },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: "/tools",
        destination: "/utilities",
        permanent: true,
      },
      {
        source: "/tools/:path*",
        destination: "/utilities/:path*",
        permanent: true,
      },
      {
        source: "/conduit",
        destination: "/utilities/conduit",
        permanent: true,
      },
      {
        source: "/blog/choosing-right-ai-tool",
        destination: "/blog/choosing-ai-tools-without-guesswork",
        permanent: true,
      },
      {
        source: "/blog/focused-functionality",
        destination: "/blog/asking-better-questions-from-your-knowledge",
        permanent: true,
      },
      {
        source: "/blog/introducing-kinetiq",
        destination: "/blog/bringing-private-context-to-ai-safely",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
