'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesCarousel() {
  const services = [
    {
      img: "/service_section_1.png",
      title: "Household Support",
      desc: "We specialize in providing assistance with household tasks, helping you maintain a comfortable home environment.",
      href: "/services#household",
    },
    {
      img: "/service_section_2.png",
      title: "Daily Personal Activities",
      desc: "Our team provides comprehensive support in daily living activities, promoting your independence and autonomy.",
      href: "/services#personal",
    },
    {
      img: "/service_section_3.png",
      title: "Community Activities",
      desc: "We help you engage with your community through various programs and activities that foster connection and growth.",
      href: "/services#community",
    },
    {
      img: "/service_section_4.png",
      title: "Travel & Transportation",
      desc: "Our transportation support ensures you can attend appointments and participate in community activities with confidence.",
      href: "/services#transport",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-header">Services by Live Freely</h2>
        <p className="section-subtitle mb-10">
          We offer a comprehensive range of support services tailored to your unique needs
        </p>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={false}
          speed={500}
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
            1280: { slidesPerView: 1 },
          }}
          className="pb-16!"
        >
          {services.map((service, i) => (
            <SwiperSlide key={i}>
              <div className="flex w-[70%]  h-72 flex-col md:flex-row items-center  gap-6  mx-auto shadow-2xl rounded-md">
                <div className=" w-full h-[30%] md:w-[30%]  md:h-full rounded-lg p-2">

                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full object-cover h-full rounded-lg "
                  />
                  </div>

                <div className=" w-full h-[50%] md:w-[50%] md:h-full p-2">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground leading-4 md:mb-4">
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}   