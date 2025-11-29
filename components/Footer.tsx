import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, RefreshCw } from 'lucide-react';

export const Footer: React.FC = () => {
  const replayTutorial = (e: React.MouseEvent) => {
    e.preventDefault();
    localStorage.removeItem('emeka_tutorial_v3');
    window.location.reload();
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-serif font-bold text-white mb-4">EMEKA ELUKA</h2>
            <p className="max-w-xs text-sm mb-6">
              Political advertising paid for by the Emeka Eluka Campaign.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-campaign-gold transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-campaign-gold transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-campaign-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-campaign-gold transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-4 text-sm">Action</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/volunteer" className="hover:text-white transition-colors">Volunteer</Link></li>
              <li><Link to="/donate" className="hover:text-white transition-colors">Donate</Link></li>
              <li><Link to="/events" className="hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Store</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-4 text-sm">About</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">Meet Emeka</Link></li>
              <li><Link to="/issues" className="hover:text-white transition-colors">Issues</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Press Kit</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Emeka Eluka for Collin County. All rights reserved.</p>
          <button 
            onClick={replayTutorial}
            className="flex items-center mt-4 md:mt-0 hover:text-campaign-gold transition-colors"
          >
            <RefreshCw size={12} className="mr-1" />
            Replay Site Tutorial
          </button>
        </div>
      </div>
    </footer>
  );
};