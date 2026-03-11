import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-bg py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold text-primary-text mb-6 leading-tight">
                Raspberry Pi Based Industrial IoT Systems
              </h1>
              <p className="text-2xl md:text-3xl text-gray-700 font-light">
                Hands-On Workshop for Undergraduate Students
              </p>
            </div>
            
            {/* Image */}
            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-md">
                <Image
                  src="/RSP.png"
                  alt="Raspberry Pi Setup"
                  width={500}
                  height={500}
                  className="object-contain rounded-lg shadow-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="bg-secondary-bg py-16 border-y border-border-color">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-600 font-semibold mb-2">
                Date
              </h3>
              <p className="text-xl text-primary-text font-medium">
                12 March 2026
              </p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-600 font-semibold mb-2">
                Time
              </h3>
              <p className="text-xl text-primary-text font-medium">
                09:00 AM – 01:00 PM
              </p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-600 font-semibold mb-2">
                Break
              </h3>
              <p className="text-xl text-primary-text font-medium">
                11:00 AM – 11:15 AM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-primary-bg py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary-text mb-6 text-center">
            Workshop Overview
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            This comprehensive hands-on workshop is designed to introduce undergraduate students 
            to the transformative world of Industrial Internet of Things (IIoT) systems using 
            Raspberry Pi as the core development platform. Participants will gain practical 
            experience in integrating various hardware sensors with industrial-grade protocols, 
            implementing real-time data acquisition and processing pipelines, and deploying 
            cloud-based logging solutions for remote monitoring and analytics. The workshop 
            emphasizes practical skills in developing responsive mobile dashboards for 
            visualization and control, bridging the gap between theoretical knowledge and 
            real-world industrial applications. Through guided exercises and collaborative 
            projects, students will learn industry-standard practices in IoT system architecture, 
            data security, and scalable deployment strategies essential for modern smart 
            manufacturing and automation environments.
          </p>
        </div>
      </section>
    </div>
  );
}
