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
                explanation: "一般的な意味で使われる複数形の可算名詞（'advantages'）には冠詞がつきません。"
            },
            "2": {
                id: "2",
                options: ["a", "the", "some", "∅ (no article)"],
                correctAnswers: ["∅ (no article)"],
                explanation: "'people' は複数形です。特定のグループではなく、一般的な人々について話しているため、冠詞は使いません。"
            },
            "3": {
                id: "3",
                options: ["a", "an", "the", "∅ (no article)"],
                correctAnswers: ["a"],
                explanation: "'Environment'（環境）は単数形の可算名詞です。数ある環境のうちの一つの種類について話しており、初めて言及されるため「a」を使います。"
            },
            "4": {
                id: "4",
                options: ["a", "the", "any", "∅ (no article)"],
                correctAnswers: ["∅ (no article)"],
                explanation: "一般的な複数形の名詞には冠詞がつきません。特定の個人ではなく、一般的な同僚について話しています。"
            },
            "5": {
                id: "5",
                options: ["a", "the", "some", "∅ (no article)"],
                correctAnswers: ["∅ (no article)"],
                explanation: "日常の活動や概念としての一般的な「仕事（work）」について話す場合、不可算名詞となるため冠詞はつきません。"
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
                explanation: "個別の国名（カナダ、日本、スペインなど）には原則として冠詞はつきません。"
            },
            "2": {
                id: "2",
                options: ["a", "an", "the", "∅ (no article)"],
                correctAnswers: ["a"],
                explanation: "'Country' は単数形の可算名詞です。カナダを世界にある多くの多文化国家の一つとして分類しているため、「a」を使います。"
            },
            "3": {
                id: "3",
                options: ["a", "the", "any", "∅ (no article)"],
                correctAnswers: ["∅ (no article)"],
                explanation: "'Cultures' は複数形です。筆者は既に言及された特定の文化ではなく、一般的な文化を経験したいと考えているため、冠詞は使いません。"
            },
            "4": {
                id: "4",
                options: ["a", "the", "some", "∅ (no article)"],
                correctAnswers: ["∅ (no article)"],
                explanation: "言語名（英語、日本語、フランス語など）には冠詞はつきません。"
            },
            "5": {
                id: "5",
                options: ["a", "the", "some", "∅ (no article)"],
                correctAnswers: ["the"],
                explanation: "単なる「ある国」について話しているのではなく、筆者が訪れたい「特定の」国について話しています。'I most want to visit'（最も訪れたい）というフレーズによって特定されるため、「the」が必要です。"
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
                explanation: "'in the future'（将来）は常に「the」を必要とする英語の定型表現です。"
            },
            "2": {
                id: "2",
                options: ["a", "the", "some", "∅ (no article)"],
                correctAnswers: ["∅ (no article)"],
                explanation: "一般的な複数形の名詞（'foreign languages'）について広く話す場合、冠詞はつきません。"
            },
            "3": {
                id: "3",
                options: ["a", "the", "some", "∅ (no article)"],
                correctAnswers: ["a"],
                explanation: "'Tool'（ツール・道具）は単数形の可算名詞です。言語学習が多くのツールのうちの一つであることを示すため、「a」を使います。"
            },
            "4": {
                id: "4",
                options: ["a", "the", "some", "∅ (no article)"],
                correctAnswers: ["the"],
                explanation: "通常 'people' には冠詞がつきませんが、ここでは 'who speak it'（それを話す）が続いています。この関係詞節によって「どの人々」かが明確に特定されるため、「the」を使う必要があります。"
            },
            "5": {
                id: "5",
                options: ["a", "an", "the", "∅ (no article)"],
                correctAnswers: ["an"],
                explanation: "'Effort'（努力）は単数形の可算名詞です。母音（エの音）で始まるため、「a」ではなく「an」を使います。"
            }
        }
    },
];

export function getPassageById(id: string): Passage | undefined {
    return passages.find(p => p.id === id);
}