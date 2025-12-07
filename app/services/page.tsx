import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Services() {
  const services = [
    {
      id: "household",
      title: "Household Support",
      icon: "🏠",
      description: "Assistance with household maintenance and domestic tasks",
      details:
        "We provide comprehensive support with household tasks including cleaning, laundry, meal preparation, and home maintenance. Our goal is to help you maintain a comfortable and clean living environment while promoting your independence.",
      highlights: ["Cleaning and tidying", "Meal preparation", "Laundry services", "Light maintenance"],
    },
    {
      id: "personal",
      title: "Daily Personal Activities",
      icon: "👤",
      description: "Support with daily living and personal care",
      details:
        "Our team provides comprehensive support in various aspects of daily living. We focus on promoting and enabling you to live with the highest level of autonomy possible, providing assistance when needed.",
      highlights: ["Personal hygiene support", "Getting dressed", "Meal assistance", "Medication reminders"],
    },
    {
      id: "shared",
      title: "Shared Living Assistance",
      icon: "🏘️",
      description: "Support for daily tasks in shared living environments",
      details:
        "We assist participants with their living arrangements by providing support and supervision for daily tasks in shared living environments. Our team creates a supportive and inclusive community.",
      highlights: ["Daily supervision", "Community living support", "Social integration", "Life skills training"],
    },
    {
      id: "transport",
      title: "Travel & Transportation",
      icon: "🚗",
      description: "Assistance with travel and community participation",
      details:
        "We provide assistance with travel and transportation to ensure you can attend appointments, participate in community activities, and engage in mainstream community-based opportunities.",
      highlights: ["Appointment transportation", "Community outings", "Travel support", "Mobility assistance"],
    },
    {
      id: "life-skills",
      title: "Life Skills Development",
      icon: "📚",
      description: "Training and development for essential life skills",
      details:
        "Our guidance is centered around training and development activities that foster skills such as effective communication, creative thinking, problem-solving, and decision-making.",
      highlights: ["Communication skills", "Problem-solving", "Financial literacy", "Technology support"],
    },
    {
      id: "community",
      title: "Community Participation",
      icon: "🤝",
      description: "Support for social engagement and community activities",
      details:
        "We support you to actively engage with your community, including companionship during social outings and group activities. We help build confidence and enhance social skills.",
      highlights: ["Social outings", "Group activities", "Volunteer opportunities", "Community events"],
    },
  ]

  return (
    <>
      <Navigation />

      <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl font-bold text-foreground mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Comprehensive support services designed to help you achieve your goals and maintain your independence.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-gray-50 p-8 rounded-lg border border-border hover:shadow-lg transition scroll-mt-20"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-bold text-foreground mb-3">{service.title}</h2>
                <p className="text-muted-foreground mb-6">{service.details}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">What We Provide:</h4>
                  <ul className="space-y-2">
                    {service.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="text-primary hover:text-primary/80 font-semibold flex items-center gap-2"
                >
                  Get Started <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>

          {/* Service Highlights */}
          <div className="mt-20 bg-primary/5 p-12 rounded-lg">
            <h3 className="text-3xl font-bold text-foreground mb-8">Our Service Principles</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-bold text-foreground mb-3">Person-Centered</h4>
                <p className="text-muted-foreground">
                  Every service is tailored to your specific needs, goals, and preferences.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-foreground mb-3">Independence First</h4>
                <p className="text-muted-foreground">
                  We focus on promoting autonomy and enabling you to live as independently as possible.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-foreground mb-3">Professional Support</h4>
                <p className="text-muted-foreground">
                  Our trained team is committed to delivering high-quality, reliable support.
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
