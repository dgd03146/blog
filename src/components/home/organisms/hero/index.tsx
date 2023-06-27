'use client'

import React from 'react'
import {} from 'twin.macro'
import Image from 'next/image'
import HeroName from '../../molecules/heroName'

const Hero = () => {
  return (
    <section tw="flex flex-col justify-center items-center w-full laptop:min-h-[calc(100vh - 180px)] tracking-tighter mx-auto">
      <HeroName />
      <Image
        tw="absolute"
        src="/assets/images/lalaland-color.png"
        width={450}
        height={450}
        alt="lalaland"
        priority={true}
      />
      <p tw="text-h1 font-semibold text-green">Frontend Developer</p>
    </section>
  )
}

export default Hero
