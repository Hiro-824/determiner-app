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
        id: "trip-to-kyoto",
        title: "A Family Trip to Kyoto",
        difficulty: "Intermediate",
        text: "Last weekend, my family and I went on a trip to Kyoto. Before leaving, we all made sure to pack {1} bags carefully. However, my little brother completely forgot to bring {2} toothbrush. We had to buy a new one at {3} convenience store near our hotel. The hotel was very beautiful, but we were surprised by the size of {4} room; it was quite small. The next day, we visited several temples and bought {5} souvenirs for our friends. While we were looking at {6} map, {7} old man approached us and offered to help. He gave us {8} wonderful advice about where to eat. We followed {9} recommendation and found a fantastic local restaurant. Even though my brother lost {10} wallet on the train later that afternoon, it was still an unforgettable vacation.",
        blanks: {
            "1": {
                id: "1",
                options: ["the", "our", "their", "∅ (no article)"],
                correctAnswers: ["our"],
                explanation: "英語では、自分たちのカバンなどの「個人的な持ち物」について話すとき、日本語のように省略せず、「our（私たちの）」などの所有格を必ずつけます。"
            },
            "2": {
                id: "2",
                options: ["a", "the", "his", "∅ (no article)"],
                correctAnswers: ["his"],
                explanation: "歯ブラシや服などの私物には「his（彼の）」「my（私の）」などの所有格を使います。日本語の感覚で冠詞を省いたり「the」を使ったりすると不自然になります。"
            },
            "3": {
                id: "3",
                options: ["a", "the", "some", "∅ (no article)"],
                correctAnswers: ["a"],
                explanation: "文中で初めて登場するコンビニであり、「数あるコンビニの中のどれか一つ」なので「a」を使います。"
            },
            "4": {
                id: "4",
                options: ["a", "the", "our", "∅ (no article)"],
                correctAnswers: ["the"],
                explanation: "前の文で「私たちが泊まったホテル（our hotel）」の話をしているため、「そのホテルの部屋」と特定できます。特定できる名詞には「the」を使います。"
            },
            "5": {
                id: "5",
                options: ["a", "the", "some", "∅ (no article)"],
                correctAnswers: ["∅ (no article)"],
                explanation: "「お土産（souvenirs）」という複数形の名詞を「不特定のもの」として一般的な意味で使っているため、冠詞は不要（∅）です。"
            },
            "6": {
                id: "6",
                options: ["a", "the", "our", "∅ (no article)"],
                correctAnswers: ["a"],
                explanation: "「地図（map）」は数えられる名詞です。ここでは特定の地図ではなく「（何か）地図を見ていた」という初出の情報なので「a」を使います。"
            },
            "7": {
                id: "7",
                options: ["a", "an", "the", "∅ (no article)"],
                correctAnswers: ["an"],
                explanation: "初めて登場する単数形の名詞で、母音（o）の音で始まるため「a」ではなく「an」を使います。"
            },
            "8": {
                id: "8",
                options: ["a", "an", "the", "∅ (no article)"],
                correctAnswers: ["∅ (no article)"],
                explanation: "要注意ポイントです。「アドバイス（advice）」は英語では数えられない名詞（不可算名詞）です。そのため、「a」や「an」をつけることは絶対にありません。"
            },
            "9": {
                id: "9",
                options: ["a", "the", "his", "∅ (no article)"],
                correctAnswers: ["his"],
                explanation: "直前に登場したおじいさんがしてくれたお勧めなので、「his（彼の）」を使います。「the」でも通じますが、誰の勧めかを明確にするため所有格が最も自然です。"
            },
            "10": {
                id: "10",
                options: ["a", "the", "his", "∅ (no article)"],
                correctAnswers: ["his"],
                explanation: "財布などの個人的な持ち物を失くしたと言う場合、英語では必ず所有格（この場合は弟の財布なので his）を使います。「lost the wallet」とはあまり言いません。"
            }
        }
    },
    {
        id: "first-day-at-work",
        title: "First Day at a New Job",
        difficulty: "Advanced",
        text: "Starting a new job can make anyone nervous. On my first day at the tech company, I woke up early and washed {1} face. I wanted to learn all of {2} names so I could introduce myself properly to my new colleagues. When I arrived, the receptionist gave me {3} ID card and showed me to my desk. It was covered in dust, so I had to clean it before I could start {4} work. Later, I had a meeting with my team. I noticed that everyone had brought {5} laptops to the conference room. We discussed {6} important project that will launch next month. During the meeting, I asked a question about the schedule, but I couldn't fully understand {7} answer because the manager used a lot of technical terms. I realized I needed to gather more {8} information. After work, I was exhausted. I went straight home, took off {9} shoes, and went to {10} bed without eating dinner.",
        blanks: {
            "1": {
                id: "1",
                options: ["a", "the", "my", "∅ (no article)"],
                correctAnswers: ["my"],
                explanation: "顔や手などの体の一部を洗ったり触ったりする動作では、英語では必ず「my」「your」などの所有格を使います。「washed the face」とは言いません。"
            },
            "2": {
                id: "2",
                options: ["the", "my", "their", "∅ (no article)"],
                correctAnswers: ["their"],
                explanation: "新しい同僚たち（複数）のそれぞれの名前なので、「their（彼らの）」を使います。"
            },
            "3": {
                id: "3",
                options: ["a", "an", "the", "∅ (no article)"],
                correctAnswers: ["an"],
                explanation: "「ID card」は母音（アイ）の音で始まる数えられる名詞なので、「an」を使います。"
            },
            "4": {
                id: "4",
                options: ["a", "the", "my", "∅ (no article)"],
                correctAnswers: ["∅ (no article)"],
                explanation: "この場合の「仕事（work）」は数えられない名詞（不可算名詞）です。「start work（仕事を始める）」「go to work（仕事に行く）」は定型表現として冠詞をつけません。"
            },
            "5": {
                id: "5",
                options: ["the", "our", "their", "∅ (no article)"],
                correctAnswers: ["their"],
                explanation: "会議に参加した「みんな（everyone）」がそれぞれ自分のノートパソコンを持ってきたため、「their（彼らの）」を使います。日本語では所有格を省略しがちですが、英語では必要です。"
            },
            "6": {
                id: "6",
                options: ["a", "an", "the", "∅ (no article)"],
                correctAnswers: ["an"],
                explanation: "初めて言及する特定のプロジェクトではないため「an」を使います（important が母音で始まるため）。"
            },
            "7": {
                id: "7",
                options: ["a", "an", "the", "∅ (no article)"],
                correctAnswers: ["the"],
                explanation: "直前で「質問（a question）」をしたと述べており、「その特定の質問に対する答え」と明確に特定できるため「the」を使います。"
            },
            "8": {
                id: "8",
                options: ["a", "an", "the", "∅ (no article)"],
                correctAnswers: ["∅ (no article)"],
                explanation: "「情報（information）」は英語では常に数えられない名詞（不可算名詞）です。「a」がついたり複数形の「s」がついたりすることは絶対にありません。"
            },
            "9": {
                id: "9",
                options: ["the", "my", "their", "∅ (no article)"],
                correctAnswers: ["my"],
                explanation: "靴や服などを脱ぎ着する際、英語では誰の身に着けているものかを明示するため「my（私の）」などの所有格をつけます。"
            },
            "10": {
                id: "10",
                options: ["a", "the", "my", "∅ (no article)"],
                correctAnswers: ["∅ (no article)"],
                explanation: "「寝る」という意味の「go to bed」は定型表現です。bedが本来の目的（睡眠）で使われる場合は冠詞をつけません。"
            }
        }
    }
];

export function getPassageById(id: string): Passage | undefined {
    return passages.find(p => p.id === id);
}