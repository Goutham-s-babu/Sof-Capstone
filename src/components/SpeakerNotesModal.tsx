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

  const formatTimer = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-xl h-full bg-[#1C1C1C] text-[#F7F4EE] border-l border-white/10 shadow-2xl flex flex-col overflow-hidden">
        {/* Header with Presenter Timer */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#141414]">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 rounded text-xs font-mono font-medium bg-[#8D2929] text-white">
              Slide {slideNumber}
            </span>
            <h3 className="font-serif-display text-lg font-semibold tracking-wide text-white truncate max-w-xs">
              {slideTitle}
            </h3>
          </div>

          <div className="flex items-center gap-3">
            {/* 6-minute rehearsal stopwatch */}
            <div className="flex items-center gap-2 bg-white/5 px-2.5 py-1 rounded border border-white/10">
              <Clock className="w-3.5 h-3.5 text-[#D8D3CA]" />
              <span className="font-mono text-xs font-medium tracking-wider">
                {formatTimer(seconds)} <span className="opacity-40 text-[10px]">/ 06:00</span>
              </span>
              <button
                onClick={() => setIsRunning(!isRunning)}
                className="hover:text-white text-[#D8D3CA] transition-colors"
                title={isRunning ? 'Pause timer' : 'Resume timer'}
              >
                {isRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
              </button>
              <button
                onClick={() => setSeconds(0)}
                className="hover:text-white text-[#D8D3CA] transition-colors"
                title="Reset timer"
              >
                <RotateCcw className="w-3 h-3" />
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
              title="Close notes (N or Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-sm text-[#E5E0D8]">
          {/* Target Pace Banner */}
          <div className="flex items-center gap-2 text-xs font-mono text-[#D8D3CA] bg-white/5 px-3 py-2 rounded border border-white/5">
            <span className="w-2 h-2 rounded-full bg-[#747B55]" />
            <span className="font-semibold text-white">Recommended Pace:</span>
            <span>{notes.timeCode}</span>
          </div>

          {/* Spoken Presentation Script */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#8D2929] font-bold">
              Spoken Script (Word-for-Word Delivery)
            </h4>
            <div className="p-4 rounded bg-[#242424] border border-white/10 leading-relaxed font-sans text-sm text-[#F7F4EE]">
              "{notes.script}"
            </div>
          </div>

          {/* Key Presentation Talking Points */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#D8D3CA] font-bold">
              Key Focus Points For Evaluators
            </h4>
            <ul className="space-y-2">
              {notes.keyPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-[#E5E0D8]">
                  <CheckCircle2 className="w-4 h-4 text-[#747B55] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Anticipated Defence Questions */}
          {notes.likelyQuestions && notes.likelyQuestions.length > 0 && (
            <div className="space-y-3 pt-2 border-t border-white/10">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#D8D3CA] font-bold flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-[#8D2929]" />
                Evaluator Defence Preparation
              </h4>
              {notes.likelyQuestions.map((q, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded bg-black/30 border border-white/5 space-y-2 text-xs"
                >
                  <p className="font-semibold text-white">Q: {q.question}</p>
                  <p className="text-[#D8D3CA] leading-relaxed">
                    <span className="text-[#747B55] font-semibold">Suggested Defence: </span>
                    {q.suggestedAnswer}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Hint */}
        <div className="px-6 py-3 border-t border-white/10 text-[11px] font-mono text-[#D8D3CA]/60 flex justify-between items-center bg-[#141414]">
          <span>Press 'N' or Esc to close</span>
          <span>Presenter Rehearsal Mode</span>
        </div>
      </div>
    </div>
  );
};
