function Schedule() {
  const schedule = [
    { day: 'Monday', classes: [
      { name: 'Yoga', time: '6:00 AM', instructor: 'Sarah' },
      { name: 'HIIT', time: '7:00 AM', instructor: 'Mike' },
      { name: 'Pilates', time: '8:00 AM', instructor: 'Sarah' },
      { name: 'Strength', time: '5:00 PM', instructor: 'Mike' },
    ]},
    { day: 'Tuesday', classes: [
      { name: 'Yoga', time: '6:00 AM', instructor: 'Sarah' },
      { name: 'HIIT', time: '7:00 AM', instructor: 'Mike' },
      { name: 'Pilates', time: '8:00 AM', instructor: 'Sarah' },
      { name: 'Spin', time: '6:00 PM', instructor: 'Emma' },
    ]},
    { day: 'Wednesday', classes: [
      { name: 'Yoga', time: '6:00 AM', instructor: 'Sarah' },
      { name: 'HIIT', time: '7:00 AM', instructor: 'Mike' },
      { name: 'Pilates', time: '8:00 AM', instructor: 'Sarah' },
      { name: 'Strength', time: '5:00 PM', instructor: 'Mike' },
    ]},
    { day: 'Thursday', classes: [
      { name: 'Yoga', time: '6:00 AM', instructor: 'Sarah' },
      { name: 'HIIT', time: '7:00 AM', instructor: 'Mike' },
      { name: 'Pilates', time: '8:00 AM', instructor: 'Sarah' },
      { name: 'Spin', time: '6:00 PM', instructor: 'Emma' },
    ]},
    { day: 'Friday', classes: [
      { name: 'Yoga', time: '6:00 AM', instructor: 'Sarah' },
      { name: 'HIIT', time: '7:00 AM', instructor: 'Mike' },
      { name: 'Pilates', time: '8:00 AM', instructor: 'Sarah' },
      { name: 'Strength', time: '5:00 PM', instructor: 'Mike' },
    ]},
    { day: 'Saturday', classes: [
      { name: 'Zumba', time: '10:00 AM', instructor: 'Emma' },
      { name: 'Yoga', time: '11:00 AM', instructor: 'Sarah' },
    ]},
    { day: 'Sunday', classes: [
      { name: 'Zumba', time: '10:00 AM', instructor: 'Emma' },
      { name: 'Yoga', time: '11:00 AM', instructor: 'Sarah' },
    ]},
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">Weekly Schedule</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
        {schedule.map((day, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold mb-4 text-emerald-600">{day.day}</h2>
            <div className="space-y-3">
              {day.classes.map((cls, idx) => (
                <div key={idx} className="border-l-4 border-emerald-500 pl-3">
                  <p className="font-semibold text-sm">{cls.name}</p>
                  <p className="text-xs text-gray-600">{cls.time}</p>
                  <p className="text-xs text-emerald-600">{cls.instructor}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Schedule

