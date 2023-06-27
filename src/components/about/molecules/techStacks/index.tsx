import Image from 'next/image'
import {} from 'twin.macro'

import { TECH_STACK } from '@/constants/techStacks'

const TechStacks = () => {
  return (
    <div tw="tablet:flex items-center gap-x-8 justify-around">
      <h2 tw="font-indie">Tech Stack</h2>
      <div tw="grid grid-cols-6 gap-4 mt-4 desktop:flex gap-x-8">
        {TECH_STACK.map((it) => (
          <Image
            key={it.alt}
            src={it.src}
            width={50}
            height={50}
            alt={it.alt}
          />
        ))}
      </div>
    </div>
  )
}

export default TechStacks
