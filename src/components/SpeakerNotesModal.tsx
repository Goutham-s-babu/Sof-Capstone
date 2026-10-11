import React, { useState, useEffect } from 'react';
import { X, Clock, HelpCircle, CheckCircle2, Play, Pause, RotateCcw } from 'lucide-react';
import { SpeakerNote } from '../types';

interface SpeakerNotesModalProps {
  isOpen: boolean;
  slideTitle: string;
  slideNumber: number;
  notes: SpeakerNote;
  onClose: () => void;
}

export const SpeakerNotesModal: React.FC<SpeakerNotesModalProps> = ({
  isOpen,
  slideTitle,
  slideNumber,
  notes,
  onClose,
}) => {
  const [seconds, setSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(true);

  useEffect(() => {
    let interval: number | null = null;
    if (isRunning) {
      interval = window.setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);

  if (!isOpen) return null;

  const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);

  const formatTimer = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-end bg-black/60 backdrop-blur-sm animate-fade-in font-mono-consulting"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl h-full bg-[#0D172E] text-[#F8FAFC] border-l border-[#1F3660] shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Presenter Timer */}
        <div className="px-6 py-4 border-b border-[#1F3660] flex items-center justify-between bg-[#0B1324]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-[#E59546] text-[#0D172E]">
              Slide {pad(slideNumber)}
            </span>
            <h3 className="font-serif-display text-base sm:text-lg font-bold tracking-wide text-white truncate max-w-xs">
              {slideTitle.replace('\n', ' ')}
            </h3>
          </div>

          <div className="flex items-center gap-3">
            {/* Presentation Stopwatch */}
            <div className="flex items-center gap-2 bg-[#132240] px-2.5 py-1 rounded-lg border border-[#1F3660]">
              <Clock className="w-3.5 h-3.5 text-[#E59546]" />
              <span className="text-xs font-medium tracking-wider">
                {formatTimer(seconds)} <span className="opacity-40 text-[10px]">/ 07:00</span>
              </span>
              <button
                onClick={() => setIsRunning(!isRunning)}
                className="hover:text-[#E59546] text-[#CBD5E1] transition-colors"
                title={isRunning ? 'Pause timer' : 'Resume timer'}
              >
                {isRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
              </button>
              <button
                onClick={() => setSeconds(0)}
                className="hover:text-[#E59546] text-[#CBD5E1] transition-colors"
                title="Reset timer"
              >
                <RotateCcw className="w-3 h-3" />
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-white/10 text-[#CBD5E1] transition-colors"
              title="Close notes (N or Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-sm text-[#CBD5E1]">
          {/* Target Pace Banner */}
          <div className="flex items-center gap-2 text-xs bg-[#132240] px-3.5 py-2.5 rounded-lg border border-[#1F3660]">
            <span className="w-2 h-2 rounded-full bg-[#5FA777]" />
            <span className="font-bold text-[#E59546] uppercase tracking-wider">Allocated Pace:</span>
            <span className="text-white">{notes.timeCode}</span>
          </div>

          {/* Spoken Presentation Script */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase tracking-wider text-[#E59546] font-bold">
              Spoken Script (Audience Delivery)
            </h4>
            <div className="p-4 rounded-lg bg-[#132240] border border-[#1F3660] leading-relaxed text-xs sm:text-[13px] text-[#F8FAFC]">
              "{notes.script}"
            </div>
          </div>

          {/* Key Presentation Talking Points */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase tracking-wider text-[#E59546] font-bold">
              Core Strategic Arguments
            </h4>
            <ul className="space-y-2.5">
              {notes.keyPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-[#CBD5E1] bg-[#111F3B] p-2.5 rounded border border-[#1F3660]/60">
                  <CheckCircle2 className="w-4 h-4 text-[#5FA777] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Anticipated Defence Questions */}
          {notes.likelyQuestions && notes.likelyQuestions.length > 0 && (
            <div className="space-y-3 pt-2 border-t border-[#1F3660]">
              <h4 className="text-xs uppercase tracking-wider text-[#E59546] font-bold flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-[#E59546]" />
                Evaluator Defence & Question Prep
              </h4>
              {notes.likelyQuestions.map((q, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg bg-[#132240] border border-[#1F3660] space-y-2 text-xs"
                >
                  <p className="font-semibold text-white">Q: {q.question}</p>
                  <p className="text-[#BAC7D5] leading-relaxed">
                    <span className="text-[#5FA777] font-semibold">Suggested Defence: </span>
                    {q.suggestedAnswer}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-[#1F3660] text-[11px] text-[#64748B] flex justify-between items-center bg-[#0B1324]">
          <span>Press 'N' or Esc to dismiss</span>
          <span>Presenter Notes</span>
        </div>
      </div>
    </div>
  );
};
