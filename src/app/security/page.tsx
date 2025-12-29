import { Container, Section, Stack } from "@/components/layout"
import { Card, CardContent } from "@/components/ui/card"
import { buildMetadata } from "@/lib/metadata"

export const metadata = buildMetadata({
  title: "Security",
  description:
    "Security-first stance for Simpleflo tools with explicit user control and minimal data collection.",
  path: "/security",
})

const commitments = [
  "Secure defaults",
  "Explicit user control",
  "Minimal data collection",
  "Clear boundaries between what is local and what is shared",
]

export default function SecurityPage() {
  return (
    <Section>
      <Container>
        <Stack size="lg">
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold">
              Security-first, without security theater.
            </h1>
            <div className="space-y-3 text-lg text-muted-foreground">
              <p>
                Some offerings treat security as a checkbox. We treat it as a
                design constraint.
              </p>
              <p>
                We default to least privilege and least surprise. Risky actions
                should be explicit.
              </p>
              <p>
                We avoid collecting data we do not need. When we must handle
                sensitive data, we do it deliberately.
              </p>
            </div>
          </div>
          <Card className="soft-border surface">
            <CardContent className="p-6">
              <ul className="grid gap-4 text-muted-foreground md:grid-cols-2">
                {commitments.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="size-2 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </Section>
  )
}
