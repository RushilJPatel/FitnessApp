function Trainers() {
  const trainers = [
    { 
      name: 'Sarah Johnson', 
      specialty: 'Yoga & Pilates', 
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      bio: 'Certified yoga instructor with 10+ years of experience',
      certifications: ['RYT-500', 'Pilates Certified']
    },
    { 
      name: 'Mike Chen', 
      specialty: 'HIIT & Strength', 
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      bio: 'Personal trainer and fitness coach specializing in strength training',
      certifications: ['NASM-CPT', 'CrossFit Level 2']
    },
    { 
      name: 'Emma Davis', 
      specialty: 'Spin & Cardio', 
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      bio: 'Energetic spin instructor with a passion for cardio workouts',
      certifications: ['Spin Certified', 'Group Fitness Instructor']
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">Meet Our Trainers</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {trainers.map((trainer, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
            <img 
              src={trainer.image} 
              alt={trainer.name} 
              className="w-full h-80 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold mb-2">{trainer.name}</h3>
              <p className="text-emerald-600 font-semibold mb-3">{trainer.specialty}</p>
              <p className="text-gray-600 mb-4">{trainer.bio}</p>
              <div className="space-y-1">
                {trainer.certifications.map((cert, idx) => (
                  <span key={idx} className="inline-block bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full mr-2">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Trainers

