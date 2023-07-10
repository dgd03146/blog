import React from 'react'
import Link from 'next/link'
import { RiGithubFill, RiShareBoxFill } from 'react-icons/ri'
import {} from 'twin.macro'
import { GITHUB_URL } from '@/constants/url'

const ButtonLink = ({
  githubUrl,
  demoUrl,
}: {
  githubUrl?: string
  demoUrl?: string
}) => (
  <div tw="flex flex-[1] items-end gap-x-8">
    <Link href={githubUrl || GITHUB_URL}>
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
    {/* <Link href={demoUrl || GITHUB_URL}>
      <button
        tw="flex items-center text-h3 font-medium gap-x-1"
        className="group"
      >
        <span tw="group-hover:text-blue dark:group-hover:text-yellow">
          Live Demo
        </span>
        <RiShareBoxFill tw="group-hover:text-blue dark:group-hover:text-yellow" />
      </button>
    </Link> */}
  </div>
)

export default ButtonLink
