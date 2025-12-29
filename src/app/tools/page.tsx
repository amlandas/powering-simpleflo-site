import { Container, Section, Stack } from "@/components/layout"
import { ToolCard } from "@/components/cards"
import { buildMetadata } from "@/lib/metadata"

export const metadata = buildMetadata({
  title: "Tools",
  description:
    "Tools that turn AI noise into clear choices through structure, transparency, and calm defaults.",
  path: "/tools",
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

export default function ToolsPage() {
  return (
    <Section>
      <Container>
        <Stack size="lg">
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold">Tools</h1>
            <p className="text-lg text-muted-foreground">
              Tools that turn AI noise into clear choices - through structure,
              transparency, and calm defaults.
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
  )
}
