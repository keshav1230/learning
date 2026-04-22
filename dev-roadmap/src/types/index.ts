export interface Phase {
  id: number;
  title: string;
  duration: string;
  description: string;
  topics: string[];
  resources: Resource[];
  dailySchedule: DailySchedule;
  grade: Grade;
}

export interface Resource {
  name: string;
  type: 'video' | 'article' | 'practice' | 'playlist';
  url: string;
  language: 'hindi' | 'english';
  creator?: string;
}

export interface DailySchedule {
  hours: number;
  breakdown: { task: string; time: string }[];
}

export interface Grade {
  completed: number;
  total: number;
  score: 'A' | 'B' | 'C' | 'D' | 'F' | '-';
}

export interface DSAQuestion {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  topic: string;
  link: string;
  completed: boolean;
  day: number;
  month: number;
}

export interface DailyTask {
  id: number;
  title: string;
  completed: boolean;
  priority: 'high' | 'medium' | 'low';
  phase: number;
}

export interface UserProgress {
  currentDay: number;
  currentPhase: number;
  completedTasks: number[];
  dsaStreak: number;
  lastActive: string;
  startDate?: string;
}
