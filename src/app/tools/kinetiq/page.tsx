import Link from "next/link"

import { JsonLd } from "@/components/json-ld"
import { Container, Section, Stack } from "@/components/layout"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { buildMetadata } from "@/lib/metadata"
import { siteConfig } from "@/lib/site"

export const metadata = buildMetadata({
  title: "Kinetiq",
  description:
    "A curated database of AI tools designed for everyday decision-makers who want unbiased recommendations and clear comparisons.",
  path: "/tools/kinetiq",
})

const proofChips = [
  "Unbiased discovery",
  "Matchmaker recommendations",
  "Comparable tradeoffs",
]

export default function KinetiqPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Kinetiq",
          description:
            "A curated database of AI tools designed for everyday decision-makers who want unbiased recommendations and clear comparisons.",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          url: `${siteConfig.url}/tools/kinetiq`,
        }}
      />
      <Section>
        <Container>
          <Stack size="lg">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                AI Tool Database
              </p>
              <h1 className="text-4xl font-semibold">Kinetiq</h1>
              <p className="text-lg text-muted-foreground">
                A curated database of AI tools designed for everyday
                decision-makers - people who want an unbiased recommendation and a
                clear way to compare options.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {proofChips.map((chip) => (
                <Badge key={chip} variant="secondary">
                  {chip}
                </Badge>
              ))}
            </div>
          </Stack>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <Card className="soft-border surface">
              <CardContent className="space-y-6 p-6">
                <h2 className="text-2xl font-semibold">
                  What Kinetiq helps you do
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    Find AI tools by what you&apos;re trying to accomplish (not by
                    hype).
                  </li>
                  <li>
                    Ask AI Matchmaker for tailored recommendations: best match
                    %, strong alternatives, and why.
                  </li>
                  <li>
                    Compare tools with consistent dimensions so you can
                    understand tradeoffs quickly.
                  </li>
                  <li>Build a shortlist you can feel confident about.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="soft-border surface">
              <CardContent className="space-y-6 p-6">
                <div className="space-y-3">
                  <h2 className="text-2xl font-semibold">Who it&apos;s for</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>
                      Anyone trying to choose an AI tool - especially when
                      recommendations feel biased, incomplete, or confusing.
                    </li>
                    <li>
                      Teams and individuals evaluating options for work,
                      learning, or personal projects.
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h2 className="text-2xl font-semibold">
                    How it stays grounded
                  </h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>Clear categorization and consistent comparison dimensions.</li>
                    <li>
                      Transparent recommendation outputs: match %, reasoning,
                      and alternatives.
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Card className="soft-border surface">
            <CardContent className="flex flex-col items-start justify-between gap-6 p-6 md:flex-row md:items-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold">Ready to explore?</h2>
                <p className="text-muted-foreground">
                  Explore Kinetiq when the app launches. For now, learn how we
                  approach tool discovery.
                </p>
              </div>
              <Button asChild size="lg">
                <Link href="#">Explore Kinetiq</Link>
              </Button>
            </CardContent>
          </Card>
        </Container>
      </Section>
    </>
  )
}
