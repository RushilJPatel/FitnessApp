import { useState } from 'react'

function Classes() {
  const [selectedClass, setSelectedClass] = useState(null)

  const classes = [
    { 
      id: 1, 
      name: 'Yoga', 
      time: 'Mon-Fri 6:00 AM', 
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=400&fit=crop',
      description: 'Mindful movement and flexibility',
      instructor: 'Sarah Johnson',
      duration: '60 min'
    },
    { 
      id: 2, 
      name: 'HIIT', 
      time: 'Mon-Fri 7:00 AM', 
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
      description: 'High-intensity interval training',
      instructor: 'Mike Chen',
      duration: '45 min'
    },
    { 
      id: 3, 
      name: 'Pilates', 
      time: 'Mon-Fri 8:00 AM', 
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=400&fit=crop',
      description: 'Core strength and stability',
      instructor: 'Sarah Johnson',
      duration: '50 min'
    },
    { 
      id: 4, 
      name: 'Spin', 
      time: 'Tue-Thu 6:00 PM', 
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop',
      description: 'Cardio cycling workout',
      instructor: 'Emma Davis',
      duration: '45 min'
    },
    { 
      id: 5, 
      name: 'Zumba', 
      time: 'Sat-Sun 10:00 AM', 
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=400&fit=crop',
      description: 'Dance fitness party',
      instructor: 'Emma Davis',
      duration: '60 min'
    },
    { 
      id: 6, 
      name: 'Strength Training', 
      time: 'Mon-Wed-Fri 5:00 PM', 
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop',
      description: 'Weight training and muscle building',
      instructor: 'Mike Chen',
      duration: '60 min'
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Classes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {classes.map((classItem) => (
          <div key={classItem.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
            <img 
              src={classItem.image} 
              alt={classItem.name} 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{classItem.name}</h3>
              <p className="text-gray-600 mb-3">{classItem.description}</p>
              <div className="space-y-1 mb-4 text-sm text-gray-500">
                <p>📅 {classItem.time}</p>
                <p>👨‍🏫 {classItem.instructor}</p>
                <p>⏱️ {classItem.duration}</p>
              </div>
              <button
                onClick={() => setSelectedClass(classItem)}
                className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition font-semibold"
              >
                Book Class
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Modal */}
      {selectedClass && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <h3 className="text-2xl font-bold mb-4">Book {selectedClass.name}</h3>
            <img src={selectedClass.image} alt={selectedClass.name} className="w-full h-48 object-cover rounded-lg mb-4" />
            <p className="text-gray-600 mb-4">{selectedClass.description}</p>
            <div className="space-y-2 mb-6">
              <p className="text-emerald-600 font-semibold">📅 Schedule: {selectedClass.time}</p>
              <p className="text-gray-600">👨‍🏫 Instructor: {selectedClass.instructor}</p>
              <p className="text-gray-600">⏱️ Duration: {selectedClass.duration}</p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setSelectedClass(null)}
                className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
              <button className="flex-1 bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700">
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Classes

