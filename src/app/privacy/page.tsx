import { Container, Section, Stack } from "@/components/layout"
import { Card, CardContent } from "@/components/ui/card"
import { buildMetadata } from "@/lib/metadata"

export const metadata = buildMetadata({
  title: "Privacy",
  description: "Simpleflo privacy policy stub.",
  path: "/privacy",
})

export default function PrivacyPage() {
  return (
    <Section>
      <Container>
        <Stack size="lg">
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold">Privacy</h1>
            <p className="text-lg text-muted-foreground">
              We are early. This page will evolve as offerings ship.
            </p>
            <p className="text-lg text-muted-foreground">
              We aim to collect the minimum data required to operate the site.
            </p>
          </div>
          <Card className="soft-border surface">
            <CardContent className="p-6 text-sm text-muted-foreground">
              Privacy details, data retention, and access policies will be
              documented here as Simpleflo tools launch.
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </Section>
  )
}
