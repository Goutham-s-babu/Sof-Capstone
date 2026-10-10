import React from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, FileText, HelpCircle } from 'lucide-react';

interface PresentationControlsProps {
  currentSlide: number;
  totalSlides: number;
  isFullscreen: boolean;
  isVisible: boolean;
  isDarkTheme: boolean;
  onPrev: () => void;
  onNext: () => void;
  onToggleFullscreen: () => void;
  onToggleNotes: () => void;
  onToggleShortcuts: () => void;
}

export const PresentationControls: React.FC<PresentationControlsProps> = ({
  currentSlide,
  totalSlides,
  isFullscreen,
  isVisible,
  isDarkTheme,
  onPrev,
  onNext,
  onToggleFullscreen,
  onToggleNotes,
  onToggleShortcuts,
}) => {
  const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);
  const progressPercent = ((currentSlide - 1) / (totalSlides - 1)) * 100;

  return (
    <>
      {/* Top Thin Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-50 bg-black/10">
        <div
          className={`h-full transition-all duration-300 ease-out ${
            isDarkTheme ? 'bg-[#8D2929]' : 'bg-[#8D2929]'
          }`}
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Floating Presentation Remote / Bar */}
      <div
        className={`fixed bottom-6 right-8 z-40 flex items-center gap-3 px-3 py-2 rounded-lg backdrop-blur-md transition-all duration-300 ease-out shadow-lg select-none ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        } ${
          isDarkTheme
            ? 'bg-[#171717]/85 border border-[#D8D3CA]/20 text-[#F7F4EE]'
            : 'bg-[#F7F4EE]/90 border border-[#171717]/15 text-[#171717]'
        }`}
      >
        {/* Previous Button */}
        <button
          onClick={onPrev}
          disabled={currentSlide === 1}
          aria-label="Previous Slide"
          title="Previous slide (Page Up / Left Arrow)"
          className={`p-1.5 rounded transition-colors ${
            currentSlide === 1
              ? 'opacity-30 cursor-not-allowed'
              : isDarkTheme
              ? 'hover:bg-white/10 active:bg-white/20'
              : 'hover:bg-black/10 active:bg-black/15'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Slide Counter */}
        <div className="flex items-center gap-1.5 px-2 text-xs font-mono font-medium tracking-wider">
          <span className="font-semibold">{pad(currentSlide)}</span>
          <span className="opacity-40">/</span>
          <span className="opacity-60">{pad(totalSlides)}</span>
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides}
          aria-label="Next Slide"
          title="Next slide (Space / Page Down / Right Arrow)"
          className={`p-1.5 rounded transition-colors ${
            currentSlide === totalSlides
              ? 'opacity-30 cursor-not-allowed'
              : isDarkTheme
              ? 'hover:bg-white/10 active:bg-white/20'
              : 'hover:bg-black/10 active:bg-black/15'
          }`}
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        <div className={`h-4 w-[1px] mx-0.5 ${isDarkTheme ? 'bg-white/20' : 'bg-black/20'}`} />

        {/* Speaker Notes Toggle */}
        <button
          onClick={onToggleNotes}
          aria-label="Toggle Speaker Notes"
          title="Speaker Notes & Defence Prep (Press N)"
          className={`flex items-center gap-1 px-2 py-1 text-xs rounded transition-colors ${
            isDarkTheme ? 'hover:bg-white/10 active:bg-white/20' : 'hover:bg-black/10 active:bg-black/15'
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span className="hidden sm:inline font-sans text-[11px] font-medium tracking-wide">Notes</span>
        </button>

        {/* Shortcuts Guide Toggle */}
        <button
          onClick={onToggleShortcuts}
          aria-label="Presentation Shortcuts"
          title="Remote & Keyboard Shortcuts (Press ?)"
          className={`p-1.5 rounded transition-colors ${
            isDarkTheme ? 'hover:bg-white/10 active:bg-white/20' : 'hover:bg-black/10 active:bg-black/15'
          }`}
        >
          <HelpCircle className="w-3.5 h-3.5" />
        </button>

        {/* Fullscreen Toggle */}
        <button
          onClick={onToggleFullscreen}
          aria-label="Toggle Fullscreen"
          title="Toggle Fullscreen (Press F)"
          className={`p-1.5 rounded transition-colors ${
            isDarkTheme ? 'hover:bg-white/10 active:bg-white/20' : 'hover:bg-black/10 active:bg-black/15'
          }`}
        >
          {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
        </button>
      </div>
    </>
  );
};
