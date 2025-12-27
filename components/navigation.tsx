'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // const aboutMenu = [
  //   { label: 'Our Journey', href: '/about/our-journey' },
  //   { label: 'Our Values', href: '/about/partners' },
  //   { label: 'Our Policies', href: '/about/policies' },
  //   { label: 'Kuremera NDIS', href: '/about/kuremera-ndis' },
  // ]

  const servicesMenu = [
  { label: "Assist Access / Maintain Employ", href: "/services/assist-access-maintain-employ" },
  { label: "Assist-Life Stage, Transition", href: "/services/assist-life-stage-transition" },
  { label: "Assist-Personal Activities", href: "/services/assist-personal-activities" },
  { label: "Assist-Travel / Transport", href: "/services/assist-travel-transport" },
  { label: "Daily Tasks / Shared Living", href: "/services/daily-tasks-shared-living" },
  { label: "Innov Community Participation", href: "/services/innov-community-participation" },
  { label: "Development-Life Skills", href: "/services/development-life-skills" },
  { label: "Household Tasks", href: "/services/household-tasks" },
  { label: "Participate Community", href: "/services/participate-community" },
  { label: "Group / Centre Activities", href: "/services/group-centre-activities" },
  { label: "Supported Independent Living (SIL)", href: "/services/supported-independent-living" },
]

  React.useEffect(() => {
    const handleScroll = () => {}

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <nav
      className={`fixed w-screen top-0 z-50 bg-background shadow-md transition-colors duration-100 text-foreground`}
    >
      <div className={`h-8 bg-stone-300  hidden md:flex`}>
        <div className="flex flex-1">
          <div className="flex flex-1 flex-row justify-start pl-14 gap-4 items-center ">
            <div className="flex flex-row gap-4">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17 6h-2V5h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2h-.541A5.965 5.965 0 0 1 14 10v4a1 1 0 1 1-2 0v-4c0-2.206-1.794-4-4-4-.075 0-.148.012-.22.028C7.686 6.022 7.596 6 7.5 6A4.505 4.505 0 0 0 3 10.5V16a1 1 0 0 0 1 1h7v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3h5a1 1 0 0 0 1-1v-6c0-2.206-1.794-4-4-4Zm-9 8.5H7a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Z" />
              </svg>

              <span>care@livefreely.com</span>
            </div>
            <span>+91 9999329388</span>
          </div>
          <div className="flex flex-1 flex-row justify-end pr-14 items-center">
            <div className="flex flex-row gap-3">
              <Link href={'https://www.google.com'} target="_blank">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Link>
              <Link href={'https://www.google.com'} target="_blank">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Link>
              <Link href={'https://www.google.com'} target="_blank">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Link>
              <Link href={'https://www.google.com'} target="_blank">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                    clip-rule="evenodd"
                  />
                  <path
                    fill="currentColor"
                    d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex justify-between items-center h-24 ">
          <Link href="/" className="flex items-center justify-center ">
            <div className="rounded-full flex items-center justify-center ml-10">
              <img
                src={'/home/live_freely_icon1.png'}
                alt="Live Freely"
                className="size-18"
              />
            </div>
            {/* <span className="font-medium  text-lg  hidden sm:inline transition duration-100">
              LiveFreely
            </span> */}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex mr-10 items-center gap-14">
            <Link
              href="/"
              className=" hover:text-primary transition duration-100 text-xl"
            >
              Home
            </Link>
            <div className="relative group">
              {/* Trigger */}
              <div className="flex items-center gap-1 cursor-pointer text-xl hover:text-primary transition">
                Services
                <svg
                  className="w-4 h-4 mt-1 transition-transform duration-200 group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>

              {/* Dropdown */}
              <div
                className="
                absolute left-0 top-full mt-4
                w-[420px]
                bg-white
                shadow-2xl
                rounded-xl
                px-6 py-6
                opacity-0
                invisible
                group-hover:opacity-100
                group-hover:visible
                transition-all
                duration-200
                z-50
              "
              >
                <ul className="space-y-3">
                  {servicesMenu.map((item, index) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="
                        flex items-center gap-3
                        text-base text-foreground
                        hover:text-primary
                        transition
                      "
                      >
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative group">
              {/* Trigger */}
              <div className="flex items-center gap-1 cursor-pointer text-xl hover:text-primary transition">
                About Us
                {/* <svg
                  className="w-4 h-4 mt-1 transition-transform duration-200 group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg> */}
              </div>

              {/* Dropdown */}
              {/* <div
                className="
                  absolute left-0 top-full mt-4
                  w-64
                  bg-white
                  shadow-xl
                  py-4
                  opacity-0
                  invisible
                  group-hover:opacity-100
                  group-hover:visible
                  transition-all
                  duration-200
                  z-50
                "
              > */}
              {/* {aboutMenu.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="
          block px-6 py-3
          text-base text-foreground
          hover:bg-stone-100
          hover:text-primary
          transition
        "
                  >
                    {item.label}
                  </Link>
                ))} */}
              {/* </div> */}
            </div>
            <Link
              href="/portfolio"
              className=" hover:text-primary transition duration-100 text-xl"
            >
              Portfolio
            </Link>
          </div>
          <div className="hidden md:flex mr-14">
            <Link
              href={'/contact-us'}
              className="bg-primary shadow  w-36 h-11  flex items-center justify-center hover:bg-transparent border-primary transition-colors duration-300 "
            >
              Contact us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-16 "
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden pb-4 space-y-2  mx-3 text-foreground`}>
            <Link href="/" className="block py-2  hover:text-primary">
              Home
            </Link>
            <Link href="/services" className="block py-2  hover:text-primary">
              Services
            </Link>
            <Link href="/about" className="block py-2  hover:text-primary">
              About
            </Link>
            <Link href="/portfolio" className="block py-2  hover:text-primary">
              Portfolio
            </Link>
            <Link
              href={'/contact-us'}
              className="bg-primary shadow  w-36 h-11  flex items-center justify-center hover:bg-transparent border-primary transition-colors duration-300"
            >
              Contact Us
            </Link>
            <div className="flex flex-row gap-3 justify-end-safe pr-5">
              <Link href={'https://www.google.com'} target="_blank">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Link>
              <Link href={'https://www.google.com'} target="_blank">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Link>
              <Link href={'https://www.google.com'} target="_blank">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Link>
              <Link href={'https://www.google.com'} target="_blank">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                    clip-rule="evenodd"
                  />
                  <path
                    fill="currentColor"
                    d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
