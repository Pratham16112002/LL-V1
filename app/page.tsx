import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight, Heart, Users, Lightbulb, Handshake } from "lucide-react"
import ServicesCarousel from "@/components/home/service-carousel"
import WhyChooseUs from "@/components/home/why-choose-us"

export default function Home() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-8 items-center">
          <div >
            <img
              src="/home_section_1.png"
              alt="Professional support services"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight ">
              Professional Support Services
            </h1>
            <p className="text-lg font-light text-muted-foreground mb-8">
              Live Freely provides comprehensive support services that prioritize your independence and well-being.
              We're here to help you thrive Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus nam, sunt ratione sequi, molestiae quidem consectetur vitae omnis atque, ad expedita sed totam aliquam adipisci veniam. Quidem provident temporibus iste..
            </p>
            <div className="flex gap-4">
              <Link href="/contact" className="btn-primary">
                Get Started
              </Link>
              <Link
                href="/services"
                className="px-6 py-3 border-2 border-primary text-primary font-semibold rounded-md hover:bg-primary/5 transition"
              >
                Explore Services
              </Link>
            </div>
          </div>
          
        </div>
      </section>
    <ServicesCarousel/>
      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-header">Services by Live Freely</h2>
          <p className="section-subtitle">
            We offer a comprehensive range of support services tailored to your unique needs
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Service 1 */}
            <div className="flex gap-6">
              <img
                src="/household-cleaning-support.jpg"
                alt="Household support"
                className="w-64 h-64 object-cover rounded-lg flex-shrink-0"
              />
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Household Support</h3>
                <p className="text-muted-foreground mb-4">
                  We specialize in providing assistance with household tasks, helping you maintain a comfortable home
                  environment.
                </p>
                <Link
                  href="/services#household"
                  className="text-primary hover:text-primary/80 font-semibold flex items-center gap-2"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="flex gap-6 md:flex-row-reverse">
              <img
                src="/elderly-person-caregiver.png"
                alt="Personal care"
                className="w-64 h-64 object-cover rounded-lg flex-shrink-0"
              />
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Daily Personal Activities</h3>
                <p className="text-muted-foreground mb-4">
                  Our team provides comprehensive support in daily living activities, promoting your independence and
                  autonomy.
                </p>
                <Link
                  href="/services#personal"
                  className="text-primary hover:text-primary/80 font-semibold flex items-center gap-2"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="flex gap-6">
              <img
                src="/group-recreational-activities-community.jpg"
                alt="Community participation"
                className="w-64 h-64 object-cover rounded-lg flex-shrink-0"
              />
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Community Activities</h3>
                <p className="text-muted-foreground mb-4">
                  We help you engage with your community through various programs and activities that foster connection
                  and growth.
                </p>
                <Link
                  href="/services#community"
                  className="text-primary hover:text-primary/80 font-semibold flex items-center gap-2"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Service 4 */}
            <div className="flex gap-6 md:flex-row-reverse">
              <img
                src="/transportation-assistance-vehicle.jpg"
                alt="Transportation"
                className="w-64 h-64 object-cover rounded-lg flex-shrink-0"
              />
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Travel & Transportation</h3>
                <p className="text-muted-foreground mb-4">
                  Our transportation support ensures you can attend appointments and participate in community activities
                  with confidence.
                </p>
                <Link
                  href="/services#transport"
                  className="text-primary hover:text-primary/80 font-semibold flex items-center gap-2"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs/>
      <section className="py-20 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-header">Why Choose Live Freely</h2>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <Heart className="text-primary mb-4" size={32} />
              <h3 className="text-lg font-bold text-foreground mb-3">Compassionate Care</h3>
              <p className="text-muted-foreground">We treat every person with respect, dignity, and genuine care.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <Users className="text-primary mb-4" size={32} />
              <h3 className="text-lg font-bold text-foreground mb-3">Experienced Team</h3>
              <p className="text-muted-foreground">Our professionals are trained and dedicated to your well-being.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <Lightbulb className="text-primary mb-4" size={32} />
              <h3 className="text-lg font-bold text-foreground mb-3">Personalized Plans</h3>
              <p className="text-muted-foreground">Each service is tailored to meet your specific needs and goals.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <Handshake className="text-primary mb-4" size={32} />
              <h3 className="text-lg font-bold text-foreground mb-3">Partnership Approach</h3>
              <p className="text-muted-foreground">We work with you to ensure your complete satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-header">What Our Clients Say</h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-primary/5 p-8 rounded-lg">
              <div className="mb-4 text-primary">★★★★★</div>
              <p className="text-muted-foreground mb-6 italic">
                "Live Freely has been instrumental in helping me maintain my independence. Their team is professional
                and truly cares about my well-being."
              </p>
              <p className="font-semibold text-foreground">- Sarah M.</p>
            </div>

            <div className="bg-primary/5 p-8 rounded-lg">
              <div className="mb-4 text-primary">★★★★★</div>
              <p className="text-muted-foreground mb-6 italic">
                "The support I receive has improved my quality of life significantly. I appreciate their attention to
                detail and personal touch."
              </p>
              <p className="font-semibold text-foreground">- James T.</p>
            </div>

            <div className="bg-primary/5 p-8 rounded-lg">
              <div className="mb-4 text-primary">★★★★★</div>
              <p className="text-muted-foreground mb-6 italic">
                "Highly professional and compassionate. Live Freely genuinely understands their clients' needs and
                provides exceptional service."
              </p>
              <p className="font-semibold text-foreground">- Lisa R.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8 opacity-90">
            Contact us today to learn how Live Freely can support your journey to independence and well-being.
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 bg-primary-foreground text-primary font-bold rounded-md hover:opacity-90 transition inline-block"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
