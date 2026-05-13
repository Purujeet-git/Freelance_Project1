'use client'

import gsap from 'gsap'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

const navItems = [
  { href: '/about', label: 'About', className: 'w-[25vw] items-center' },
  { href: '/project', label: 'Projects', className: 'w-[40vw] items-center' },
  { href: '/journal', label: 'Journal', className: 'w-[60vw] items-center' },
  { href: '/contact', label: 'Contact', className: 'w-full items-end' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const overlayRef = useRef(null)
  const panelRefs = useRef([])
  const textRefs = useRef([])
  const footerRef = useRef(null)

  const openMenu = () => {
    setIsOpen(true)
    setIsMenuVisible(true)
  }

  const closeMenu = () => {
    const overlay = overlayRef.current
    const panels = panelRefs.current.filter(Boolean)
    const textItems = textRefs.current.filter(Boolean)

    setIsOpen(false)

    if (!overlay) {
      setIsMenuVisible(false)
      return
    }

    gsap
      .timeline({
        defaults: { ease: 'power3.inOut' },
        onComplete: () => setIsMenuVisible(false),
      })
      .to(textItems, {
        yPercent: -110,
        opacity: 0,
        duration: 0.42,
        stagger: {
          each: 0.04,
          from: 'end',
        },
      })
      .to(footerRef.current, { opacity: 0, y: 12, duration: 0.28 }, '<')
      .to(
        panels,
        {
          xPercent: 105,
          duration: 0.62,
          stagger: {
            each: 0.06,
            from: 'end',
          },
        },
        '-=0.12'
      )
      .to(overlay, { opacity: 0, duration: 0.22 }, '-=0.2')
  }

  const toggleMenu = () => {
    if (isOpen) {
      closeMenu()
      return
    }

    openMenu()
  }

  useEffect(() => {
    if (!isMenuVisible || !isOpen) {
      return
    }

    const overlay = overlayRef.current
    const panels = panelRefs.current.filter(Boolean)
    const textItems = textRefs.current.filter(Boolean)

    gsap.set(overlay, { opacity: 1 })
    gsap.set(panels, { xPercent: 105 })
    gsap.set(textItems, { yPercent: 110, opacity: 0 })
    gsap.set(footerRef.current, { opacity: 0, y: 12 })

    gsap
      .timeline({ defaults: { ease: 'power4.out' } })
      .to(panels, {
        xPercent: 0,
        duration: 0.9,
        stagger: 0.08,
      })
      .to(
        textItems,
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.72,
          stagger: 0.07,
        },
        '-=0.48'
      )
      .to(
        footerRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.44,
        },
        '-=0.36'
      )
  }, [isMenuVisible, isOpen])

  return (
    <div className="relative">
      <button
        type="button"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        className="fixed right-0 z-40 flex h-full w-[5vw] cursor-pointer select-none flex-col justify-between border-l border-gray-200 bg-white"
      >
        <div className="[writing-mode:vertical-rl] flex rotate-180 items-center p-10 text-[10px] uppercase tracking-widest text-gray-500">
          <p>Est. 1997</p>
        </div>

        <div className="flex items-center justify-center text-3xl font-light">
          {isOpen ? 'X' : '|||'}
        </div>

        <div className="[writing-mode:vertical-rl] flex rotate-180 items-center p-10 text-[10px] text-gray-500">
          <p>0%</p>
        </div>
      </button>

      {isMenuVisible && (
        <div ref={overlayRef} className="fixed inset-0 z-30 flex justify-end overflow-hidden bg-white">
          <div className="relative flex h-screen w-[95vw] flex-col items-end">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                ref={(node) => {
                  panelRefs.current[index] = node
                }}
                className={`${item.className} flex h-[25vh] justify-start overflow-hidden border-b border-l border-gray-200 p-12  hover:bg-gray-500 transition-all duration-300`}
              >
                <span className="block overflow-hidden">
                  <span
                    ref={(node) => {
                      textRefs.current[index] = node
                    }}
                    className="block text-7xl font-serif will-change-transform"
                  >
                    {item.label}
                  </span>
                </span>
              </Link>
            ))}

            <div
              ref={footerRef}
              className="absolute bottom-10 right-[10vw] flex gap-6 text-[10px] uppercase tracking-widest text-gray-400"
            >
              <span className="underline">Privacy Policy</span>
              <span className="underline">Site By Outpost</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
