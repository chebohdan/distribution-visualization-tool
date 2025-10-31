export interface Question {
  difficulty: string;
  category: string;
  question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
}

export interface QuestionResponse {
  responseCode: number;
  results: Question[];
}

export interface ChartDetails {
  title: string;
  data: RechartData[];
}

export interface RechartData {
  name: string;
  value: number;
}

export interface FilterOption {
  id: number;
  label: string;
}

export interface FrequencyData {
  [key: string]: number;
}
