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
        id: "the-airport-disaster",
        title: "The Airport Disaster",
        difficulty: "Intermediate",
        text: "Last summer, I had a terrible experience when I traveled to Europe. I called {1} taxi to take me to {2} airport. {3} driver was very friendly, but we got stuck in {4} terrible traffic on the highway. Because of this, I arrived late. When I finally reached the check-in desk, the staff member told me I had made {5} huge mistake. I had brought {6} wrong passport! I needed to look for {7} information on my phone to see if I could change my flight, but I couldn't connect to {8} internet. Finally, I had to buy {9} new ticket. It cost a lot of {10} money, but I learned a valuable lesson.",
        blanks: {
            "1": {
                id: "1",
                options: ["a", "the", "some", "∅ (no article)"],
                correctAnswers: ["a"],
                explanation: "'Taxi' is a singular, countable noun introduced for the first time. You must use 'a'. You cannot leave a singular countable noun bare in English."
            },
            "2": {
                id: "2",
                options: ["a", "an", "the", "∅ (no article)"],
                correctAnswers: ["the"],
                explanation: "We almost always say 'the airport' because we are referring to the specific public facility that serves that city, which both the speaker and listener know about."
            },
            "3": {
                id: "3",
                options: ["a", "the", "some", "∅ (no article)"],
                correctAnswers: ["the"],
                explanation: "This is the 'second mention' rule. Because we already introduced the taxi, the listener now knows exactly WHICH driver we are talking about (the driver of that specific taxi). Therefore, it becomes 'The'."
            },
            "4": {
                id: "4",
                options: ["a", "the", "some", "∅ (no article)"],
                correctAnswers: ["∅ (no article)"],
                explanation: "This is a common trap! 'Traffic' is an uncountable noun in English. Even with the adjective 'terrible' in front of it, we cannot say 'a terrible traffic'."
            },
            "5": {
                id: "5",
                options: ["a", "the", "some", "∅ (no article)"],
                correctAnswers: ["a"],
                explanation: "Unlike 'traffic', 'mistake' IS a countable noun. Because it is singular and introduced for the first time, it requires 'a'."
            },
            "6": {
                id: "6",
                options: ["a", "the", "some", "∅ (no article)"],
                correctAnswers: ["the"],
                explanation: "Adjectives like 'wrong', 'right', and 'same' usually take 'the' because there is only one specific state of being the wrong one."
            },
            "7": {
                id: "7",
                options: ["a", "an", "the", "∅ (no article)"],
                correctAnswers: ["∅ (no article)"],
                explanation: "Another major trap! 'Information' is strictly uncountable in English. You can never say 'an information'."
            },
            "8": {
                id: "8",
                options: ["a", "an", "the", "∅ (no article)"],
                correctAnswers: ["the"],
                explanation: "'The internet' is a unique global system. Because there is only one, we use 'the'."
            },
            "9": {
                id: "9",
                options: ["a", "the", "some", "∅ (no article)"],
                correctAnswers: ["a"],
                explanation: "'Ticket' is a singular countable noun, and we don't know which specific ticket it is yet, so we use 'a'."
            },
            "10": {
                id: "10",
                options: ["a", "the", "some", "∅ (no article)"],
                correctAnswers: ["∅ (no article)"],
                explanation: "Even though we can count coins and bills, the word 'money' itself is uncountable in English. Therefore, 'a lot of money' takes no article."
            }
        }
    },
    {
        id: "smartphones-and-sleep",
        title: "Smartphones and Sleep",
        difficulty: "Advanced",
        text: "Nowadays, {1} smartphones have become {2} essential part of our daily lives. People all over {3} world use them for communication, work, and entertainment. However, looking at screens at night can cause problems with {4} sleep. {5} light from these devices tricks {6} brain into thinking it is still daytime. Because of this, many doctors give us {7} important advice. They say we should avoid looking at our phones for at least an hour before going to {8} bed. Instead, it is better to read {9} book or listen to {10} relaxing music.",
        blanks: {
            "1": {
                id: "1",
                options: ["a", "the", "some", "∅ (no article)"],
                correctAnswers: ["∅ (no article)"],
                explanation: "We are talking about smartphones in general, not a specific group of smartphones. General plural nouns take no article."
            },
            "2": {
                id: "2",
                options: ["a", "an", "the", "∅ (no article)"],
                correctAnswers: ["an"],
                explanation: "'Part' is a singular countable noun. Because the adjective 'essential' starts with a vowel sound, we use 'an'."
            },
            "3": {
                id: "3",
                options: ["a", "the", "some", "∅ (no article)"],
                correctAnswers: ["the"],
                explanation: "'The world' is a unique entity. Things that are one-of-a-kind (the sun, the moon, the sky) take 'the'."
            },
            "4": {
                id: "4",
                options: ["a", "the", "some", "∅ (no article)"],
                correctAnswers: ["∅ (no article)"],
                explanation: "'Sleep' as a general concept is an uncountable noun."
            },
            "5": {
                id: "5",
                options: ["a", "the", "some", "∅ (no article)"],
                correctAnswers: ["the"],
                explanation: "Normally, 'light' can be uncountable (taking no article). However, the phrase 'from these devices' tells us EXACTLY which light we mean. Because it is specified, it requires 'The'."
            },
            "6": {
                id: "6",
                options: ["a", "the", "some", "∅ (no article)"],
                correctAnswers: ["the"],
                explanation: "When referring to human anatomy shared by everyone (like 'the brain' or 'the heart') in a medical or scientific context, we use 'the'."
            },
            "7": {
                id: "7",
                options: ["an", "the", "some", "∅ (no article)"],
                correctAnswers: ["∅ (no article)"],
                explanation: "This is one of the most common mistakes for English learners! 'Advice' is always uncountable. You cannot say 'an advice' or 'an important advice'."
            },
            "8": {
                id: "8",
                options: ["a", "the", "some", "∅ (no article)"],
                correctAnswers: ["∅ (no article)"],
                explanation: "'Go to bed' is a fixed phrase. We use no article because we are talking about the *activity* of sleeping, not the physical piece of furniture (which would be 'go to the bed')."
            },
            "9": {
                id: "9",
                options: ["a", "the", "some", "∅ (no article)"],
                correctAnswers: ["a"],
                explanation: "'Book' is a singular countable noun. Since it refers to any general book, not a specific one, we use 'a'."
            },
            "10": {
                id: "10",
                options: ["a", "the", "some", "∅ (no article)"],
                correctAnswers: ["∅ (no article)"],
                explanation: "'Music' is uncountable. Even when modified by an adjective like 'relaxing', we never say 'a relaxing music'."
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