import { Container, Section } from "@/components/layout"
import { buildMetadata } from "@/lib/metadata"

export const metadata = buildMetadata({
  title: "Security — Simpleflo",
  description: "How Simpleflo approaches safety and trust.",
  path: "/security",
})

export default function SecurityPage() {
  return (
    <article>
      <Section className="pt-16">
        <Container>
          <div className="reading-width space-y-6">
            <h1 className="text-4xl font-semibold text-foreground md:text-5xl">Security</h1>
            <p className="text-foreground/80">
              Simpleflo is designed with a simple assumption: anything you did not write yourself
              should be treated with caution. That is especially true for connector code that can
              access your files, your network, or your credentials.
            </p>
            <p className="text-foreground/80">
              The security posture is built around defaults that reduce risk. This includes strict
              separation between untrusted code and the rest of your system, clear permission
              boundaries, and local secret storage so credentials are not quietly copied to places
              they do not belong.
            </p>
            <p className="text-foreground/80">
              Security is not a promise of perfection. It is a set of decisions that aim to make
              safe behavior the path of least resistance, while still giving users control when they
              understand the tradeoffs.
            </p>
          </div>
        </Container>
      </Section>
    </article>
  )
}
