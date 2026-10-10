import { useState, useEffect, useCallback, useRef } from 'react';
import { SlideDirection } from '../types';

interface UsePresentationNavOptions {
  totalSlides: number;
}

export function usePresentationNav({ totalSlides }: UsePresentationNavOptions) {
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [direction, setDirection] = useState<SlideDirection>('initial');
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showNotes, setShowNotes] = useState<boolean>(false);
  const [showShortcuts, setShowShortcuts] = useState<boolean>(false);
  const [controlsVisible, setControlsVisible] = useState<boolean>(true);

  const lastNavTime = useRef<number>(0);
  const idleTimer = useRef<number | null>(null);

  const goToSlide = useCallback(
    (slideNum: number, dir?: SlideDirection) => {
      const target = Math.max(1, Math.min(slideNum, totalSlides));
      setCurrentSlide((prev) => {
        if (prev === target) return prev;
        setDirection(dir || (target > prev ? 'next' : 'prev'));
        return target;
      });
    },
    [totalSlides]
  );

  const nextSlide = useCallback(() => {
    const now = Date.now();
    if (now - lastNavTime.current < 200) return; // Debounce to prevent clicker double fire
    lastNavTime.current = now;

    setCurrentSlide((prev) => {
      if (prev < totalSlides) {
        setDirection('next');
        return prev + 1;
      }
      return prev;
    });
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    const now = Date.now();
    if (now - lastNavTime.current < 200) return;
    lastNavTime.current = now;

    setCurrentSlide((prev) => {
      if (prev > 1) {
        setDirection('prev');
        return prev - 1;
      }
      return prev;
    });
  }, []);

  const firstSlide = useCallback(() => {
    goToSlide(1, 'prev');
  }, [goToSlide]);

  const lastSlide = useCallback(() => {
    goToSlide(totalSlides, 'next');
  }, [goToSlide, totalSlides]);

  const toggleFullscreen = useCallback(async () => {
    try {
      if (!document.fullscreenElement) {
        const el = document.documentElement;
        if (el.requestFullscreen) {
          await el.requestFullscreen();
        } else if ((el as any).webkitRequestFullscreen) {
          await (el as any).webkitRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen) {
          await (document as any).webkitExitFullscreen();
        }
      }
    } catch (err) {
      console.warn('Fullscreen request failed:', err);
    }
  }, []);

  // Sync fullscreen state with document events
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Keyboard and presentation clicker listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is inside an input or editable field
      const activeEl = document.activeElement;
      if (
        activeEl &&
        (activeEl.tagName === 'INPUT' ||
          activeEl.tagName === 'TEXTAREA' ||
          (activeEl as HTMLElement).isContentEditable)
      ) {
        return;
      }

      // Prevent default page scroll on presentation keys
      const navKeys = [
        'Space',
        ' ',
        'ArrowRight',
        'ArrowLeft',
        'ArrowUp',
        'ArrowDown',
        'PageDown',
        'PageUp',
        'Home',
        'End'
      ];
      if (navKeys.includes(e.key)) {
        e.preventDefault();
      }

      switch (e.key) {
        case 'ArrowRight':
        case 'PageDown':
        case ' ':
        case 'Spacebar':
          nextSlide();
          break;

        case 'ArrowLeft':
        case 'PageUp':
        case 'Backspace':
          prevSlide();
          break;

        case 'Home':
          firstSlide();
          break;

        case 'End':
          lastSlide();
          break;

        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;

        case 'n':
        case 'N':
          e.preventDefault();
          setShowNotes((prev) => !prev);
          break;

        case '?':
        case 'h':
        case 'H':
          e.preventDefault();
          setShowShortcuts((prev) => !prev);
          break;

        case 'Escape':
          // Close modals first if open
          if (showNotes) {
            setShowNotes(false);
          } else if (showShortcuts) {
            setShowShortcuts(false);
          }
          break;

        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown, { capture: true });
    return () => {
      window.removeEventListener('keydown', handleKeyDown, { capture: true });
    };
  }, [
    nextSlide,
    prevSlide,
    firstSlide,
    lastSlide,
    toggleFullscreen,
    showNotes,
    showShortcuts
  ]);

  // Mouse idle detection for elegant auto-fading controls
  useEffect(() => {
    const handleMouseMove = () => {
      setControlsVisible(true);
      if (idleTimer.current) {
        window.clearTimeout(idleTimer.current);
      }
      idleTimer.current = window.setTimeout(() => {
        setControlsVisible(false);
      }, 3500);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (idleTimer.current) {
        window.clearTimeout(idleTimer.current);
      }
    };
  }, []);

  return {
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
    lastSlide,
    toggleFullscreen,
    setShowNotes,
    setShowShortcuts,
    setControlsVisible
  };
}
