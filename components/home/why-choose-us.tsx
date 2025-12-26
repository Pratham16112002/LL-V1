'use client'

import { Heart, Users, Lightbulb, Handshake, Send } from 'lucide-react'
import React from 'react'

const FEATURES = [
  {
    icon: Heart,
    title: 'Compassionate Care',
    description:
      'We treat every person with respect, dignity, and genuine care.',
  },
  {
    icon: Users,
    title: 'Experienced Team',
    description:
      'Our professionals are trained and dedicated to your well-being.',
  },
  {
    icon: Lightbulb,
    title: 'Personalized Plans',
    description:
      'Each service is tailored to meet your specific needs and goals.',
  },
  {
    icon: Handshake,
    title: 'Partnership Approach',
    description: 'We work with you to ensure your complete satisfaction.',
  },
]

export default function WhyChooseUs() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = React.useState(false)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    })
    setTimeout(() => setSubmitted(false), 5000)
  }
  return (
    <section className="py-20 bg-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-foreground mb-15">
          Contact Us Today
        </h2>
        <div
          className="bg-gradient-to-br from-primary/5 to-accent/5
                  p-6 sm:p-8 lg:p-10
                  flex flex-col lg:flex-row
                  gap-10
                  items-start"
        >
          <form
            onSubmit={handleSubmit}
            className="flex-1 md:flex-[0.6] space-y-6"
          >
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <label className="block text-sm text-left font-semibold mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  name="first_name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border  focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your first name"
                />
              </div>

              <div className="flex-1">
                <label className="block text-left text-sm font-semibold mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  name="last_name"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border  focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your last name"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <label className="block text-left text-sm font-semibold mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border  focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>

              <div className="flex-1">
                <label className="block text-left text-sm font-semibold text-foreground mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border  focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="(555) 000-0000"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-left mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-border"
                placeholder="Tell us more..."
              />
            </div>

            <button
              type="submit"
              className="w-full  bg-primary py-3 text-white font-semibold"
            >
              Send Message
            </button>
          </form>
          <div
            className="
            hidden md:flex[0.4]
            flex-shrink-0
            items-center
            justify-center
            w-full
            max-w-xs
          "
          >
            <img
              src={'/contact-us/contact-us-title.png'}
              alt="Care support"
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>
        </div>
        {/* Heading */}
        <h2 className="section-header mt-18">Why Choose Live Freely</h2>

        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-8 mt-16">
          {FEATURES.map((item, idx) => (
            <FeatureCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType
  title: string
  description: string
}) {
  return (
    <div
      className="
        group bg-white p-7 rounded-xl border border-transparent
        shadow-sm md:hover:shadow-lg
        md:hover:border-primary/20
        transform md:hover:-translate-y-2 md:hover:scale-110
        transition-all duration-300 ease-out
      "
    >
      {/* Icon Box */}
      <div
        className="
          w-16 h-16 rounded-xl bg-primary/10 
          flex items-center justify-center 
          mx-auto mb-6 group-hover:bg-primary/20 transition
        "
      >
        <Icon className="text-primary" size={28} />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>

      {/* Description */}
      <p className="text-muted-foreground leading-relaxed line-clamp-3">
        {description}
      </p>
    </div>
  )
}
