import Link from "next/link"
import { BreadcrumbItem } from "./types"

type Props = {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: Props) {
  return (
    <nav className="flex items-center gap-2 text-sm text-foreground">
      {items.map((item, index) => {
        const isLast = index === items.length - 1

        return (
          <div key={index} className="flex items-center gap-2">
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="hover:text-primary transition"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground">{item.label}</span>
            )}

            {!isLast && <span className="opacity-60">|</span>}
          </div>
        )
      })}
    </nav>
  )
}