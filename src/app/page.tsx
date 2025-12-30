import { Container, Section } from "@/components/layout"
import { LeadCard, EditorialCard } from "@/components/editorial"
import { LatestInsights } from "@/components/LatestInsights"
import { JsonLd } from "@/components/json-ld"
import { getBlogPosts } from "@/lib/blog"
import { buildMetadata } from "@/lib/metadata"
import { siteConfig } from "@/lib/site"

export const metadata = buildMetadata({
  title: "Simpleflo",
  description: "Calm tools for clearer AI work.",
  path: "/",
})

export default async function HomePage() {
  const posts = await getBlogPosts()

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
      <article>
        <Section className="pt-16">
          <Container>
            <div className="reading-width space-y-6">
              <h1 className="text-4xl font-semibold text-foreground md:text-5xl">
                Clarity for AI work.
              </h1>
              <p className="dek">
                Simpleflo is a small studio building calm tools for a noisy AI world. The goal is
                simple: help you get useful results from AI faster, without spending your time wiring
                things together.
              </p>
            </div>
            <div className="mt-10">
              <LeadCard
                title="Less setup. More momentum."
                paragraphs={[
                  "AI work often breaks down in predictable places. You find a dozen tools that claim the same thing, but it is hard to compare them without bias. You collect documents and notes, but they stay scattered across folders and tabs. You install connectors and servers, but each client expects a different configuration and a different workflow.",
                  "Simpleflo exists to reduce that friction. Each tool is designed to make one part of the work feel clearer, more cohesive, and easier to trust.",
                ]}
                bullets={[
                  "Make decisions with clearer comparisons.",
                  "Explore knowledge with visible grounding.",
                  "Bring your own context without turning your system into a science project.",
                ]}
              />
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <div className="reading-width space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Utilities</h2>
              <p className="text-foreground/80">
                Three utilities, one intent. Each one is focused on a specific kind of clarity, so you
                can move from curiosity to action without getting stuck in setup details.
              </p>
            </div>
            <div className="library-grid mt-8">
              <EditorialCard
                eyebrow="AI database"
                title="Kinetiq"
                excerpt="Kinetiq helps you choose AI tools with less guesswork. You can browse a curated catalog, compare multiple options side by side, and use Ask AI Matchmaker to get tailored recommendations based on your needs. Matchmaker shows a percentage fit, explains why it made the call, and offers strong alternatives so you can decide with confidence."
                chips={["Discovery", "Matchmaker", "Comparisons"]}
                ctaLabel="Open Kinetiq"
                href="/go/kinetiq"
              />
              <EditorialCard
                eyebrow="Knowledge explorer"
                title="Scientia"
                excerpt="Scientia is a research assistant that helps you ask better questions across your own materials. It retrieves the most relevant context, shows you what it used, and can combine world knowledge when your question needs outside background. It also supports A/B testing and graph-based exploration for deeper work, so you can learn what approach works best for your use case."
                chips={["Traces", "A/B", "Graph RAG"]}
                ctaLabel="Open Scientia"
                href="/go/scientia"
              />
              <EditorialCard
                eyebrow="Personal context + connector hub"
                title="Conduit"
                excerpt="Conduit is designed for people who want AI tools to feel personal and powerful without constantly re-uploading files and reconfiguring connectors. It helps manage MCP servers as a guided, secure experience, and it supports a private knowledge base so you can bring your own context to the tools you use every day. Instead of dumping piles of documents into a model, Conduit builds a usable knowledge layer and serves the precise context your AI tool needs."
                chips={["Private knowledge", "MCP", "Isolation"]}
                ctaLabel="Read Conduit"
                href="/conduit"
              />
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <div className="reading-width space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Principles</h2>
              <p className="text-foreground/80">
                Simpleflo is built around a few ideas that keep the work honest and the experience
                cohesive.
              </p>
              <ul className="space-y-2 text-foreground/80">
                <li>Start with simple defaults that feel obvious.</li>
                <li>Make security the baseline, not an add-on.</li>
                <li>Keep the interface cohesive so the system feels learnable.</li>
                <li>Do the wiring once so users can focus on the work.</li>
                <li>Earn delight through craft, not hype.</li>
              </ul>
            </div>
          </Container>
        </Section>

        <LatestInsights posts={posts} />

        <Section className="pb-20">
          <Container>
            <div className="reading-width space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Grounded by design</h2>
              <ul className="space-y-2 text-foreground/80">
                <li>Traceable answers that show where information came from.</li>
                <li>Comparisons that reveal tradeoffs instead of slogans.</li>
                <li>Safer connectivity that treats untrusted code with caution.</li>
              </ul>
            </div>
          </Container>
        </Section>
      </article>
    </>
  )
}
