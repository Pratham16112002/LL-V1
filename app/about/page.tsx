import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Users, Target, Heart, Award } from "lucide-react"

export default function About() {
  return (
    <>
      <Navigation />

      <div className="bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-foreground mb-6">About Live Freely</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Dedicated to providing exceptional support services that empower individuals to live independently and
            thrive in their communities.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Live Freely was founded with a simple mission: to provide exceptional support services that prioritize
                the well-being and independence of every individual we serve.
              </p>
              <p className="text-muted-foreground mb-4">
                We understand that everyone has unique needs and aspirations. That's why we've built our services around
                a person-centered approach, ensuring that each client receives customized support tailored to their
                specific goals and circumstances.
              </p>
              <p className="text-muted-foreground">
                With years of experience in disability support and aged care, our team is committed to making a
                meaningful difference in the lives of those we serve.
              </p>
            </div>
            <img src="/about_section_1.png" alt="Our team" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Target className="text-primary mb-4" size={40} />
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide high-quality, person-centered support services that enable individuals to achieve their
                goals, maintain independence, and participate fully in their communities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Heart className="text-primary mb-4" size={40} />
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                A world where individuals with disabilities are fully included, empowered, and celebrated as valued
                members of their communities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Award className="text-primary mb-4" size={40} />
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Values</h3>
              <p className="text-muted-foreground">
                Respect, compassion, professionalism, and commitment to continuous improvement in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-header">Meet Our Team</h2>
          <p className="section-subtitle">
            Our experienced professionals are dedicated to providing compassionate, quality support
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "Sarah Johnson", role: "Director of Services" },
              { name: "Michael Chen", role: "Care Coordinator" },
              { name: "Emma Williams", role: "Support Specialist" },
              { name: "David Rodriguez", role: "Community Liaison" },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <img
                  src={`/professional-portrait.png?height=300&width=300&query=professional portrait ${member.name}`}
                  alt={member.name}
                  className="w-full rounded-lg mb-4"
                />
                <h3 className="font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-header">Why Choose Live Freely</h2>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Users className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Experienced Professionals</h3>
                <p className="text-muted-foreground">
                  Our team brings years of expertise in disability support and aged care services.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Heart className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Genuine Care</h3>
                <p className="text-muted-foreground">
                  We treat every person with respect, dignity, and genuine compassion.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Target className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Person-Centered Approach</h3>
                <p className="text-muted-foreground">Services are customized to meet individual needs and goals.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Award className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Quality Assurance</h3>
                <p className="text-muted-foreground">
                  We maintain high standards and continuously improve our services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
