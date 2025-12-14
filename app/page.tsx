import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, Heart, Users, Lightbulb, Handshake } from 'lucide-react'
import ServicesCarousel from '@/app/components/home-section-2'
import WhyChooseUs from '@/components/home/why-choose-us'
import HomeSectionOne from './components/home-section-1'
import HomeSectionThree from './components/home-section-3'

export default function Home() {
  return (
    <>
      <Navigation />
      {/* Hero Section */}
     <HomeSectionOne/>
      <ServicesCarousel />
      <HomeSectionThree/>
      {/* Services Overview */}
      

      {/* Why Choose Us */}
      <WhyChooseUs />
      {/* <section className="py-20 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-header">Why Choose Live Freely</h2>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <Heart className="text-primary mb-4" size={32} />
              <h3 className="text-lg font-bold text-foreground mb-3">
                Compassionate Care
              </h3>
              <p className="text-muted-foreground">
                We treat every person with respect, dignity, and genuine care.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <Users className="text-primary mb-4" size={32} />
              <h3 className="text-lg font-bold text-foreground mb-3">
                Experienced Team
              </h3>
              <p className="text-muted-foreground">
                Our professionals are trained and dedicated to your well-being.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <Lightbulb className="text-primary mb-4" size={32} />
              <h3 className="text-lg font-bold text-foreground mb-3">
                Personalized Plans
              </h3>
              <p className="text-muted-foreground">
                Each service is tailored to meet your specific needs and goals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <Handshake className="text-primary mb-4" size={32} />
              <h3 className="text-lg font-bold text-foreground mb-3">
                Partnership Approach
              </h3>
              <p className="text-muted-foreground">
                We work with you to ensure your complete satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-header">What Our Clients Say</h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-primary/5 p-8 rounded-lg">
              <div className="mb-4 text-primary">★★★★★</div>
              <p className="text-muted-foreground mb-6 italic">
                "Live Freely has been instrumental in helping me maintain my
                independence. Their team is professional and truly cares about
                my well-being."
              </p>
              <p className="font-semibold text-foreground">- Sarah M.</p>
            </div>

            <div className="bg-primary/5 p-8 rounded-lg">
              <div className="mb-4 text-primary">★★★★★</div>
              <p className="text-muted-foreground mb-6 italic">
                "The support I receive has improved my quality of life
                significantly. I appreciate their attention to detail and
                personal touch."
              </p>
              <p className="font-semibold text-foreground">- James T.</p>
            </div>

            <div className="bg-primary/5 p-8 rounded-lg">
              <div className="mb-4 text-primary">★★★★★</div>
              <p className="text-muted-foreground mb-6 italic">
                "Highly professional and compassionate. Live Freely genuinely
                understands their clients' needs and provides exceptional
                service."
              </p>
              <p className="font-semibold text-foreground">- Lisa R.</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8 opacity-90">
            Contact us today to learn how Live Freely can support your journey
            to independence and well-being.
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
