import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { OnboardingTutorial } from './components/OnboardingTutorial';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Issues } from './pages/Issues';
import { Volunteer } from './pages/Volunteer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
        <OnboardingTutorial />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/issues" element={<Issues />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/donate" element={<Volunteer />} /> {/* Redirecting donate to volunteer for demo */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;