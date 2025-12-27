import { JSX } from "react"

export default function OurValuesSection() {
  return (
    <section className="w-full bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-14">
          Our Values
        </h2>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-14 gap-x-20">
          <ValueItem
            title="Compassion"
            description="We approach every participant with empathy and kindness, ensuring that they feel valued and understood."
            icon={CompassionIcon}
          />

          <ValueItem
            title="Safety"
            description="We are committed towards ensuring safety and privacy of our participants and minimize risk of abuse, neglect, exploitation and violence."
            icon={SafetyIcon}
          />

          <ValueItem
            title="Integrity"
            description="We operate with honesty and transparency, building trust through our reliable and ethical practices."
            icon={IntegrityIcon}
          />

          <ValueItem
            title="Excellence"
            description="We are dedicated to delivering the highest quality of care, continuously improving and innovating our services to meet the evolving needs of our participants."
            icon={ExcellenceIcon}
          />

          <ValueItem
            title="Collaboration"
            description="We work closely with participants, their families, and other professionals to provide comprehensive and cohesive person centered support."
            icon={CollaborationIcon}
          />

          <ValueItem
            title="Respect"
            description="We honour the diversity, dignity and individuality of each participant. We recognise a participant’s freedom to choose and respect their choices and preferences."
            icon={RespectIcon}
          />
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------- */
/* Reusable Value Item */
/* ---------------------------------- */

function ValueItem({
  title,
  description,
  icon: Icon,
}: {
  title: string
  description: string
  icon: () => JSX.Element
}) {
  return (
    <div className="flex items-start gap-6">
      <div className="shrink-0 text-primary">
        <Icon />
      </div>

      <div className="max-w-xl">
        <h3 className="text-xl font-semibold text-foreground mb-2">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}


const CompassionIcon = () => (
  <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeWidth="1.5" d="M12 21s-6-4.35-9-8.25A5.5 5.5 0 0 1 12 5a5.5 5.5 0 0 1 9 7.75C18 16.65 12 21 12 21Z" />
  </svg>
)

const SafetyIcon = () => (
  <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeWidth="1.5" d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4Z" />
  </svg>
)

const IntegrityIcon = () => (
  <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeWidth="1.5" d="M12 3l3 6 6 .9-4.5 4.4 1.1 6.7L12 17l-5.6 3 1.1-6.7L3 9.9 9 9l3-6Z" />
  </svg>
)

const ExcellenceIcon = () => (
  <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeWidth="1.5" d="M12 2l2.5 5 5 .7-3.7 3.6.9 5.3L12 14.8 7.3 16.6l.9-5.3L4.5 7.7l5-.7L12 2Z" />
  </svg>
)

const CollaborationIcon = () => (
  <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeWidth="1.5" d="M8 12l2 2 4-4M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z" />
  </svg>
)

const RespectIcon = () => (
  <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeWidth="1.5" d="M12 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 0v-5m0 13v5" />
  </svg>
)