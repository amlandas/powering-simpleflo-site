import { Container, Section, Stack } from "@/components/layout"
import { Card, CardContent } from "@/components/ui/card"
import { buildMetadata } from "@/lib/metadata"

export const metadata = buildMetadata({
  title: "Principles",
  description:
    "Simpleflo principles that keep the platform focused on clarity, security, and cohesive experiences.",
  path: "/principles",
})

const principles = [
  {
    title: "Simple defaults",
    body: [
      "We start with minimal, intuitive defaults.",
      "Complexity should be earned by real needs.",
      "Advanced and Dev modes come later, as deliberate layers.",
    ],
  },
  {
    title: "Security first",
    body: [
      "We assume tools and connectors can be risky.",
      "Security is on by default, with explicit user control for overrides.",
    ],
  },
  {
    title: "Consistency & cohesion",
    body: [
      "We reconcile patterns across offerings so you do not re-learn Simpleflo each time.",
      "One mental model, everywhere.",
    ],
  },
  {
    title: "Less setup, more work",
    body: [
      "If users have to become part-time DevOps to use AI tools, we have failed.",
      "Our job is to remove undifferentiated setup work.",
    ],
  },
  {
    title: "Earned delight",
    body: [
      "We do not chase hype.",
      "We earn trust through craft, clarity, and experiences people want to share.",
    ],
  },
]

export default function PrinciplesPage() {
  return (
    <Section>
      <Container>
        <Stack size="lg">
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold">Principles</h1>
            <p className="text-lg text-muted-foreground">
              Simpleflo is built for clarity in a fast-moving ecosystem. These
              principles keep our offerings coherent as they evolve.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {principles.map((principle, index) => (
              <Card
                key={principle.title}
                className="soft-border surface reveal"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <CardContent className="space-y-4 p-6">
                  <h2 className="text-2xl font-semibold">{principle.title}</h2>
                  <div className="space-y-2 text-muted-foreground">
                    {principle.body.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  )
}
