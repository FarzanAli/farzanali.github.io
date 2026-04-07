import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-gray-950 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight text-indigo-400">
          Farzan Software Solutions
        </Link>
        <div className="flex gap-6 text-sm font-medium text-gray-400">
          <a href="/#about" className="hover:text-indigo-400 transition-colors">About</a>
          <a href="/#apps" className="hover:text-indigo-400 transition-colors">Apps</a>
          <a href="/#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
