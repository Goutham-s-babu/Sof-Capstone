import React from 'react';

interface PresentationHeaderProps {
  currentSlide: number;
  totalSlides: number;
  slideCategory: string;
  isDarkTheme: boolean;
  onGoToCover: () => void;
}

export const PresentationHeader: React.FC<PresentationHeaderProps> = ({
  currentSlide,
  totalSlides,
  slideCategory,
  isDarkTheme,
  onGoToCover,
}) => {
  return (
    <header
      className={`w-full py-4 px-8 md:px-12 flex items-center justify-between border-b transition-colors duration-300 z-30 ${
        isDarkTheme
          ? 'border-white/10 text-[#F7F4EE]'
          : 'border-[#171717]/10 text-[#171717]'
      }`}
    >
      {/* Brand & Context */}
      <div className="flex items-center gap-4">
        <button
          onClick={onGoToCover}
          className="flex items-center gap-3 text-left group transition-opacity hover:opacity-85"
          title="Return to Cover (Home)"
        >
          {/* Official Beyondburg logo preserved exactly in crisp white emblem container */}
          <div className="bg-white px-2.5 py-1 rounded shadow-sm border border-black/10 flex items-center justify-center">
            <img
              src="/assets/beyondburg-logo.png"
              alt="Beyondburg Official Logo"
              className="h-5 w-auto object-contain"
            />
          </div>
          <div className="hidden sm:block">
            <span
              className={`text-xs font-semibold tracking-wider uppercase block ${
                isDarkTheme ? 'text-[#D8D3CA]' : 'text-[#747B55]'
              }`}
            >
              Palarivattom, Kochi
            </span>
          </div>
        </button>
      </div>

      {/* Center Reading / Category */}
      <div className="flex items-center gap-2">
        <span
          className={`text-xs font-mono tracking-widest uppercase px-2.5 py-0.5 rounded ${
            isDarkTheme
              ? 'bg-white/10 text-[#F7F4EE]/90'
              : 'bg-black/5 text-[#8D2929] font-medium'
          }`}
        >
          {slideCategory}
        </span>
      </div>

      {/* Right Slide Status Indicator */}
      <div className="flex items-center gap-3">
        <span className="text-xs font-mono opacity-60">
          Slide {currentSlide} of {totalSlides}
        </span>
        <div className="flex items-center gap-1">
          {Array.from({ length: totalSlides }, (_, i) => i + 1).map((idx) => (
            <span
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentSlide
                  ? 'w-5 bg-[#8D2929]'
                  : isDarkTheme
                  ? 'w-1.5 bg-white/20'
                  : 'w-1.5 bg-black/20'
              }`}
            />
          ))}
        </div>
      </div>
    </header>
  );
};
