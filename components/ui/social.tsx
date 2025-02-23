import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 text-gray-600">
          <Link 
            href="https://linkedin.com/in/divyansh04" 
            target="_blank"
            className="flex items-center gap-2 text-primary"
          >
            LinkedIn
          </Link>
          <Link 
            href="https://x.com/Divyan__shhh" 
            target="_blank"
            className="flex items-center gap-2 text-primary"
          >
            X
          </Link>
        </div>
      </div>
    </footer>
  )
}