import React, { useEffect } from 'react';
import { SLIDES_METADATA } from './data/slidesData';
import { usePresentationNav } from './hooks/usePresentationNav';
import { PresentationHeader } from './components/PresentationHeader';
import { PresentationControls } from './components/PresentationControls';
import { SpeakerNotesModal } from './components/SpeakerNotesModal';
import { ShortcutsModal } from './components/ShortcutsModal';

import { Slide1Cover } from './components/slides/Slide1Cover';
import { Slide2Business } from './components/slides/Slide2Business';
import { Slide3Market } from './components/slides/Slide3Market';
import { Slide4Void } from './components/slides/Slide4Void';
import { Slide5Org } from './components/slides/Slide5Org';
import { Slide6Economics } from './components/slides/Slide6Economics';
import { Slide7AIStrategy } from './components/slides/Slide7AIStrategy';
import { Slide8Recommendation } from './components/slides/Slide8Recommendation';

export const App: React.FC = () => {
  const totalSlides = SLIDES_METADATA.length;
  const {
    currentSlide,
    direction,
    isFullscreen,
    showNotes,
    showShortcuts,
    controlsVisible,
    goToSlide,
    nextSlide,
    prevSlide,
    firstSlide,
    toggleFullscreen,
    setShowNotes,
    setShowShortcuts,
  } = usePresentationNav({ totalSlides });

  // Preload key presentation assets on initial load
  useEffect(() => {
    const imagesToPreload = [
      '/assets/beyondburg-logo.png',
      '/assets/smash-burger-hero.jpg',
      '/assets/gourmet-smash.jpg',
      '/assets/bistro-dining.jpg',
    ];

    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const activeSlideData = SLIDES_METADATA[currentSlide - 1];
  const isDarkTheme = activeSlideData.theme === 'charcoal';

  const renderCurrentSlide = () => {
    switch (currentSlide) {
      case 1:
        return <Slide1Cover onNext={nextSlide} />;
      case 2:
        return <Slide2Business />;
      case 3:
        return <Slide3Market />;
      case 4:
        return <Slide4Void />;
      case 5:
        return <Slide5Org />;
      case 6:
        return <Slide6Economics />;
      case 7:
        return <Slide7AIStrategy />;
      case 8:
        return <Slide8Recommendation onGoToStart={firstSlide} />;
      default:
        return <Slide1Cover onNext={nextSlide} />;
    }
  };

  const getSlideAnimationClass = () => {
    if (direction === 'next') return 'animate-slide-next';
    if (direction === 'prev') return 'animate-slide-prev';
    return 'animate-fade-in';
  };

  return (
    <div
      className={`w-screen h-screen overflow-hidden flex flex-col relative select-none transition-colors duration-300 ${
        isDarkTheme ? 'bg-[#171717]' : 'bg-[#F7F4EE]'
      }`}
    >
      {/* Header bar: only on analytical slides 2-7 */}
      {currentSlide > 1 && currentSlide < 8 && (
        <PresentationHeader
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          slideCategory={activeSlideData.title}
          isDarkTheme={isDarkTheme}
          onGoToCover={firstSlide}
        />
      )}

      {/* Main Slide Canvas */}
      <main
        key={currentSlide}
        className={`flex-1 w-full h-full relative overflow-hidden ${getSlideAnimationClass()}`}
      >
        {renderCurrentSlide()}
      </main>

      {/* Presentation Controls Bar */}
      <PresentationControls
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        isFullscreen={isFullscreen}
        isVisible={controlsVisible}
        isDarkTheme={isDarkTheme}
        onPrev={prevSlide}
        onNext={nextSlide}
        onToggleFullscreen={toggleFullscreen}
        onToggleNotes={() => setShowNotes(!showNotes)}
        onToggleShortcuts={() => setShowShortcuts(!showShortcuts)}
      />

      {/* Presenter Speaker Notes Drawer (Press N) */}
      <SpeakerNotesModal
        isOpen={showNotes}
        slideTitle={activeSlideData.title}
        slideNumber={currentSlide}
        notes={activeSlideData.notes}
        onClose={() => setShowNotes(false)}
      />

      {/* Clicker & Keyboard Shortcuts Guide (Press ?) */}
      <ShortcutsModal
        isOpen={showShortcuts}
        onClose={() => setShowShortcuts(false)}
      />
    </div>
  );
};

export default App;
