export interface SpeakerNote {
  timeCode: string;
  script: string;
  keyPoints: string[];
  likelyQuestions?: {
    question: string;
    suggestedAnswer: string;
  }[];
}

export interface SlideData {
  id: number;
  slug: string;
  title: string;
  subtitle?: string;
  category?: string;
  footnote?: string;
  footerLeft?: string;
  footerRight?: string;
  theme: 'charcoal' | 'ivory';
  notes: SpeakerNote;
}

export type SlideDirection = 'next' | 'prev' | 'initial';
