import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8 px-6 text-sm text-gray-500">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>&copy; {new Date().getFullYear()} Farzan Software Solutions Inc. All rights reserved.</p>
        <div className="flex gap-4">
          <Link to="/privacy-policy" className="hover:text-indigo-400 transition-colors">
            Privacy Policy
          </Link>
          <a href="mailto:farzanalifaisal@gmail.com" className="hover:text-indigo-400 transition-colors">
            farzanalifaisal@gmail.com
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
