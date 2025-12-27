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
      desc: 'Support to access.',
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
    {
      img: '/service_section_2.png',
      title: 'Supported Independent Living (SIL)',
      desc: 'Group-based community programs.',
      href: '/services#0137',
    },
  ]

  const { itemsPerSlide, gridCols } = getLayoutConfig(width)

  const slides = chunkArray(services, itemsPerSlide)

  return (
    <section className=" w-full overflow-hidden bg-stone-200">
      {/* Header */}
      <div className="w-full text-center px-6 mt-7 mb-12">
        <h2 className="text-4xl font-bold text-foreground mb-4 ">
          Services by Live Freely
        </h2>
        <p className="text-foreground max-w-2xl mx-auto font-medium">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse,
          quisquam voluptates sint adipisci ipsam eum maxime distinctio modi
          quas possimus? Ipsam inventore, reiciendis voluptate dolorem repellat
          sunt quis quidem iste!
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
        className="h-fit pt-12"
      >
        {slides.map((slide, slideIndex) => (
          <SwiperSlide key={slideIndex}>
            {/* 🔽 CHANGED: added horizontal padding to give margin on X axis */}
            <div
              className="w-full h-full px-6 lg:px-12 flex items-center pb-9 justify-center
            "
            >
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
            h-fit
            grid-cols-[repeat(auto-fit,minmax(280px,1fr))]
          `}
              >
                {slide.map((service, i) => (
                  <div
                    key={i}
                    className="w-full max-w-sm h-fit bg-[#eef6fb]   overflow-hidden shadow-sm flex flex-col"
                  >
                    {/* Image */}
                    <div className="w-auto h-75 overflow-hidden">
                      <img
                        src={service.img}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col items-center text-center px-6 py-8 flex-1">
                      <h3 className="text-xl font-semibold text-[#1e4b8f] mb-4">
                        {service.title}
                      </h3>

                      <p className="text-sm text-gray-600 leading-relaxed mb-8">
                        {service.desc}
                      </p>
                      <Link
                        href={service.href}
                        className="mt-auto inline-flex rounded-full items-center justify-center 
                   bg-primary text-white px-8 py-3  
                   text-sm font-medium hover:bg-hovered-primary transition"
                      >
                        Read More
                      </Link>
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
