// 質問データ
// 幸せ体質: プラスが幸せ体質、マイナスが不幸体質
// 愛情型: プラスが愛情型、マイナスが評価型
const questionsData = [
    {
        id: 1,
        category: "価値観",
        question: "交際が深まってきた頃、お相手が「実は親が少し過干渉気味で……」と悩みを打ち明けてきました。",
        options: [
            {
                text: "言いにくいことを話してくれてありがとう。二人でどう向き合うか一緒に考えよう",
                happiness: 0,
                affection: 3
            },
            {
                text: "結婚が決まればご両親もきっと一人前の大人として認めてくれるよ",
                happiness: 3,
                affection: 0
            },
            {
                text: "結婚後に苦労しそう・・・なるべく関わらないようにしないと",
                happiness: -3,
                affection: -1
            },
            {
                text: "なんでいまさらになって言うの？ もっと早く言ってくれてれば・・・",
                happiness: -1,
                affection: -3
            }
        ]
    },
    {
        id: 2,
        category: "出会い",
        question: "お見合いの席で、お相手が極度に緊張していて、沈黙が続いてしまいました。",
        options: [
            {
                text: "きっとまじめな人なんだな",
                happiness: 0,
                affection: 2
            },
            {
                text: "緊張するほど真剣に今日のお見合いに臨んでくれたんだ",
                happiness: 2,
                affection: 0
            },
            {
                text: "この人やる気あるの？ 大丈夫？",
                happiness: 0,
                affection: -3
            },
            {
                text: "相性が悪いから盛り上がらないんだ。今日も時間の無駄だったな",
                happiness: -3,
                affection: 0
            }
        ]
    },
    {
        id: 3,
        category: "出会い",
        question: "お見合い相手の見た目が写真と違って正直ガッカリです",
        options: [
            {
                text: "話をしてみたらもしかしたら気が合うかも？",
                happiness: 2,
                affection: 0
            },
            {
                text: "写真と違うのは誠実さに欠ける",
                happiness: 0,
                affection: -3
            },
            {
                text: "見た目は好みじゃないけど、人柄が良ければ別にいいか",
                happiness: 1,
                affection: 3
            },
            {
                text: "写真を盛る人は、他にも嘘をついてるに違いない",
                happiness: -3,
                affection: -3
            }
        ]
    },
    {
        id: 4,
        category: "出会い",
        question: "お見合いで、お相手の話が自分の興味のない専門分野ばかりです。",
        options: [
            {
                text: "そんな世界があるんだ！勉強になるな",
                happiness: 2,
                affection: 1
            },
            {
                text: "自分のことばっかりで、コミュ力低いな",
                happiness: 0,
                affection: -3
            },
            {
                text: "一生懸命に自分のことを伝えようとしてくれてるんだな",
                happiness: 0,
                affection: 2
            },
            {
                text: "退屈だな。早く終わってくれないかな",
                happiness: -3,
                affection: -1
            }
        ]
    },
    {
        id: 5,
        category: "出会い",
        question: "お見合い中、お相手が少しドジをして飲み物をこぼしてしまいました。",
        options: [
            {
                text: "ドンマイ！これでお互い緊張が解けたね",
                happiness: 2,
                affection: 1
            },
            {
                text: "落ち着きのない人だな。こんなことで大丈夫？",
                happiness: 0,
                affection: -3
            },
            {
                text: "誰だって失敗することはあるよね(笑)",
                happiness: 0,
                affection: 2
            },
            {
                text: "こっちまで服が汚れたら最悪。気をつけてよ",
                happiness: -3,
                affection: 0
            }
        ]
    },
    {
        id: 6,
        category: "交際",
        question: "お相手が記念日を忘れていました。",
        options: [
            {
                text: "忘れちゃうこともあるよね。今から一緒にお祝いしよう",
                happiness: 2,
                affection: 1
            },
            {
                text: "私のこと大切に思ってないんだ…",
                happiness: -3,
                affection: 0
            },
            {
                text: "忙しかったのかな？無理しないでね",
                happiness: 0,
                affection: 2
            },
            {
                text: "記念日も覚えられないなんて、愛情がない証拠",
                happiness: -2,
                affection: -3
            }
        ]
    },
    {
        id: 7,
        category: "交際",
        question: "お相手の服装のセンスが自分の好みと違います。",
        options: [
            {
                text: "その人らしくていいと思う",
                happiness: 0,
                affection: 2
            },
            {
                text: "もっとオシャレに気を遣ってくれないと一緒に歩くのが恥ずかしい…",
                happiness: -1,
                affection: -3
            },
            {
                text: "今度一緒に買い物行こうよ",
                happiness: 2,
                affection: -2
            },
            {
                text: "センスが合わない人とはやっぱり上手くいかない予感がする",
                happiness: -2,
                affection: -1
            }
        ]
    },
    {
        id: 8,
        category: "価値観",
        question: "お相手の年収が自分の期待より低いことが分かりました。",
        options: [
            {
                text: "年収が低いなら、低いなりの生活をしていけば大丈夫",
                happiness: 3,
                affection: 0
            },
            {
                text: "将来が不安…この人で大丈夫かな",
                happiness: -3,
                affection: -1
            },
            {
                text: "不安だけど、一緒にどう乗り越えるか具体的に話し合いたい",
                happiness: 1,
                affection: 3
            },
            {
                text: "もっと稼げる人を探した方がいい",
                happiness: -1,
                affection: -3
            }
        ]
    },
    {
        id: 9,
        category: "交際",
        question: "お相手が自分の話ばかりしてきます。",
        options: [
            {
                text: "話したいことがたくさんあるんだね。聞いてあげよう",
                happiness: 0,
                affection: 2
            },
            {
                text: "私の話も聞いてほしい。自己中心的で配慮がない",
                happiness: -1,
                affection: -3
            },
            {
                text: "楽しそうに話してくれて嬉しい",
                happiness: 2,
                affection: 0
            },
            {
                text: "会話のペースがかみ合わない。これじゃあこの先の結婚生活が心配だ",
                happiness: -3,
                affection: -1
            }
        ]
    },
    {
        id: 10,
        category: "コミュニケーション",
        question: "お相手が急に連絡が取れなくなりました（1日程度）。",
        options: [
            {
                text: "忙しいのかな。落ち着いたら連絡くれるはず",
                happiness: 1,
                affection: 2
            },
            {
                text: "もう私に興味がないのかも…",
                happiness: -3,
                affection: 0
            },
            {
                text: "今日の晩御飯は何食べようかなぁ",
                happiness: 3,
                affection: 0
            },
            {
                text: "連絡くらいできるでしょ。誠実さがない",
                happiness: 0,
                affection: -3
            }
        ]
    },
    {
        id: 11,
        category: "コミュニケーション",
        question: "お相手が自分の意見に反対してきました。",
        options: [
            {
                text: "二人で話し合えばきっとお互い納得できるよ",
                happiness: 2,
                affection: 0
            },
            {
                text: "否定された…私のこと嫌いなのかな",
                happiness: -3,
                affection: 0
            },
            {
                text: "そういう考え方もあるんだね。なるほど",
                happiness: 0,
                affection: 2
            },
            {
                text: "私の意見を尊重してくれない。価値観が合わない",
                happiness: 0,
                affection: -3
            }
        ]
    },
    {
        id: 12,
        category: "出会い",
        question: "お見合いの帰り道、お相手の靴が少し汚れていたことに気づきました。",
        options: [
            {
                text: "外をたくさん歩いて仕事を頑張っている人なんだな",
                happiness: 0,
                affection: 2
            },
            {
                text: "詰めが甘いな。ＴＰＯを考えてよ",
                happiness: 0,
                affection: -3
            },
            {
                text: "雨の中、わざわざ会いに来てくれたことが嬉しい",
                happiness: 2,
                affection: 0
            },
            {
                text: "だらしない人と一緒に歩くのは恥ずかしいな",
                happiness: -3,
                affection: -1
            }
        ]
    },
    {
        id: 13,
        category: "出会い",
        question: "お相手がデートプランを全く考えてきませんでした。",
        options: [
            {
                text: "じゃあこれから一緒に考えよう！",
                happiness: 2,
                affection: 0
            },
            {
                text: "私に好意がないから、やる気がないに違いない",
                happiness: -3,
                affection: -1
            },
            {
                text: "一緒にいてくれるだけでも十分",
                happiness: 0,
                affection: 2
            },
            {
                text: "デートプランくらい考えてきてほしい。気が利かない",
                happiness: 0,
                affection: -3
            }
        ]
    },
    {
        id: 14,
        category: "交際",
        question: "お相手が過去の恋愛について話してきました。",
        options: [
            {
                text: "過去は過去。どんな過去でも気にしない",
                happiness: 0,
                affection: 2
            },
            {
                text: "元カノ/元カレの話なんて聞きたくない…",
                happiness: -3,
                affection: 0
            },
            {
                text: "話してくれてありがとう。そんな深い話をしてくれるまで仲良くなれたってことだよね",
                happiness: 2,
                affection: 0
            },
            {
                text: "聞いてもいないのに。デリカシーないな",
                happiness: 0,
                affection: -2
            }
        ]
    },
    {
        id: 15,
        category: "コミュニケーション",
        question: "お相手が約束をドタキャンしました（理由あり）。",
        options: [
            {
                text: "空き時間できたし、前から見たいと思っていた映画でも見ようっと",
                happiness: 3,
                affection: 0
            },
            {
                text: "ちゃんと連絡してくれたし、それじゃあ仕方ない",
                happiness: 0,
                affection: 2
            },
            {
                text: "もう嫌われちゃったに違いない",
                happiness: -3,
                affection: 0
            },
            {
                text: "ドタキャンするなんて非常識",
                happiness: 0,
                affection: -3
            }
        ]
    },
    {
        id: 16,
        category: "価値観",
        question: "お相手の学歴が自分より低いことが分かりました。",
        options: [
            {
                text: "学歴より人柄が大事",
                happiness: 0,
                affection: 2
            },
            {
                text: "将来のことを考えると不安…",
                happiness: -3,
                affection: 0
            },
            {
                text: "学歴くらい別になんとかなるでしょ(笑)",
                happiness: 2,
                affection: 0
            },
            {
                text: "もっと高学歴の人がいいな",
                happiness: 0,
                affection: -3
            }
        ]
    },
    {
        id: 17,
        category: "価値観",
        question: "仲人から「今のあなたには、少しお相手への条件が厳しすぎるかもしれません」とアドバイスされました。",
        options: [
            {
                text: "やっぱり私の夢はかなわないんだ、婚活って本当に辛い",
                happiness: -3,
                affection: 0
            },
            {
                text: "高い会費を払っているのに、希望通りにならないなんて納得いかない",
                happiness: -0,
                affection: -3
            },
            {
                text: "プロの言うことだし試しに条件を見直してみようか",
                happiness: 0,
                affection: 2
            },
            {
                text: "高い会費を払ってプロからアドバイスを受けているんだから幸せになるヒントがあるに違いない",
                happiness: 2,
                affection: 0
            }
        ]
    },
    {
        id: 18,
        category: "交際",
        question: "お相手が自分の友達とあまり仲良くなれませんでした。",
        options: [
            {
                text: "人それぞれ相性があるよね",
                happiness: 2,
                affection: 0
            },
            {
                text: "友達と仲良く人はちょっと…",
                happiness: 0,
                affection: -3
            },
            {
                text: "緊張してたのかな？まぁ初対面だし仕方ないか",
                happiness: 0,
                affection: 2
            },
            {
                text: "社交性がない。将来が心配",
                happiness: -3,
                affection: -2
            }
        ]
    },
    {
        id: 19,
        category: "コミュニケーション",
        question: "お相手が自分の仕事の愚痴ばかり言ってきます。",
        options: [
            {
                text: "大変なんだね。話聞くよ",
                happiness: 0,
                affection: 2
            },
            {
                text: "ネガティブな話ばかりで疲れる…",
                happiness: -3,
                affection: -1
            },
            {
                text: "それじゃあ今から一緒に楽しいことをしよう",
                happiness: 3,
                affection: 0
            },
            {
                text: "仕事のできない人と一緒になると将来苦労しそう",
                happiness: 0,
                affection: -3
            }
        ]
    },
    {
        id: 20,
        category: "価値観",
        question: "お相手が「実は料理が全くできない」と告白してきました。",
        options: [
            {
                text: "料理なんて練習すれば誰でもできるようになるし、なんとかなるっしょ",
                happiness: 3,
                affection: 0
            },
            {
                text: "結婚相手として致命的。家事スキルは必須条件だ",
                happiness: 0,
                affection: -3
            },
            {
                text: "いいよいいよ、得意な方がやれば。代わりにあなたは他のことを頑張って。",
                happiness: 0,
                affection: 3
            },
            {
                text: "また欠点が見つかった。理想の人は現れないんだ",
                happiness: -3,
                affection: 0
            }
        ]
    },
    {
        id: 21,
        category: "交際",
        question: "誕生日プレゼントを贈りましたが、反応が予想より薄かったです。",
        options: [
            {
                text: "照れているのかな？使ってくれるのが楽しみ",
                happiness: 2,
                affection: 0
            },
            {
                text: "喜ばせることができなかった。もうダメだ",
                happiness: -3,
                affection: 0
            },
            {
                text: "こういうのは好きじゃなかったのかな？次はもっと喜んでもらえるものを贈ろう",
                happiness: 0,
                affection: 2
            },
            {
                text: "せっかく選んだのに。コスパの悪い相手だな",
                happiness: 0,
                affection: -3
            }
        ]
    },
    {
        id: 22,
        category: "交際",
        question: "お相手がくれた自分の誕生日プレゼントの趣味が合いませんでした。",
        options: [
            {
                text: "選んでくれた気持ちが嬉しい。ありがとう",
                happiness: 2,
                affection: 0
            },
            {
                text: "私に興味がないからに違いない…",
                happiness: -3,
                affection: 0
            },
            {
                text: "この人はこういうのを選ぶんだ。なんだか意外",
                happiness: 0,
                affection: 2
            },
            {
                text: "センスがない。もっと考えてほしい",
                happiness: 0,
                affection: -3
            }
        ]
    },
    {
        id: 23,
        category: "コミュニケーション",
        question: "お相手が自分の意見をあまり言わず、いつも合わせてきます。",
        options: [
            {
                text: "優しくて思いやりがある人だな",
                happiness: 0,
                affection: 2
            },
            {
                text: "本心が分からなくて不安…",
                happiness: -2,
                affection: 0
            },
            {
                text: "ありがとう。いつも自分のことを優先にしてくれるから一緒にいて楽しいよ",
                happiness: 2,
                affection: 0
            },
            {
                text: "自分の意見がない人は頼りない",
                happiness: 0,
                affection: -3
            }
        ]
    },
    {
        id: 24,
        category: "価値観",
        question: "お相手の両親が結婚に反対しています。",
        options: [
            {
                text: "二人で乗り越えよう。時間はかかるかもしれないけどちゃんと理解してもらえるはず",
                happiness: 3,
                affection: 0
            },
            {
                text: "親に反対されるなんて…やっぱり無理かも",
                happiness: -3,
                affection: 0
            },
            {
                text: "ご両親は反対でも、自分のことを大切に想ってくれていることはわかっているからお相手を信じよう",
                happiness: 0,
                affection: 2
            },
            {
                text: "親の反対を押し切れないなんて、覚悟がない。こんなことじゃこの先不安になる。",
                happiness: 0,
                affection: -3
            }
        ]
    },
    {
        id: 25,
        category: "出会い",
        question: "お見合いの最後に、お相手から「また会いたいです」と言われました。",
        options: [
            {
                text: "「また会いたいと言ってもらえて嬉しい！！」",
                happiness: 2,
                affection: 0
            },
            {
                text: "誰にでも言っている営業トークでしょ？",
                happiness: -3,
                affection: 0
            },
            {
                text: "今のところ合格点だけど、次はどうかな？さらに見極めよう",
                happiness: 0,
                affection: -3
            },
            {
                text: "そう言ってもらえるなら、自分ももっとお話したい",
                happiness: 0,
                affection: 2
            }
        ]
    },
    {
        id: 26,
        category: "交際",
        question: "お相手が趣味に没頭しすぎて、デートの時間が取れないことがあります。",
        options: [
            {
                text: "好きなことに打ち込める人って素敵だな",
                happiness: 0,
                affection: 2
            },
            {
                text: "私より趣味の方が大事なんだ…",
                happiness: -3,
                affection: 0
            },
            {
                text: "会えない時間がある分、次に会うのが楽しみになる",
                happiness: 2,
                affection: 0
            },
            {
                text: "もっと私のことを優先してほしい。バランス感覚がない",
                happiness: 0,
                affection: -3
            }
        ]
    },
    {
        id: 27,
        category: "交際",
        question: "お相手がデートのために予約してくれたお店が、自分の苦手なジャンルの料理（例：辛いもの、パクチー等）でした。",
        options: [
            {
                text: "結果はともあれ、お店を予約してくれるなんていい人だ",
                happiness: 0,
                affection: 2
            },
            {
                text: "せっかくのデートなのに、事前に確認してほしかったな",
                happiness: -1,
                affection: -2
            },
            {
                text: "食事はおまけ。会話を楽しむのが本来の目的だよね",
                happiness: 3,
                affection: 0
            },
            {
                text: "食の好みって大事だよね、相性が合わないのかも",
                happiness: -3,
                affection: -0
            }
        ]
    },
    {
        id: 28,
        category: "交際",
        question: "デートの最中、お相手がスマホを何度かチェックしています。",
        options: [
            {
                text: "忙しい中、時間を作って会ってくれているんだな",
                happiness: 2,
                affection: 0
            },
            {
                text: "私に集中していない。他にも別の相手がいるに違いない",
                happiness: -3,
                affection: 0
            },
            {
                text: "何か急ぎの件？大丈夫かな？",
                happiness: 0,
                affection: 2
            },
            {
                text: "デートのマナー違反だ",
                happiness: 0,
                affection: -3
            }
        ]
    },
    {
        id: 29,
        category: "コミュニケーション",
        question: "お相手に家族の話を聞いたところ濁され、話題を変えられてしまいました。",
        options: [
            {
                text: "話したくない事情があるのかな。無理に聞かないでおこう",
                happiness: 0,
                affection: 2
            },
            {
                text: "何か隠しているに違いない。不安だ",
                happiness: -3,
                affection: 0
            },
            {
                text: "ま、いっか",
                happiness: 2,
                affection: 0
            },
            {
                text: "家庭環境が複雑な人との結婚は苦労しそうだ",
                happiness: 0,
                affection: -3
            }
        ]
    },
    {
        id: 30,
        category: "交際",
        question: "デートの別れ際、お相手から「今日は少し疲れちゃった」と言われました。",
        options: [
            {
                text: "それだけ充実してたってことだよね",
                happiness: 3,
                affection: 0
            },
            {
                text: "私のせい？嫌われちゃったのかな……",
                happiness: -3,
                affection: 0
            },
            {
                text: "今日はお疲れ様でした。帰ったらゆっくり休んでね",
                happiness: 1,
                affection: 2
            },
            {
                text: "それ言っちゃう？失礼じゃない？",
                happiness: 0,
                affection: -3
            }
        ]
    },
    {
        id: 31,
        category: "コミュニケーション",
        question: "お相手のLINEが短文（「了解」「おつかれ」）ばかりです。",
        options: [
            {
                text: "シンプルで分かりやすい！お互い楽でいいな",
                happiness: 2,
                affection: 0
            },
            {
                text: "文章から熱意が感じられない。大切にされていないからだ",
                happiness: -3,
                affection: 0
            },
            {
                text: "LINEはあんまり得意じゃないのかな？だったら、今度のデートでいっぱいお話しよう",
                happiness: 0,
                affection: 2
            },
            {
                text: "コミュ力が低い。もっと気の利いた返信ができないの？",
                happiness: 0,
                affection: -3
            }
        ]
    },
    {
        id: 32,
        category: "価値観",
        question: "お相手が「結婚後も仕事を続けてほしい（or続けたい）/辞めてほしい（or辞めたい）」と言っています。自分の希望と違います。",
        options: [
            {
                text: "お相手がそう望むのなら仕方がない。自分が譲歩しよう",
                happiness: 0,
                affection: 0
            },
            {
                text: "価値観が合わない。結婚は無理だ",
                happiness: -2,
                affection: -1
            },
            {
                text: "話し合えば、きっとお互い納得できる方法が見つかるはず",
                happiness: 2,
                affection: 2
            },
            {
                text: "二人の人生なのに、勝手に決めないでほしい",
                happiness: -1,
                affection: -2
            }
        ]
    },
    {
        id: 33,
        category: "交際",
        question: "お相手が自分の好きな映画や音楽に全く興味を示しません。",
        options: [
            {
                text: "好みは人それぞれだから仕方がない。一緒に楽しめるものを探そう",
                happiness: 0,
                affection: 2
            },
            {
                text: "私のことなんて興味がないんだ……",
                happiness: -3,
                affection: 0
            },
            {
                text: "まぁ楽しくおしゃべりできたら別の話題でもいっか",
                happiness: 2,
                affection: 0
            },
            {
                text: "私の好きなものを理解しようとしない。共通の趣味がないと、一緒にいても楽しくない",
                happiness: 0,
                affection: -3
            }
        ]
    },
    {
        id: 34,
        category: "コミュニケーション",
        question: "仕事が忙しい時期、お相手から「体調大丈夫？無理しないでね」と気遣うLINEが届きました。",
        options: [
            {
                text: "自分の状況を察して、そっと見守ってくれる優しさが嬉しい",
                happiness: 1,
                affection: 2
            },
            {
                text: "忙しい時にこういう一言をもらえると、明日も頑張れそう！",
                happiness: 2,
                affection: 0
            },
            {
                text: "返信する余裕がない。忙しい時はそっとしておいてほしい",
                happiness: -3,
                affection: 0
            },
            {
                text: "もっと具体的なサポートや提案があればいいのに……",
                happiness: 0,
                affection: -3
            }
        ]
    },
    {
        id: 35,
        category: "出会い",
        question: "お見合い相手の話し方が、少し上から目線に感じました。",
        options: [
            {
                text: "頼りになりそう",
                happiness: 2,
                affection: 0
            },
            {
                text: "見下されている気がする……",
                happiness: -3,
                affection: 0
            },
            {
                text: "たまたま？もっとお話しないと本当の人柄はわからない",
                happiness: 0,
                affection: 2
            },
            {
                text: "一緒にいたくない",
                happiness: 0,
                affection: -3
            }
        ]
    },
    {
        id: 36,
        category: "交際",
        question: "お相手が自分の誕生日を盛大に祝ってくれましたが、少し恥ずかしかったです。",
        options: [
            {
                text: "こんなに祝ってくれて嬉しい！",
                happiness: 2,
                affection: 0
            },
            {
                text: "恥ずかしい…もっと控えめにしてほしかった",
                happiness: -2,
                affection: -1
            },
            {
                text: "一生懸命考えてくれたんだね。ありがとう",
                happiness: 0,
                affection: 2
            },
            {
                text: "私の気持ちを考えてくれていない。配慮がない",
                happiness: 0,
                affection: -3
            }
        ]
    },
    {
        id: 37,
        category: "価値観",
        question: "お相手が「結婚後は親と同居したい」と言っています。",
        options: [
            {
                text: "親しき中にも礼儀あり。みんなが気持ちよく暮らせるルールを決めよう",
                happiness: 2,
                affection: 0
            },
            {
                text: "同居なんて絶対無理…",
                happiness: -3,
                affection: 0
            },
            {
                text: "どうすればお互いの家族も含めて幸せになれるか、一緒に考えよう",
                happiness: 0,
                affection: 3
            },
            {
                text: "私の意見を聞かずに決めるなんて、自己中心的だ",
                happiness: 0,
                affection: -3
            }
        ]
    },
    {
        id: 38,
        category: "価値観",
        question: "お相手の金銭感覚が、自分より少し「ケチ（倹約家）」だと感じました。",
        options: [
            {
                text: "しっかり者で将来安心！見習うところがあるな",
                happiness: 0,
                affection: 2
            },
            {
                text: "生活水準が合わない。一緒にいても楽しくなさそう",
                happiness: -1,
                affection: -3
            },
            {
                text: "価値観の違いも、話し合いで擦り合わせていけるよね",
                happiness: 2,
                affection: 0
            },
            {
                text: "ケチな人と結婚したら、一生苦労しそう",
                happiness: -3,
                affection: -1
            }
        ]
    },
    {
        id: 39,
        category: "価値観",
        question: "お相手が「共働きがいい」「家事は分担したい」と条件を出してきました。",
        options: [
            {
                text: "二人で協力するスタイル、理想的だね！",
                happiness: 2,
                affection: 0
            },
            {
                text: "私の自由がなくなるのは嫌だな・・・",
                happiness: -3,
                affection: 0
            },
            {
                text: "あなたがそう望むなら、ベストな形を話し合おう",
                happiness: 0,
                affection: 2
            },
            {
                text: "それって自分の負担を減らしたいだけじゃないの？",
                happiness: 0,
                affection: -3
            }
        ]
    },
    {
        id: 40,
        category: "コミュニケーション",
        question: "交際中のお相手から「仕事で大きなミスをして落ち込んでいる」と夜遅くに電話がありました。",
        options: [
            {
                text: "弱音を見せてくれるくらい信頼されているんだな",
                happiness: 2,
                affection: 0
            },
            {
                text: "夜遅くに重い話は困るな、自分の明日への影響が心配",
                happiness: -2,
                affection: 0
            },
            {
                text: "誰だってミスはあるし、気にしないでいいんじゃない",
                happiness: 0,
                affection: 2
            },
            {
                text: "仕事ができない人なのかな？結婚後のことが心配かも……",
                happiness: 0,
                affection: -3
            }
        ]
    },
    {
        id: 41,
        category: "価値観",
        question: "仲が良い友人が先に成婚しました。",
        options: [
            {
                text: "次は自分の番だ！",
                happiness: 2,
                affection: 0
            },
            {
                text: "先を越された。私は置いてけぼりだ",
                happiness: -3,
                affection: 0
            },
            {
                text: "本当におめでとう！",
                happiness: 0,
                affection: 2
            },
            {
                text: "あの人が結婚できるなら、自分にはもっといい人が見つかるはずだ",
                happiness: 0,
                affection: -3
            }
        ]
    },
    {
        id: 42,
        category: "コミュニケーション",
        question: "お相手が自分の話を途中で遮って、自分の話を始めることがあります。",
        options: [
            {
                text: "相手が楽しそうに喋っているからまぁいっか",
                happiness: 0,
                affection: 2
            },
            {
                text: "私の話は面白くないのかな……",
                happiness: -3,
                affection: 0
            },
            {
                text: "話を聞くのも楽しい",
                happiness: 2,
                affection: 0
            },
            {
                text: "自分にしか興味ない人なのかな？コミュ力低そう……",
                happiness: 0,
                affection: -3
            }
        ]
    },
    {
        id: 43,
        category: "出会い",
        question: "お見合い相手が、待ち合わせ場所を間違えて遅刻しました。",
        options: [
            {
                text: "誰でも間違えることはあるよね",
                happiness: 0,
                affection: 2
            },
            {
                text: "いい加減な人だ…信用できない",
                happiness: 0,
                affection: -3
            },
            {
                text: "慌てて来てくれたんだね。ありがとう",
                happiness: 2,
                affection: 0
            },
            {
                text: "また熱意のない人に当たってしまった。今日のお見合いも失敗だ",
                happiness: -2,
                affection: 0
            }
        ]
    },
    {
        id: 44,
        category: "出会い",
        question: "お見合いの時、相手が予約してくれたお店が少し騒がしい雰囲気でした。",
        options: [
            {
                text: "緊張せずに気楽な気持ちで話せそう",
                happiness: 2,
                affection: 0
            },
            {
                text: "落ち着いて話せなくて嫌だな",
                happiness: -2,
                affection: 0
            },
            {
                text: "こういうお店が好きなのかな？",
                happiness: 0,
                affection: 1
            },
            {
                text: "なんでもっと静かなお店を選ばなかったんだろ？TPOをわきまえてほしい。",
                happiness: 0,
                affection: -3
            }
        ]
    },
    {
        id: 45,
        category: "価値観",
        question: "あなたにとって「結婚」とは何ですか？",
        options: [
            {
                text: "二人で喜びを2倍に、悲しみを半分にする素晴らしい冒険",
                happiness: 3,
                affection: 0
            },
            {
                text: "今の苦しい生活から救い出してくれる唯一の手段",
                happiness: -3,
                affection: 0
            },
            {
                text: "愛する人を一生大切にし、共に歩んでいく約束",
                happiness: 0,
                affection: 3
            },
            {
                text: "お互いの条件を補完し合い、生活の質を向上させる連帯責任",
                happiness: 0,
                affection: -3
            }
        ]
    }
];

// Made with Bob
