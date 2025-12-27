export default function VisionMissionSection() {
  return (
    <section className="w-full">
      {/* 
        Mobile: flex-col (top → bottom)
        Desktop: grid with 2 columns (left → right)
      */}
      <div className="flex flex-col md:grid md:grid-cols-2">
        {/* VISION — TOP on mobile, LEFT on desktop */}
        <div
          className="bg-stone-300 flex flex-col items-end
                        text-foreground px-6 sm:px-10 md:px-16 py-14 md:py-20"
        >
          <div className="ml-auto md:mt-2">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 ">
              Our Vision
            </h2>

            <div className="space-y-5 text-sm md:text-base leading-relaxed text-foreground max-w-xl">
              <p>
                To create inclusive and sustainable local communities where
                people with complex care needs can thrive in a high-quality,
                friendly, and supportive environment.
              </p>

              <p>
                To create a future where compassionate care is accessible to
                all, empowering individuals to lead fulfilling lives with
                independence and dignity.
              </p>

              <p>
                We strive to set the standard in supportive services, fostering
                inclusion and resilience in every community we serve.
              </p>

              <p>
                At Care Support Group Australia, we are dedicated to making a
                lasting, positive impact in the lives of our clients and their
                families.
              </p>
            </div>
          </div>
        </div>

        {/* MISSION — BOTTOM on mobile, RIGHT on desktop */}
        <div
          className="bg-primary 
                        text-white px-6 sm:px-10 md:px-16 py-14 md:py-20 flex items-start flex-col"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Our Mission
          </h2>

          <div className="space-y-5 text-sm md:text-base leading-relaxed text-white/95 max-w-xl">
            <p>
              To make high-quality support services and homes accessible to
              everyone with complex care needs, empowering them to live their
              lives as independently as possible.
            </p>

            <p>
              Our mission is to empower individuals with disabilities to live
              their lives to the fullest by providing the highest quality care
              and support.
            </p>

            <p>
              Through personalized care plans, compassionate service, and a
              focus on building lasting relationships, we create environments
              where participants can thrive.
            </p>

            <p>
              We are dedicated to fostering independence, enhancing quality of
              life, and promoting inclusion through person-centered services.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
