import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex items-center flex-col justify-center h-[calc(100vh-180px)] gap-y-4">
      <h1 className="text-big">Not Found</h1>
      <h2>Could not find requested resource</h2>
      <h3>
        <Link href="/">Go Back Home</Link>
      </h3>
    </div>
  )
}
