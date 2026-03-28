import { Passage } from "../types";

export const passages: Passage[] = [
    {
        id: "working-from-home",
        title: "Working from home during the COVID-19 pandemic",
        difficulty: "Beginner",
        text: "Working from home has both {1} advantages and disadvantages. One advantage is that {2} people can save time because they do not have to commute. This gives them more time for their family, hobbies, or rest. Another advantage is that they can often work in {3} more relaxed environment. However, there are also some disadvantages. For example, people may feel lonely because they have fewer chances to talk with {4} coworkers face to face. In addition, it can be difficult to separate {5} work from private life at home. In my opinion, working from home is useful, but it also requires self-control and balance.",
        blanks: {
            "1": {
                id: "1",
                options: ["a", "the", "some", "∅ (no article)"],
                correctAnswers: ["∅ (no article)"],
                explanation: "Plural countable nouns ('advantages') used in a general sense take no article."
            },
            "2": {
                id: "2",
                options: ["a", "the", "some", "∅ (no article)"],
                correctAnswers: ["∅ (no article)"],
                explanation: "The word 'people' is plural. Because we are talking about people in general—not a specific group of people—we use no article."
            },
            "3": {
                id: "3",
                options: ["a", "an", "the", "∅ (no article)"],
                correctAnswers: ["a"],
                explanation: "'Environment' is a singular countable noun. We are talking about one type of environment out of many, and it is being introduced for the first time, so we use 'a'."
            },
            "4": {
                id: "4",
                options: ["a", "the", "any", "∅ (no article)"],
                correctAnswers: ["∅ (no article)"],
                explanation: "General plural nouns take no article. We are talking about coworkers in general, not specific individuals."
            },
            "5": {
                id: "5",
                options: ["a", "the", "some", "∅ (no article)"],
                correctAnswers: ["∅ (no article)"],
                explanation: "When we talk about 'work' as a general daily activity or concept, it is an uncountable noun and takes no article."
            }
        }
    },
    {
        id: "machine-translation",
        title: "将来、完璧な機械翻訳機が出現したときでも、人間は外国語の勉強を続けるだろうか",
        difficulty: "Advanced",
        text: "Even if perfect machine translation becomes available in {1} future, I think people will continue studying {2} foreign languages. First, language learning is not only {3} tool for communication but also a way to understand other cultures and ways of thinking. By learning another language, we can better understand {4} people who speak it. Second, using a foreign language by ourselves can help us build trust and closer relationships. People are often happier when someone makes {5} effort to speak their language. For these reasons, I believe foreign language study will still be meaningful.",
        blanks: {
            "1": {
                id: "1",
                options: ["a", "the", "some", "∅ (no article)"],
                correctAnswers: ["the"],
                explanation: "'In the future' is a fixed English expression that always requires 'the'."
            },
            "2": {
                id: "2",
                options: ["a", "the", "some", "∅ (no article)"],
                correctAnswers: ["∅ (no article)"],
                explanation: "General plural nouns ('foreign languages') take no article when we are speaking broadly about all of them."
            },
            "3": {
                id: "3",
                options: ["a", "the", "some", "∅ (no article)"],
                correctAnswers: ["a"],
                explanation: "'Tool' is a singular, countable noun. We use 'a' to show that language learning is just one of many possible tools."
            },
            "4": {
                id: "4",
                options: ["a", "the", "some", "∅ (no article)"],
                correctAnswers: ["the"],
                explanation: "Normally 'people' takes no article, but here we add 'who speak it'. This relative clause tells us exactly WHICH people we mean. Because they are specific, we must use 'the'."
            },
            "5": {
                id: "5",
                options: ["a", "an", "the", "∅ (no article)"],
                correctAnswers: ["an"],
                explanation: "'Effort' is a singular countable noun. Because it starts with a vowel sound (the 'e' sound), we use 'an' instead of 'a'."
            }
        }
    },
    {
        id: "visiting-canada",
        title: "A country or region I would like to visit in the future",
        difficulty: "Intermediate",
        text: "I would like to visit {1} Canada in the future. One reason is that I am interested in its beautiful natural scenery, such as mountains, lakes, and forests. Another reason is that Canada is known as {2} multicultural country, so I could experience {3} different cultures there. I also want to use {4} English in real situations and improve my communication skills by talking with local people. In addition, Canada seems to be a safe and friendly country. For these reasons, Canada is {5} country I most want to visit someday.",
        blanks: {
            "1": {
                id: "1",
                options: ["a", "the", "some", "∅ (no article)"],
                correctAnswers: ["∅ (no article)"],
                explanation: "Names of individual countries (like Canada, Japan, Spain) almost never take an article."
            },
            "2": {
                id: "2",
                options: ["a", "an", "the", "∅ (no article)"],
                correctAnswers: ["a"],
                explanation: "'Country' is a singular countable noun. We are categorizing Canada as one of many multicultural countries in the world, so we use 'a'."
            },
            "3": {
                id: "3",
                options: ["a", "the", "any", "∅ (no article)"],
                correctAnswers: ["∅ (no article)"],
                explanation: "'Cultures' is plural. Because the writer wants to experience cultures in general, not specific ones already mentioned, we use no article."
            },
            "4": {
                id: "4",
                options: ["a", "the", "some", "∅ (no article)"],
                correctAnswers: ["∅ (no article)"],
                explanation: "The names of languages (English, Japanese, French) never take an article."
            },
            "5": {
                id: "5",
                options: ["a", "the", "some", "∅ (no article)"],
                correctAnswers: ["the"],
                explanation: "We are not talking about just any country; we are talking about the *specific* country the author wants to visit. The phrase 'I most want to visit' makes it specific, requiring 'the'."
            }
        }
    },
    {
        id: "trip-to-store",
        title: "A Trip to the Store",
        difficulty: "Beginner",
        text: "Yesterday, I went to {1} store to buy {2} apples. While walking, I saw {3} dog. {4} dog was chasing its tail.",
        blanks: {
            "1": {
                id: "1",
                options: ["a", "the", "some", "∅ (no article)"],
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
                options: ["a", "an", "the", "∅ (no article)"],
                correctAnswers: ["a"],
                explanation: "We use 'a' because the dog is singular and being introduced for the first time."
            },
            "4": {
                id: "4",
                options: ["a", "the", "some", "any"],
                correctAnswers: ["the"],
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
                options: ["a", "the", "some", "any"],
                correctAnswers: ["some"],
                explanation: "'Some' is used here to indicate an unspecified amount of an uncountable noun in an affirmative sentence."
            }
        }
    }
];

export function getPassageById(id: string): Passage | undefined {
    return passages.find(p => p.id === id);
}