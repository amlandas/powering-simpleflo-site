import { Container, Section } from "@/components/layout"
import { DetailHero } from "@/components/detail-hero"
import { EvidenceCallout, FaqList } from "@/components/editorial"
import { buildMetadata } from "@/lib/metadata"

export const metadata = buildMetadata({
  title: "Conduit — Simpleflo",
  description:
    "A secure way to manage connectors and bring private knowledge and personal context into AI tools.",
  path: "/conduit",
})

export default function ConduitPage() {
  return (
    <article>
      <Section className="pt-16">
        <Container>
          <DetailHero
            eyebrow="Personal context + connector hub"
            title="Conduit"
            dek="A secure way to manage MCP servers and bring your private knowledge and personal context into the AI tools you already use."
            chips={["Private knowledge", "MCP", "Isolation"]}
            ctaLabel="Read Conduit"
            href="/conduit"
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="reading-width space-y-12">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">The problem</h2>
              <p className="text-foreground/80">
                AI tools become far more useful when they understand the context you work in. In
                practice, that context is scattered across documents, notes, folders, and internal
                references. The usual workaround is to keep uploading files and pasting snippets,
                which becomes messy and unreliable as the pile grows.
              </p>
              <p className="text-foreground/80">
                At the same time, connecting AI tools to real systems is still too manual. You
                install a connector, chase dependencies, edit configs, and repeat the process for
                each client. This is the kind of undifferentiated setup work that drains momentum.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">What Conduit changes</h2>
              <p className="text-foreground/80">
                Conduit is designed to make your AI tools feel more personal and more capable
                without increasing your risk. It helps you manage MCP servers as a guided, secure
                experience, and it supports a private knowledge base that turns your documents into
                usable personal context.
              </p>
              <p className="text-foreground/80">
                Instead of sending every file to every AI tool, Conduit builds a knowledge layer from
                what you choose to add. That layer is designed to return precise, minimal context so
                your AI tool gets what it needs without being flooded by irrelevant material.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">What you can do</h2>
              <ul className="space-y-2 text-foreground/80">
                <li>Add files and folders to build a private knowledge base that stays under your control.</li>
                <li>
                  Bring personal context into AI tools through a first-party MCP server that Conduit
                  runs and maintains.
                </li>
                <li>
                  Install and configure MCP servers with guidance, safety checks, and sensible
                  defaults.
                </li>
                <li>Configure once and reuse across multiple clients without repeating setup steps.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Safety by default</h2>
              <p className="text-foreground/80">
                Conduit treats third-party servers as untrusted by default. It runs them in isolated
                containers, stores secrets locally in your OS keychain, and requires explicit
                permission before granting access to sensitive resources. This approach is designed
                to reduce the risk of running connector code you did not write yourself.
              </p>
              <EvidenceCallout
                title="A note on connectivity"
                body="Some AI clients can connect to a local MCP server directly. Others require an HTTPS endpoint that is reachable from the internet. Conduit is designed to support that reality with a guided “Secure Link” flow that makes reachability and revocation clear."
              />
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">FAQ</h2>
              <FaqList
                items={[
                  {
                    question: "Is Conduit a cloud service?",
                    answer:
                      "The core experience is designed around local execution and local secret storage. Some clients require a reachable HTTPS endpoint, and Conduit is designed to support that case with clear controls.",
                  },
                  {
                    question: "Why not set up MCP servers manually?",
                    answer:
                      "You can, but you end up repeating the same work across clients and taking on more risk. Conduit is designed to reduce that setup burden while keeping safety as the baseline.",
                  },
                  {
                    question: "What does “personal context” mean here?",
                    answer:
                      "It means a private knowledge base built from your own materials, shaped into usable context that AI tools can query without being overwhelmed by raw files.",
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
