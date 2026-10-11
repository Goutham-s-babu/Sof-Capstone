import React from 'react';
import { X } from 'lucide-react';
import { SLIDES_METADATA } from '../data/slidesData';

interface OverviewModalProps {
  isOpen: boolean;
  currentSlide: number;
  onSelectSlide: (slideNum: number) => void;
  onClose: () => void;
}

export const OverviewModal: React.FC<OverviewModalProps> = ({
  isOpen,
  currentSlide,
  onSelectSlide,
  onClose,
}) => {
  if (!isOpen) return null;

  const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6 md:p-10 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-6xl max-h-[90vh] bg-[#0D172E] border border-[#1F3660] rounded-2xl p-6 md:p-8 flex flex-col shadow-2xl overflow-hidden font-mono-consulting"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#1F3660]">
          <div>
            <h2 className="text-lg md:text-xl font-bold font-serif-display text-white">
              Presentation Slide Navigator
            </h2>
            <p className="text-xs text-[#8A99AD] mt-0.5">
              Select any slide to jump directly or press ESC to return
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#CBD5E1] transition-colors"
            title="Close Overview (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Grid of 10 Slides */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 py-6 overflow-y-auto">
          {SLIDES_METADATA.map((slide) => {
            const isSelected = slide.id === currentSlide;
            return (
              <button
                key={slide.id}
                onClick={() => {
                  onSelectSlide(slide.id);
                  onClose();
                }}
                className={`flex flex-col text-left p-3.5 rounded-xl border transition-all duration-200 group relative ${
                  isSelected
                    ? 'border-[#E59546] bg-[#16274A] ring-2 ring-[#E59546]/40 shadow-lg'
                    : 'border-[#1F3660] bg-[#132240] hover:border-[#E59546]/60 hover:bg-[#182C52]'
                }`}
              >
                {/* Slide Number Badge */}
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                      isSelected
                        ? 'bg-[#E59546] text-[#0D172E]'
                        : 'bg-white/10 text-[#CBD5E1] group-hover:bg-[#E59546]/20 group-hover:text-[#E59546]'
                    }`}
                  >
                    SLIDE {pad(slide.id)}
                  </span>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-[#E59546] animate-pulse" />
                  )}
                </div>

                {/* Category */}
                <div className="text-[10px] text-[#E59546] font-semibold uppercase tracking-wider mb-1 line-clamp-1">
                  {slide.category}
                </div>

                {/* Title */}
                <div className="text-xs font-serif-display font-medium text-white line-clamp-2 leading-snug">
                  {slide.title.replace('\n', ' ')}
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="pt-4 border-t border-[#1F3660] flex items-center justify-between text-xs text-[#64748B]">
          <span>10 Source Slides · Beyondburg Executive Capstone Presentation</span>
          <span>Click slide or press 1–9, 0 to navigate</span>
        </div>
      </div>
    </div>
  );
};
