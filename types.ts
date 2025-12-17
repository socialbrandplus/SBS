export enum ProjectCategory {
  ALL = 'الكل',
  DEVELOPMENT = 'برمجة وتطوير',
  MARKETING = 'تسويق إلكتروني',
  DESIGN = 'تصميم وهويات',
  MOBILE = 'تطبيقات جوال'
}

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  image: string;
  description: string;
  year?: string;
  clientReview?: {
    name: string;
    role: string;
    text: string;
  };
  results?: {
    label: string;
    value: string;
  }[];
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}