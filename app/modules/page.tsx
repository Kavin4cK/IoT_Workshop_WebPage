export default function ModulesPage() {
  const hardwareComponents = [
    {
      name: 'Raspberry Pi 4 Model B',
      description: 'Powerful single-board computer serving as the main processing unit for IoT applications and sensor integration.',
      image: 'RPI4',
    },
    {
      name: 'DHT11 Sensor',
      description: 'Digital temperature and humidity sensor for environmental monitoring with reliable accuracy.',
      image: 'DHT11',
    },
    {
      name: 'MQ-2 Gas Sensor',
      description: 'Gas detection sensor for identifying LPG, propane, methane, hydrogen, and smoke presence.',
      image: 'MQ-2',
    },
    {
      name: 'LED Indicator',
      description: 'Light-emitting diode for visual status indication and system feedback.',
      image: 'LED',
    },
    {
      name: 'Buzzer',
      description: 'Audio alarm component for alerting and notification purposes in safety systems.',
      image: 'BUZZER',
    },
    {
      name: 'Breadboard',
      description: 'Solderless prototyping board for building and testing electronic circuits quickly.',
      image: 'BOARD',
    },
    {
      name: 'Jumper Wires',
      description: 'Electrical wires with connector pins for establishing connections between components.',
      image: 'WIRES',
    },
    {
      name: 'ESP32 Development Board',
      description: 'Low-power microcontroller with Wi-Fi and Bluetooth capabilities for wireless IoT projects.',
      image: 'ESP32',
    },
  ];

  const technologies = [
    {
      name: 'Python 3',
      description: 'High-level programming language for data processing, automation, and IoT application development.',
      logo: 'PY',
    },
    {
      name: 'Firebase Realtime Database',
      description: 'Cloud-hosted NoSQL database for real-time data synchronization and storage.',
      logo: 'FB',
    },
    {
      name: 'MIT App Inventor',
      description: 'Visual block-based platform for creating Android mobile applications without coding expertise.',
      logo: 'MIT',
    },
    {
      name: 'Streamlit',
      description: 'Open-source framework for building interactive data dashboards and web applications.',
      logo: 'ST',
    },
    {
      name: 'Arduino IDE',
      description: 'Integrated development environment for programming microcontrollers and embedded systems.',
      logo: 'ARD',
    },
    {
      name: 'MicroPython',
      description: 'Python implementation optimized for microcontrollers and embedded hardware platforms.',
      logo: 'µPY',
    },
  ];

  return (
    <div className="min-h-screen bg-primary-bg">
      {/* Page Header */}
      <section className="bg-secondary-bg py-12 border-b border-border-color">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-primary-text text-center">
            Workshop Modules
          </h1>
          <p className="text-lg text-secondary-text text-center mt-4">
            Hardware components and software technologies covered in this workshop
          </p>
        </div>
      </section>

      {/* Hardware Components Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary-text mb-8">
            Hardware Components
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hardwareComponents.map((component, index) => (
              <div
                key={index}
                className="bg-secondary-bg border border-border-color rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200"
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-secondary-bg flex items-center justify-center border-b border-border-color">
                  <span className="text-4xl font-bold text-secondary-text">
                    {component.image}
                  </span>
                </div>
                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-primary-text mb-2">
                    {component.name}
                  </h3>
                  <p className="text-sm text-secondary-text leading-relaxed">
                    {component.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software & Technologies Section */}
      <section className="py-16 bg-secondary-bg border-y border-border-color">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary-text mb-8">
            Software & Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-secondary-bg border border-border-color rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200"
              >
                {/* Logo Placeholder */}
                <div className="h-40 bg-gradient-to-br from-primary-bg to-secondary-bg flex items-center justify-center border-b border-border-color">
                  <span className="text-5xl font-bold text-secondary-text">
                    {tech.logo}
                  </span>
                </div>
                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-primary-text mb-2">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-secondary-text leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
