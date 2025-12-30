import { Container, Section } from "@/components/layout"
import { DetailHero } from "@/components/detail-hero"
import { EvidenceCallout, FaqList } from "@/components/editorial"
import { buildMetadata } from "@/lib/metadata"

export const metadata = buildMetadata({
  title: "Scientia — Simpleflo",
  description:
    "A knowledge explorer that retrieves grounded context, supports experimentation, and can blend in world knowledge when needed.",
  path: "/utilities/scientia",
})

export default function ScientiaPage() {
  return (
    <article>
      <Section className="pt-16">
        <Container>
          <DetailHero
            eyebrow="Knowledge explorer"
            title="Scientia"
            dek="A research assistant for your materials that stays grounded, shows its work, and supports deeper exploration."
            chips={["Traces", "A/B", "Graph RAG"]}
            ctaLabel="Open Scientia"
            href="/go/scientia"
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="reading-width space-y-12">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">The problem</h2>
              <p className="text-foreground/80">
                When you are working through complex ideas, the hard part is not finding
                information. The hard part is keeping it coherent. Notes and documents get scattered
                across folders, and AI chats often respond with confidence while hiding what they
                relied on.
              </p>
              <p className="text-foreground/80">
                Scientia is designed to help you explore knowledge with more clarity. It shows what
                it used, keeps answers readable, and gives you tools to test what works.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">How Scientia works</h2>
              <p className="text-foreground/80">
                Scientia retrieves relevant context from your materials and provides answers with
                visible grounding. Some questions also need outside background. In those cases,
                Scientia can blend in world knowledge while staying explicit about what came from
                your sources versus what came from general knowledge.
              </p>
              <p className="text-foreground/80">
                Scientia also supports experimentation. You can run A/B tests to compare approaches,
                and you can use graph-based exploration when the topic is connected and non-linear.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">What you can do</h2>
              <ul className="space-y-2 text-foreground/80">
                <li>Ask questions across your materials and see what informed the answer.</li>
                <li>
                  Use A/B testing to compare different strategies and learn what works best for your
                  use case.
                </li>
                <li>
                  Explore connected topics with graph-based modes when a simple thread is not
                  enough.
                </li>
                <li>
                  Keep complex retrieval workflows understandable without drowning in settings.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Grounding and provenance</h2>
              <EvidenceCallout
                title="Clarity about where answers come from"
                body="Scientia is designed to separate what came from your materials from what came from outside background knowledge. That separation helps you trust the result and makes it easier to validate."
              />
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">FAQ</h2>
              <FaqList
                items={[
                  {
                    question: "Is this the same as chatting with PDFs?",
                    answer:
                      "It is closer to a research workbench. It focuses on grounding, experimentation, and exploration rather than only chat.",
                  },
                  {
                    question: "What does A/B testing mean here?",
                    answer:
                      "It means you can compare two approaches side by side and see which one performs better for the kind of questions you ask.",
                  },
                  {
                    question: "When does world knowledge come into play?",
                    answer:
                      "When a question needs outside context that is not present in your materials, Scientia can add that background while keeping provenance clear.",
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
