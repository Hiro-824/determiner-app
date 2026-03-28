import { Passage } from "../types";

export const passages: Passage[] =[
  {
    id: "trip-to-store",
    title: "A Trip to the Store",
    difficulty: "Beginner",
    text: "Yesterday, I went to {1} store to buy {2} apples. While walking, I saw {3} dog. {4} dog was chasing its tail.",
    blanks: {
      "1": {
        id: "1",
        options:["a", "the", "some", "∅ (no article)"],
        correctAnswers: ["the", "a"],
        explanation: "Both 'a' and 'the' can be correct. Usually, we say 'the store' if it's a specific local store the speaker always goes to, or 'a store' if it's just any random store."
      },
      "2": {
        id: "2",
        options: ["a", "the", "some", "∅ (no article)"],
        correctAnswers: ["some", "∅ (no article)"],
        explanation: "'Apples' is plural, so we cannot use 'a'. We use 'some' or no article to talk about an unspecified amount."
      },
      "3": {
        id: "3",
        options:["a", "an", "the", "∅ (no article)"],
        correctAnswers: ["a"],
        explanation: "We use 'a' because the dog is singular and being introduced for the first time."
      },
      "4": {
        id: "4",
        options: ["a", "the", "some", "any"],
        correctAnswers:["the"],
        explanation: "Because the dog was already introduced in the previous sentence, it is now specific. Therefore, we use 'The'."
      }
    }
  },
  {
    id: "water-facts",
    title: "Facts about Water",
    difficulty: "Intermediate",
    text: "{1} water is essential for human life. However, {2} water in my bottle is not clean. I need to find {3} fresh water before we continue hiking.",
    blanks: {
      "1": {
        id: "1",
        options: ["a", "the", "some", "∅ (no article)"],
        correctAnswers: ["∅ (no article)"],
        explanation: "When talking about an uncountable noun (water) in a general sense, we use no article."
      },
      "2": {
        id: "2",
        options: ["a", "the", "some", "∅ (no article)"],
        correctAnswers: ["the"],
        explanation: "We use 'the' because we are talking about a specific body of water (the water inside a specific bottle)."
      },
      "3": {
        id: "3",
        options:["a", "the", "some", "any"],
        correctAnswers: ["some"],
        explanation: "'Some' is used here to indicate an unspecified amount of an uncountable noun in an affirmative sentence."
      }
    }
  }
];

export function getPassageById(id: string): Passage | undefined {
  return passages.find(p => p.id === id);
}