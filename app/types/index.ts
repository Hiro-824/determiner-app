export type DeterminerOption = "a" | "an" | "the" | "some" | "any" | "∅ (no article)";

export interface BlankData {
  id: string;
  options: DeterminerOption[];
  correctAnswers: DeterminerOption[];
  explanation?: string;
}

export interface Passage {
  id: string;
  title: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  text: string; // Use {1}, {2} to denote blanks mapping to the blanks dictionary
  blanks: Record<string, BlankData>;
}