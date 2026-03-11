export default function ContactPage() {
  const professor = {
    name: 'Prof. Savithri Kulkarni',
    designation: 'Assistant Professor',
    department: 'Computer Science & Engineering',
    institution: 'RV College of Engineering',
    location: 'Bengaluru',
  };

  const students = [
    {
      name: 'Kavin Krishnan C',
      department: 'Computer Science & Engineering',
      institution: 'RV College of Engineering',
      location: 'Bengaluru',
      linkedin: 'https://linkedin.com/in/example-profile-1',
    },
    {
      name: 'Chinmai Kiran Shetti',
      department: 'Computer Science & Engineering',
      institution: 'RV College of Engineering',
      location: 'Bengaluru',
      linkedin: 'https://linkedin.com/in/example-profile-2',
    },
    {
      name: 'Krupanka R',
      department: 'Computer Science & Engineering',
      institution: 'RV College of Engineering',
      location: 'Bengaluru',
      linkedin: 'https://linkedin.com/in/example-profile-3',
    },
  ];

  return (
    <div className="min-h-screen bg-primary-bg">
      {/* Page Header */}
      <section className="bg-secondary-bg py-12 border-b border-border-color">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-primary-text text-center">
            Contact Us
          </h1>
          <p className="text-lg text-secondary-text text-center mt-4">
            Workshop organizers and coordinators
          </p>
        </div>
      </section>

      {/* Professor Section - Row 1 */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-primary-text mb-8 text-center">
            Faculty Coordinator
          </h2>
          <div className="flex justify-center">
            <div className="w-full max-w-md bg-secondary-bg border border-border-color rounded-lg shadow-md p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary-text mb-3">
                  {professor.name}
                </h3>
                <div className="space-y-2 text-secondary-text">
                  <p className="text-sm font-semibold text-primary-text">
                    {professor.designation}
                  </p>
                  <p className="text-sm">{professor.department}</p>
                  <p className="text-sm">{professor.institution}</p>
                  <p className="text-sm flex items-center justify-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {professor.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Students Section - Row 2 */}
      <section className="py-16 bg-secondary-bg border-y border-border-color">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-primary-text mb-8 text-center">
            Student Coordinators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {students.map((student, index) => (
              <div
                key={index}
                className="bg-secondary-bg border border-border-color rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="text-center">
                  <h3 className="text-xl font-bold text-primary-text mb-3">
                    {student.name}
                  </h3>
                  <div className="space-y-2 text-secondary-text mb-4">
                    <p className="text-sm">{student.department}</p>
                    <p className="text-sm">{student.institution}</p>
                    <p className="text-sm flex items-center justify-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {student.location}
                    </p>
                  </div>

                  {/* LinkedIn Link */}
                  <a
                    href={student.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-accent-green text-primary-text px-4 py-2 rounded text-sm font-medium hover:bg-secondary-text hover:text-white transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
