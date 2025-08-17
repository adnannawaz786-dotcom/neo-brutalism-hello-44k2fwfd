import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, Home, User, Mail, Info } from 'lucide-react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', icon: Home, href: '#home' },
    { name: 'About', icon: Info, href: '#about' },
    { name: 'Portfolio', icon: User, href: '#portfolio' },
    { name: 'Contact', icon: Mail, href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-black text-black transform -rotate-2 hover:rotate-0 transition-transform duration-300">
              SAMANTHA
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group relative px-4 py-2 font-bold text-black hover:text-white transition-colors duration-200"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <item.icon size={18} />
                    <span>{item.name}</span>
                  </span>
                  <div className="absolute inset-0 bg-black transform scale-0 group-hover:scale-100 transition-transform duration-200 origin-center border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200"
            >
              SAY HELLO!
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              onClick={toggleMenu}
              className="bg-white hover:bg-gray-100 text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t-4 border-black bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="group block px-3 py-2 text-base font-bold text-black hover:text-white transition-colors duration-200 relative"
              >
                <span className="relative z-10 flex items-center space-x-3">
                  <item.icon size={20} />
                  <span>{item.name}</span>
                </span>
                <div className="absolute inset-0 bg-black transform scale-0 group-hover:scale-100 transition-transform duration-200 origin-left border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
              </a>
            ))}
            <div className="pt-4 pb-2">
              <Button
                onClick={() => setIsMenuOpen(false)}
                className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200"
              >
                SAY HELLO!
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;