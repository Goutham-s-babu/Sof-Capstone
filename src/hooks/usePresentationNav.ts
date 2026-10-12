import { useState, useEffect, useCallback, useRef } from 'react';
import { SlideDirection } from '../types';

interface UsePresentationNavOptions {
  totalSlides: number;
}

export function usePresentationNav({ totalSlides }: UsePresentationNavOptions) {
  const [currentSlide, setCurrentSlide] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      const hashNum = parseInt(hash, 10);
      if (!isNaN(hashNum) && hashNum >= 1 && hashNum <= totalSlides) {
        return hashNum;
      }
      const params = new URLSearchParams(window.location.search);
      const slideParam = params.get('slide');
      if (slideParam) {
        const paramNum = parseInt(slideParam, 10);
        if (!isNaN(paramNum) && paramNum >= 1 && paramNum <= totalSlides) {
          return paramNum;
        }
      }
    }
    return 1;
  });
  const [direction, setDirection] = useState<SlideDirection>('initial');
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showNotes, setShowNotes] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const p = new URLSearchParams(window.location.search);
      return p.get('modal') === 'notes' || p.get('notes') === 'true';
    }
    return false;
  });
  const [showEvidence, setShowEvidence] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const p = new URLSearchParams(window.location.search);
      return p.get('modal') === 'evidence' || p.get('evidence') === 'true';
    }
    return false;
  });
  const [showShortcuts, setShowShortcuts] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const p = new URLSearchParams(window.location.search);
      return p.get('modal') === 'shortcuts';
    }
    return false;
  });
  const [showOverview, setShowOverview] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const p = new URLSearchParams(window.location.search);
      return p.get('modal') === 'overview';
    }
    return false;
  });
  const [controlsVisible, setControlsVisible] = useState<boolean>(true);

  // Sync hash with currentSlide
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', `#${currentSlide}`);
    }
  }, [currentSlide]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const num = parseInt(hash, 10);
      if (!isNaN(num) && num >= 1 && num <= totalSlides) {
        setCurrentSlide(num);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [totalSlides]);

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
        'End',
      ];
      if (navKeys.includes(e.key)) {
        e.preventDefault();
      }

      // Number keys 1-9, 0 to jump directly to slide
      if (e.key >= '1' && e.key <= '9') {
        const num = parseInt(e.key, 10);
        if (num <= totalSlides) {
          e.preventDefault();
          goToSlide(num);
          return;
        }
      }
      if (e.key === '0' && totalSlides >= 10) {
        e.preventDefault();
        goToSlide(10);
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case 'PageDown':
        case ' ':
        case 'Spacebar':
          nextSlide();
          break;

        case 'ArrowLeft':
        case 'ArrowUp':
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

        case 'e':
        case 'E':
          e.preventDefault();
          setShowEvidence((prev) => !prev);
          break;

        case 'o':
        case 'O':
        case 'g':
        case 'G':
          e.preventDefault();
          setShowOverview((prev) => !prev);
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
          } else if (showEvidence) {
            setShowEvidence(false);
          } else if (showShortcuts) {
            setShowShortcuts(false);
          } else if (showOverview) {
            setShowOverview(false);
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
    goToSlide,
    toggleFullscreen,
    showNotes,
    showEvidence,
    showShortcuts,
    showOverview,
    totalSlides,
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
    showEvidence,
    showShortcuts,
    showOverview,
    controlsVisible,
    goToSlide,
    nextSlide,
    prevSlide,
    firstSlide,
    lastSlide,
    toggleFullscreen,
    setShowNotes,
    setShowEvidence,
    setShowShortcuts,
    setShowOverview,
    setControlsVisible,
  };
}
