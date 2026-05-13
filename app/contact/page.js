'use client'

import React, { useRef, useState } from 'react'
import HomeLogo from '@/components/HomeLogo'
import Navbar from '@/components/Navbar'

const contactDetails = [
  'Building Beyond Studio',
  'New Delhi, India',
  'Remote collaborations worldwide',
]

const socialLinks = ['https://www.instagram.com/purujeetsart/', 'https://x.com/PurujeetKu24177', 'https://www.linkedin.com/in/purujeet-kumar-2b9bb6321/']

const ContactPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const scrollRef = useRef(null)

  const handleWheel = (event) => {
    const scrollEl = scrollRef.current

    if (!scrollEl || isFormOpen || Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
      return
    }

    scrollEl.scrollLeft += event.deltaY
  }

  return (
    <>
      <Navbar />
      <HomeLogo />
      <main
        ref={scrollRef}
        onWheel={handleWheel}
        className="h-screen w-screen overflow-x-auto overflow-y-hidden bg-white pr-[5vw] text-[#15120e]"
      >
        <section className="flex min-h-screen w-[190vw] min-w-[1280px]">
          <div className="flex min-h-screen w-[105vw] shrink-0 flex-col justify-between border-r border-black/15 px-5 py-6 sm:px-8 lg:px-12">
            <div className="flex items-center justify-between border-b border-black/15 pb-5">
              <p className="text-xs uppercase tracking-[0.35em] text-black/55">Contact</p>
              <p className="text-xs uppercase tracking-[0.22em] text-black/40">Project Enquiry</p>
            </div>

            <div className="max-w-[920px] py-16 lg:py-0">
              <h1 className="text-[clamp(4.5rem,15vw,14rem)] font-light leading-[0.82] tracking-normal">
                Project Enquiry
              </h1>
            </div>

            <div className="grid gap-10 border-t border-black/15 pt-8 sm:grid-cols-[1fr_auto] sm:items-end">
              <h2 className="max-w-[540px] text-3xl font-light leading-tight sm:text-5xl">
                Want to enquire about building beyond?
              </h2>
              <button
                type="button"
                onClick={() => setIsFormOpen(true)}
                className="w-fit border-b border-black pb-1 text-left text-lg uppercase tracking-[0.18em] transition-opacity hover:opacity-55"
              >
                Let&apos;s Talk
              </button>
            </div>
          </div>

          <aside className="flex min-h-screen w-[85vw] shrink-0 flex-col justify-between px-5 py-8 sm:px-8 lg:px-12">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-black/45">Details</p>
              <div className="mt-16 space-y-2 text-[clamp(2rem,4.5vw,5.5rem)] font-light leading-[0.96]">
                {contactDetails.map((detail) => (
                  <p key={detail}>{detail}</p>
                ))}
              </div>
            </div>

            <div className="grid gap-10 border-t border-black/15 pt-8 text-sm sm:grid-cols-2">
              <div className="space-y-3">
                <a className="block hover:opacity-55" href="mailto:purujeetkr2005@gmail.com">
                  purujeetkr2005@gmail.com
                </a>
                <a className="block hover:opacity-55" href="tel:+919999999999">
                  +91 7004759761
                </a>
              </div>
              <div className="flex flex-wrap text-center gap-x-5 gap-y-2 sm:justify-end">
                {socialLinks.map((link) => (
                  <a key={link} className="underline underline-offset-4 hover:opacity-55" href="#">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </section>

        {isFormOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-[#15120e] pr-[5vw] text-[#ece8df]">
            <div className="min-h-screen px-5 py-6 sm:px-8 lg:px-12">
              <div className="flex items-center justify-between border-b border-white/20 pb-5">
                <p className="text-xs uppercase tracking-[0.35em] text-white/55">Project Enquiry</p>
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="text-xs uppercase tracking-[0.28em] text-white/75 transition-opacity hover:opacity-55"
                >
                  Close
                </button>
              </div>

              <form className="mx-auto grid max-w-5xl gap-8 pt-[12vh]">
                <label className="grid gap-3 border-b border-white/25 pb-5">
                  <span className="text-xs uppercase tracking-[0.28em] text-white/45">Full name</span>
                  <input
                    className="bg-transparent text-3xl font-light outline-none placeholder:text-white/20 sm:text-5xl"
                    name="name"
                    type="text"
                    autoComplete="name"
                  />
                </label>

                <label className="grid gap-3 border-b border-white/25 pb-5">
                  <span className="text-xs uppercase tracking-[0.28em] text-white/45">Email*</span>
                  <input
                    className="bg-transparent text-3xl font-light outline-none placeholder:text-white/20 sm:text-5xl"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </label>

                <label className="grid gap-3 border-b border-white/25 pb-5">
                  <span className="text-xs uppercase tracking-[0.28em] text-white/45">Subject</span>
                  <input
                    className="bg-transparent text-3xl font-light outline-none placeholder:text-white/20 sm:text-5xl"
                    name="subject"
                    type="text"
                  />
                </label>

                <label className="grid gap-3 border-b border-white/25 pb-5">
                  <span className="text-xs uppercase tracking-[0.28em] text-white/45">
                    Message* Let us know more
                  </span>
                  <textarea
                    className="min-h-36 resize-none bg-transparent text-3xl font-light outline-none placeholder:text-white/20 sm:text-5xl"
                    name="message"
                    required
                  />
                </label>

                <button
                  type="submit"
                  className="mt-6 w-fit border-b border-white pb-1 text-left text-lg uppercase tracking-[0.22em] transition-opacity hover:opacity-55"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </main>
    </>
  )
}

export default ContactPage
