import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeLogo = () => {
  return (
    <Link
      href="/"
      aria-label="Go to home"
      className="fixed left-5 top-5 z-30 flex h-14 w-14 items-center justify-center bg-white/85 shadow-sm backdrop-blur-sm transition-opacity hover:opacity-70 sm:left-8 sm:top-8"
    >
      <Image
        src="/logo1.png"
        alt=""
        width={40}
        height={40}
        priority
        className="h-10 w-10 object-contain"
      />
    </Link>
  )
}

export default HomeLogo
