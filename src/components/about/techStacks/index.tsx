import Image from 'next/image'
import {} from 'twin.macro'

import Tag from '@/components/common/tag'
import { TECH_STACK } from '@/constants/techStacks'
import { rgbDataURL } from '@/utils/getPlaceHolder'

const TechStacks = () => {
  return (
    <div tw="flex flex-col gap-y-4">
      <h2>Tech Stack</h2>
      <ul tw="flex items-center  flex-wrap gap-2">
        {TECH_STACK.map((tag) => (
          <li tw="" key={tag.name}>
            <Tag tag={tag} />
          </li>
          // <Image
          //   key={it.alt}
          //   src={it.src}
          //   width={35}
          //   height={35}
          //   alt={it.alt}
          //   placeholder="blur"
          //   blurDataURL={rgbDataURL(220, 220, 220)}
          // />
        ))}
      </ul>
    </div>
  )
}

export default TechStacks
