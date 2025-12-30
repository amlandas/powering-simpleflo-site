import { Container, Section } from "@/components/layout"
import { ToolsIndex, type ToolIndexItem } from "@/components/tools-index"
import { buildMetadata } from "@/lib/metadata"

export const metadata = buildMetadata({
  title: "Tools — Simpleflo",
  description: "A calm library of tools for clearer AI work.",
  path: "/tools",
})

const toolItems: ToolIndexItem[] = [
  {
    title: "Kinetiq",
    excerpt:
      "Kinetiq helps you choose AI tools with less guesswork. You can browse a curated catalog, compare multiple options side by side, and use Ask AI Matchmaker to get tailored recommendations based on your needs. Matchmaker shows a percentage fit, explains why it made the call, and offers strong alternatives so you can decide with confidence.",
    chips: ["Discovery", "Matchmaker", "Comparisons"],
    ctaLabel: "Open Kinetiq",
    href: "/go/kinetiq",
    categories: ["Decision"],
  },
  {
    title: "Scientia",
    excerpt:
      "Scientia is a research assistant that helps you ask better questions across your own materials. It retrieves the most relevant context, shows you what it used, and can combine world knowledge when your question needs outside background. It also supports A/B testing and graph-based exploration for deeper work, so you can learn what approach works best for your use case.",
    chips: ["Traces", "A/B", "Graph RAG"],
    ctaLabel: "Open Scientia",
    href: "/go/scientia",
    categories: ["Knowledge"],
  },
  {
    title: "Conduit",
    excerpt:
      "Conduit is designed for people who want AI tools to feel personal and powerful without constantly re-uploading files and reconfiguring connectors. It helps manage MCP servers as a guided, secure experience, and it supports a private knowledge base so you can bring your own context to the tools you use every day. Instead of dumping piles of documents into a model, Conduit builds a usable knowledge layer and serves the precise context your AI tool needs.",
    chips: ["Private knowledge", "MCP", "Isolation"],
    ctaLabel: "Read Conduit",
    href: "/conduit",
    categories: ["Connectivity"],
  },
]

export default function ToolsPage() {
  return (
    <article>
      <Section className="pt-16">
        <Container>
          <div className="reading-width space-y-4">
            <h1 className="text-4xl font-semibold text-foreground md:text-5xl">Tools</h1>
            <p className="text-foreground/80">
              These tools are designed like good writing. They keep the structure clear, avoid
              unnecessary complexity, and give you enough grounding to trust what you are seeing.
              Browse by intent, then go deeper when you are ready.
            </p>
          </div>
          <div className="mt-10">
            <ToolsIndex items={toolItems} />
          </div>
        </Container>
      </Section>
    </article>
  )
}
