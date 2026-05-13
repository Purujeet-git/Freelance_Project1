'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const splitWords = (text) =>
  text.split(' ').map((word, index) => (
    <span key={`${word}-${index}`} className="inline-block overflow-hidden align-bottom">
      <span className="hero-word inline-block will-change-transform">{word}</span>
      {index < text.split(' ').length - 1 ? '\u00a0' : null}
    </span>
  ))

const HeroIntroText = ({ title, body, titleClassName = '', bodyClassName = '' }) => {
  const rootRef = useRef(null)

  useEffect(() => {
    const root = rootRef.current

    if (!root) {
      return undefined
    }

    const ctx = gsap.context(() => {
      gsap.set('.hero-word', { yPercent: 115, opacity: 0 })

      gsap.to('.hero-word', {
        yPercent: 0,
        opacity: 1,
        duration: 1.15,
        ease: 'power4.out',
        stagger: {
          each: 0.045,
          from: 'start',
        },
        delay: 0.82,
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={rootRef}>
      <h1 className={titleClassName}>{splitWords(title)}</h1>
      <p className={bodyClassName}>{splitWords(body)}</p>
    </div>
  )
}

export default HeroIntroText
