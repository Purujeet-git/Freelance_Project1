'use client'

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import HomeLogo from '@/components/HomeLogo'
import Navbar from '@/components/Navbar'

const projects = [
  { id: 1, title: 'Zil Residences', src: '/1.jpg', location: 'Seychelles', type: 'Resort' },
  { id: 2, title: 'Zil Resort', src: '/2.jpg', location: 'Seychelles', type: 'Resort' },
  { id: 3, title: 'The Gramophone Works', src: '/3.jpg', location: 'London', type: 'Commercial' },
  { id: 4, title: 'Republic', src: '/4.jpg', location: 'Export Building', type: 'Commercial' },
  { id: 5, title: 'Secret Beach, Antigua', src: '/5.jpg', location: 'Antigua', type: 'Resort' },
  { id: 6, title: 'Cabot St Lucia', src: '/6.jpg', location: 'Saint Lucia', type: 'Resort' },
  { id: 7, title: 'Porto Montenegro', src: '/7.jpg', location: 'Tivat', type: 'Waterfront' },
  { id: 8, title: 'Roots in the Sky', src: '/8.jpg', location: 'London', type: 'Commercial' },
  { id: 9, title: 'Bermondsey Yard', src: '/9.jpg', location: 'London', type: 'Residential' },
  { id: 10, title: 'Alphabeta', src: '/10.jpg', location: 'London', type: 'Workspace' },
  { id: 11, title: 'Lansdowne Court', src: '/11.jpg', location: 'London', type: 'Residential' },
  { id: 12, title: 'Third Space', src: '/12.jpg', location: 'London', type: 'Wellness' },
  { id: 13, title: 'Macka Istanbul', src: '/laptop.jpg', location: 'Istanbul', type: 'Residential' },
]

const ProjectsPage = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollRef = useRef(null)
  const itemRefs = useRef([])

  useEffect(() => {
    const scrollEl = scrollRef.current
    const items = itemRefs.current.filter(Boolean)

    if (!scrollEl || !items.length) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (mostVisible) {
          setActiveIndex(Number(mostVisible.target.dataset.index))
        }
      },
      {
        root: scrollEl,
        threshold: [0.35, 0.5, 0.65, 0.8],
        rootMargin: '-28% 0px -38% 0px',
      }
    )

    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <HomeLogo />
      <main
        ref={scrollRef}
        className="h-screen overflow-y-auto overflow-x-hidden no-scrollbar bg-white text-[#15120e] pr-[5vw]"
      >
        <section className="min-h-screen grid grid-cols-1 lg:grid-cols-[1fr_43vw]">
          <div className="px-5 pt-6 pb-24 sm:px-8 lg:px-12">
            <div className="sticky top-0 z-20 flex items-center justify-between border-b border-black/15 bg-white py-5 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.35em] text-black/55">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Projects</p>
            </div>

            <div className="pt-[18vh]">
              {projects.map((project, index) => {
                const isActive = activeIndex === index

                return (
                  <article
                    key={project.id}
                    ref={(node) => {
                      itemRefs.current[index] = node
                    }}
                    data-index={index}
                    className="group min-h-[58vh] border-b border-black/15 py-12  sm:py-16 lg:min-h-[62vh]"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <h2
                        className={`max-w-[980px] text-[clamp(3rem,10vw,9.5rem)] font-light leading-[0.9] transition-colors duration-500 ${
                          isActive ? 'text-[#15120e]' : 'text-black/20'
                        }`}
                      >
                        {project.title}
                      </h2>
                      <span
                        className={`hidden pt-3 text-sm tabular-nums transition-colors duration-500 sm:block ${
                          isActive ? 'text-black/70' : 'text-black/25'
                        }`}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <div
                      className={`mt-8 flex flex-wrap gap-x-8 gap-y-2 text-xs uppercase tracking-[0.24em] transition-colors duration-500 ${
                        isActive ? 'text-black/65' : 'text-black/25'
                      }`}
                    >
                      <p>{project.location}</p>
                      <p>{project.type}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>

          <aside className="order-first w-[50vw] h-[52vh] border-b border-black/15 lg:sticky lg:top-0 lg:order-none lg:h-screen lg:border-b-0 lg:border-l">
            <div className="relative h-full w-full overflow-hidden">
              {projects.map((project, index) => (
                <Image
                  key={project.id}
                  src={project.src}
                  alt={`${project.title} project`}
                  fill
                  priority={index === 0}
                  sizes="(min-width: 1024px) 43vw, 95vw"
                  className={`object-cover transition-all duration-700 ease-out ${
                    activeIndex === index
                      ? 'scale-100 opacity-100'
                      : 'scale-105 opacity-0'
                  }`}
                />
              ))}

              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-6 bg-gradient-to-t from-black/55 to-transparent p-5 text-white sm:p-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                    {projects[activeIndex].type}
                  </p>
                  <p className="mt-2 text-2xl font-light sm:text-4xl">
                    {projects[activeIndex].title}
                  </p>
                </div>
                <p className="text-sm uppercase tracking-[0.22em] text-white/75">
                  {String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                </p>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </>
  )
}

export default ProjectsPage
