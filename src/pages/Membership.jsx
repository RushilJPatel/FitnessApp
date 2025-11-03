function Membership() {
  const plans = [
    {
      name: 'Basic',
      price: 49,
      features: [
        'Access to all group classes',
        'Free gym access',
        'Online workout library',
        'Monthly fitness assessment'
      ]
    },
    {
      name: 'Premium',
      price: 79,
      features: [
        'Everything in Basic',
        '2 personal training sessions/month',
        'Nutrition consultation',
        'Priority class booking',
        'Locker and towel service'
      ],
      popular: true
    },
    {
      name: 'Elite',
      price: 129,
      features: [
        'Everything in Premium',
        'Unlimited personal training',
        'Custom meal plans',
        '24/7 gym access',
        'Guest passes (2/month)'
      ]
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-4 text-center">Membership Plans</h1>
      <p className="text-center text-gray-600 mb-12 text-lg">Choose the plan that fits your fitness goals</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`bg-white rounded-lg shadow-lg p-8 ${plan.popular ? 'border-4 border-emerald-600 transform scale-105' : ''}`}
          >
            {plan.popular && (
              <div className="bg-emerald-600 text-white text-center py-1 rounded-full mb-4 text-sm font-semibold">
                Most Popular
              </div>
            )}
            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
            <div className="mb-6">
              <span className="text-5xl font-bold text-emerald-600">${plan.price}</span>
              <span className="text-gray-600">/month</span>
            </div>
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-emerald-500 mr-2 text-xl">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <button className={`w-full py-3 rounded-lg font-semibold transition ${
              plan.popular
                ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                : 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
            }`}>
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Membership

