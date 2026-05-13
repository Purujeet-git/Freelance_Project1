'use client'

import React, { useRef } from 'react'

const HorizontalWheelScroll = ({ children, className = '' }) => {
  const scrollRef = useRef(null)

  const handleWheel = (event) => {
    const scrollEl = scrollRef.current

    if (!scrollEl || Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
      return
    }

    scrollEl.scrollLeft += event.deltaY
  }

  return (
    <main ref={scrollRef} onWheel={handleWheel} className={className}>
      {children}
    </main>
  )
}

export default HorizontalWheelScroll
