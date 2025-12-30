
import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Smartphone, Zap, Mail, Phone, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

const Navigation = ({ isMenuOpen, setIsMenuOpen }) => {
  const menuItems = ['home', 'services', 'projects', 'capabilities', 'contact'];

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-xl z-40 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-purple-600 rounded-lg flex items-center justify-center animate-rotate3d">
              <Code className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              WebCraft
            </span>
          </div>

          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`${item}`}
                className="text-gray-300 hover:text-white transition-colors duration-300 capitalize relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-600 to-purple-600 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-zinc-800">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`${item}`}
              className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-zinc-900 transition-all capitalize"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
export default Navigation;
