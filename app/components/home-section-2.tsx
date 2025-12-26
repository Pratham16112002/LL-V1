'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

// Swiper styles
// @ts-ignore
import 'swiper/css'
// @ts-ignore
import 'swiper/css/pagination'
import React from 'react'
import { useWindowWidth } from '@/hooks/useWindowWith'

type Service = {
  img: string
  title: string
  desc: string
  href: string
}

type LayoutConfig = {
  itemsPerSlide: number
  gridCols: string
}

const getLayoutConfig = (width: number): LayoutConfig => {
  if (width < 640) {
    return {
      itemsPerSlide: 2,
      gridCols: 'grid-cols-1',
    }
  }

  return {
    itemsPerSlide: 6,
    gridCols: 'grid-cols-3',
  }
}

// Utility: chunk array into groups of 6
const chunkArray = <T,>(arr: T[], size: number): T[][] => {
  const chunks: T[][] = []
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size))
  }
  return chunks
}

export default function ServicesCarousel() {
  const width = useWindowWidth()

  // Prevent render until width is known (SSR safe)
  if (!width) return null

  const services: Service[] = [
    {
      img: '/service_section_1.png',
      title: 'Assist Access/Maintain Employ',
      desc: 'Support to access or maintain employment opportunities.',
      href: '/services#0102',
    },
    {
      img: '/service_section_2.png',
      title: 'Assist-Life Stage, Transition',
      desc: 'Support for life transitions and skill-building.',
      href: '/services#0106',
    },
    {
      img: '/service_section_3.png',
      title: 'Assist-Personal Activities',
      desc: 'Help with daily personal tasks.',
      href: '/services#0107',
    },
    {
      img: '/service_section_4.png',
      title: 'Assist-Travel/Transport',
      desc: 'Safe and reliable transport support.',
      href: '/services#0108',
    },
    {
      img: '/service_section_1.png',
      title: 'Daily Tasks/Shared Living',
      desc: 'Support with domestic activities.',
      href: '/services#0115',
    },
    {
      img: '/service_section_2.png',
      title: 'Innov Community Participation',
      desc: 'Encouraging community engagement.',
      href: '/services#0116',
    },
    {
      img: '/service_section_3.png',
      title: 'Development-Life Skills',
      desc: 'Training for essential life skills.',
      href: '/services#0117',
    },
    {
      img: '/service_section_4.png',
      title: 'Household Tasks',
      desc: 'Help with cleaning and maintenance.',
      href: '/services#0120',
    },
    {
      img: '/service_section_1.png',
      title: 'Participate Community',
      desc: 'Support for social participation.',
      href: '/services#0125',
    },
    {
      img: '/service_section_2.png',
      title: 'Group/Centre Activities',
      desc: 'Group-based community programs.',
      href: '/services#0136',
    },
  ]

  const { itemsPerSlide, gridCols } = getLayoutConfig(width)

  console.log(itemsPerSlide)

  const slides = chunkArray(services, itemsPerSlide)
  console.log(slides)
  return (
    <section className="relative w-full h-[1000px] overflow-hidden bg-background">
      {/* Header */}
      <div className="absolute top-4 left-0 w-full z-20 text-center px-6">
        <h2 className="text-4xl font-bold text-foreground mb-4">
          Services by Live Freely
        </h2>
        <p className="text-foreground max-w-2xl mx-auto">
          We offer a comprehensive range of support services tailored to your
          unique needs
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        slidesPerView={1}
        spaceBetween={0}
        speed={900}
        className="absolute inset-0 w-full h-full"
      >
        {slides.map((slide, slideIndex) => (
          <SwiperSlide key={slideIndex}>
            {/* 🔽 CHANGED: added horizontal padding to give margin on X axis */}
            <div className="w-full h-full px-6 lg:px-12 flex items-center justify-center
            ">
              {/* 🔽 CHANGED: removed dynamic grid-cols and used gridCols */}
              {/* 🔽 CHANGED: normalized gap */}
              <div
                className={`
            grid
            grid-rows-2
            gap-15
            place-items-center
            w-full
            max-w-7xl
            mx-auto
            h-[700px]
            grid-cols-[repeat(auto-fit,minmax(280px,1fr))]
          `}
              >
                {slide.map((service, i) => (
                  <div
                    key={i}
                    className="relative
                          w-full
                          max-w-sm
                          aspect-[4/3]
                          bg-cover
                          bg-center
                          overflow-hidden "
                    style={{ backgroundImage: `url(${service.img})` }}
                  >
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6">
                      <div className="text-white max-w-sm text-center">
                        <h3 className="text-xl font-semibold mb-2">
                          {service.title}
                        </h3>

                        <p className="text-sm mb-4 leading-relaxed">
                          {service.desc}
                        </p>

                        <Link
                          href={service.href}
                          className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition"
                        >
                          Learn More <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
