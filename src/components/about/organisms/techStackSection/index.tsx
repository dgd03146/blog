import Image from 'next/image'
import tw from 'twin.macro'
import { Heading2 } from '@/components/common/atoms/texts'
import { TECH_STACK } from '@/constants/techStacks'

const TechStackSection = () => {
  return (
    <div tw="tablet:flex items-center gap-x-8 justify-around">
      <Heading2 text="Tech Stack" />
      <div tw="grid grid-cols-6 gap-4 mt-4 desktop:flex gap-x-8">
        {TECH_STACK.map((it) => (
          // TODO: 스켈레톤 적용?
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

export default TechStackSection
