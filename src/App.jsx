import { useState } from 'react'

function App() {
  const [selectedClass, setSelectedClass] = useState(null)

  const classes = [
    { id: 1, name: 'Yoga', time: 'Mon-Fri 6:00 AM', icon: '🧘', description: 'Mindful movement and flexibility' },
    { id: 2, name: 'HIIT', time: 'Mon-Fri 7:00 AM', icon: '💪', description: 'High-intensity interval training' },
    { id: 3, name: 'Pilates', time: 'Mon-Fri 8:00 AM', icon: '🤸', description: 'Core strength and stability' },
    { id: 4, name: 'Spin', time: 'Tue-Thu 6:00 PM', icon: '🚴', description: 'Cardio cycling workout' },
    { id: 5, name: 'Zumba', time: 'Sat-Sun 10:00 AM', icon: '💃', description: 'Dance fitness party' },
    { id: 6, name: 'Strength', time: 'Mon-Wed-Fri 5:00 PM', icon: '🏋️', description: 'Weight training and muscle building' },
  ]

  const trainers = [
    { name: 'Sarah Johnson', specialty: 'Yoga & Pilates', image: '👩' },
    { name: 'Mike Chen', specialty: 'HIIT & Strength', image: '👨' },
    { name: 'Emma Davis', specialty: 'Spin & Cardio', image: '👩' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-indigo-600">FitZone Studio</div>
            <div className="flex gap-4">
              <a href="#" className="text-gray-700 hover:text-indigo-600">Classes</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600">Trainers</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600">Schedule</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600">Membership</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Transform Your Body, Transform Your Life</h1>
          <p className="text-xl mb-8">Join our community and achieve your fitness goals</p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50">
            Get Membership
          </button>
        </div>
      </div>

      {/* Classes Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Classes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((classItem) => (
            <div key={classItem.id} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
              <div className="text-5xl mb-4">{classItem.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{classItem.name}</h3>
              <p className="text-gray-600 mb-2">{classItem.description}</p>
              <p className="text-sm text-indigo-600 mb-4">{classItem.time}</p>
              <button
                onClick={() => setSelectedClass(classItem)}
                className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
              >
                Join Class
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Trainers Section */}
      <div className="bg-indigo-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Trainers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trainers.map((trainer, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-6xl mb-4">{trainer.image}</div>
                <h3 className="text-xl font-semibold mb-2">{trainer.name}</h3>
                <p className="text-gray-600">{trainer.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Membership CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-indigo-50 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Journey Today</h2>
          <p className="text-gray-600 mb-6">Choose from our flexible membership plans</p>
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700">
            View Membership Plans
          </button>
        </div>
      </div>

      {/* Class Booking Modal */}
      {selectedClass && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <h3 className="text-2xl font-bold mb-4">Book {selectedClass.name}</h3>
            <p className="text-gray-600 mb-4">{selectedClass.description}</p>
            <p className="text-indigo-600 mb-6">Schedule: {selectedClass.time}</p>
            <div className="flex gap-4">
              <button
                onClick={() => setSelectedClass(null)}
                className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
              <button className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App

