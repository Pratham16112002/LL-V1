import Breadcrumbs from '@/components/breadcrumbs/breadcrumbs'
import { Footer } from '@/components/footer'
import { Navigation } from '@/components/navigation'
import { Breadcrumb } from '@/components/ui/breadcrumb'

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* This nav only appears on /services/* routes */}
      <Navigation />
      <div className='h-24 md:32'></div>
      {children}
      <Footer/>
    </>
  )
}
