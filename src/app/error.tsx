'use client'

import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <h2>Sorry there is error, Could you try again?</h2>
      <button className="text-blue" onClick={() => reset()}>
        Try again
      </button>
      <Link href="/">Go Back Home</Link>
    </div>
  )
}
