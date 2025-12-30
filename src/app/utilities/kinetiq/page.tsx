import { Container, Section } from "@/components/layout"
import { DetailHero } from "@/components/detail-hero"
import { EvidenceCallout, FaqList } from "@/components/editorial"
import { buildMetadata } from "@/lib/metadata"

export const metadata = buildMetadata({
  title: "Kinetiq — Simpleflo",
  description:
    "A curated AI tool database with Matchmaker recommendations and side-by-side comparisons.",
  path: "/utilities/kinetiq",
})

export default function KinetiqPage() {
  return (
    <article>
      <Section className="pt-16">
        <Container>
          <DetailHero
            eyebrow="AI database"
            title="Kinetiq"
            dek="A curated library for discovering and comparing AI tools, with recommendations that explain themselves."
            chips={["Discovery", "Matchmaker", "Comparisons"]}
            ctaLabel="Open Kinetiq"
            href="/go/kinetiq"
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="reading-width space-y-12">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">The problem</h2>
              <p className="text-foreground/80">
                Choosing an AI tool should be easier than it is. Most lists are either biased,
                outdated, or too shallow to support a real decision. You end up opening too many
                tabs, reading too many landing pages, and still feeling unsure about tradeoffs.
              </p>
              <p className="text-foreground/80">
                Kinetiq is built for the moment when you want to make a decision and move on. It
                helps you narrow the space, compare options in a consistent way, and choose without
                relying on hype.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">How Kinetiq helps</h2>
              <p className="text-foreground/80">
                Kinetiq makes discovery and comparison part of one workflow. You can browse a
                curated catalog, filter by what you care about, and then compare multiple options in
                a format that stays consistent across categories. When you want a faster path, Ask
                AI Matchmaker helps you describe what you need and returns a shortlist with a
                percentage fit, clear reasoning, and strong alternatives.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">What you can do</h2>
              <ul className="space-y-2 text-foreground/80">
                <li>Browse a curated catalog with practical filters.</li>
                <li>
                  Ask AI Matchmaker for tailored recommendations that show fit percentage and
                  alternatives.
                </li>
                <li>
                  Compare multiple tools side by side to see strengths, weaknesses, and tradeoffs
                  clearly.
                </li>
                <li>Use comparison views to make informed choices faster.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Grounding and transparency</h2>
              <EvidenceCallout
                title="Why the comparisons feel clearer"
                body="Kinetiq uses a consistent structure for comparisons so you are not forced to interpret free-form blurbs. Matchmaker recommendations include reasoning and alternatives so you can understand the decision, not just accept it."
              />
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">FAQ</h2>
              <FaqList
                items={[
                  {
                    question: "Is Kinetiq an affiliate list?",
                    answer:
                      "No. The goal is to support clearer decisions even when there is no incentive to promote one option over another.",
                  },
                  {
                    question: "What does Matchmaker actually return?",
                    answer:
                      "A shortlist with a fit percentage, an explanation of the reasoning, and strong alternatives so you can compare and decide.",
                  },
                  {
                    question: "Can I compare more than two tools?",
                    answer:
                      "Yes. Kinetiq is designed for side-by-side evaluation across multiple options.",
                  },
                ]}
              />
            </section>
          </div>
        </Container>
      </Section>
    </article>
  )
}
