import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Portfolio() {
  const caseStudies = [
    {
      title: "Supporting Independent Living",
      category: "Daily Support",
      description: "Helped a client transition to independent living with personalized support plans",
      image: "community living support",
    },
    {
      title: "Community Engagement Program",
      category: "Community",
      description: "Developed comprehensive programs enabling social participation and connection",
      image: "group activities people enjoying",
    },
    {
      title: "Life Skills Training",
      category: "Development",
      description: "Created personalized training programs to develop essential life skills",
      image: "skills training workshop",
    },
    {
      title: "Household Support Services",
      category: "Support",
      description: "Provided comprehensive household assistance enabling independent living",
      image: "home organization assistance",
    },
    {
      title: "Transportation Coordination",
      category: "Transport",
      description: "Coordinated reliable transportation for medical appointments and activities",
      image: "accessible vehicle transportation",
    },
    {
      title: "Personal Care Excellence",
      category: "Care",
      description: "Delivered compassionate personal care support with dignity and respect",
      image: "healthcare professional support",
    },
  ]

  return (
    <>
      <Navigation />

      <div className="bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-foreground mb-6">Our Portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Showcasing our successful projects and the positive impact we've made in our community.
          </p>
        </div>
      </div>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, idx) => (
              <div
                key={idx}
                className="group bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer"
              >
                <div className="aspect-video overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                  <img
                    src={`/.jpg?height=300&width=400&query=${study.image}`}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-3">
                    {study.category}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-2">{study.title}</h3>
                  <p className="text-muted-foreground">{study.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Impact Stats */}
          <div className="mt-20 bg-primary/5 p-12 rounded-lg">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Impact</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">Clients Served</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                <p className="text-muted-foreground">Hours of Support</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <p className="text-muted-foreground">Client Satisfaction</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
