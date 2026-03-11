import Image from 'next/image';

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
  ];

  return (
    <div className="min-h-screen bg-primary-bg">
      {/* Page Header */}
      <section className="bg-secondary-bg py-12 border-b border-border-color">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-primary-text text-center">
            Workshop Modules
          </h1>
          <p className="text-lg text-gray-700 text-center mt-4">
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
                className="bg-white border border-border-color rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200"
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-secondary-bg flex items-center justify-center border-b border-border-color">
                  {component.image === 'RPI4' ? (
                    <Image
                      src="/RSP4.png"
                      alt={component.name}
                      width={200}
                      height={200}
                      className="object-contain w-full h-full p-4"
                    />
                  ) : component.image === 'DHT11' ? (
                    <Image
                      src="/DHT11-Sensor.jpg"
                      alt={component.name}
                      width={200}
                      height={200}
                      className="object-contain w-full h-full p-4"
                    />
                  ) : component.image === 'MQ-2' ? (
                    <Image
                      src="/MQ-2-Gas-Sensor.jpg"
                      alt={component.name}
                      width={200}
                      height={200}
                      className="object-contain w-full h-full p-4"
                    />
                  ) : component.image === 'LED' ? (
                    <Image
                      src="/LED-Indicator.webp"
                      alt={component.name}
                      width={200}
                      height={200}
                      className="object-contain w-full h-full p-4"
                    />
                  ) : component.image === 'BUZZER' ? (
                    <Image
                      src="/Buzzer.png"
                      alt={component.name}
                      width={200}
                      height={200}
                      className="object-contain w-full h-full p-4"
                    />
                  ) : component.image === 'BOARD' ? (
                    <Image
                      src="/Breadboard.jpg"
                      alt={component.name}
                      width={200}
                      height={200}
                      className="object-contain w-full h-full p-4"
                    />
                  ) : component.image === 'WIRES' ? (
                    <Image
                      src="/Jumper-Wires.jpg"
                      alt={component.name}
                      width={200}
                      height={200}
                      className="object-contain w-full h-full p-4"
                    />
                  ) : component.image === 'ESP32' ? (
                    <Image
                      src="/ESP32.jpg"
                      alt={component.name}
                      width={200}
                      height={200}
                      className="object-contain w-full h-full p-4"
                    />
                  ) : (
                    <span className="text-4xl font-bold text-gray-400">
                      {component.image}
                    </span>
                  )}
                </div>
                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-primary-text mb-2">
                    {component.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
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
                className="bg-white border border-border-color rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200"
              >
                {/* Logo Placeholder */}
                <div className="h-40 bg-gradient-to-br from-gray-50 to-secondary-bg flex items-center justify-center border-b border-border-color">
                  {tech.logo === 'PY' ? (
                    <Image
                      src="/Python-3.png"
                      alt={tech.name}
                      width={150}
                      height={150}
                      className="object-contain w-full h-full p-4"
                    />
                  ) : tech.logo === 'FB' ? (
                    <Image
                      src="/Firebase-Realtime-Database.png"
                      alt={tech.name}
                      width={150}
                      height={150}
                      className="object-contain w-full h-full p-4"
                    />
                  ) : tech.logo === 'MIT' ? (
                    <Image
                      src="/MIT-App-Inventor.png"
                      alt={tech.name}
                      width={150}
                      height={150}
                      className="object-contain w-full h-full p-4"
                    />
                  ) : tech.logo === 'ST' ? (
                    <Image
                      src="/Streamlit.webp"
                      alt={tech.name}
                      width={150}
                      height={150}
                      className="object-contain w-full h-full p-4"
                    />
                  ) : tech.logo === 'ARD' ? (
                    <Image
                      src="/Arduino-IDE.png"
                      alt={tech.name}
                      width={150}
                      height={150}
                      className="object-contain w-full h-full p-4"
                    />
                  ) : (
                    <span className="text-5xl font-bold text-gray-400">
                      {tech.logo}
                    </span>
                  )}
                </div>
                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-primary-text mb-2">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
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
