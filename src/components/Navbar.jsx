import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-emerald-600">
            FitZone Studio
          </Link>
          <div className="flex gap-6 items-center">
            <Link
              to="/"
              className={`transition-colors ${
                location.pathname === '/'
                  ? 'text-emerald-600 font-semibold'
                  : 'text-gray-700 hover:text-emerald-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/classes"
              className={`transition-colors ${
                location.pathname === '/classes'
                  ? 'text-emerald-600 font-semibold'
                  : 'text-gray-700 hover:text-emerald-600'
              }`}
            >
              Classes
            </Link>
            <Link
              to="/trainers"
              className={`transition-colors ${
                location.pathname === '/trainers'
                  ? 'text-emerald-600 font-semibold'
                  : 'text-gray-700 hover:text-emerald-600'
              }`}
            >
              Trainers
            </Link>
            <Link
              to="/schedule"
              className={`transition-colors ${
                location.pathname === '/schedule'
                  ? 'text-emerald-600 font-semibold'
                  : 'text-gray-700 hover:text-emerald-600'
              }`}
            >
              Schedule
            </Link>
            <Link
              to="/membership"
              className={`transition-colors ${
                location.pathname === '/membership'
                  ? 'text-emerald-600 font-semibold'
                  : 'text-gray-700 hover:text-emerald-600'
              }`}
            >
              Membership
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

