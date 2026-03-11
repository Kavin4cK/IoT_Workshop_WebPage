export default function AgendaPage() {
  const scheduleItems = [
    {
      time: '09:00 – 10:00',
      title: 'Guest Demonstration',
      description: 'Opening session with industry expert demonstration',
      type: 'session',
      icon: '🎤',
    },
    {
      time: '10:00 – 11:00',
      title: 'Industrial IoT Project Demo',
      description: 'Live demonstration of industrial IoT applications',
      type: 'session',
      icon: '🏭',
    },
    {
      time: '11:00 – 11:15',
      title: 'Tea Break',
      description: 'Networking and refreshments',
      type: 'break',
      icon: '☕',
    },
    {
      time: '11:15 – 11:45',
      title: 'Interactive Quiz Session',
      description: 'Test your knowledge with prizes',
      type: 'session',
      icon: '🎯',
    },
    {
      time: '11:45 – 12:00',
      title: 'Insight Session on SBCs and Raspberry Pi Trends',
      description: 'Latest trends in single-board computers',
      type: 'session',
      icon: '💡',
    },
    {
      time: '12:00 – 01:00',
      title: 'Dual Track Hands-On Session',
      type: 'dual',
      icon: '🚀',
      tracks: [
        { 
          name: 'Track A', 
          session: 'Firebase + MIT App Inventor',
          description: 'Build mobile apps with cloud integration',
        },
        { 
          name: 'Track B', 
          session: 'ESP32 Hardware Hackathon',
          description: 'Hands-on embedded systems development',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-primary-bg">
      {/* Page Header */}
      <section className="bg-secondary-bg py-16 border-b border-border-color">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-center mb-2 text-primary-text">
            Workshop Agenda
          </h1>
          <p className="text-xl text-gray-700 text-center">
            12 March 2026 | 09:00 AM – 01:00 PM
          </p>
          <div className="mt-6 flex justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary-text rounded-full"></div>
              <span>4 Hours Workshop</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary-text rounded-full"></div>
              <span>6 Sessions</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary-text rounded-full"></div>
              <span>2 Parallel Tracks</span>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border-color transform md:-translate-x-1/2"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {scheduleItems.map((item, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary-text rounded-full transform -translate-x-1/2 z-10 border-4 border-primary-bg shadow-md"></div>

                  {item.type === 'dual' ? (
                    // Dual Track Layout
                    <div className="ml-20 md:ml-0">
                      <div className="md:w-1/2 md:ml-auto md:pl-12">
                        {/* Time Badge */}
                        <div className="inline-block bg-primary-text text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                          {item.time}
                        </div>
                        
                        {/* Main Card */}
                        <div className="bg-white rounded-lg shadow-md border border-border-color overflow-hidden hover:shadow-lg transition-all duration-200">
                          <div className="bg-secondary-bg px-6 py-4 border-b border-border-color">
                            <div className="flex items-center gap-3">
                              <span className="text-2xl">{item.icon}</span>
                              <h3 className="text-xl font-semibold text-primary-text">{item.title}</h3>
                            </div>
                          </div>
                          
                          {/* Dual Tracks */}
                          <div className="p-6 space-y-4">
                            {item.tracks?.map((track, trackIndex) => (
                              <div
                                key={trackIndex}
                                className="bg-secondary-bg border-l-4 border-primary-text p-5 rounded"
                              >
                                <div className="flex items-start gap-3">
                                  <div className="bg-primary-text text-white px-3 py-1 rounded text-xs font-semibold">
                                    {track.name}
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="font-semibold text-lg text-primary-text mb-1">
                                      {track.session}
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                      {track.description}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Single Session Layout - Alternating Left/Right
                    <div className="ml-20 md:ml-0">
                      <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                        {/* Time Badge */}
                        <div className="inline-block bg-primary-text text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                          {item.time}
                        </div>
                        
                        {/* Session Card */}
                        <div className={`rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-200 ${
                          item.type === 'break' 
                            ? 'bg-secondary-bg border border-border-color' 
                            : 'bg-white border border-border-color'
                        }`}>
                          <div className={`px-6 py-5 border-b border-border-color ${
                            item.type === 'break' ? 'bg-secondary-bg' : 'bg-secondary-bg'
                          }`}>
                            <div className="flex items-center gap-3">
                              <span className="text-2xl">{item.icon}</span>
                              <h3 className="text-xl font-semibold text-primary-text">
                                {item.title}
                              </h3>
                            </div>
                          </div>
                          <div className="px-6 py-4">
                            <p className={`text-sm ${
                              item.type === 'break' ? 'text-gray-600 italic' : 'text-gray-600'
                            }`}>
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-12 bg-secondary-bg border-t border-border-color">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-lg text-gray-700">
            ⏰ Please arrive 15 minutes early for registration
          </p>
        </div>
      </section>
    </div>
  );
}
