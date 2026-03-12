export default function ProcedurePage() {
  return (
    <div className="min-h-screen bg-primary-bg">
      {/* Page Header */}
      <section className="bg-secondary-bg py-12 border-b border-border-color">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-primary-text text-center">
            Setup Procedure
          </h1>
          <p className="text-lg text-gray-700 text-center mt-4">
            Complete hardware setup and software configuration guide
          </p>
        </div>
      </section>

      {/* Circuit Diagram Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary-text mb-8 text-center">
            Circuit Diagram
          </h2>
          <div className="bg-[#0a0e1a] border border-gray-700 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="/CircuitDiagram.html"
              style={{ width: '100%', height: '900px', border: 'none' }}
              title="Circuit Diagram"
            />
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section className="py-16 bg-secondary-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-primary-text mb-4">
              🏭 Industry Regulatory Subsystem
            </h1>
            <h3 className="text-2xl text-gray-700 mb-4">
              Raspberry Pi 4B · DS18B20 Temperature · MQ2 Gas Detection · Firebase Realtime Database
            </h3>
            <blockquote className="text-lg text-gray-600 italic border-l-4 border-blue-600 pl-4 inline-block text-left">
              Complete guide — from a blank SD card to live sensor data streaming to the cloud.
            </blockquote>
          </div>

          {/* Table of Contents */}
          <div className="bg-white border border-border-color rounded-lg p-8 mb-12 shadow">
            <h2 className="text-2xl font-bold text-primary-text mb-6">📋 Table of Contents</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 leading-relaxed">
              <li><a href="#hardware" className="text-blue-600 hover:underline font-medium">Hardware Requirements</a></li>
              <li><a href="#flashing" className="text-blue-600 hover:underline font-medium">Flashing Raspberry Pi OS</a></li>
              <li><a href="#first-boot" className="text-blue-600 hover:underline font-medium">First Boot & Initial Setup</a></li>
              <li><a href="#wiring" className="text-blue-600 hover:underline font-medium">Circuit Wiring</a></li>
              <li><a href="#enable-1wire" className="text-blue-600 hover:underline font-medium">Enable 1-Wire for DS18B20</a></li>
              <li><a href="#firebase-setup" className="text-blue-600 hover:underline font-medium">Firebase Project Setup</a></li>
              <li><a href="#installation" className="text-blue-600 hover:underline font-medium">Project Installation</a></li>
              <li><a href="#configuration" className="text-blue-600 hover:underline font-medium">Configuration</a></li>
              <li><a href="#running" className="text-blue-600 hover:underline font-medium">Running the Logger</a></li>
              <li><a href="#firebase-data" className="text-blue-600 hover:underline font-medium">Firebase Data Structure</a></li>
              <li><a href="#auto-start" className="text-blue-600 hover:underline font-medium">Auto-Start on Boot</a></li>
              <li><a href="#troubleshooting" className="text-blue-600 hover:underline font-medium">Troubleshooting</a></li>
              <li><a href="#file-reference" className="text-blue-600 hover:underline font-medium">File Reference</a></li>
            </ol>
          </div>

          {/* Section 1: Hardware Requirements */}
          <div id="hardware" className="bg-white border border-border-color rounded-lg p-8 mb-8 shadow">
            <h2 className="text-3xl font-bold text-primary-text mb-6">1. Hardware Requirements</h2>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-6">Components</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border px-4 py-2 text-left font-semibold">Component</th>
                    <th className="border px-4 py-2 text-left font-semibold">Purpose</th>
                    <th className="border px-4 py-2 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr><td className="border px-4 py-2">Raspberry Pi 4B</td><td className="border px-4 py-2">Main controller</td><td className="border px-4 py-2">Any RAM variant works</td></tr>
                  <tr><td className="border px-4 py-2">MicroSD Card</td><td className="border px-4 py-2">OS storage</td><td className="border px-4 py-2">16GB+ recommended, Class 10</td></tr>
                  <tr><td className="border px-4 py-2">DS18B20</td><td className="border px-4 py-2">Temperature sensor</td><td className="border px-4 py-2">Waterproof or bare TO-92 variant</td></tr>
                  <tr><td className="border px-4 py-2">MQ2</td><td className="border px-4 py-2">Gas sensor module</td><td className="border px-4 py-2">Detects LPG, smoke, CO, methane</td></tr>
                  <tr><td className="border px-4 py-2">4.7kΩ Resistor</td><td className="border px-4 py-2">DS18B20 pull-up</td><td className="border px-4 py-2"><strong>REQUIRED</strong> — sensor won&apos;t work without it</td></tr>
                  <tr><td className="border px-4 py-2">Jumper wires</td><td className="border px-4 py-2">Connections</td><td className="border px-4 py-2">Male-to-female recommended</td></tr>
                  <tr><td className="border px-4 py-2">Breadboard</td><td className="border px-4 py-2">Prototyping</td><td className="border px-4 py-2">Optional but recommended</td></tr>
                  <tr><td className="border px-4 py-2">5V Power Supply</td><td className="border px-4 py-2">Pi power</td><td className="border px-4 py-2">Official RPi PSU or 5V/3A USB-C</td></tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-6">Tools Needed</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>PC or Mac with internet connection (for flashing)</li>
              <li>Raspberry Pi Imager (free download)</li>
              <li>Micro-HDMI cable + monitor (or SSH access)</li>
              <li>USB keyboard + mouse (for first boot, or use SSH)</li>
              <li>Small Phillips screwdriver (for MQ2 potentiometer)</li>
            </ul>
          </div>

          {/* Section 2: Flashing Raspberry Pi OS */}
          <div id="flashing" className="bg-white border border-border-color rounded-lg p-8 mb-8 shadow">
            <h2 className="text-3xl font-bold text-primary-text mb-6">2. Flashing Raspberry Pi OS</h2>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Step 1 — Download Raspberry Pi Imager</h3>
            <p className="text-gray-700 mb-4">
              Go to <a href="https://www.raspberrypi.com/software/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.raspberrypi.com/software/</a> and download the Imager for your OS (Windows / macOS / Linux).
            </p>
            <p className="text-gray-700 mb-4">Install and launch it.</p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-6">Step 2 — Flash the OS</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
              <li>Insert your MicroSD card into your PC</li>
              <li>Open <strong>Raspberry Pi Imager</strong></li>
              <li>Click <strong>&quot;Choose Device&quot;</strong> → Select <strong>Raspberry Pi 4</strong></li>
              <li>Click <strong>&quot;Choose OS&quot;</strong> → Select: <code className="bg-gray-100 px-2 py-1 rounded text-sm">Raspberry Pi OS (64-bit)</code></li>
              <li>Click <strong>&quot;Choose Storage&quot;</strong> → Select your MicroSD card</li>
            </ol>
            <p className="text-gray-600 italic mt-2 ml-4">Use the <strong>Lite</strong> version if you don&apos;t need a desktop (headless setup)</p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-6">Step 3 — Configure OS Settings (Important!)</h3>
            <p className="text-gray-700 mb-4">Before flashing, click the <strong>⚙️ gear icon</strong> (or &quot;Edit Settings&quot;) to pre-configure:</p>
            
            <div className="bg-gray-50 border-l-4 border-blue-600 p-4 mb-4">
              <p className="font-semibold text-gray-800 mb-2">General tab:</p>
              <pre className="bg-gray-800 text-gray-100 p-3 rounded overflow-x-auto text-sm">
{`✅ Set hostname:        raspberrypi
✅ Set username:        kavin
✅ Set password:        [your password]
✅ Configure WiFi:      [your WiFi SSID + password]
    WiFi country:       IN  (for India)
✅ Set locale:
    Timezone:           Asia/Kolkata
    Keyboard layout:    us`}
              </pre>
            </div>

            <div className="bg-gray-50 border-l-4 border-green-600 p-4 mb-4">
              <p className="font-semibold text-gray-800 mb-2">Services tab:</p>
              <pre className="bg-gray-800 text-gray-100 p-3 rounded overflow-x-auto text-sm">
{`✅ Enable SSH
   ● Use password authentication`}
              </pre>
            </div>

            <p className="text-gray-700 mb-4">Click <strong>Save</strong> → Click <strong>Write</strong> → Wait for flash to complete (~3–5 minutes).</p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-6">Step 4 — Eject and Insert</h3>
            <p className="text-gray-700">Safely eject the SD card from your PC and insert it into the Raspberry Pi.</p>
          </div>

          {/* Section 3: First Boot & Initial Setup */}
          <div id="first-boot" className="bg-white border border-border-color rounded-lg p-8 mb-8 shadow">
            <h2 className="text-3xl font-bold text-primary-text mb-6">3. First Boot & Initial Setup</h2>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Power On</h3>
            <p className="text-gray-700 mb-4">
              Connect power to the Pi. Wait <strong>60–90 seconds</strong> for first boot to complete.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-6">Find the Pi&apos;s IP Address</h3>
            <p className="text-gray-700 mb-2"><strong>Option A</strong> — Check your router&apos;s admin panel for a device named <code className="bg-gray-100 px-2 py-1 rounded text-sm">raspberrypi</code>.</p>
            <p className="text-gray-700 mb-2"><strong>Option B</strong> — Scan your network:</p>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm mb-4">
{`# On Linux/macOS
ping raspberrypi.local

# Or use nmap
nmap -sn 192.168.1.0/24 | grep raspberry`}
            </pre>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-6">Connect via SSH</h3>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm mb-4">
{`ssh kavin@raspberrypi.local
# or
ssh kavin@192.168.1.XXX`}
            </pre>
            <p className="text-gray-700">Enter your password when prompted.</p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-6">Update the System</h3>
            <p className="text-gray-700 mb-2">Always update before installing anything:</p>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm mb-4">
{`sudo apt-get update && sudo apt-get upgrade -y`}
            </pre>
            <p className="text-gray-600 italic">This may take 5–10 minutes on first run.</p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-6">Set Timezone (India)</h3>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm mb-4">
{`sudo timedatectl set-timezone Asia/Kolkata
timedatectl status
# Should show: Time zone: Asia/Kolkata (IST, +0530)`}
            </pre>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-6">Sync Clock</h3>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm mb-4">
{`sudo apt-get install chrony -y
sudo chronyc makestep
date
# Should show correct IST time`}
            </pre>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-6">Enable SPI and I2C (optional but good practice)</h3>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm mb-4">
{`sudo raspi-config`}
            </pre>
            <p className="text-gray-700 mb-2">Navigate to: <strong>Interface Options</strong> → Enable <strong>SPI</strong>, <strong>I2C</strong>, <strong>1-Wire</strong></p>
            <p className="text-gray-600 italic">Or do it manually (see Section 5 for 1-Wire).</p>
          </div>

          {/* Section 4: Circuit Wiring */}
          <div id="wiring" className="bg-white border border-border-color rounded-lg p-8 mb-8 shadow">
            <h2 className="text-3xl font-bold text-primary-text mb-6">4. Circuit Wiring</h2>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
              <p className="text-gray-800">
                ⚠️ <strong>Always power off the Pi before connecting or disconnecting wires.</strong>
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Raspberry Pi GPIO Pinout Reference</h3>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm mb-6 font-mono">
{`                3V3  (1) (2)  5V
              GPIO2  (3) (4)  5V
              GPIO3  (5) (6)  GND  ←── GND (shared)
          [DS18B20]  (7) (8)  GPIO14
                GND  (9) (10) GPIO15
[MQ2 DO] GPIO17 (11) (12) GPIO18
            GPIO27 (13) (14) GND
            GPIO22 (15) (16) GPIO23
                3V3 (17) (18) GPIO24
            GPIO10 (19) (20) GND
             GPIO9 (21) (22) GPIO25
            GPIO11 (23) (24) GPIO8
               GND (25) (26) GPIO7`}
            </pre>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">DS18B20 Temperature Sensor Wiring</h3>
            <p className="text-gray-700 mb-4">
              The DS18B20 has 3 pins. Hold it with the <em>flat face toward you</em>, pins pointing down — left to right:
            </p>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm mb-4 font-mono">
{`┌─────────────┐
│   DS18B20   │  (flat face)
└──┬────┬────┬─┘
   │    │    │
  GND  DATA  VCC
  (1)  (2)   (3)`}
            </pre>

            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border px-4 py-2 text-left font-semibold">DS18B20 Pin</th>
                    <th className="border px-4 py-2 text-left font-semibold">Wire Color</th>
                    <th className="border px-4 py-2 text-left font-semibold">Connects To</th>
                    <th className="border px-4 py-2 text-left font-semibold">RPi Physical Pin</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr><td className="border px-4 py-2">PIN 1 — GND</td><td className="border px-4 py-2">Black</td><td className="border px-4 py-2">GND</td><td className="border px-4 py-2">Pin 6</td></tr>
                  <tr><td className="border px-4 py-2">PIN 2 — DATA</td><td className="border px-4 py-2">Yellow</td><td className="border px-4 py-2">GPIO4</td><td className="border px-4 py-2">Pin 7</td></tr>
                  <tr><td className="border px-4 py-2">PIN 3 — VCC</td><td className="border px-4 py-2">Red</td><td className="border px-4 py-2">3.3V</td><td className="border px-4 py-2">Pin 1</td></tr>
                </tbody>
              </table>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
              <p className="text-gray-800 font-semibold mb-2">⚡ CRITICAL — Pull-up Resistor:</p>
              <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm font-mono">
{`3.3V (Pin 1) ──────┬──────── DS18B20 VCC (Pin 3)
                   │
                 [4.7kΩ]
                   │
GPIO4 (Pin 7) ─────┴──────── DS18B20 DATA (Pin 2)`}
              </pre>
              <p className="text-gray-800 mt-3">
                Connect a <strong>4.7kΩ resistor</strong> between VCC and DATA. Without this, the sensor will not be detected — this is the most common wiring mistake.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">MQ2 Gas Sensor Wiring</h3>
            <p className="text-gray-700 mb-4">The MQ2 breakout module has 4 pins labeled on the PCB:</p>

            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border px-4 py-2 text-left font-semibold">MQ2 Pin</th>
                    <th className="border px-4 py-2 text-left font-semibold">Wire Color</th>
                    <th className="border px-4 py-2 text-left font-semibold">Connects To</th>
                    <th className="border px-4 py-2 text-left font-semibold">RPi Physical Pin</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr><td className="border px-4 py-2">VCC</td><td className="border px-4 py-2">Red</td><td className="border px-4 py-2">5V</td><td className="border px-4 py-2">Pin 2</td></tr>
                  <tr><td className="border px-4 py-2">GND</td><td className="border px-4 py-2">Black</td><td className="border px-4 py-2">GND</td><td className="border px-4 py-2">Pin 6 (shared with DS18B20)</td></tr>
                  <tr><td className="border px-4 py-2">DO</td><td className="border px-4 py-2">Purple</td><td className="border px-4 py-2">GPIO17</td><td className="border px-4 py-2">Pin 11</td></tr>
                  <tr><td className="border px-4 py-2">AO</td><td className="border px-4 py-2">—</td><td className="border px-4 py-2"><em>NOT CONNECTED</em></td><td className="border px-4 py-2">—</td></tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <p className="text-gray-800">
                The <strong>AO (Analog Output)</strong> pin requires an ADC chip to read. We use <strong>DO (Digital Output)</strong> only, which works directly with the Pi&apos;s GPIO. Leave AO unconnected.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-6">MQ2 Sensitivity Adjustment:</h3>
            <p className="text-gray-700 mb-2">The blue potentiometer on the MQ2 board sets the gas detection threshold:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li>Turn <strong>clockwise</strong> = less sensitive (higher threshold)</li>
              <li>Turn <strong>counter-clockwise</strong> = more sensitive (lower threshold)</li>
            </ul>
            <p className="text-gray-700 mb-6">
              <strong>To calibrate:</strong> in clean air, turn the pot until the DO LED just turns OFF. That&apos;s your baseline threshold.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Complete Wiring Summary</h3>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm font-mono">
{`Raspberry Pi 4B          Sensors
───────────────          ───────
Pin 1  (3.3V) ──────────── DS18B20 VCC (Pin 3)
                    │
                  [4.7kΩ]
                    │
Pin 7  (GPIO4) ─────┴────── DS18B20 DATA (Pin 2)
Pin 6  (GND)  ──────┬────── DS18B20 GND (Pin 1)
                    │
                    └────── MQ2 GND
Pin 2  (5V)   ─────────────MQ2 VCC
Pin 11 (GPIO17)────────────MQ2 DO`}
            </pre>
          </div>

          {/* Section 5: Enable 1-Wire for DS18B20 */}
          <div id="enable-1wire" className="bg-white border border-border-color rounded-lg p-8 mb-8 shadow">
            <h2 className="text-3xl font-bold text-primary-text mb-6">5. Enable 1-Wire for DS18B20</h2>
            
            <p className="text-gray-700 mb-6">The DS18B20 uses the 1-Wire protocol which must be enabled in the Pi&apos;s config.</p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Add the Overlay</h3>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm mb-4">
{`sudo nano /boot/firmware/config.txt`}
            </pre>
            <p className="text-gray-700 mb-2">Scroll to the bottom and add:</p>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm mb-4">
{`dtoverlay=w1-gpio,gpiopin=4`}
            </pre>
            <p className="text-gray-600 italic mb-4">Save: <code className="bg-gray-100 px-2 py-1 rounded text-sm">Ctrl+O</code> → <code className="bg-gray-100 px-2 py-1 rounded text-sm">Enter</code> → <code className="bg-gray-100 px-2 py-1 rounded text-sm">Ctrl+X</code></p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-6">Reboot</h3>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm mb-4">
{`sudo reboot`}
            </pre>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-6">Verify Sensor Detection</h3>
            <p className="text-gray-700 mb-2">After reboot, reconnect via SSH and run:</p>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm mb-4">
{`ls /sys/bus/w1/devices/`}
            </pre>
            <p className="text-gray-700 mb-2">You should see output like:</p>
            <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm mb-4">
{`28-3c01d6075f3e   w1_bus_master1`}
            </pre>
            <p className="text-gray-700 mb-4">The <code className="bg-gray-100 px-2 py-1 rounded text-sm">28-xxxxxxxxxxxx</code> entry is your DS18B20. If you don&apos;t see it, check:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
              <li>The 4.7kΩ resistor is in place</li>
              <li>VCC is on Pin 3 (not Pin 1) of the sensor</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded text-sm">dtoverlay=w1-gpio,gpiopin=4</code> was saved correctly</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-6">Test a Raw Reading</h3>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm mb-4">
{`cat /sys/bus/w1/devices/28-*/w1_slave`}
            </pre>
            <p className="text-gray-700 mb-2">Output:</p>
            <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm mb-4">
{`50 05 55 05 7f a5 a5 66 1a : crc=1a YES
50 05 55 05 7f a5 a5 66 1a t=26500`}
            </pre>
            <p className="text-gray-700">
              <code className="bg-gray-100 px-2 py-1 rounded text-sm">t=26500</code> means <strong>26.5°C</strong>. If the first line ends in <code className="bg-gray-100 px-2 py-1 rounded text-sm">YES</code>, the CRC passed and the reading is valid.
            </p>
          </div>

          {/* Section 6: Firebase Project Setup */}
          <div id="firebase-setup" className="bg-white border border-border-color rounded-lg p-8 mb-8 shadow">
            <h2 className="text-3xl font-bold text-primary-text mb-6">6. Firebase Project Setup</h2>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Create a Firebase Project</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4 mb-6">
              <li>Go to <a href="https://console.firebase.google.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://console.firebase.google.com</a></li>
              <li>Click <strong>&quot;Add project&quot;</strong></li>
              <li>Enter project name: <code className="bg-gray-100 px-2 py-1 rounded text-sm">Industry-Regulatory-Subsystem</code></li>
              <li>Disable Google Analytics (optional)</li>
              <li>Click <strong>&quot;Create project&quot;</strong></li>
            </ol>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-6">Create a Realtime Database</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4 mb-6">
              <li>In left sidebar → <strong>Build</strong> → <strong>Realtime Database</strong></li>
              <li>Click <strong>&quot;Create Database&quot;</strong></li>
              <li>Choose location: <strong>Singapore</strong> (closest to India)</li>
              <li>Start in <strong>test mode</strong> (allows read/write without auth for now)</li>
              <li>Click <strong>Enable</strong></li>
            </ol>
            <p className="text-gray-700 mb-2">Copy your database URL — it looks like:</p>
            <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm mb-6">
{`https://industry-regulatory-subsystem-default-rtdb.firebaseio.com/`}
            </pre>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-6">Get the Database Secret (for authentication)</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4 mb-6">
              <li>Click ⚙️ <strong>Project Settings</strong> (gear icon, top left)</li>
              <li>Go to <strong>Service Accounts</strong> tab</li>
              <li>Click <strong>&quot;Database secrets&quot;</strong> in the left panel</li>
              <li>Click <strong>&quot;Show&quot;</strong> next to the secret</li>
              <li>Copy the long token string</li>
            </ol>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-6">Set Database Rules</h3>
            <p className="text-gray-700 mb-2">Go to <strong>Realtime Database</strong> → <strong>Rules</strong> tab and set:</p>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm mb-4">
{`{
  "rules": {
    ".read": true,
    ".write": true
  }
}`}
            </pre>
            <p className="text-gray-700 mb-4">Click <strong>Publish</strong>.</p>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-gray-800">⚠️ These are open rules for development. Restrict them before deploying to production.</p>
            </div>
          </div>

          {/* Section 7: Project Installation */}
          <div id="installation" className="bg-white border border-border-color rounded-lg p-8 mb-8 shadow">
            <h2 className="text-3xl font-bold text-primary-text mb-6">7. Project Installation</h2>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Create Project Directory</h3>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm mb-6">
{`mkdir ~/Industry_Regulatory_Subsystem
cd ~/Industry_Regulatory_Subsystem`}
            </pre>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-6">Install Dependencies</h3>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm mb-4">
{`pip install firebase-admin RPi.GPIO adafruit-circuitpython-dht --break-system-packages`}
            </pre>
            <p className="text-gray-600 italic mb-6"><code className="bg-gray-100 px-2 py-1 rounded text-sm">lgpio</code> is pre-installed on Debian Trixie / RPi OS Bookworm and newer — no need to install it separately.</p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-6">Create Project Files</h3>
            <p className="text-gray-700 mb-4">Create the following files in <code className="bg-gray-100 px-2 py-1 rounded text-sm">~/Industry_Regulatory_Subsystem/</code>:</p>

            {/* config.py */}
            <div className="mb-6">
              <p className="font-semibold text-gray-800 mb-2"><code className="bg-gray-100 px-2 py-1 rounded text-sm">config.py</code></p>
              <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm">
{`class Config:
    DEVICE_ID = "rpi-4b-unit-01"
    DS18B20_PIN = 4       # GPIO4 → RPi Pin 7
    MQ2_DO_PIN  = 17      # GPIO17 → RPi Pin 11
    FIREBASE_CREDENTIALS_PATH = "firebase_credentials.json"
    FIREBASE_DATABASE_URL     = "https://YOUR-PROJECT-default-rtdb.firebaseio.com/"
    FIREBASE_NODE             = "sensor_data"
    LOG_INTERVAL_SECONDS      = 2`}
              </pre>
            </div>

            {/* firebase_credentials.json */}
            <div className="mb-6">
              <p className="font-semibold text-gray-800 mb-2"><code className="bg-gray-100 px-2 py-1 rounded text-sm">firebase_credentials.json</code></p>
              <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm">
{`{
  "database_secret": "PASTE_YOUR_DATABASE_SECRET_HERE"
}`}
              </pre>
            </div>

            {/* firebase_client.py */}
            <div className="mb-6">
              <p className="font-semibold text-gray-800 mb-2"><code className="bg-gray-100 px-2 py-1 rounded text-sm">firebase_client.py</code> — handles all Firebase communication via REST API:</p>
              <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm">
{`import logging, json, urllib.request

log = logging.getLogger(__name__)

class FirebaseClient:
    def __init__(self, credentials_path, database_url):
        self._db_url = database_url.rstrip("/")
        self._secret = None
        try:
            with open(credentials_path) as f:
                self._secret = json.load(f).get("database_secret")
            if self._secret:
                log.info("Firebase REST client ready.")
            else:
                log.error("No 'database_secret' in credentials file.")
        except Exception as e:
            log.error(f"Firebase init failed: {e}")

    def set(self, node, data):
        if not self._secret:
            log.info(f"[LOCAL] {data}"); return
        try:
            url  = f"{self._db_url}/{node}.json?auth={self._secret}"
            body = json.dumps(data).encode("utf-8")
            req  = urllib.request.Request(url, data=body, method="PUT")
            req.add_header("Content-Type", "application/json")
            urllib.request.urlopen(req, timeout=5)
        except Exception as e:
            log.error(f"Firebase set failed: {e}")`}
              </pre>
            </div>

            {/* ds18b20_sensor.py */}
            <div className="mb-6">
              <p className="font-semibold text-gray-800 mb-2"><code className="bg-gray-100 px-2 py-1 rounded text-sm">ds18b20_sensor.py</code> — reads temperature directly from Linux kernel sysfs:</p>
              <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm">
{`import os, glob, time, logging

log = logging.getLogger(__name__)

class DS18B20Sensor:
    def __init__(self):
        self._device_path = None
        devices = glob.glob("/sys/bus/w1/devices/28-*")
        if devices:
            self._device_path = devices[0] + "/w1_slave"
            log.info(f"DS18B20 found: {devices[0]}")
        else:
            log.error("DS18B20 not found. Enable 1-Wire and reboot.")

    def read(self):
        if not self._device_path:
            return None, None
        for _ in range(3):
            try:
                with open(self._device_path) as f:
                    lines = f.readlines()
                if lines[0].strip().endswith("YES"):
                    pos    = lines[1].find("t=")
                    temp_c = round(float(lines[1][pos+2:]) / 1000.0, 2)
                    temp_f = round((temp_c * 9/5) + 32, 2)
                    return temp_c, temp_f
            except Exception as e:
                log.debug(f"DS18B20 read error: {e}")
            time.sleep(1)
        return None, None

    def cleanup(self): pass`}
              </pre>
            </div>

            {/* mq2_sensor.py */}
            <div className="mb-6">
              <p className="font-semibold text-gray-800 mb-2"><code className="bg-gray-100 px-2 py-1 rounded text-sm">mq2_sensor.py</code> — reads digital output from MQ2:</p>
              <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm">
{`import logging

log = logging.getLogger(__name__)

try:
    import RPi.GPIO as GPIO
    GPIO_AVAILABLE = True
except ImportError:
    GPIO_AVAILABLE = False

class MQ2Sensor:
    def __init__(self, pin=17):
        self.pin = pin
        self._setup_done = False
        if not GPIO_AVAILABLE:
            return
        try:
            GPIO.setmode(GPIO.BCM)
            GPIO.setwarnings(False)
            GPIO.setup(self.pin, GPIO.IN, pull_up_down=GPIO.PUD_UP)
            self._setup_done = True
            log.info(f"MQ2 initialised on BCM GPIO{self.pin}.")
        except Exception as e:
            log.error(f"MQ2 setup failed: {e}")

    def read(self):
        if not GPIO_AVAILABLE or not self._setup_done:
            return False, "Clear", 1
        try:
            do_raw       = GPIO.input(self.pin)
            gas_detected = (do_raw == GPIO.LOW)
            return gas_detected, "Gas Detected" if gas_detected else "Clear", do_raw
        except Exception as e:
            log.error(f"MQ2 read error: {e}")
            return False, "Read Error", -1

    def cleanup(self):
        if GPIO_AVAILABLE and self._setup_done:
            GPIO.cleanup(self.pin)`}
              </pre>
            </div>

            {/* main.py */}
            <div className="mb-6">
              <p className="font-semibold text-gray-800 mb-2"><code className="bg-gray-100 px-2 py-1 rounded text-sm">main.py</code> — main loop:</p>
              <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm">
{`import time, logging
from ds18b20_sensor import DS18B20Sensor
from mq2_sensor import MQ2Sensor
from firebase_client import FirebaseClient
from config import Config

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[logging.StreamHandler(), logging.FileHandler("sensor_log.txt")]
)
log = logging.getLogger(__name__)

def main():
    log.info("🚀 Starting RPI Sensor Logger...")
    ds18b20 = DS18B20Sensor()
    mq2     = MQ2Sensor(pin=Config.MQ2_DO_PIN)
    db      = FirebaseClient(Config.FIREBASE_CREDENTIALS_PATH, Config.FIREBASE_DATABASE_URL)
    log.info(f"📡 Updating Firebase every {Config.LOG_INTERVAL_SECONDS}s")

    while True:
        try:
            temp_c, temp_f              = ds18b20.read()
            gas_detected, gas_status, _ = mq2.read()

            if temp_c is None:
                log.warning("⚠️ DS18B20 read failed — retrying.")
                time.sleep(Config.LOG_INTERVAL_SECONDS)
                continue

            payload = {
                "temperature_c": temp_c,
                "temperature_f": temp_f,
                "gas_detected":  gas_detected,
                "gas_status":    gas_status,
            }

            db.set(Config.FIREBASE_NODE, payload)
            log.info(f"✅ Temp: {temp_c}°C ({temp_f}°F)  |  Gas: {gas_status}")

        except KeyboardInterrupt:
            log.info("🛑 Stopped."); ds18b20.cleanup(); mq2.cleanup(); break
        except Exception as e:
            log.error(f"❌ {e}")

        time.sleep(Config.LOG_INTERVAL_SECONDS)

if __name__ == "__main__":
    main()`}
              </pre>
            </div>

            {/* File structure */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Final File Structure</h3>
            <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm">
{`~/Industry_Regulatory_Subsystem/
├── main.py                   ← Entry point
├── config.py                 ← All settings
├── ds18b20_sensor.py         ← Temperature sensor driver
├── mq2_sensor.py             ← Gas sensor driver
├── firebase_client.py        ← Firebase REST API client
├── firebase_credentials.json ← Your database secret
└── sensor_log.txt            ← Auto-generated log file`}
            </pre>
          </div>

          {/* Section 8: Configuration */}
          <div id="configuration" className="bg-white border border-border-color rounded-lg p-8 mb-8 shadow">
            <h2 className="text-3xl font-bold text-primary-text mb-6">8. Configuration</h2>
            
            <p className="text-gray-700 mb-4">Edit <code className="bg-gray-100 px-2 py-1 rounded text-sm">config.py</code> to match your setup:</p>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border px-4 py-2 text-left font-semibold">Setting</th>
                    <th className="border px-4 py-2 text-left font-semibold">Default</th>
                    <th className="border px-4 py-2 text-left font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr><td className="border px-4 py-2">DEVICE_ID</td><td className="border px-4 py-2">rpi-4b-unit-01</td><td className="border px-4 py-2">Unique name for this device</td></tr>
                  <tr><td className="border px-4 py-2">DS18B20_PIN</td><td className="border px-4 py-2">4</td><td className="border px-4 py-2">BCM GPIO pin for DS18B20 DATA</td></tr>
                  <tr><td className="border px-4 py-2">MQ2_DO_PIN</td><td className="border px-4 py-2">17</td><td className="border px-4 py-2">BCM GPIO pin for MQ2 DO</td></tr>
                  <tr><td className="border px-4 py-2">FIREBASE_DATABASE_URL</td><td className="border px-4 py-2">https://...firebaseio.com/</td><td className="border px-4 py-2">Your Firebase DB URL</td></tr>
                  <tr><td className="border px-4 py-2">FIREBASE_CREDENTIALS_PATH</td><td className="border px-4 py-2">firebase_credentials.json</td><td className="border px-4 py-2">Path to credentials file</td></tr>
                  <tr><td className="border px-4 py-2">FIREBASE_NODE</td><td className="border px-4 py-2">sensor_data</td><td className="border px-4 py-2">Firebase DB node name</td></tr>
                  <tr><td className="border px-4 py-2">LOG_INTERVAL_SECONDS</td><td className="border px-4 py-2">2</td><td className="border px-4 py-2">How often to update Firebase</td></tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-2">Edit <code className="bg-gray-100 px-2 py-1 rounded text-sm">firebase_credentials.json</code> and paste your Database Secret:</p>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm">
{`{
  "database_secret": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
}`}
            </pre>
          </div>

          {/* Section 9: Running the Logger */}
          <div id="running" className="bg-white border border-border-color rounded-lg p-8 mb-8 shadow">
            <h2 className="text-3xl font-bold text-primary-text mb-6">9. Running the Logger</h2>
            
            <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm mb-6">
{`cd ~/Industry_Regulatory_Subsystem
python main.py`}
            </pre>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Expected Output</h3>
            <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm mb-4">
{`2026-03-12 06:30:00,123 [INFO] 🚀 Starting RPI Sensor Logger...
2026-03-12 06:30:00,124 [INFO] DS18B20 found: /sys/bus/w1/devices/28-3c01d6075f3e
2026-03-12 06:30:00,125 [INFO] MQ2 initialised on BCM GPIO17.
2026-03-12 06:30:00,401 [INFO] Firebase REST client ready.
2026-03-12 06:30:00,402 [INFO] 📡 Updating Firebase every 2s
2026-03-12 06:30:02,614 [INFO] ✅ Temp: 29.74°C (85.53°F)  |  Gas: Clear
2026-03-12 06:30:04,721 [INFO] ✅ Temp: 29.75°C (85.55°F)  |  Gas: Clear`}
            </pre>
            <p className="text-gray-700">Stop with <code className="bg-gray-100 px-2 py-1 rounded text-sm">Ctrl+C</code>.</p>
          </div>

          {/* Section 10: Firebase Data Structure */}
          <div id="firebase-data" className="bg-white border border-border-color rounded-lg p-8 mb-8 shadow">
            <h2 className="text-3xl font-bold text-primary-text mb-6">10. Firebase Data Structure</h2>
            
            <p className="text-gray-700 mb-4">Your Firebase Realtime Database will have a single node that gets <strong>overwritten every 2 seconds</strong>:</p>
            <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm mb-6">
{`https://industry-regulatory-subsystem-default-rtdb.firebaseio.com/
└── sensor_data/
    ├── temperature_c: 29.74
    ├── temperature_f: 85.53
    ├── gas_detected:  false
    └── gas_status:    "Clear"`}
            </pre>

            <p className="text-gray-700 mb-2">When gas is detected:</p>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm mb-6">
{`{
  "sensor_data": {
    "temperature_c": 31.20,
    "temperature_f": 88.16,
    "gas_detected":  true,
    "gas_status":    "Gas Detected"
  }
}`}
            </pre>
            <p className="text-gray-700">To view live: open your Firebase Console → Realtime Database → watch the values update every 2 seconds.</p>
          </div>

          {/* Section 11: Auto-Start on Boot */}
          <div id="auto-start" className="bg-white border border-border-color rounded-lg p-8 mb-8 shadow">
            <h2 className="text-3xl font-bold text-primary-text mb-6">11. Auto-Start on Boot</h2>
            
            <p className="text-gray-700 mb-6">To have the logger start automatically every time the Pi boots:</p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Create a systemd Service</h3>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm mb-4">
{`sudo nano /etc/systemd/system/sensor_logger.service`}
            </pre>
            <p className="text-gray-700 mb-2">Paste:</p>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm mb-4">
{`[Unit]
Description=Industry Regulatory Subsystem Sensor Logger
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
User=kavin
WorkingDirectory=/home/kavin/Industry_Regulatory_Subsystem
ExecStart=/usr/bin/python3 /home/kavin/Industry_Regulatory_Subsystem/main.py
Restart=always
RestartSec=10
StandardOutput=journal
StandardError=journal

[Install]
WantedBy=multi-user.target`}
            </pre>
            <p className="text-gray-600 italic mb-6">Save: <code className="bg-gray-100 px-2 py-1 rounded text-sm">Ctrl+O</code> → <code className="bg-gray-100 px-2 py-1 rounded text-sm">Enter</code> → <code className="bg-gray-100 px-2 py-1 rounded text-sm">Ctrl+X</code></p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-6">Enable and Start the Service</h3>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm mb-6">
{`sudo systemctl daemon-reload
sudo systemctl enable sensor_logger
sudo systemctl start sensor_logger`}
            </pre>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-6">Check Status</h3>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm mb-6">
{`sudo systemctl status sensor_logger`}
            </pre>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-6">View Live Logs</h3>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm mb-6">
{`journalctl -u sensor_logger -f`}
            </pre>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-6">Stop / Restart</h3>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm">
{`sudo systemctl stop sensor_logger
sudo systemctl restart sensor_logger`}
            </pre>
          </div>

          {/* Section 12: Troubleshooting */}
          <div id="troubleshooting" className="bg-white border border-border-color rounded-lg p-8 mb-8 shadow">
            <h2 className="text-3xl font-bold text-primary-text mb-6">12. Troubleshooting</h2>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">DS18B20 not detected (<code className="bg-gray-100 px-2 py-1 rounded text-sm">ls /sys/bus/w1/devices/</code> shows nothing)</h3>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border px-4 py-2 text-left font-semibold">Check</th>
                    <th className="border px-4 py-2 text-left font-semibold">Fix</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr><td className="border px-4 py-2">dtoverlay=w1-gpio,gpiopin=4 in config.txt?</td><td className="border px-4 py-2">Add it and reboot</td></tr>
                  <tr><td className="border px-4 py-2">Did you reboot after adding overlay?</td><td className="border px-4 py-2"><code className="bg-gray-100 px-2 py-1 rounded text-sm">sudo reboot</code></td></tr>
                  <tr><td className="border px-4 py-2">4.7kΩ pull-up resistor connected?</td><td className="border px-4 py-2">Connect between VCC and DATA</td></tr>
                  <tr><td className="border px-4 py-2">VCC on correct pin (Pin 3, rightmost)?</td><td className="border px-4 py-2">Verify pin orientation</td></tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-6">DS18B20 returns wrong temperature</h3>
            <p className="text-gray-700 mb-6">The sensor is reading but values fluctuate wildly — this means the pull-up resistor value is wrong or connection is loose. Re-seat all wires and confirm 4.7kΩ (not 47kΩ).</p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-6">MQ2 always shows &quot;Gas Detected&quot;</h3>
            <p className="text-gray-700 mb-6">The potentiometer threshold is set too sensitive. Turn it <strong>clockwise</strong> slightly to raise the threshold.</p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-6">MQ2 never triggers</h3>
            <p className="text-gray-700 mb-6">The potentiometer threshold is too high. Turn it <strong>counter-clockwise</strong>. Also verify DO is connected to GPIO17 (Pin 11), not AO.</p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-6">Firebase push fails — <code className="bg-gray-100 px-2 py-1 rounded text-sm">invalid_grant: Invalid JWT Signature</code></h3>
            <p className="text-gray-700 mb-2">Your Pi&apos;s clock is wrong. Fix:</p>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm mb-4">
{`sudo timedatectl set-timezone Asia/Kolkata
sudo apt-get install chrony -y
sudo chronyc makestep
date`}
            </pre>
            <p className="text-gray-700 mb-6">If still failing, use the <strong>Database Secret</strong> method (REST API) instead of firebase-admin SDK — see <code className="bg-gray-100 px-2 py-1 rounded text-sm">firebase_client.py</code> in this project, which already uses this approach.</p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-6">Firebase push fails — <code className="bg-gray-100 px-2 py-1 rounded text-sm">Permission denied</code></h3>
            <p className="text-gray-700 mb-2">Your database rules are blocking writes. In Firebase Console → Realtime Database → Rules, set:</p>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm mb-4">
{`{
  "rules": {
    ".read": true,
    ".write": true
  }
}`}
            </pre>
            <p className="text-gray-700 mb-6">Click <strong>Publish</strong>.</p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-6"><code className="bg-gray-100 px-2 py-1 rounded text-sm">ModuleNotFoundError: No module named &apos;sensors&apos;</code></h3>
            <p className="text-gray-700 mb-2">All files must be in the <strong>same flat directory</strong> — no subfolders. Run:</p>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm mb-4">
{`ls ~/Industry_Regulatory_Subsystem/
# Should show: main.py config.py ds18b20_sensor.py mq2_sensor.py firebase_client.py`}
            </pre>
            <p className="text-gray-700 mb-6">Always run from inside the project folder:</p>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm mb-6">
{`cd ~/Industry_Regulatory_Subsystem
python main.py`}
            </pre>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-6">WiFi drops / Pi loses connection</h3>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm mb-4">
{`# Check WiFi status
iwconfig wlan0

# Reconnect
sudo ifconfig wlan0 down && sudo ifconfig wlan0 up`}
            </pre>
            <p className="text-gray-700 mb-2">To prevent WiFi power saving (common cause of drops):</p>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm mb-4">
{`sudo nano /etc/network/interfaces`}
            </pre>
            <p className="text-gray-700 mb-2">Add:</p>
            <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm">
{`wireless-power off`}
            </pre>
          </div>

          {/* Section 13: File Reference */}
          <div id="file-reference" className="bg-white border border-border-color rounded-lg p-8 mb-8 shadow">
            <h2 className="text-3xl font-bold text-primary-text mb-6">13. File Reference</h2>
            
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2"><code className="bg-gray-100 px-2 py-1 rounded text-sm">main.py</code></h3>
                <p>Entry point. Initialises all sensors and Firebase, then runs an infinite loop reading sensors and pushing data to Firebase every <code className="bg-gray-100 px-2 py-1 rounded text-sm">LOG_INTERVAL_SECONDS</code>.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2"><code className="bg-gray-100 px-2 py-1 rounded text-sm">config.py</code></h3>
                <p>Single source of truth for all configuration. Edit this file to change pins, Firebase URL, or logging interval. Never hardcode values in other files.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2"><code className="bg-gray-100 px-2 py-1 rounded text-sm">ds18b20_sensor.py</code></h3>
                <p>Reads temperature by parsing <code className="bg-gray-100 px-2 py-1 rounded text-sm">/sys/bus/w1/devices/28-*/w1_slave</code> — the Linux kernel 1-Wire sysfs interface. No external Python libraries required. Returns <code className="bg-gray-100 px-2 py-1 rounded text-sm">(temp_c, temp_f)</code> or <code className="bg-gray-100 px-2 py-1 rounded text-sm">(None, None)</code> on failure.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2"><code className="bg-gray-100 px-2 py-1 rounded text-sm">mq2_sensor.py</code></h3>
                <p>Reads the MQ2 DO pin state via <code className="bg-gray-100 px-2 py-1 rounded text-sm">RPi.GPIO</code>. Returns <code className="bg-gray-100 px-2 py-1 rounded text-sm">(gas_detected: bool, status: str, raw: int)</code>. Active-LOW logic: GPIO reads <code className="bg-gray-100 px-2 py-1 rounded text-sm">0</code> when gas is detected, <code className="bg-gray-100 px-2 py-1 rounded text-sm">1</code> when clear.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2"><code className="bg-gray-100 px-2 py-1 rounded text-sm">firebase_client.py</code></h3>
                <p>Sends data to Firebase Realtime Database using plain HTTPS REST API (<code className="bg-gray-100 px-2 py-1 rounded text-sm">urllib</code>). Uses the Database Secret for authentication — bypasses JWT entirely, so Pi clock sync is not required.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2"><code className="bg-gray-100 px-2 py-1 rounded text-sm">firebase_credentials.json</code></h3>
                <p>Contains only one field: <code className="bg-gray-100 px-2 py-1 rounded text-sm">database_secret</code>. Keep this file private — do not commit to git.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2"><code className="bg-gray-100 px-2 py-1 rounded text-sm">sensor_log.txt</code></h3>
                <p>Auto-generated. Contains timestamped logs of every reading and any errors. Useful for debugging.</p>
              </div>
            </div>
          </div>

          {/* Quick Reference */}
          <div className="bg-white border border-border-color rounded-lg p-8 mb-8 shadow">
            <h2 className="text-3xl font-bold text-primary-text mb-6">Quick Reference — RPi GPIO Pins Used</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border px-4 py-2 text-left font-semibold">Physical Pin</th>
                    <th className="border px-4 py-2 text-left font-semibold">BCM</th>
                    <th className="border px-4 py-2 text-left font-semibold">Function</th>
                    <th className="border px-4 py-2 text-left font-semibold">Connected To</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr><td className="border px-4 py-2">Pin 1</td><td className="border px-4 py-2">—</td><td className="border px-4 py-2">3.3V Power</td><td className="border px-4 py-2">DS18B20 VCC</td></tr>
                  <tr><td className="border px-4 py-2">Pin 2</td><td className="border px-4 py-2">—</td><td className="border px-4 py-2">5V Power</td><td className="border px-4 py-2">MQ2 VCC</td></tr>
                  <tr><td className="border px-4 py-2">Pin 6</td><td className="border px-4 py-2">—</td><td className="border px-4 py-2">GND</td><td className="border px-4 py-2">DS18B20 GND + MQ2 GND</td></tr>
                  <tr><td className="border px-4 py-2">Pin 7</td><td className="border px-4 py-2">GPIO4</td><td className="border px-4 py-2">1-Wire Data</td><td className="border px-4 py-2">DS18B20 DATA</td></tr>
                  <tr><td className="border px-4 py-2">Pin 11</td><td className="border px-4 py-2">GPIO17</td><td className="border px-4 py-2">Digital Input</td><td className="border px-4 py-2">MQ2 DO</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-gray-600 italic p-8 border-t border-gray-200">
            <p className="text-lg">Built for the <strong>Industry Regulatory Subsystem</strong> project · Raspberry Pi 4B IoT Lab</p>
          </div>

        </div>
      </section>
    </div>
  );
}
