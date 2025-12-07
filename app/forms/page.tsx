import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Download, FileText } from "lucide-react"

export default function Forms() {
  const forms = [
    {
      title: "Service Application Form",
      description: "Begin your journey with us by completing our comprehensive service application.",
      file: "service-application.pdf",
    },
    {
      title: "Health & Safety Assessment",
      description: "Helps us understand your specific needs and ensure appropriate support.",
      file: "health-safety-assessment.pdf",
    },
    {
      title: "Personal Care Plan Template",
      description: "Document for outlining personalized care and support goals.",
      file: "care-plan-template.pdf",
    },
    {
      title: "Emergency Contact Form",
      description: "Important information for emergency situations and contacts.",
      file: "emergency-contacts.pdf",
    },
    {
      title: "Feedback & Complaints Form",
      description: "Share your feedback or concerns to help us improve our services.",
      file: "feedback-complaints.pdf",
    },
    {
      title: "Consent & Privacy Agreement",
      description: "Legal documentation regarding privacy and service agreements.",
      file: "consent-privacy.pdf",
    },
  ]

  return (
    <>
      <Navigation />

      <div className="bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-foreground mb-6">Forms & Documents</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Download the forms you need to get started with our services.
          </p>
        </div>
      </div>

      {/* Forms Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {forms.map((form, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-lg border border-border hover:shadow-md transition">
                <div className="flex gap-4 items-start mb-4">
                  <FileText className="text-primary flex-shrink-0 mt-1" size={32} />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2">{form.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{form.description}</p>
                  </div>
                </div>

                <button className="flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition">
                  <Download size={16} />
                  Download Form
                </button>
              </div>
            ))}
          </div>

          {/* Information */}
          <div className="mt-20 bg-primary/5 p-12 rounded-lg">
            <h2 className="text-2xl font-bold text-foreground mb-6">Important Information</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>All forms can be printed and completed by hand, or filled out digitally and submitted via email.</p>
              <p>If you need assistance completing any forms, please contact us and our team will be happy to help.</p>
              <p>
                All personal information collected through these forms is handled in accordance with privacy laws and
                our privacy policy.
              </p>
            </div>
          </div>

          {/* Next Steps */}
          <div className="mt-12 bg-white p-8 rounded-lg border-2 border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">Next Steps</h3>
            <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
              <li>Download and complete the Service Application Form</li>
              <li>Fill out the Health & Safety Assessment</li>
              <li>Submit forms via email or in person</li>
              <li>Our team will review and contact you within 24 hours</li>
              <li>Schedule a consultation to discuss your needs</li>
              <li>Begin your personalized support journey</li>
            </ol>

            <div className="mt-8">
              <Link href="/contact" className="btn-primary">
                Submit Forms or Ask Questions
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
