const AssistAccessSectionTwo = () => {
  return (
    <section className="w-full bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-start gap-12 md:gap-20">
          {/* IMAGE PLACEHOLDER */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-[260px] sm:h-[360px] md:h-[420px] bg-neutral-200 rounded-xl overflow-hidden">
              <img
                src={'/service_section_1.png'}
                className="w-full md:h-full aspect-video object-cover"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="w-full md:w-1/2">
            <p className="text-primary text-sm font-light mb-4">
              Assist Access / Maintain Employement
            </p>

            <h2 className="text-3xl sm:text-4xl  text-foreground mb-6 leading-tight">
              Assist Access /
              <br className="hidden sm:block" />
              Maintain Employement
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              We can assist with cleaning and domestic chores that an individual
              may find difficult due to a disability. These may be basic jobs
              around the house, however they can help make your day to day life
              more enjoyable. These services can include:
            </p>

            {/* CHECKLIST */}
            <ul className="space-y-4">
              {[
                'Vacuuming, sweeping and mopping the floors.',
                'Dusting around the house.',
                'Cleaning the kitchen and bathroom areas.',
                'Washing and drying dishes.',
                'Tidying paths and steps.',
                'Taking out the rubbish.',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary mt-1">
                    <CheckIcon />
                  </span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------ */
/* Tick Icon */
/* ------------------------------ */

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export default AssistAccessSectionTwo
