export default function CodebaseLinksPage() {
  const githubRepositories = [
    {
      name: 'Raspberry Pi Sensor Code',
      description: 'Complete sensor integration code for Raspberry Pi',
      link: 'https://github.com/example/raspberry-pi-sensors',
    },
    {
      name: 'Firebase Integration Code',
      description: 'Real-time database integration and cloud logging',
      link: 'https://github.com/example/firebase-integration',
    },
    {
      name: 'MIT App Inventor Dashboard',
      description: 'Mobile dashboard application project files',
      link: 'https://github.com/example/mit-app-inventor',
    },
    {
      name: 'ESP32 Hackathon Firmware',
      description: 'ESP32 microcontroller firmware and examples',
      link: 'https://github.com/example/esp32-firmware',
    },
  ];

  const pythonScripts = [
    {
      name: 'GPIO Sensor Reader',
      description: 'Python scripts for GPIO pin management and sensor data reading',
      link: 'https://github.com/example/gpio-sensor-reader',
    },
    {
      name: 'Firebase Data Logger',
      description: 'Automated data logging to Firebase Realtime Database',
      link: 'https://github.com/example/firebase-logger',
    },
    {
      name: 'Streamlit Dashboard',
      description: 'Interactive web dashboard for data visualization',
      link: 'https://github.com/example/streamlit-dashboard',
    },
  ];

  const mobileDashboard = [
    {
      name: 'MIT App Inventor Project',
      description: 'Complete mobile app project with .aia file',
      link: 'https://github.com/example/mobile-app-project',
    },
    {
      name: 'Streamlit Interface',
      description: 'Web-based monitoring and control interface',
      link: 'https://github.com/example/streamlit-interface',
    },
  ];

  const hardwareDocs = [
    {
      name: 'Raspberry Pi Setup Guide',
      description: 'Step-by-step installation and configuration guide',
      link: 'https://github.com/example/rpi-setup-guide',
    },
    {
      name: 'ESP32 Programming Guide',
      description: 'Comprehensive ESP32 development tutorial',
      link: 'https://github.com/example/esp32-guide',
    },
    {
      name: 'Sensor Wiring Diagram',
      description: 'Circuit diagrams and connection schematics',
      link: 'https://github.com/example/wiring-diagrams',
    },
  ];

  return (
    <div className="min-h-screen bg-primary-bg">
      {/* Page Header */}
      <section className="bg-secondary-bg py-12 border-b border-border-color">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-primary-text text-center">
            Codebase & Resources
          </h1>
          <p className="text-lg text-secondary-text text-center mt-4">
            Access workshop code repositories and documentation
          </p>
        </div>
      </section>

      {/* GitHub Repositories Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary-text mb-8">
            GitHub Repositories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {githubRepositories.map((repo, index) => (
              <div
                key={index}
                className="bg-secondary-bg border border-border-color rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
              >
                <h3 className="text-lg font-semibold text-primary-text mb-2">
                  {repo.name}
                </h3>
                <p className="text-sm text-secondary-text mb-4">
                  {repo.description}
                </p>
                <a
                  href={repo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent-green text-primary-text px-4 py-2 rounded text-sm font-medium hover:bg-secondary-text hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                  View Repository
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Python Scripts Section */}
      <section className="py-16 bg-secondary-bg border-y border-border-color">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary-text mb-8">
            Python Scripts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pythonScripts.map((script, index) => (
              <div
                key={index}
                className="bg-secondary-bg border border-border-color rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
              >
                <h3 className="text-lg font-semibold text-primary-text mb-2">
                  {script.name}
                </h3>
                <p className="text-sm text-secondary-text mb-4">
                  {script.description}
                </p>
                <a
                  href={script.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent-green text-primary-text px-4 py-2 rounded text-sm font-medium hover:bg-secondary-text hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                  View Code
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Dashboard Resources Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary-text mb-8">
            Mobile Dashboard Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mobileDashboard.map((resource, index) => (
              <div
                key={index}
                className="bg-secondary-bg border border-border-color rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
              >
                <h3 className="text-lg font-semibold text-primary-text mb-2">
                  {resource.name}
                </h3>
                <p className="text-sm text-secondary-text mb-4">
                  {resource.description}
                </p>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent-green text-primary-text px-4 py-2 rounded text-sm font-medium hover:bg-secondary-text hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware Documentation Section */}
      <section className="py-16 bg-secondary-bg border-y border-border-color">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary-text mb-8">
            Hardware Documentation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hardwareDocs.map((doc, index) => (
              <div
                key={index}
                className="bg-secondary-bg border border-border-color rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
              >
                <h3 className="text-lg font-semibold text-primary-text mb-2">
                  {doc.name}
                </h3>
                <p className="text-sm text-secondary-text mb-4">
                  {doc.description}
                </p>
                <a
                  href={doc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent-green text-primary-text px-4 py-2 rounded text-sm font-medium hover:bg-secondary-text hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                  View Documentation
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
