'use client'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import {  Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

const supportItems = [
  {
    title: 'Personalized Care Plans',
    subtitle:
      'Our team creates fully customized care plans designed to support your independence and enhance daily living.Access round-the-clock support from trained professionals ready to assist whenever you need help.lorem lorem kdk Access round-the-clock support from trained professionals ready to assist whenever you need help.lorem lorem kdk Access round-the-clock support from trained professionals ready to assist whenever you need help.lorem lorem kdk',
    buttonText: 'Learn More',
    buttonAction: '/care-plans',
  },
  {
    title: '24/7 On-Demand Assistance',
    subtitle: 'Access round-the-clock support from trained professionals ready to assist whenever you need help.lorem lorem kdk Access round-the-clock support from trained professionals ready to assist whenever you need help.lorem lorem kdk Access round-the-clock support from trained professionals ready to assist whenever you need help.lorem lorem kdk',
    buttonText: 'Request Support',
    buttonAction: '/support',
  },
  {
    title: 'Community Engagement Programs',
    subtitle:
      'Stay connected with social, recreational, and skill-building activities tailored to your interests.Access round-the-clock support from trained professionals ready to assist whenever you need help.lorem lorem kdk Access round-the-clock support from trained professionals ready to assist whenever you need help.lorem lorem kdk Access round-the-clock support from trained professionals ready to assist whenever you need help.lorem lorem kdk',
    buttonText: 'Join Programs',
    buttonAction: '/programs',
  },
  {
    title: 'Wellness & Therapy Services',
    subtitle:
      'We provide physical, emotional, and mental wellness support through guided therapy sessions.Access round-the-clock support from trained professionals ready to assist whenever you need help.lorem lorem kdk Access round-the-clock support from trained professionals ready to assist whenever you need help.lorem lorem kdk Access round-the-clock support from trained professionals ready to assist whenever you need help.lorem lorem kdk',
    buttonText: 'Book Session',
    buttonAction: '/wellness',
  },
]

const HomeSectionOne = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop={true}
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/home_section_1.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Slider Wrapper */}
      <div className="relative z-10 w-full h-[600px] flex">
        <Swiper
          modules={[ Pagination, Autoplay]}
          pagination={{
            type : 'bullets',
          }}
          autoplay={{ delay: 3500 }}
          loop={true}
          direction="vertical"
          className="w-full"
          speed={900}
        >
          {supportItems.map((item, i) => (
            <SwiperSlide key={i} >
              <div className="px-6 pl-16 py-20 w-full  h-full flex items-center justify-start text-left">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    {item.title}
                  </h1>
                  <p className="text-lg font-light text-gray-200 mb-8">
                    <span>{item.subtitle}</span>
                  </p>

                  <div className="flex gap-4">
                    <Link href={item.buttonAction} className="btn-primary">
                      {item.buttonText}
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default HomeSectionOne
