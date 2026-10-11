import React, { useEffect } from 'react';
import { SLIDES_METADATA } from './data/slidesData';
import { usePresentationNav } from './hooks/usePresentationNav';
import { PresentationControls } from './components/PresentationControls';
import { SpeakerNotesModal } from './components/SpeakerNotesModal';
import { ShortcutsModal } from './components/ShortcutsModal';
import { OverviewModal } from './components/OverviewModal';

import { Slide1Cover } from './components/slides/Slide1Cover';
import { Slide2Business } from './components/slides/Slide2Business';
import { Slide3Market } from './components/slides/Slide3Market';
import { Slide4Funnel } from './components/slides/Slide4Funnel';
import { Slide5Void } from './components/slides/Slide5Void';
import { Slide6Org } from './components/slides/Slide6Org';
import { Slide7Economics } from './components/slides/Slide7Economics';
import { Slide8AIStrategy } from './components/slides/Slide8AIStrategy';
import { Slide9TheMove } from './components/slides/Slide9TheMove';
import { Slide10Conclusion } from './components/slides/Slide10Conclusion';

export const App: React.FC = () => {
  const totalSlides = SLIDES_METADATA.length;
  const {
    currentSlide,
    direction,
    isFullscreen,
    showNotes,
    showShortcuts,
    showOverview,
    controlsVisible,
    goToSlide,
    nextSlide,
    prevSlide,
    toggleFullscreen,
    setShowNotes,
    setShowShortcuts,
    setShowOverview,
  } = usePresentationNav({ totalSlides });

  // Preload key brand logo
  useEffect(() => {
    const img = new Image();
    img.src = '/assets/beyondburg-logo.png';
  }, []);

  const activeSlideData = SLIDES_METADATA[currentSlide - 1];

  const renderCurrentSlide = () => {
    switch (currentSlide) {
      case 1:
        return <Slide1Cover onNext={nextSlide} />;
      case 2:
        return <Slide2Business />;
      case 3:
        return <Slide3Market />;
      case 4:
        return <Slide4Funnel />;
      case 5:
        return <Slide5Void />;
      case 6:
        return <Slide6Org />;
      case 7:
        return <Slide7Economics />;
      case 8:
        return <Slide8AIStrategy />;
      case 9:
        return <Slide9TheMove />;
      case 10:
        return <Slide10Conclusion />;
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
    <div className="w-screen h-screen overflow-hidden flex flex-col relative select-none bg-[#080E1D]">
      {/* 16:9 Presentation Canvas Container */}
      <div className="presentation-canvas-container">
        <div className="slide-16-9">
          <main
            key={currentSlide}
            className={`w-full h-full relative overflow-hidden ${getSlideAnimationClass()}`}
          >
            {renderCurrentSlide()}
          </main>
        </div>
      </div>

      {/* Floating Presentation Controls Bar */}
      <PresentationControls
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        isFullscreen={isFullscreen}
        isVisible={controlsVisible}
        onPrev={prevSlide}
        onNext={nextSlide}
        onToggleFullscreen={toggleFullscreen}
        onToggleNotes={() => setShowNotes(!showNotes)}
        onToggleShortcuts={() => setShowShortcuts(!showShortcuts)}
        onToggleOverview={() => setShowOverview(!showOverview)}
      />

      {/* Slide Overview Navigator Modal (Press O or G) */}
      <OverviewModal
        isOpen={showOverview}
        currentSlide={currentSlide}
        onSelectSlide={(slideNum) => goToSlide(slideNum)}
        onClose={() => setShowOverview(false)}
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
