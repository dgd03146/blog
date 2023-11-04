'use client'

import Link from 'next/link'
import {} from 'twin.macro'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4 h-[calc(100vh-180px)]">
      <h2>Sorry there is error, Could you try again?</h2>
      <button
        tw=" text-yellow bg-blue px-4 py-2 rounded-md"
        onClick={() => reset()}
      >
        Try Again
      </button>
      <Link href="/" tw=" text-dark">
        Go Back Home
      </Link>
    </div>
  )
}
