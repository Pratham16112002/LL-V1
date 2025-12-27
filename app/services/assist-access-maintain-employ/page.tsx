import Breadcrumbs from '@/components/breadcrumbs/breadcrumbs'
import AssistAccessSectionOne from './components/section-one'
import AssistAccessSectionTwo from './components/section-two'
import ContactCTA from '@/components/ui/contact-us-for-services'

export default function ServiceHero() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Cleaning and Domestic Assistance' },
  ]
  return (
    <section className="w-full">
      <AssistAccessSectionOne items={breadcrumbs} />
      <AssistAccessSectionTwo />
      <ContactCTA/>
    </section>
  )
}
