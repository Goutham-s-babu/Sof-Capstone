import React from 'react';
import { X, Radio, Keyboard, Monitor } from 'lucide-react';

interface ShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShortcutsModal: React.FC<ShortcutsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const clickerKeys = [
    { key: 'Right Arrow / Page Down / Space', desc: 'Next Slide' },
    { key: 'Left Arrow / Page Up / Backspace', desc: 'Previous Slide' },
    { key: 'Home', desc: 'Jump to Slide 01 (Business)' },
    { key: 'End', desc: 'Jump to Slide 09 (Conclusion)' },
    { key: '1 – 9', desc: 'Direct Jump to Slide (1 to 9)' },
    { key: 'Escape', desc: 'Close Modals / Exit Fullscreen' },
  ];

  const presenterShortcuts = [
    { key: 'F', desc: 'Toggle Fullscreen Mode' },
    { key: 'O / G', desc: 'Slide Overview & Navigator' },
    { key: 'N', desc: 'Speaker Notes & 6-Min Script' },
    { key: 'E', desc: 'Evidence Standards & Data Lineage' },
    { key: '?', desc: 'Keyboard & Clicker Shortcuts' },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in font-mono-consulting"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-[#F9F6F0] text-[#1C1917] border border-[#DFD7CB] rounded-2xl shadow-2xl p-6 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-[#E2DDD4] pb-4">
          <div className="flex items-center gap-2.5">
            <Radio className="w-5 h-5 text-[#BD4F19]" />
            <h3 className="font-serif-display text-lg font-bold text-[#1C1917]">
              Presentation Remote & Hotkeys
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#EFECE4] hover:bg-[#E5DFD4] text-[#1C1917] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Remote Clicker section */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs text-[#BD4F19] font-bold uppercase tracking-wider">
            <Monitor className="w-3.5 h-3.5 text-[#2E6038]" />
            <span>Hardware Remote & Clicker Navigation</span>
          </div>
          <div className="grid grid-cols-1 gap-2 text-xs">
            {clickerKeys.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-[#DFD7CB]"
              >
                <span className="bg-[#F3EFE6] px-2.5 py-1 rounded text-[#1C1917] border border-[#E2DDD4] font-mono text-[11px] font-semibold">
                  {item.key}
                </span>
                <span className="text-[#574E4A]">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Presenter Tools */}
        <div className="space-y-3 pt-2 border-t border-[#E2DDD4]">
          <div className="flex items-center gap-2 text-xs text-[#BD4F19] font-bold uppercase tracking-wider">
            <Keyboard className="w-3.5 h-3.5 text-[#BD4F19]" />
            <span>Presenter Hotkeys</span>
          </div>
          <div className="grid grid-cols-1 gap-2 text-xs">
            {presenterShortcuts.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-[#DFD7CB]"
              >
                <span className="bg-[#F3EFE6] px-2.5 py-1 rounded text-[#1C1917] border border-[#E2DDD4] font-mono font-bold text-[11px]">
                  {item.key}
                </span>
                <span className="text-[#574E4A]">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 text-center text-xs text-[#857B74]">
          Press 'Esc' or click outside to dismiss
        </div>
      </div>
    </div>
  );
};
