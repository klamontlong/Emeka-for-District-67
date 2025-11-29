import React, { useState, useEffect } from 'react';
import { X, ChevronRight, ChevronLeft, Flag, BrainCircuit, HeartHandshake, CheckCircle } from 'lucide-react';
import { Button } from './Button';

interface TutorialStep {
  title: string;
  description: string;
  icon: React.ElementType;
  image?: string;
}

const steps: TutorialStep[] = [
  {
    title: "Welcome to the Movement",
    description: "Thank you for visiting the official campaign portal for Emeka Eluka. We are building a future based on competence, unity, and smart growth for Collin County.",
    icon: Flag,
  },
  {
    title: "AI-Powered Policy",
    description: "Have a specific question? Use our 'Ask Emeka AI' tool on the homepage to get instant answers about where the candidate stands on infrastructure, education, and safety.",
    icon: BrainCircuit,
  },
  {
    title: "Real Solutions",
    description: "Explore the 'Our Vision' page to see detailed, data-driven plans. We don't do empty slogans; we do engineering-grade problem solving.",
    icon: CheckCircle,
  },
  {
    title: "We Need You",
    description: "This campaign is people-powered. You can make a difference today by signing up to volunteer or making a donation. Every bit helps us win in November.",
    icon: HeartHandshake,
  }
];

export const OnboardingTutorial: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const STORAGE_KEY = 'emeka_tutorial_v3'; // Changed version to force show

  useEffect(() => {
    const hasSeenTutorial = localStorage.getItem(STORAGE_KEY);
    if (!hasSeenTutorial) {
      // Reduced delay to 500ms for snappier appearance
      const timer = setTimeout(() => setIsOpen(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem(STORAGE_KEY, 'true');
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleClose();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  if (!isOpen) return null;

  const StepIcon = steps[currentStep].icon;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-slate-900/70 backdrop-blur-sm transition-opacity duration-300">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden relative transform transition-all">
        {/* Progress Bar */}
        <div className="h-2 bg-slate-100 w-full">
          <div 
            className="h-full bg-campaign-gold transition-all duration-500 ease-out"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>

        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors z-10"
          aria-label="Close tutorial"
        >
          <X size={20} />
        </button>

        <div className="p-8 md:p-10">
          <div className="w-16 h-16 bg-campaign-navy/5 rounded-2xl flex items-center justify-center mb-6 text-campaign-blue mx-auto">
            <StepIcon size={32} />
          </div>

          <div className="text-center space-y-4 mb-8">
            <h2 className="text-2xl font-serif font-bold text-campaign-navy">
              {steps[currentStep].title}
            </h2>
            <p className="text-slate-600 leading-relaxed">
              {steps[currentStep].description}
            </p>
          </div>

          <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">
            <button
              onClick={handleBack}
              disabled={currentStep === 0}
              className={`text-sm font-semibold flex items-center ${
                currentStep === 0 ? 'text-slate-300 cursor-not-allowed' : 'text-slate-500 hover:text-campaign-navy'
              }`}
            >
              <ChevronLeft size={16} className="mr-1" />
              Back
            </button>

            <div className="flex space-x-2">
              {steps.map((_, idx) => (
                <div 
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    idx === currentStep ? 'bg-campaign-blue' : 'bg-slate-200'
                  }`}
                />
              ))}
            </div>

            <Button onClick={handleNext} size="sm" className="flex items-center">
              {currentStep === steps.length - 1 ? 'Get Started' : 'Next'}
              {currentStep !== steps.length - 1 && <ChevronRight size={16} className="ml-1" />}
            </Button>
          </div>
        </div>
        
        {/* Skip button for early steps */}
        {currentStep < steps.length - 1 && (
          <div className="bg-slate-50 p-3 text-center border-t border-slate-100">
            <button 
              onClick={handleClose}
              className="text-xs text-slate-500 hover:text-slate-800 font-medium"
            >
              Skip Tutorial
            </button>
          </div>
        )}
      </div>
    </div>
  );
};