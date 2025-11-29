import React from 'react';
import { Quote } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero */}
      <div className="relative h-[400px]">
        <img 
          src="https://picsum.photos/1920/800?random=3" 
          alt="Emeka with family" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-campaign-navy to-transparent opacity-90"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white max-w-7xl mx-auto">
          <h1 className="text-5xl font-serif font-bold mb-2">Meet Emeka</h1>
          <p className="text-xl text-campaign-gold font-medium">Engineer. Educator. Father.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-lg text-slate-700 mx-auto">
          <p className="lead text-2xl font-serif text-campaign-navy font-medium italic mb-8">
            "I believe that leadership isn't about being the loudest voice in the room. It's about building the strongest foundation for the people you serve."
          </p>
          
          <h3 className="text-2xl font-bold text-campaign-navy mt-8 mb-4">Roots in Community</h3>
          <p>
            Born to immigrant parents who instilled in him the value of hard work and education, Emeka Eluka has called Collin County home for over 15 years. He watched this county grow from a quiet collection of suburbs into an economic powerhouse, but he also saw the growing pains—traffic, strained schools, and rising costs.
          </p>

          <h3 className="text-2xl font-bold text-campaign-navy mt-8 mb-4">Engineering Solutions</h3>
          <p>
            As a licensed civil engineer, Emeka doesn't just look at problems; he calculates solutions. While others offer soundbites about infrastructure, Emeka has actually designed it. He understands that simply widening roads isn't enough—we need smart, integrated planning that prepares us for the next 20 years, not just the next election cycle.
          </p>

          <h3 className="text-2xl font-bold text-campaign-navy mt-8 mb-4">A Servant's Heart</h3>
          <p>
            Beyond his professional career, Emeka has served on the local school board, fighting to keep class sizes manageable and teachers supported. He knows that the true wealth of Collin County lies in our children's future.
          </p>
        </div>

        {/* Endorsements Slider Mockup */}
        <div className="mt-20 border-t border-slate-200 pt-16">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Trusted by Community Leaders</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-8 rounded-xl relative">
              <Quote className="absolute top-4 left-4 text-campaign-blue/20 w-12 h-12" />
              <p className="text-slate-700 italic mb-6 relative z-10">
                "Emeka is the only candidate who actually understands the math behind our infrastructure budget. He's the adult in the room we desperately need."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-slate-300 rounded-full mr-3"></div>
                <div>
                  <p className="font-bold text-campaign-navy">Sarah Jenkins</p>
                  <p className="text-sm text-slate-500">Former City Council Member</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl relative">
              <Quote className="absolute top-4 left-4 text-campaign-blue/20 w-12 h-12" />
              <p className="text-slate-700 italic mb-6 relative z-10">
                "I've watched Emeka fight for our schools for a decade. He doesn't play politics with our kids' futures."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-slate-300 rounded-full mr-3"></div>
                <div>
                  <p className="font-bold text-campaign-navy">Dr. Michael Chen</p>
                  <p className="text-sm text-slate-500">Local PTO President</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};