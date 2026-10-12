import React, { useEffect } from 'react';
import { SLIDES_METADATA } from './data/slidesData';
import { usePresentationNav } from './hooks/usePresentationNav';
import { PresentationControls } from './components/PresentationControls';
import { SpeakerNotesModal } from './components/SpeakerNotesModal';
import { ShortcutsModal } from './components/ShortcutsModal';
import { OverviewModal } from './components/OverviewModal';
import { EvidenceModal } from './components/EvidenceModal';

import { Slide1Business } from './components/slides/Slide1Business';
import { Slide2Market } from './components/slides/Slide2Market';
import { Slide3CustomerJourney } from './components/slides/Slide3CustomerJourney';
import { Slide4Org } from './components/slides/Slide4Org';
import { Slide5Economics } from './components/slides/Slide5Economics';
import { Slide6Void } from './components/slides/Slide6Void';
import { Slide7Intelligence } from './components/slides/Slide7Intelligence';
import { Slide8BurgerLab } from './components/slides/Slide8BurgerLab';
import { Slide9Conclusion } from './components/slides/Slide9Conclusion';

export const App: React.FC = () => {
  const totalSlides = SLIDES_METADATA.length;
  const {
    currentSlide,
    direction,
    isFullscreen,
    showNotes,
    showEvidence,
    showShortcuts,
    showOverview,
    controlsVisible,
    goToSlide,
    nextSlide,
    prevSlide,
    toggleFullscreen,
    setShowNotes,
    setShowEvidence,
    setShowShortcuts,
    setShowOverview,
  } = usePresentationNav({ totalSlides });

  // Preload key brand logo and authentic field photos
  useEffect(() => {
    const imagesToPreload = [
      '/assets/beyondburg-logo.svg',
      '/assets/beyondburg-logo.png',
      '/assets/field-store-counter.jpg',
      '/assets/field-author-visit.jpg',
      '/assets/field-interview-manager.jpg',
      '/assets/field-team-discussion.jpg',
      '/assets/smash-burger-hero.jpg',
    ];
    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const activeSlideData = SLIDES_METADATA[currentSlide - 1];

  const renderCurrentSlide = () => {
    switch (currentSlide) {
      case 1:
        return <Slide1Business />;
      case 2:
        return <Slide2Market />;
      case 3:
        return <Slide3CustomerJourney />;
      case 4:
        return <Slide4Org />;
      case 5:
        return <Slide5Economics />;
      case 6:
        return <Slide6Void />;
      case 7:
        return <Slide7Intelligence />;
      case 8:
        return <Slide8BurgerLab />;
      case 9:
        return <Slide9Conclusion />;
      default:
        return <Slide1Business />;
    }
  };

  const getSlideAnimationClass = () => {
    if (direction === 'next') return 'animate-slide-next';
    if (direction === 'prev') return 'animate-slide-prev';
    return 'animate-fade-in';
  };

  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col relative select-none bg-[#161312]">
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
        onToggleEvidence={() => setShowEvidence(!showEvidence)}
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

      {/* Evidence Standards & Data Lineage Modal (Press E) */}
      <EvidenceModal
        isOpen={showEvidence}
        onClose={() => setShowEvidence(false)}
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
