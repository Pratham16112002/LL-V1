"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <>
      <Navigation />

      <div className="bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-foreground mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Get in touch with our team to learn more about our services and how we can support you.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Get In Touch</h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <Phone className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">(555) 234-5678</p>
                    <p className="text-muted-foreground text-sm">Mon-Fri, 9am-5pm EST</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">info@careconnect.com</p>
                    <p className="text-muted-foreground text-sm">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground">123 Care Street</p>
                    <p className="text-muted-foreground">Your City, ST 12345</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-primary/5 p-6 rounded-lg">
                <h3 className="font-bold text-foreground mb-3">Service Hours</h3>
                <p className="text-muted-foreground text-sm mb-2">Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p className="text-muted-foreground text-sm mb-2">Saturday: 10:00 AM - 2:00 PM</p>
                <p className="text-muted-foreground text-sm">Sunday: Closed</p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Send us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="(555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2">
                  <Send size={16} />
                  Send Message
                </button>

                {submitted && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md">
                    Thank you! We've received your message and will be in touch soon.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-header">Visit Us</h2>
          <div className="rounded-lg overflow-hidden shadow-lg h-96 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
            <p className="text-muted-foreground">Map location will be displayed here</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
