import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Meet Emeka', path: '/about' },
    { label: 'Our Vision', path: '/issues' },
    { label: 'Get Involved', path: '/volunteer' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-md z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <Link to="/" className="flex flex-col">
              <span className="font-serif font-black text-2xl tracking-tighter text-campaign-navy leading-none">
                EMEKA ELUKA
              </span>
              <span className="text-xs font-sans tracking-[0.3em] text-campaign-gold font-bold uppercase">
                For Collin County
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-semibold tracking-wide transition-colors duration-200 ${
                  isActive(item.path) ? 'text-campaign-blue' : 'text-slate-600 hover:text-campaign-blue'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/donate">
              <Button variant="accent" size="sm">Donate</Button>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-campaign-blue hover:bg-slate-50"
              >
                <div className="flex justify-between items-center">
                  {item.label}
                  <ChevronRight className="h-4 w-4 opacity-50"/>
                </div>
              </Link>
            ))}
            <Link to="/donate" onClick={() => setIsOpen(false)} className="block mt-4">
              <Button variant="accent" className="w-full">Donate Now</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};