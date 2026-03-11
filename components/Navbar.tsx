'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/home' },
    { name: 'Modules', href: '/modules' },
    { name: 'Agenda', href: '/agenda' },
    { name: 'Outcomes', href: '/outcomes' },
    { name: 'Codebase Links', href: '/codebase-links' },
    { name: 'Feedback', href: '/feedback' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-primary-bg border-b border-border-color sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/home" className="flex items-center gap-3 group">
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image
                src="/image.jpg"
                alt="College Logo"
                width={64}
                height={64}
                className="object-contain transition-transform duration-200 group-hover:scale-105"
                priority
              />
            </div>
            <div className="hidden md:block">
              <h2 className="text-lg font-bold text-primary-text leading-tight">
                RV College of<br></br> Engineering
              </h2>
              <p className="text-xs text-gray-600"></p>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-gray-600 ${
                  pathname === link.href
                    ? 'text-primary-text font-semibold'
                    : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
