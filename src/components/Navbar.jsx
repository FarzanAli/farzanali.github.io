import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight text-indigo-700">
          Farzan Software Solutions
        </Link>
        <div className="flex gap-6 text-sm font-medium text-gray-600">
          <a href="/#about" className="hover:text-indigo-700 transition-colors">About</a>
          <a href="/#apps" className="hover:text-indigo-700 transition-colors">Apps</a>
          <a href="/#contact" className="hover:text-indigo-700 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
