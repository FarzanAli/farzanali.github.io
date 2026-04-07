import { Link } from 'react-router-dom'

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-gray-950 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight text-indigo-400">
          Farzan Software Solutions
        </Link>
        <div className="flex gap-6 text-sm font-medium text-gray-400">
          <button onClick={() => scrollTo('about')} className="hover:text-indigo-400 transition-colors cursor-pointer">About</button>
          <button onClick={() => scrollTo('apps')} className="hover:text-indigo-400 transition-colors cursor-pointer">Apps</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-indigo-400 transition-colors cursor-pointer">Contact</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
