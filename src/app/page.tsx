import Link from "next/link"

import { JsonLd } from "@/components/json-ld"
import { Container, Section, Stack } from "@/components/layout"
import { ProofCard, ToolCard } from "@/components/cards"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { buildMetadata } from "@/lib/metadata"
import { siteConfig } from "@/lib/site"

export const metadata = buildMetadata({
  title: "Clarity for AI work",
  description:
    "Simpleflo builds calm, cohesive tools that reduce confusion in modern AI workflows.",
  path: "/",
})

const tools = [
  {
    name: "Kinetiq",
    tagline: "AI Tool Database",
    description:
      "Find tools that fit your needs - without biased lists or guesswork.",
    bullets: [
      "2,000+ tools indexed by use-case",
      "Ask AI Matchmaker: recommendations tailored to your needs (match % + alternatives)",
      "Compare tools side-by-side to understand tradeoffs",
    ],
    ctaLabel: "Open Kinetiq",
    href: "/tools/kinetiq",
    iconLabel: "K",
  },
  {
    name: "Scientia",
    tagline: "Knowledge Explorer",
    description:
      "A research assistant for your sources - grounded in your artifacts, enhanced with world knowledge when needed.",
    bullets: [
      "Ask questions across your sources with citations and traces",
      "A/B test retrieval and answer strategies to learn what works",
      "Advanced modes: Graph RAG for deeper knowledge exploration",
    ],
    ctaLabel: "Open Scientia",
    href: "/tools/scientia",
    iconLabel: "S",
  },
  {
    name: "Conduit",
    tagline: "Personal Knowledge + Connector Hub (Coming soon)",
    description:
      "Stop manually installing MCP servers and re-wiring tools. Conduit manages connectors and turns your files into usable knowledge - without context bloat.",
    bullets: [
      "Managed connector installs: discover, install, and configure MCP servers safely",
      "Bring personal knowledge (not just documents): Conduit builds a knowledge layer from your artifacts",
      "Serve AI-ready context: precise, minimal, and relevant - avoids the 'too many docs' confusion",
    ],
    ctaLabel: "Learn more",
    href: "/conduit",
    iconLabel: "C",
  },
]

const principles = [
  {
    title: "Simple defaults",
    body: "Minimal by default. Advanced modes later.",
  },
  {
    title: "Security first",
    body: "Secure-by-default, with explicit user control.",
  },
  {
    title: "Cohesive experience",
    body: "One mental model across offerings.",
  },
  {
    title: "Less setup, more work",
    body: "You shouldn't have to 'wire' your tools.",
  },
  {
    title: "Earned delight",
    body: "Awe through craft - not overpromises.",
  },
]

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: siteConfig.name,
          url: siteConfig.url,
          description: siteConfig.description,
        }}
      />
      <Section className="pt-20 md:pt-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <Stack size="lg" className="reveal">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Clarity for AI work
              </p>
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
                Cut setup time. Keep your focus.
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Simpleflo builds calm, cohesive tools that reduce confusion in
                modern AI workflows - so you can spend your time on the actual
                problem.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href="/tools">Explore tools</Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/principles">Read principles</Link>
                </Button>
              </div>
            </Stack>
            <ProofCard
              title="Privacy-first foundation"
              description={
                <>
                  <p>Privacy: Least data possible; no secret leakage by design.</p>
                  <p>
                    Across offerings, Simpleflo keeps AI work cohesive with
                    clear comparisons and traceable context.
                  </p>
                </>
              }
              className="reveal"
            />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Stack size="lg">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-semibold">Tools</h2>
              <p className="text-muted-foreground">
                Two live today. One brewing.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {tools.map((tool, index) => (
                <ToolCard
                  key={tool.name}
                  {...tool}
                  className="reveal"
                  style={{ animationDelay: `${index * 120}ms` }}
                />
              ))}
            </div>
          </Stack>
        </Container>
      </Section>

      <Section>
        <Container>
          <Stack size="lg">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-semibold">Guiding principles</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-5">
              {principles.map((principle, index) => (
                <Card
                  key={principle.title}
                  className="soft-border surface reveal"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <CardHeader>
                    <CardTitle className="text-base">
                      {principle.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {principle.body}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Stack>
        </Container>
      </Section>
    </>
  )
}
