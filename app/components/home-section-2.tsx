'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

//@ts-ignore
import 'swiper/css'
//@ts-ignore
import 'swiper/css/navigation'
//@ts-ignore
import 'swiper/css/pagination'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function ServicesCarousel() {
  const services = [
    {
      img: '/service_section_1.png',
      title: 'Assist Access/Maintain Employ',
      desc: 'Support to access or maintain employment opportunities.',
      href: '/services#0102',
    },
    {
      img: '/service_section_2.png',
      title: 'Assist-Life Stage, Transition',
      desc: 'Support for life transitions, including planning, skill-building and assistance.',
      href: '/services#0106',
    },
    {
      img: '/service_section_3.png',
      title: 'Assist-Personal Activities',
      desc: 'Help with daily personal tasks to support independence.',
      href: '/services#0107',
    },
    {
      img: '/service_section_4.png',
      title: 'Assist-Travel/Transport',
      desc: 'Support with safe and reliable travel and transportation.',
      href: '/services#0108',
    },
    {
      img: '/service_section_1.png',
      title: 'Daily Tasks/Shared Living',
      desc: 'Assistance with day-to-day domestic activities in shared living arrangements.',
      href: '/services#0115',
    },
    {
      img: '/service_section_2.png',
      title: 'Innov Community Participation',
      desc: 'Programs that encourage community engagement and innovation.',
      href: '/services#0116',
    },
    {
      img: '/service_section_3.png',
      title: 'Development-Life Skills',
      desc: 'Training and support to develop essential life skills.',
      href: '/services#0117',
    },
    {
      img: '/service_section_4.png',
      title: 'Household Tasks',
      desc: 'Support with household cleaning, cooking, and maintenance.',
      href: '/services#0120',
    },
    {
      img: '/service_section_1.png',
      title: 'Participate Community',
      desc: 'Support to participate in community, social, and recreational activities.',
      href: '/services#0125',
    },
    {
      img: '/service_section_2.png',
      title: 'Group/Centre Activities',
      desc: 'Group-based programs delivered in community or centre-based settings.',
      href: '/services#0136',
    },
  ]

  return (
    <section className="relative h-[800px] w-full overflow-hidden">
      {/* Text Layer (Top Content) */}
      <div className="absolute top-10 left-0 w-full z-20 text-center px-6">
        <h2 className="section-header text-white">Services by Live Freely</h2>
        <p className="section-subtitle mb-10 text-white">
          We offer a comprehensive range of support services tailored to your
          unique needs
        </p>
      </div>

      {/* Swiper – fills entire section */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={false}
        speed={900}
        spaceBetween={0}
        slidesPerView={'auto'}
        breakpoints={{
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
          1280: { slidesPerView: 2 },
        }}
        className="absolute inset-0 w-full h-full z-10"
      >
        {services.map((service, i) => (
          <SwiperSlide key={i}>
            {/* Full-section background image */}
            <div
              className="relative w-full h-full bg-center bg-cover p-10"
              style={{ backgroundImage: `url(${service.img})` }}
            >
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center ">
                {/* Text overlay */}
                <div className="backdrop-blur-sm p-6 rounded-lg max-w-fit mx-12">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    {service.title}
                  </h3>

                  <p className="text-foreground mb-4 leading-relaxed">
                    {service.desc}
                  </p>

                  <Link
                    href={service.href}
                    className="text-primary hover:text-primary/80 font-semibold flex items-center gap-2"
                  >
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
