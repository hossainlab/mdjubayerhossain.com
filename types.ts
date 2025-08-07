
export interface Publication {
  id: number;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  links: {
    pdf?: string;
    doi?: string;
  };
  bibtex: string;
  status: 'published' | 'under-review' | 'submitted' | 'in-preparation';
  category?: 'gbd-collaborator' | 'peer-reviewed' | 'regular';
}

export interface ResearchProject {
  id: number;
  title: string;
  description: string;
  tags: string[];
  links: {
    paper?: string;
    github?: string;
  };
}

export interface Course {
    id: number;
    title: string;
    code: string;
    description: string;
    links: {
        syllabus?: string;
        slides?: string;
        github?: string;
    }
}

export interface PressFeature {
    id: number;
    outletName: string;
    outletLogoUrl: string;
    headline: string;
    date: string;
    link: string;
}
