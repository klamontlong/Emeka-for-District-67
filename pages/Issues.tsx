import React from 'react';
import { Shield, Book, Truck, Heart, Briefcase } from 'lucide-react';

const policies = [
  {
    category: "Education",
    icon: Book,
    title: "Protecting Public Schools",
    summary: "Public tax dollars belong in public schools.",
    content: "Emeka opposes voucher scams that drain resources from our neighborhood schools. He supports increasing teacher pay to retain top talent and ensuring every child in Collin County has access to a world-class education, regardless of their zip code."
  },
  {
    category: "Infrastructure",
    icon: Truck,
    title: "Smart Growth, Less Gridlock",
    summary: "Solving traffic with data, not just tolls.",
    content: "Collin County is growing fast. We need proactive infrastructure planning that integrates public transit options and smart traffic management systems. Emeka's engineering background makes him uniquely qualified to oversee these complex projects efficiently."
  },
  {
    category: "Public Safety",
    icon: Shield,
    title: "Safe Neighborhoods for All",
    summary: "Supporting first responders and community policing.",
    content: "Safety is a priority. Emeka supports funding for police and fire departments while advocating for mental health response teams to handle non-violent crises, freeing up officers to focus on serious crime."
  },
  {
    category: "Healthcare",
    icon: Heart,
    title: "Accessible Healthcare",
    summary: "Expanding access to mental health services.",
    content: "We must address the mental health crisis in our county. Emeka advocates for expanding county health services and partnering with local hospitals to ensure affordable preventative care is available to working families."
  },
  {
    category: "Economy",
    icon: Briefcase,
    title: "Jobs of the Future",
    summary: "Attracting high-tech, sustainable industries.",
    content: "We can't just rely on retail. Emeka wants to attract high-paying tech and green energy jobs to Collin County, diversifying our tax base and relieving the property tax burden on homeowners."
  }
];

export const Issues: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      <div className="bg-campaign-navy py-16 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Vision for the Future</h1>
        <p className="text-slate-300 max-w-2xl mx-auto text-lg">
          Practical solutions for real problems. No culture wars, just results.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {policies.map((policy, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-slate-100 flex flex-col">
              <div className="p-6 flex-1">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-blue-50 rounded-lg text-campaign-blue">
                    <policy.icon size={24} />
                  </div>
                  <span className="text-sm font-bold text-campaign-gold uppercase tracking-wider">{policy.category}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{policy.title}</h3>
                <p className="text-slate-500 font-medium mb-4 italic">"{policy.summary}"</p>
                <p className="text-slate-700 leading-relaxed">{policy.content}</p>
              </div>
              <div className="bg-slate-50 px-6 py-4 border-t border-slate-100">
                <button className="text-campaign-blue font-semibold hover:text-blue-800 text-sm flex items-center">
                  Read Full Plan <span className="ml-1">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};