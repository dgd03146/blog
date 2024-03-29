'use client'

import React from 'react'
import {} from 'twin.macro'
import Image from 'next/image'
import HeroName from '../heroName'

const Hero = () => {
  return (
    <section tw="tracking-tighter items-center laptop:flex hidden">
      <HeroName />
      <Image
        tw="absolute -z-1"
        src="/assets/images/lalaland-color.png"
        width={350}
        height={350}
        alt="lalaland"
        quality={100}
        priority={true}
      />

      {/* <p tw="text-h1 font-semibold text-emerald dark:text-primaryYellow text-center">
        Frontend Developer
      </p> */}
    </section>
  )
}

export default Hero
