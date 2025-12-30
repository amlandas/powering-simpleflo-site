import { Container, Section } from "@/components/layout"
import { buildMetadata } from "@/lib/metadata"

export const metadata = buildMetadata({
  title: "Principles — Simpleflo",
  description: "The principles that guide Simpleflo.",
  path: "/principles",
})

export default function PrinciplesPage() {
  return (
    <article>
      <Section className="pt-16">
        <Container>
          <div className="reading-width space-y-6">
            <h1 className="text-4xl font-semibold text-foreground md:text-5xl">Principles</h1>
            <p className="text-foreground/80">
              Simpleflo is built around a few guiding ideas. They are not slogans. They are design
              constraints that keep the work honest and the experience cohesive.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="reading-width space-y-12">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                Simple defaults, with depth when you need it
              </h2>
              <p className="text-foreground/80">
                A tool earns trust when it feels understandable on first use. Simpleflo starts with
                defaults that are easy to grasp and hard to misuse. Depth still matters, but it
                should appear when the user is ready for it, not as an obstacle at the beginning.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Security as the baseline</h2>
              <p className="text-foreground/80">
                Security is not a setting you turn on later. Simpleflo is designed to be safe by
                default, with clear controls when a user chooses to override. The goal is to make
                secure choices feel like the natural path rather than the advanced path.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Cohesion beats cleverness</h2>
              <p className="text-foreground/80">
                A cohesive experience reduces mental load. Simpleflo aims for consistent patterns
                across pages, clear language, and a layout that makes the system feel learnable. A
                tool should feel calm, not noisy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                If users stop thinking about setup, we did our job
              </h2>
              <p className="text-foreground/80">
                The work that matters is what users are actually trying to do. Simpleflo exists to
                remove repetitive wiring work so attention can stay on the task, not the
                configuration.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Delight is earned through craft</h2>
              <p className="text-foreground/80">
                The goal is not to impress with gimmicks. The goal is to make the experience feel so
                thoughtful and useful that people naturally share it.
              </p>
            </section>
          </div>
        </Container>
      </Section>
    </article>
  )
}
