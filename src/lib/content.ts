export type ContentKey =
  | "home"
  | "library"
  | "kinetiq"
  | "scientia"
  | "conduit"
  | "principles"
  | "security"
  | "privacy"

export const contentMap: Record<
  ContentKey,
  { file: string; metadata: { title: string; description: string; path: string } }
> = {
  home: {
    file: "home.mdx",
    metadata: {
      title: "Simpleflo",
      description:
        "Clarity for AI work with calm defaults, cohesive experiences, and security-first decisions.",
      path: "/",
    },
  },
  library: {
    file: "library.mdx",
    metadata: {
      title: "Library",
      description:
        "Notes on calmer AI workflows, plus the tools that keep decisions grounded.",
      path: "/utilities",
    },
  },
  kinetiq: {
    file: "kinetiq.mdx",
    metadata: {
      title: "Kinetiq",
      description: "A calmer way to choose AI tools with structured comparisons.",
      path: "/utilities/kinetiq",
    },
  },
  scientia: {
    file: "scientia.mdx",
    metadata: {
      title: "Scientia",
      description:
        "Knowledge exploration with traceability, grounded answers, and visible sources.",
      path: "/utilities/scientia",
    },
  },
  conduit: {
    file: "conduit.mdx",
    metadata: {
      title: "Conduit",
      description:
        "Managed connectors and personal knowledge without setup rabbit holes.",
      path: "/utilities/conduit",
    },
  },
  principles: {
    file: "principles.mdx",
    metadata: {
      title: "Principles",
      description:
        "Principles that keep Simpleflo coherent as it evolves.",
      path: "/principles",
    },
  },
  security: {
    file: "security.mdx",
    metadata: {
      title: "Security",
      description:
        "Security-first stance with explicit control and minimal data handling.",
      path: "/security",
    },
  },
  privacy: {
    file: "privacy.mdx",
    metadata: {
      title: "Privacy",
      description: "A short, honest note on privacy and minimal data handling.",
      path: "/privacy",
    },
  },
}
