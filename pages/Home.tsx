import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, TrendingUp, BookOpen } from 'lucide-react';
import { Button } from '../components/Button';
import { AskCandidate } from '../components/AskCandidate';

export const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Abstract Background for Political Vibe */}
        <div className="absolute inset-0 bg-gradient-to-br from-campaign-navy via-campaign-blue to-slate-900 z-0">
           <img 
            src="https://picsum.photos/1920/1080?grayscale" 
            className="w-full h-full object-cover mix-blend-overlay opacity-20"
            alt="Collin County Landscape"
           />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <span className="flex h-3 w-3 rounded-full bg-campaign-gold animate-pulse"></span>
              <span className="text-sm font-medium text-white tracking-wide">Election Day: Nov 3, 2026</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-black text-white leading-tight">
              Competence over <span className="text-transparent bg-clip-text bg-gradient-to-r from-campaign-gold to-amber-300">Chaos.</span>
              <br />
              <span className="text-4xl md:text-6xl text-slate-300">A Future for All.</span>
            </h1>
            
            <p className="text-xl text-slate-200 max-w-lg leading-relaxed">
              Collin County needs a leader who listens to experts, not extremists. Join Emeka Eluka to build a smarter, safer, and stronger community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/volunteer">
                <Button variant="accent" size="lg" className="w-full sm:w-auto">Join the Movement</Button>
              </Link>
              <Link to="/issues">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white/10 hover:text-white">Our Vision</Button>
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
             <AskCandidate />
          </div>
        </div>
      </section>

      {/* The Contrast Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-campaign-navy mb-4">Why Emeka?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The choice is clear. We can continue down a path of division, or we can choose a responsible, unifying steward for our county's future.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Unifying Leadership",
                desc: "While others focus on partisan culture wars, Emeka focuses on the kitchen-table issues that unite us: safety, jobs, and schools."
              },
              {
                icon: TrendingUp,
                title: "Fiscal Responsibility",
                desc: "Smart growth requires data, not slogans. Emeka brings an engineer's mindset to the county budget to fix traffic without raising taxes unnecessarily."
              },
              {
                icon: BookOpen,
                title: "Education First",
                desc: "Strong schools build strong communities. Emeka stands firmly against vouchers that defund our public education system."
              }
            ].map((feature, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-14 h-14 bg-campaign-blue/10 rounded-xl flex items-center justify-center mb-6 text-campaign-blue">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-campaign-navy mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Candidate Highlight */}
      <section className="py-24 bg-campaign-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-campaign-blue rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-campaign-gold rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <img 
              src="https://replicate.delivery/xezq/0lTqf5qT50LOMRkO41q4YfTeJre30GveVfIOfgX9vGf5f84E/out-0.webp" 
              alt="Emeka Eluka - Candidate" 
              className="rounded-2xl shadow-2xl border-4 border-white/10 transform -rotate-2 hover:rotate-0 transition-transform duration-500 w-full max-w-md mx-auto"
            />
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-serif font-bold">The Engineer & Educator</h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Emeka isn't a career politician. He's a problem solver. With a background in civil engineering and a decade of service on local school boards, he understands how to build infrastructure that lasts and systems that serve everyone.
            </p>
            <ul className="space-y-4">
              {[
                "20+ Years in Civil Engineering",
                "School Board Trustee",
                "Community Organizer for Youth Programs"
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <CheckCircle className="text-campaign-gold" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="inline-block mt-4">
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-campaign-navy">Read Full Bio</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-campaign-gold to-orange-500 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6">This campaign belongs to you.</h2>
          <p className="text-xl mb-10 opacity-90">We don't take corporate PAC money. We rely on neighbors like you.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Button variant="primary" size="lg" className="bg-campaign-navy hover:bg-slate-900 border-none">Donate $25</Button>
             <Button variant="primary" size="lg" className="bg-campaign-navy hover:bg-slate-900 border-none">Donate $50</Button>
             <Button variant="primary" size="lg" className="bg-campaign-navy hover:bg-slate-900 border-none">Donate Other</Button>
          </div>
        </div>
      </section>
    </div>
  );
};