export interface PersonaInfo {
  基本情報: Record<string, string>;
  デモグラフィック情報: Record<string, string>;
  サイコグラフィック情報: Record<string, string>;
  行動情報: Record<string, string>;
  目標動機欲求: Record<string, string>;
  課題ペインポイント: Record<string, string>;
  意思決定プロセス: Record<string, string>;
  購入理由: string;
}

export interface JourneyData {
  Categories: string[];
  Phases: string[];
  CustomerJourney: Record<string, Record<string, string>>;
}

export interface AnalysisResult {
  personas: {
    A: PersonaInfo;
    B: PersonaInfo;
    C: PersonaInfo;
  };
  journeys: {
    A: JourneyData;
    B: JourneyData;
    C: JourneyData;
  };
}

export interface WorkflowFormData {
  product: string;
  persona: string;
  value: string;
}