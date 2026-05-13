'use client'

import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const CurtainTransition = () => {
  const pathname = usePathname()
  const router = useRouter()
  const curtainRef = useRef(null)
  const isNavigatingRef = useRef(false)

  useEffect(() => {
    const curtain = curtainRef.current

    if (!curtain) {
      return
    }

    gsap.set(curtain, { yPercent: 0 })
    gsap.to(curtain, {
      yPercent: -100,
      duration: 1.05,
      ease: 'power4.inOut',
      delay: 0.12,
    })
  }, [])

  useEffect(() => {
    const curtain = curtainRef.current

    if (!curtain || !isNavigatingRef.current) {
      return
    }

    isNavigatingRef.current = false
    gsap.to(curtain, {
      yPercent: -100,
      duration: 0.95,
      ease: 'power4.inOut',
      delay: 0.08,
    })
  }, [pathname])

  useEffect(() => {
    const handleClick = (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return
      }

      const link = event.target.closest('a')

      if (!link) {
        return
      }

      const href = link.getAttribute('href')
      const target = link.getAttribute('target')

      if (!href || target === '_blank' || href.startsWith('#')) {
        return
      }

      const nextUrl = new URL(href, window.location.href)

      if (nextUrl.origin !== window.location.origin || nextUrl.pathname === pathname) {
        return
      }

      event.preventDefault()
      isNavigatingRef.current = true

      gsap.to(curtainRef.current, {
        yPercent: 0,
        duration: 0.72,
        ease: 'power3.inOut',
        onComplete: () => {
          router.push(`${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`)
        },
      })
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [pathname, router])

  return (
    <div
      ref={curtainRef}
      className="pointer-events-none fixed inset-0 z-[100] flex items-end bg-[#15120e] text-[#ece8df]"
    >
      <div className="flex w-full items-end justify-between gap-6 border-t border-white/15 p-5 sm:p-8 lg:p-12">
        <p className="text-xs uppercase tracking-[0.35em] text-white/55">Building Beyond</p>
        <p className="text-xs uppercase tracking-[0.28em] text-white/40">Loading</p>
      </div>
    </div>
  )
}

export default CurtainTransition
