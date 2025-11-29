import React, { useState } from 'react';
import { Button } from '../components/Button';
import { useForm } from 'react-hook-form';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  zip: string;
  interests: string[];
};

export const Volunteer: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    // In production, send to CRM (ActionNetwork, NGP VAN, etc.)
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-campaign-navy mb-2">Thank you!</h2>
          <p className="text-slate-600 mb-6">We've received your information. A campaign organizer will be in touch shortly.</p>
          <Button onClick={() => setIsSubmitted(false)} variant="outline">Back to Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* Content Side */}
      <div className="md:w-1/2 bg-campaign-navy text-white p-8 md:p-16 flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Join the Team</h1>
        <p className="text-lg text-slate-300 mb-8 leading-relaxed">
          We are building a grassroots movement to bring competence and compassion back to Collin County leadership. Whether you can knock doors, send texts, or host a coffee meet-and-greet, we need you.
        </p>
        <ul className="space-y-4 mb-8">
          <li className="flex items-center text-campaign-gold font-semibold">
            <span className="mr-3">✓</span> Block Walking
          </li>
          <li className="flex items-center text-campaign-gold font-semibold">
            <span className="mr-3">✓</span> Phone Banking
          </li>
          <li className="flex items-center text-campaign-gold font-semibold">
            <span className="mr-3">✓</span> Texting Team
          </li>
          <li className="flex items-center text-campaign-gold font-semibold">
            <span className="mr-3">✓</span> Election Day Poll Greeter
          </li>
        </ul>
      </div>

      {/* Form Side */}
      <div className="md:w-1/2 p-8 md:p-16 flex items-center bg-white">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg mx-auto space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
              <input 
                {...register("firstName", { required: true })}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-campaign-blue focus:border-transparent"
              />
              {errors.firstName && <span className="text-red-500 text-xs">Required</span>}
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
              <input 
                {...register("lastName", { required: true })}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-campaign-blue focus:border-transparent"
              />
              {errors.lastName && <span className="text-red-500 text-xs">Required</span>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
            <input 
              type="email"
              {...register("email", { required: true })}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-campaign-blue focus:border-transparent"
            />
             {errors.email && <span className="text-red-500 text-xs">Required</span>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Mobile Phone</label>
              <input 
                type="tel"
                {...register("phone")}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-campaign-blue focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Zip Code</label>
              <input 
                {...register("zip", { required: true })}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-campaign-blue focus:border-transparent"
              />
            </div>
          </div>

          <div>
             <label className="block text-sm font-medium text-slate-700 mb-2">How can you help? (Select all that apply)</label>
             <div className="space-y-2">
                {['Block Walking', 'Phone Banking', 'Host an Event', 'Yard Sign'].map((interest) => (
                   <label key={interest} className="flex items-center space-x-3">
                     <input type="checkbox" {...register("interests")} value={interest} className="rounded text-campaign-blue focus:ring-campaign-blue h-4 w-4" />
                     <span className="text-slate-700">{interest}</span>
                   </label>
                ))}
             </div>
          </div>

          <Button type="submit" className="w-full py-4 text-lg">Sign Up to Volunteer</Button>
          <p className="text-xs text-slate-400 text-center mt-4">
            By signing up, you agree to receive campaign updates. We will never sell your data.
          </p>
        </form>
      </div>
    </div>
  );
};