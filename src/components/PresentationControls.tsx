import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  FileText,
  HelpCircle,
  LayoutGrid,
} from 'lucide-react';

interface PresentationControlsProps {
  currentSlide: number;
  totalSlides: number;
  isFullscreen: boolean;
  isVisible: boolean;
  onPrev: () => void;
  onNext: () => void;
  onToggleFullscreen: () => void;
  onToggleNotes: () => void;
  onToggleShortcuts: () => void;
  onToggleOverview: () => void;
}

export const PresentationControls: React.FC<PresentationControlsProps> = ({
  currentSlide,
  totalSlides,
  isFullscreen,
  isVisible,
  onPrev,
  onNext,
  onToggleFullscreen,
  onToggleNotes,
  onToggleShortcuts,
  onToggleOverview,
}) => {
  const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);
  const progressPercent = totalSlides > 1 ? ((currentSlide - 1) / (totalSlides - 1)) * 100 : 0;

  return (
    <>
      {/* Top Discreet Progress Bar in Burnt Orange */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-50 bg-[#E6DFD5]/50">
        <div
          className="h-full bg-[#BD4F19] transition-all duration-300 ease-out shadow-xs"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Floating Presentation Controls Bar (Discreet at bottom-right) */}
      <div
        className={`fixed bottom-6 right-8 z-40 flex items-center gap-2.5 px-3.5 py-2 rounded-xl backdrop-blur-md transition-all duration-300 ease-out shadow-lg select-none font-mono-consulting border border-[#DFD7CB] bg-white/95 text-[#1C1917] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
      >
        {/* Previous Button */}
        <button
          onClick={onPrev}
          disabled={currentSlide === 1}
          aria-label="Previous Slide"
          title="Previous slide (Left Arrow / Page Up)"
          className={`p-1.5 rounded-lg transition-colors ${
            currentSlide === 1
              ? 'opacity-30 cursor-not-allowed'
              : 'hover:bg-[#F3EFE6] active:bg-[#EAE4D8] text-[#574E4A] hover:text-[#1C1917]'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Slide Counter */}
        <div className="flex items-center gap-1 px-1.5 text-xs font-semibold tracking-wider">
          <span className="text-[#BD4F19]">{pad(currentSlide)}</span>
          <span className="opacity-40 text-[#857B74]">/</span>
          <span className="text-[#574E4A]">{pad(totalSlides)}</span>
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides}
          aria-label="Next Slide"
          title="Next slide (Right Arrow / Space / Page Down)"
          className={`p-1.5 rounded-lg transition-colors ${
            currentSlide === totalSlides
              ? 'opacity-30 cursor-not-allowed'
              : 'hover:bg-[#F3EFE6] active:bg-[#EAE4D8] text-[#574E4A] hover:text-[#1C1917]'
          }`}
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        <div className="h-4 w-[1px] mx-1 bg-[#E2DDD4]" />

        {/* Overview Navigator Toggle */}
        <button
          onClick={onToggleOverview}
          aria-label="Toggle Slide Overview"
          title="Slide Overview & Grid (Press O)"
          className="p-1.5 rounded-lg transition-colors hover:bg-[#F3EFE6] active:bg-[#EAE4D8] text-[#574E4A] hover:text-[#1C1917]"
        >
          <LayoutGrid className="w-3.5 h-3.5" />
        </button>

        {/* Speaker Notes Toggle */}
        <button
          onClick={onToggleNotes}
          aria-label="Toggle Speaker Notes"
          title="Speaker Notes & Timing (Press N)"
          className="flex items-center gap-1 px-2 py-1 text-xs rounded-lg transition-colors hover:bg-[#F3EFE6] active:bg-[#EAE4D8] text-[#574E4A] hover:text-[#1C1917]"
        >
          <FileText className="w-3.5 h-3.5 text-[#BD4F19]" />
          <span className="hidden sm:inline text-[11px] font-medium tracking-wide">Notes</span>
        </button>

        {/* Shortcuts Guide Toggle */}
        <button
          onClick={onToggleShortcuts}
          aria-label="Presentation Shortcuts"
          title="Hotkeys & Remote Guide (Press ?)"
          className="p-1.5 rounded-lg transition-colors hover:bg-[#F3EFE6] active:bg-[#EAE4D8] text-[#574E4A] hover:text-[#1C1917]"
        >
          <HelpCircle className="w-3.5 h-3.5" />
        </button>

        {/* Fullscreen Toggle */}
        <button
          onClick={onToggleFullscreen}
          aria-label="Toggle Fullscreen"
          title="Toggle Fullscreen (Press F)"
          className="p-1.5 rounded-lg transition-colors hover:bg-[#F3EFE6] active:bg-[#EAE4D8] text-[#574E4A] hover:text-[#1C1917]"
        >
          {isFullscreen ? <Minimize2 className="w-3.5 h-3.5 text-[#BD4F19]" /> : <Maximize2 className="w-3.5 h-3.5" />}
        </button>
      </div>
    </>
  );
};
