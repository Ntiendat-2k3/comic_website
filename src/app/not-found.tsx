import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">404 - Page Not Found</h2>
      <p className="mb-4">Could not find requested resource</p>
      <Link 
        href="/" 
        className="text-blue-500 hover:underline"
      >
        Return Home
      </Link>
    </div>
  )
}