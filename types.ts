export enum IssueCategory {
  EDUCATION = 'Education',
  INFRASTRUCTURE = 'Infrastructure',
  HEALTHCARE = 'Healthcare',
  ECONOMY = 'Economy',
  SAFETY = 'Public Safety'
}

export interface Issue {
  id: string;
  title: string;
  category: IssueCategory;
  summary: string;
  detail: string;
  icon: string;
}

export interface Endorsement {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}