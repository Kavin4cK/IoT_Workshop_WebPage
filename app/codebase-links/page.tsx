export default function CodebaseLinksPage() {
  return (
    <div className="min-h-screen bg-primary-bg">
      {/* Page Header */}
      <section className="bg-secondary-bg py-12 border-b border-border-color">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-primary-text text-center">
            Codebase & Resources
          </h1>
          <p className="text-lg text-gray-700 text-center mt-4">
            Access workshop code repository and documentation
          </p>
        </div>
      </section>

      {/* Repository Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white border border-border-color rounded-lg p-8 shadow-lg">
            <div className="text-center mb-6">
              <svg className="w-16 h-16 mx-auto mb-4 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <h2 className="text-3xl font-bold text-primary-text mb-3">
                Workshop Repository
              </h2>
              <p className="text-lg text-gray-700">
                Complete code, documentation, and resources for the Raspberry Pi Industrial IoT Workshop
              </p>
            </div>
            
            <div className="mb-6">
              <p className="text-gray-600 mb-4">
                This repository contains all the materials you need for the workshop including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>Raspberry Pi sensor integration code</li>
                <li>Firebase database configuration and scripts</li>
                <li>Mobile dashboard application files</li>
                {/* <li>ESP32 firmware and examples</li>
                <li>Python automation scripts</li> */}
                <li>Hardware wiring diagrams and setup guides</li>
                <li>Complete documentation and tutorials</li>
              </ul>
            </div>

            <div className="text-center">
              <a
                href="https://github.com/Kavin4cK/Industry_Regulatory_Subsystem"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary-text text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors shadow-md hover:shadow-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
                View Repository on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
