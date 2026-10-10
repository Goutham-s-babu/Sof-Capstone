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
    { key: 'Home', desc: 'Jump to Slide 1 (Cover)' },
    { key: 'End', desc: 'Jump to Slide 8 (Recommendation)' },
    { key: 'Escape', desc: 'Exit Fullscreen / Close Modals' },
  ];

  const presenterShortcuts = [
    { key: 'F', desc: 'Toggle Fullscreen Mode' },
    { key: 'N', desc: 'Toggle Speaker Notes & Timings' },
    { key: '?', desc: 'Toggle Keyboard & Remote Guide' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-lg bg-[#1C1C1C] text-[#F7F4EE] border border-white/10 rounded-xl shadow-2xl p-6 space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2.5">
            <Radio className="w-5 h-5 text-[#8D2929]" />
            <h3 className="font-serif-display text-lg font-semibold text-white">
              Presentation Remote & Controls
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Remote Clicker section */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-[#D8D3CA] uppercase tracking-wider">
            <Monitor className="w-3.5 h-3.5 text-[#747B55]" />
            <span>Physical Remote / Clicker Compatibility</span>
          </div>
          <div className="grid grid-cols-1 gap-2 text-xs">
            {clickerKeys.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-2.5 rounded bg-[#252525] border border-white/5"
              >
                <span className="font-mono bg-black/40 px-2 py-1 rounded text-[#F7F4EE] border border-white/10">
                  {item.key}
                </span>
                <span className="text-[#D8D3CA]">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Presenter Tools */}
        <div className="space-y-3 pt-2 border-t border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono text-[#D8D3CA] uppercase tracking-wider">
            <Keyboard className="w-3.5 h-3.5 text-[#8D2929]" />
            <span>Presenter Hotkeys</span>
          </div>
          <div className="grid grid-cols-1 gap-2 text-xs">
            {presenterShortcuts.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-2.5 rounded bg-[#252525] border border-white/5"
              >
                <span className="font-mono bg-black/40 px-2.5 py-1 rounded text-[#F7F4EE] border border-white/10 font-bold">
                  {item.key}
                </span>
                <span className="text-[#D8D3CA]">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 text-center text-xs text-[#D8D3CA]/60 font-mono">
          Press 'Esc' or click anywhere outside to close
        </div>
      </div>
    </div>
  );
};
