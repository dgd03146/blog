import React from 'react'
import Link from 'next/link'
import { RiGithubFill, RiShareBoxFill } from 'react-icons/ri'
import {} from 'twin.macro'

const ButtonLink = ({
  githubUrl,
  demoUrl,
}: {
  githubUrl: string
  demoUrl: string
}) => (
  <div tw="flex flex-[1] items-end gap-x-8">
    <Link href={githubUrl}>
      <button
        tw="flex items-center text-h3 font-medium gap-x-1"
        className="group"
      >
        <span tw="group-hover:text-blue dark:group-hover:text-yellow">
          Code
        </span>
        <RiGithubFill tw="group-hover:text-blue dark:group-hover:text-yellow" />
      </button>
    </Link>
    <Link href={demoUrl}>
      <button
        tw="flex items-center text-h3 font-medium gap-x-1"
        className="group"
      >
        <span tw="group-hover:text-blue dark:group-hover:text-yellow">
          Demo
        </span>
        <RiShareBoxFill tw="group-hover:text-blue dark:group-hover:text-yellow" />
      </button>
    </Link>
  </div>
)

export default ButtonLink
