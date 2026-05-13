'use client'

import React, { useEffect, useRef, useState } from 'react'

const SmoothHorizontalScroller = ({ children, className = '', trackClassName = '' }) => {
  const scrollerRef = useRef(null)
  const trackRef = useRef(null)
  const targetXRef = useRef(0)
  const currentXRef = useRef(0)
  const animationRef = useRef(null)
  const [spacerHeight, setSpacerHeight] = useState('100vh')

  useEffect(() => {
    const scroller = scrollerRef.current
    const track = trackRef.current

    if (!scroller || !track) {
      return undefined
    }

    const getMaxX = () => Math.max(0, track.scrollWidth - scroller.clientWidth)

    const updateMeasurements = () => {
      const maxX = getMaxX()
      setSpacerHeight(`${maxX + window.innerHeight}px`)
      targetXRef.current = Math.min(scroller.scrollTop, maxX)
      currentXRef.current = Math.min(currentXRef.current, maxX)
    }

    const updateTarget = () => {
      targetXRef.current = Math.min(scroller.scrollTop, getMaxX())
    }

    const animate = () => {
      const current = currentXRef.current
      const target = targetXRef.current
      const next = current + (target - current) * 0.12

      currentXRef.current = Math.abs(target - next) < 0.1 ? target : next
      track.style.transform = `translate3d(${-currentXRef.current}px, 0, 0)`
      animationRef.current = requestAnimationFrame(animate)
    }

    const resizeObserver = new ResizeObserver(updateMeasurements)

    updateMeasurements()
    updateTarget()
    resizeObserver.observe(track)
    window.addEventListener('resize', updateMeasurements)
    scroller.addEventListener('scroll', updateTarget, { passive: true })
    animationRef.current = requestAnimationFrame(animate)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', updateMeasurements)
      scroller.removeEventListener('scroll', updateTarget)

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <main ref={scrollerRef} className={`h-screen w-screen overflow-y-auto overflow-x-hidden no-scrollbar ${className}`}>
      <div className="relative" style={{ height: spacerHeight }}>
        <div className="sticky top-0 h-screen w-screen overflow-hidden">
          <div
            ref={trackRef}
            className={`flex h-screen will-change-transform ${trackClassName}`}
          >
            {children}
          </div>
        </div>
      </div>
    </main>
  )
}

export default SmoothHorizontalScroller
