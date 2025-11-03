import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-6xl font-bold mb-6">Transform Your Body, Transform Your Life</h1>
          <p className="text-2xl mb-8">Join our community and achieve your fitness goals</p>
          <Link
            to="/membership"
            className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition shadow-lg text-lg"
          >
            Get Started Today
          </Link>
        </div>
      </div>

      {/* Featured Classes */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center">Popular Classes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to="/classes" className="group">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <img 
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop" 
                alt="Yoga Class" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Yoga & Meditation</h3>
                <p className="text-gray-600">Find your inner peace</p>
              </div>
            </div>
          </Link>
          <Link to="/classes" className="group">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop" 
                alt="HIIT Class" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">HIIT Training</h3>
                <p className="text-gray-600">High-intensity workouts</p>
              </div>
            </div>
          </Link>
          <Link to="/classes" className="group">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop" 
                alt="Strength Training" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Strength Training</h3>
                <p className="text-gray-600">Build muscle and power</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-emerald-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Why FitZone?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">👨‍🏫</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Trainers</h3>
              <p className="text-gray-600">Certified professionals guiding your journey</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⏰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Schedule</h3>
              <p className="text-gray-600">Classes available throughout the day</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💪</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Results Driven</h3>
              <p className="text-gray-600">Proven methods for lasting results</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

