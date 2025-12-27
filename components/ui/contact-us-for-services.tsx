import Link from 'next/link'

export default function ContactCTA() {
  return (
    <section className="relative w-full">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-neutral-400">
        <img
          src="/service_section_1.png"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="max-w-2xl text-center md:text-left">
          {/* Small label */}
          <p className="text-primary text-sm font-medium mb-4">Get in Touch</p>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight mb-6">
            Support That’s Designed Around You
          </h2>

          {/* Description */}
          <p className="text-white/80 leading-relaxed mb-10">
            Everyone’s needs are different, and we’re here to listen. Reach out
            to our team today and let’s work together to create support
            solutions that help you live with confidence, independence, and
            peace of mind.
          </p>

          {/* CTA */}
          <Link
            href="/contact-us"
            className="
              inline-flex items-center justify-center
              bg-primary text-white
              px-10 py-4 rounded-full
              font-medium
              hover:bg-primary/90
              transition
            "
          >
            Contact Our Team
          </Link>
        </div>
      </div>
    </section>
  )
}
