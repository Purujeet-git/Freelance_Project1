'use client'

import Image from 'next/image'
import React, { useMemo, useState } from 'react'
import HomeLogo from '@/components/HomeLogo'
import Navbar from '@/components/Navbar'

const filters = ['All', 'Newsletters', 'Updates', 'Commercial', 'Resorts']

const articles = [
  { title: 'What Comes First: The Site or the Building?', category: 'Updates', date: '10th December 2024', image: '/8.jpg' },
  { title: 'The Modern Workplace Adaptive Reuse and Education', category: 'Commercial', date: '18th September 2024', image: '/3.jpg' },
  { title: 'Design Beyond Aesthetics: Insights from Milan', category: 'Updates', date: '22nd May 2024', image: '/7.jpg' },
  { title: 'Through My Lens', category: 'Newsletters', date: '15th February 2024', image: '/13.jpeg' },
  { title: 'Newsletter June 2023', category: 'Newsletters', date: '28th June 2023', image: '/9.jpg' },
  { title: 'Third Space City Project', category: 'Commercial', date: '12th April 2023', image: '/12.jpg' },
  { title: 'Joinery Craftsmanship and Architecture', category: 'Updates', date: '7th March 2023', image: '/11.jpg' },
  { title: 'Will AI put us out of work?', category: 'Updates', date: '21st February 2023', image: '/laptop.jpg' },
  { title: "Is This The World's Most Photogenic Spa?", category: 'Resorts', date: '9th January 2023', image: '/2.jpg' },
  { title: 'Six Senses Zil Pasyon Awards', category: 'Resorts', date: '14th November 2022', image: '/1.jpg' },
  { title: 'The New Workplace Revolution', category: 'Commercial', date: '2nd September 2022', image: '/10.jpg' },
  { title: 'Villa Kong. Residence 20', category: 'Resorts', date: '18th July 2022', image: '/5.jpg' },
  { title: 'Knight Frank Interview', category: 'Commercial', date: '4th May 2022', image: '/4.jpg' },
  { title: 'The Gramophone Works', category: 'Commercial', date: '23rd March 2022', image: '/6.jpg' },
  { title: 'Sustainable Development', category: 'Updates', date: '11th February 2022', image: '/12.jpg' },
  { title: 'Architecture and change', category: 'Updates', date: '20th January 2022', image: '/7.jpg' },
  { title: 'Easy as EPC?', category: 'Commercial', date: '8th December 2021', image: '/3.jpg' },
  { title: 'Spa Junkies At Work', category: 'Resorts', date: '16th October 2021', image: '/2.jpg' },
]

const JournalPage = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const visibleArticles = useMemo(() => {
    if (activeFilter === 'All') {
      return articles
    }

    return articles.filter((article) => article.category === activeFilter)
  }, [activeFilter])

  return (
    <>
      <Navbar />
      <HomeLogo />
      <main className="h-screen overflow-y-auto overflow-x-hidden no-scrollbar bg-white pr-[5vw] text-[#15120e]">
        <section className="min-h-screen px-5 py-6 sm:px-8 lg:px-12">
          <div className="sticky top-0 z-20 border-b border-black/15 bg-white/95 py-5 backdrop-blur-sm">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs uppercase tracking-[0.35em] text-black/55">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Journal</p>
              <p className="text-xs uppercase tracking-[0.22em] text-black/40">
                {String(visibleArticles.length).padStart(2, '0')} Articles
              </p>
            </div>
          </div>

          <div className="grid gap-12 border-b border-black/15 py-[10vh] lg:grid-cols-[1fr_0.65fr] lg:items-end">
            <h1 className="text-[clamp(5.5rem,18vw,18rem)] font-light leading-[0.78] tracking-normal">
              Journal
            </h1>
            <p className="max-w-xl text-2xl font-light leading-tight text-black/70 sm:text-4xl">
              Notes on architecture, place, craft, and the way thoughtful digital presence helps a studio get found.
            </p>
          </div>

          <div className="sticky top-[65px] z-10 flex gap-3 overflow-x-auto border-b border-black/15 bg-white/95 py-5 backdrop-blur-sm no-scrollbar">
            {filters.map((filter) => {
              const isActive = activeFilter === filter

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`shrink-0 border-b pb-1 text-sm uppercase tracking-[0.22em] transition-colors ${
                    isActive
                      ? 'border-black text-black'
                      : 'border-transparent text-black/40 hover:text-black/70'
                  }`}
                >
                  {filter}
                </button>
              )
            })}
          </div>

          <div className="grid border-l border-black/15 sm:grid-cols-2 xl:grid-cols-3">
            {visibleArticles.map((article, index) => (
              <article
                key={article.title}
                className="group grid min-h-[520px] grid-rows-[auto_1fr] border-b border-r border-black/15"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-black/5">
                  <Image
                    src={article.image}
                    alt={`${article.title} journal article`}
                    fill
                    priority={index < 3}
                    sizes="(min-width: 1280px) 31vw, (min-width: 640px) 47vw, 95vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col justify-between gap-10 p-5 sm:p-7">
                  <div>
                    <div className="flex items-center justify-between gap-6 text-xs uppercase tracking-[0.24em] text-black/45">
                      <p>{article.category}</p>
                      <p>{String(index + 1).padStart(2, '0')}</p>
                    </div>
                    <h2 className="mt-8 text-[clamp(2rem,4vw,4.75rem)] font-light leading-[0.92]">
                      {article.title}
                    </h2>
                  </div>

                  <div className="flex items-end justify-between gap-6 border-t border-black/15 pt-5">
                    <p className="max-w-[12rem] text-sm text-black/50">{article.date}</p>
                    <button
                      type="button"
                      className="border-b border-black pb-1 text-xs uppercase tracking-[0.2em] transition-opacity hover:opacity-55"
                    >
                      Read more
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

export default JournalPage
