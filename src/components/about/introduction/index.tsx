import { ABOUT_ME } from '@/constants/about'
import {} from 'twin.macro'

const Introduction = () => {
  return (
    <>
      <h3 tw="mb-8 ">
        Hello! My name is Jung, and I'm a London-based frontend developer with a
        passion for creating intuitive and dynamic user experiences.
      </h3>
      {ABOUT_ME.map((it) => (
        <p key={it.description} tw="mb-4 font-normal font-inter">
          <span tw="text-blue dark:text-yellow font-semibold mr-1">
            {it.highlight}
          </span>
          <span>{it.description}</span>
        </p>
      ))}
    </>
  )
}

export default Introduction
