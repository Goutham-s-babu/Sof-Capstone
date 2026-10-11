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
    { key: 'Home', desc: 'Jump to Slide 01 (Cover)' },
    { key: 'End', desc: 'Jump to Slide 10 (Conclusion)' },
    { key: '1 – 9, 0', desc: 'Direct Jump to Slide (1 to 10)' },
    { key: 'Escape', desc: 'Close Modals / Exit Fullscreen' },
  ];

  const presenterShortcuts = [
    { key: 'F', desc: 'Toggle Fullscreen Mode' },
    { key: 'O / G', desc: 'Slide Overview & Navigator' },
    { key: 'N', desc: 'Speaker Notes & Defence Prep' },
    { key: '?', desc: 'Keyboard & Clicker Shortcuts' },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in font-mono-consulting"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-[#0D172E] text-[#F8FAFC] border border-[#1F3660] rounded-2xl shadow-2xl p-6 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-[#1F3660] pb-4">
          <div className="flex items-center gap-2.5">
            <Radio className="w-5 h-5 text-[#E59546]" />
            <h3 className="font-serif-display text-lg font-semibold text-white">
              Presentation Remote & Hotkeys
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#CBD5E1] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Remote Clicker section */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs text-[#E59546] font-bold uppercase tracking-wider">
            <Monitor className="w-3.5 h-3.5 text-[#5FA777]" />
            <span>Hardware Remote & Clicker Navigation</span>
          </div>
          <div className="grid grid-cols-1 gap-2 text-xs">
            {clickerKeys.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-2.5 rounded-lg bg-[#132240] border border-[#1F3660]"
              >
                <span className="bg-[#0B1324] px-2.5 py-1 rounded text-white border border-[#1F3660] font-mono text-[11px]">
                  {item.key}
                </span>
                <span className="text-[#CBD5E1]">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Presenter Tools */}
        <div className="space-y-3 pt-2 border-t border-[#1F3660]">
          <div className="flex items-center gap-2 text-xs text-[#E59546] font-bold uppercase tracking-wider">
            <Keyboard className="w-3.5 h-3.5 text-[#E59546]" />
            <span>Presenter Hotkeys</span>
          </div>
          <div className="grid grid-cols-1 gap-2 text-xs">
            {presenterShortcuts.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-2.5 rounded-lg bg-[#132240] border border-[#1F3660]"
              >
                <span className="bg-[#0B1324] px-2.5 py-1 rounded text-white border border-[#1F3660] font-mono font-bold text-[11px]">
                  {item.key}
                </span>
                <span className="text-[#CBD5E1]">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 text-center text-xs text-[#7E8B9B]">
          Press 'Esc' or click outside to dismiss
        </div>
      </div>
    </div>
  );
};
