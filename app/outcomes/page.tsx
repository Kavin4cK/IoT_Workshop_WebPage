export default function OutcomesPage() {
  const learningObjectives = [
    {
      title: 'Understand Single Board Computer Architecture',
      description: 'Gain comprehensive knowledge of SBC components, processing capabilities, and system architecture.',
    },
    {
      title: 'Interface Sensors with Raspberry Pi',
      description: 'Learn practical techniques for connecting and configuring various sensors with GPIO pins.',
    },
    {
      title: 'Acquire and Process Real-Time Sensor Data',
      description: 'Master data acquisition techniques and implement real-time processing pipelines.',
    },
    {
      title: 'Implement Hardware Alert Systems',
      description: 'Design and deploy automated alert mechanisms using LEDs, buzzers, and notification systems.',
    },
    {
      title: 'Visualize IoT Data on Mobile Dashboards',
      description: 'Create responsive mobile interfaces for monitoring and controlling IoT devices remotely.',
    },
  ];

  const expectedOutcomes = [
    {
      title: 'Full Industrial IoT Pipeline Understanding',
      description: 'Students will comprehend the complete flow from sensor data collection to cloud storage and visualization.',
    },
    {
      title: 'Cloud Data Logging Implementation',
      description: 'Working groups will successfully implement real-time cloud-based data logging solutions.',
    },
    {
      title: 'Mobile Dashboard Development',
      description: 'Students will build functional mobile applications for IoT data visualization and control.',
    },
    {
      title: 'ESP32 Hardware Prototyping Experience',
      description: 'Participants will gain hands-on experience with ESP32 microcontroller development and deployment.',
    },
    {
      title: 'Modern Embedded Systems Awareness',
      description: 'Enhanced understanding of current trends in single-board computers and embedded IoT technologies.',
    },
  ];

  return (
    <div className="min-h-screen bg-primary-bg">
      {/* Page Header */}
      <section className="bg-secondary-bg py-12 border-b border-border-color">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-primary-text text-center">
            Learning Outcomes
          </h1>
          <p className="text-lg text-secondary-text text-center mt-4">
            Objectives and expected outcomes from the workshop
          </p>
        </div>
      </section>

      {/* Learning Objectives Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary-text mb-8">
            Learning Objectives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {learningObjectives.map((objective, index) => (
              <div
                key={index}
                className="bg-secondary-bg border border-border-color rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent-green text-primary-text rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-primary-text mb-2">
                      {objective.title}
                    </h3>
                    <p className="text-sm text-secondary-text leading-relaxed">
                      {objective.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Outcomes Section */}
      <section className="py-16 bg-secondary-bg border-y border-border-color">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary-text mb-8">
            Expected Outcomes
          </h2>
          <div className="space-y-4">
            {expectedOutcomes.map((outcome, index) => (
              <div
                key={index}
                className="bg-secondary-bg border border-border-color rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-accent-green"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-primary-text mb-2">
                      {outcome.title}
                    </h3>
                    <p className="text-sm text-secondary-text leading-relaxed">
                      {outcome.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
