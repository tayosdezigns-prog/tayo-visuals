export type ProjectCategory = 
  | 'ALL'
  | 'AI COMMERCIAL'
  | 'PRODUCT ADS'
  | 'BRAND FILM'
  | 'CINEMATIC'
  | 'SOCIAL'
  | 'EXPERIMENTAL';

export interface ShotSequence {
  timecode: string;
  shotName: string;
  cameraMovement: string;
  promptGuidance: string;
  lightingAndAtmosphere: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  categoryLabel: string;
  year: string;
  type: string;
  client: string; // "Self-Initiated Concept"
  label: 'CONCEPT PROJECT' | 'SPECULATIVE CAMPAIGN';
  role: string;
  duration: string;
  aspect: '16:9' | '4:3' | '9:16';
  heroImage: string;
  featured: boolean;
  concept: string;
  artDirection: string;
  commercialObjective: string;
  tools: string[];
  colorGrading: string;
  soundDesignNotes: string;
  sequenceShots: ShotSequence[];
  keyVisualAttributes: string[];
}
