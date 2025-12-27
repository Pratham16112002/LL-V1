import Breadcrumbs from '@/components/breadcrumbs/breadcrumbs'
import { BreadcrumbItem } from '@/components/breadcrumbs/types'

const AssistAccessSectionOne = ({ items }: { items: BreadcrumbItem[] }) => {
  return (
    <div className="flex flex-col md:flex-row ">
      <div className="w-full md:w-1/2 bg-stone-200  text-foreground px-6 sm:px-10 md:px-16 py-12 md:py-20 flex flex-col justify-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 leading-tight gap-2 md:gap-0">
          Assist
          <br />
          Access
        </h1>
        <div className="flex items-center gap-3 text-sm text-foreground">
          <span className="text-primary">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 10.5 12 3l9 7.5v9a1.5 1.5 0 0 1-1.5 1.5H15v-6H9v6H4.5A1.5 1.5 0 0 1 3 19.5v-9Z" />
            </svg>
          </span>
          <Breadcrumbs items={items} />
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-neutral-200 relative min-h-60 md:min-h-full">
        <img
          src={'/service_section_1.png'}
          className="w-full md:h-[40vh] aspect-video object-cover"
        />
      </div>
    </div>
  )
}

export default AssistAccessSectionOne
